from pathlib import Path
import os
from playwright.sync_api import sync_playwright, expect


ROOT = Path(__file__).resolve().parents[1]
ARTIFACTS = ROOT / "artifacts"
BASE_URL = os.environ.get("BASE_URL", "http://127.0.0.1:5280")
ARTIFACTS.mkdir(exist_ok=True)


def check_page(page, url: str, screenshot_name: str) -> None:
    console_errors: list[str] = []
    page.on("console", lambda msg: console_errors.append(msg.text) if msg.type == "error" else None)
    page.goto(url, wait_until="networkidle")

    expect(page.get_by_text("xiaou 的 Vibe Coding 作品展台")).to_be_visible()
    expect(page.get_by_text("Code-Nest").first).to_be_visible()
    expect(page.get_by_text("2026-bs").first).to_be_visible()
    expect(page.get_by_text("毕设宣传网站").first).to_be_visible()
    expect(page.get_by_text("3153566913").first).to_be_visible()
    expect(page.get_by_text("17713088356").first).to_be_visible()

    horizontal_overflow = page.evaluate("document.documentElement.scrollWidth > window.innerWidth + 2")
    if horizontal_overflow:
        raise AssertionError("页面存在横向溢出")

    loaded_images = page.evaluate(
        """
        Array.from(document.images).map((img) => ({
          src: img.currentSrc || img.src,
          ok: img.complete && img.naturalWidth > 0 && img.naturalHeight > 0
        }))
        """
    )
    broken = [img["src"] for img in loaded_images if not img["ok"]]
    if broken:
        raise AssertionError("图片加载失败: " + ", ".join(broken[:3]))

    if console_errors:
        raise AssertionError("浏览器控制台错误: " + " | ".join(console_errors[:3]))

    page.screenshot(path=str(ARTIFACTS / screenshot_name), full_page=True)


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    desktop = browser.new_page(viewport={"width": 1440, "height": 1000})
    check_page(desktop, BASE_URL, "portfolio-desktop.png")
    desktop.close()

    mobile = browser.new_page(viewport={"width": 390, "height": 844}, is_mobile=True)
    check_page(mobile, BASE_URL, "portfolio-mobile.png")
    mobile.close()

    browser.close()
