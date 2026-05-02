import {
  Activity,
  ArrowUpRight,
  Blocks,
  Braces,
  Check,
  Copy,
  Cpu,
  ExternalLink,
  Github,
  Layers3,
  Mail,
  MessageCircle,
  MonitorUp,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  image: string;
  imageAlt: string;
  source: string;
  stats: Array<{ label: string; value: string }>;
  tags: string[];
  highlights: string[];
  links: Array<{ label: string; href: string; icon: LucideIcon }>;
  accent: 'green' | 'amber' | 'cyan';
};

type Contact = {
  label: string;
  value: string;
  hint: string;
  icon: LucideIcon;
  copyValue: string;
  href?: string;
};

const owner = {
  name: 'xiaou',
  qq: '3153566913',
  phone: '17713088356',
  email: '3153566913@qq.com',
  github: 'https://github.com/xiaou61',
};

// 项目数据集中在这里，后续新增作品直接追加一个对象即可。
const projects: Project[] = [
  {
    title: 'Code-Nest',
    eyebrow: '开源项目 / Developer Growth Platform',
    summary:
      '面向开发者的成长型社区与知识运营平台，覆盖题库、博客、代码工坊、在线简历、IM、OJ、积分激励、AI 学习驾驶舱和 AI Runtime 治理中心。',
    image: 'https://eduplan-1305448902.cos.ap-guangzhou.myqcloud.com/imgs/202601281119341.png',
    imageAlt: 'Code-Nest 用户端功能截图',
    source: 'GitHub README',
    stats: [
      { label: 'Stars', value: '700+' },
      { label: 'Version', value: 'v2.1.0' },
      { label: 'Modules', value: '20+' },
    ],
    tags: ['Spring Boot 3.4', 'Vue 3', 'Vite', 'Sa-Token', 'LangChain4j', 'Prometheus'],
    highlights: [
      '双端架构：管理后台 + 开发者用户端',
      '统一 AI Runtime：Prompt、RAG、Schema、回归评测治理',
      '学习闭环：题库、OJ、闪卡、计划、积分与能力雷达',
    ],
    links: [{ label: '查看 GitHub', href: 'https://github.com/xiaou61/Code-Nest', icon: Github }],
    accent: 'green',
  },
  {
    title: '2026-bs',
    eyebrow: '毕设源码合集 / Graduation Design Library',
    summary:
      '计算机专业 2026 最新毕设源码合集，覆盖 Spring Boot、Vue、Java、小程序、Python 等方向，适合选题、演示、部署与二次开发沉淀。',
    image: '/project-2026-bs-generated.png',
    imageAlt: '2026-bs 作品集封面图',
    source: 'Portfolio Cover',
    stats: [
      { label: 'Focus', value: '毕设源码' },
      { label: 'Stacks', value: '5+' },
      { label: 'Use', value: '选题 / 演示' },
    ],
    tags: ['Spring Boot', 'Vue', 'Java', '小程序', 'Python', '毕业设计'],
    highlights: [
      '面向计算机专业选题与项目复用',
      '沉淀多技术方向的可演示源码',
      '适合搭配宣传站形成从展示到交付的闭环',
    ],
    links: [{ label: '查看 GitHub', href: 'https://github.com/xiaou61/2026-bs', icon: Github }],
    accent: 'amber',
  },
  {
    title: '毕设宣传网站',
    eyebrow: '上线产品 / Delivery Landing Site',
    summary:
      '已上线的毕设一条龙宣传网站，面向价格、项目库、评价、返佣、FAQ 与联系方式转化，强调透明报价、闲鱼担保与分步骤确认。',
    image: '/project-biye-site.png',
    imageAlt: '毕设宣传网站首页截图',
    source: 'Live Site',
    stats: [
      { label: 'Site', value: 'Online' },
      { label: 'Cases', value: '95+' },
      { label: 'Flow', value: '咨询转化' },
    ],
    tags: ['Landing Page', '报价展示', '项目案例', '转化路径', '响应式'],
    highlights: [
      '价格、项目、评价与 FAQ 分区完整',
      '联系入口前置，适合移动端快速咨询',
      '把源码合集与服务说明做成可直接转化的产品页面',
    ],
    links: [{ label: '访问网站', href: 'http://36.140.150.167:8000/', icon: ExternalLink }],
    accent: 'cyan',
  },
  {
    title: '粉桃打字课',
    eyebrow: '上线产品 / Typing Practice App',
    summary:
      '一个面向中文、英文、混合与自定义内容的在线打字练习程序，提供课程分类、难度筛选、进度统计、速度准确率面板和自由练习模式。',
    image: '/project-peach-typing-practice.png',
    imageAlt: '粉桃打字课页面截图',
    source: 'Live Site',
    stats: [
      { label: 'Modes', value: '4' },
      { label: 'Type', value: '在线练习' },
      { label: 'Focus', value: '打字训练' },
    ],
    tags: ['Typing Practice', '中文打字', '英文打字', '混合练习', '自定义文本', '在线工具'],
    highlights: [
      '支持中文、英文、混合与自定义文本练习',
      '课程库、难度、进度、WPM 与准确率信息一屏可见',
      '适合作为轻量工具型产品展示上线能力与交互完成度',
    ],
    links: [
      { label: '访问网站', href: 'http://36.140.150.167:8003/', icon: ExternalLink },
      { label: '查看 GitHub', href: 'https://github.com/xiaou61/peach-typing-practice', icon: Github },
    ],
    accent: 'amber',
  },
];

