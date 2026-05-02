from playwright.sync_api import sync_playwright
import os


with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})
    console_messages = []
    page.on("console", lambda msg: console_messages.append(f"{msg.type}: {msg.text}"))
    page.goto(os.environ.get("BASE_URL", "http://127.0.0.1:5280"), wait_until="networkidle")
    print("TITLE:", page.title())
    print("BODY:", page.locator("body").inner_text(timeout=3000)[:1000])
    print("CONSOLE:", console_messages[:10])
    browser.close()