const capabilityCards = [
  {
    title: '全栈选手',
    desc: '前端、后端、数据库、部署都能接；Python、Go、Java、Node、Next 都能上手做项目。',
    icon: Layers3,
  },
  {
    title: '多语言开发',
    desc: '不局限单一技术栈，能按项目需要在 Py、Go、Java、TypeScript、Node.js 之间切换。',
    icon: Braces,
  },
  {
    title: 'AI 工程化能力',
    desc: '在 Code-Nest 中把 AI Runtime、Prompt 治理、RAG 检索和质量回归做成可观测的系统能力。',
    icon: Cpu,
  },
  {
    title: '内容与社区系统',
    desc: '题库、博客、动态、代码工坊、简历、IM、积分等模块都服务于开发者成长与内容运营。',
    icon: Blocks,
  },
  {
    title: '上线与转化意识',
    desc: '不只写代码，也会把项目包装成能被看懂、能被咨询、能被交付的上线产品。',
    icon: MonitorUp,
  },
];

const contacts: Contact[] = [
  {
    label: 'QQ',
    value: owner.qq,
    hint: '优先复制沟通',
    icon: MessageCircle,
    copyValue: owner.qq,
  },
  {
    label: '手机号',
    value: owner.phone,
    hint: '电话 / 短信',
    icon: Phone,
    copyValue: owner.phone,
    href: `tel:${owner.phone}`,
  },
  {
    label: '邮箱',
    value: owner.email,
    hint: '项目资料投递',
    icon: Mail,
    copyValue: owner.email,
    href: `mailto:${owner.email}`,
  },
  {
    label: 'GitHub',
    value: 'xiaou61',
    hint: '开源项目主页',
    icon: Github,
    copyValue: owner.github,
    href: owner.github,
  },
];

const navItems = [
  { label: '首页', href: '#top' },
  { label: '项目', href: '#projects' },
  { label: '能力', href: '#capabilities' },
  { label: '联系', href: '#contact' },
];

const heroSignals = [
  { label: 'Open Source', value: '700+ Stars', icon: Star },
  { label: 'Full Stack', value: 'Py / Go / Java', icon: Rocket },
  { label: 'AI Runtime', value: '工程化治理', icon: Sparkles },
];

const stackItems = [
  'Python',
  'Go',
  'Java',
  'Node.js',
  'Next.js',
  'React',
  'Vue3',
  'Spring Boot',
  'TypeScript',
  'MySQL',
  'Redis',
  'Docker',
  'RAG',
  'Prompt Governance',
  'Vite',
];

const experienceNotes = [
  '首屏切换项目焦点',
  '更强的 hover 层次与动效反馈',
  '作品叙事从“列表”升级成“展示台”',
];

function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', 'true');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  return Promise.resolve();
}

function App() {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const heroImages = useMemo(
    () => [
      projects[0].image,
      '/project-peach-typing-practice.png',
      '/project-biye-site.png',
    ],
    [],
  );
  const activeProject = projects[activeProjectIndex];

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCopy = async (key: string, value: string) => {
    await copyText(value);
    setCopied(key);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <main id="top" className="site-shell">
      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${Math.max(scrollProgress, 0.02)})` }} />
      </div>
      <div className="cursor-glow" aria-hidden="true" style={{ left: pointer.x, top: pointer.y }} />
      <div className="ambient-grid" aria-hidden="true" />
      <div className="scanline" aria-hidden="true" />

      <header className="site-header" aria-label="站点导航">
        <a className="brand" href="#top" aria-label="回到首页">
          <span className="brand-mark">XO</span>
          <span>
            <strong>xiaou.lab</strong>
            <small>Vibe Coding Portfolio</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="页面导航">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-link" href={owner.github} target="_blank" rel="noreferrer">
          <Github size={17} />
          GitHub
        </a>
      </header>

      <section className="hero">
        <div className="hero-media" aria-hidden="true">
          {heroImages.map((image, index) => (
            <img key={image} src={image} alt="" className={`hero-shot hero-shot-${index + 1}`} />
          ))}
        </div>

        <div className="hero-content">
          <p className="eyebrow">个人作品集 / 开源项目 / 上线产品</p>
          <h1>
            <span>xiaou 的</span>
            {' '}
            <span>Vibe Coding</span>
            {' '}
            <span>作品展台</span>
          </h1>
          <p className="hero-lead">
            这里用来收纳我做过、上线过、开源过的小项目：从 700+ Star 的 Code-Nest，到毕设源码合集、宣传转化网站，再到已经可在线使用的粉桃打字课。
          </p>

          <div className="hero-project-switcher" aria-label="项目快速切换">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                className={index === activeProjectIndex ? 'is-active' : undefined}
                onClick={() => setActiveProjectIndex(index)}
              >
                <span>{`0${index + 1}`}</span>
                <strong>{project.title}</strong>
              </button>
            ))}
          </div>

          <div className="hero-signals" aria-label="作品集亮点">
            {heroSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div key={signal.label}>
                  <Icon size={17} />
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              );
            })}
          </div>

          <div className="hero-actions" aria-label="主要操作">
            <a className="primary-action" href="#projects">
              查看作品
              <ArrowUpRight size={18} />
            </a>
            <button className="secondary-action" type="button" onClick={() => handleCopy('qq', owner.qq)}>
              {copied === 'qq' ? <Check size={18} /> : <Copy size={18} />}
              {copied === 'qq' ? '已复制 QQ' : '复制 QQ'}
            </button>
          </div>

          <dl className="hero-stats" aria-label="作品集概览">
            <div>
              <dt>700+</dt>
              <dd>Code-Nest Stars</dd>
            </div>
            <div>
              <dt>4</dt>
              <dd>当前展示项目</dd>
            </div>
            <div>
              <dt>20+</dt>
              <dd>模块级工程沉淀</dd>
            </div>
            <div>
              <dt>Live</dt>
              <dd>Projects + Delivery</dd>
            </div>
          </dl>
        </div>

        <aside className={`hero-console accent-${activeProject.accent}`} aria-label="当前焦点项目">
          <div className="hero-console-head">
            <div>
              <p>Focus Project</p>
              <h2>{activeProject.title}</h2>
            </div>
            <span>{activeProject.eyebrow}</span>
          </div>

          <div className="hero-console-preview">
            <img src={activeProject.image} alt={activeProject.imageAlt} />
          </div>

          <p className="hero-console-summary">{activeProject.summary}</p>

          <div className="hero-console-metrics" aria-label="焦点项目指标">
            {activeProject.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-console-notes">
            {experienceNotes.map((note) => (
              <div key={note}>
                <Activity size={16} />
                <span>{note}</span>
              </div>
            ))}
          </div>

          <div className="hero-console-links">
            {activeProject.links.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  <Icon size={16} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </aside>
      </section>

      <section className="section-block showcase-band" aria-label="展示策略">
        <div className="showcase-copy">
          <p className="section-kicker">Showcase Mode</p>
          <h2>不只是放链接，而是把项目做成可浏览、可比较、可感知的展示页。</h2>
        </div>

        <div className="showcase-matrix">
          <article>
            <span>01</span>
            <strong>项目分层</strong>
            <p>开源、资源库、上线产品分开讲，让别人一眼看懂你会做什么。</p>
          </article>
          <article>
            <span>02</span>
            <strong>动效引导</strong>
            <p>把注意力从首屏、项目卡片、联系方式逐段带过去，页面更有记忆点。</p>
          </article>
          <article>
            <span>03</span>
            <strong>交付视角</strong>
            <p>既展示代码能力，也展示上线、咨询转化和产品包装能力。</p>
          </article>
        </div>
      </section>

      <section id="projects" className="section-block projects-section">
        <div className="section-heading">
          <p className="section-kicker">Featured Projects</p>
          <h2>首批上线作品</h2>
        </div>

        <div className="project-rail" aria-label="项目切换导航">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              className={index === activeProjectIndex ? `rail-${project.accent} is-active` : `rail-${project.accent}`}
              onMouseEnter={() => setActiveProjectIndex(index)}
              onFocus={() => setActiveProjectIndex(index)}
              onClick={() => setActiveProjectIndex(index)}
            >
              <span>{`0${index + 1}`}</span>
              <strong>{project.title}</strong>
              <small>{project.source}</small>
            </button>
          ))}
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card accent-${project.accent} ${index === activeProjectIndex ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveProjectIndex(index)}
              onFocus={() => setActiveProjectIndex(index)}
            >
              <span className="project-number">0{index + 1}</span>
              <div className="project-image">
                <img src={project.image} alt={project.imageAlt} loading="eager" />
                <span className="project-source">{project.source}</span>
              </div>

              <div className="project-body">
                <p className="project-eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>

                <dl className="project-stats">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt>{stat.value}</dt>
                      <dd>{stat.label}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="project-highlights">
                  {project.highlights.map((item) => (
                    <li key={item}>
                      <ShieldCheck size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="tag-row" aria-label={`${project.title} 技术标签`}>
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                        <Icon size={17} />
                        {link.label}
                        <ArrowUpRight size={16} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section-block capabilities-section">
        <div className="section-heading">
          <p className="section-kicker">Builder Profile</p>
          <h2>全栈能力标签</h2>
        </div>

        <div className="capability-grid">
          {capabilityCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="capability-card">
                <span className="capability-index">0{index + 1}</span>
                <span className="capability-icon">
                  <Icon size={24} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </article>
            );
          })}
        </div>

        <div className="stack-marquee" aria-label="技术栈">
          {stackItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <div className="motion-strip" aria-label="页面体验升级">
          {experienceNotes.map((item) => (
            <div key={item}>
              <Sparkles size={16} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-block contact-section">
        <div className="contact-copy">
          <p className="section-kicker">Contact</p>
          <h2>想看源码、聊项目或合作，直接联系我。</h2>
        </div>

        <div className="contact-grid">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const isExternal = contact.href?.startsWith('http');
            return (
              <div className="contact-item" key={contact.label}>
                <Icon size={22} />
                <div>
                  <span>{contact.label}</span>
                  <strong>{contact.value}</strong>
                  <small>{contact.hint}</small>
                </div>
                <button
                  type="button"
                  aria-label={`复制${contact.label}`}
                  onClick={() => handleCopy(contact.label, contact.copyValue)}
                >
                  {copied === contact.label ? <Check size={17} /> : <Copy size={17} />}
                </button>
                {contact.href && (
                  <a
                    href={contact.href}
                    aria-label={`打开${contact.label}`}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                  >
                    <ExternalLink size={17} />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <footer className="site-footer">
        <span>xiaou.lab</span>
        <a href="#top">返回顶部</a>
      </footer>
    </main>
  );
}

export default App;
