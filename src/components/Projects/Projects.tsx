import type { MouseEventHandler } from 'react';
import { useRef } from 'react';
import { Typography } from 'antd';
import { StarOutlined } from '@ant-design/icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../MagneticButton';
import './Projects.css';

const { Title } = Typography;

type Metric = {
    label: string;
    value: string;
};

type ProjectItem = {
    title: string;
    description: string;
    intro?: string;
    tags: string[];
    outcomes?: string[];
    metrics?: Metric[];
    link: string;
    stars: number | 'Featured';
    category: string;
    year?: string;
    image?: {
        src: string;
        alt?: string;
    };
    gallery?: Array<{
        src: string;
        alt?: string;
    }>;
};

const setSpotlightPosition: MouseEventHandler<HTMLElement> = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--spotlight-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--spotlight-y', `${e.clientY - rect.top}px`);
};

const clearSpotlightPosition: MouseEventHandler<HTMLElement> = (e) => {
    const card = e.currentTarget;
    card.style.removeProperty('--spotlight-x');
    card.style.removeProperty('--spotlight-y');
};

const projects: ProjectItem[] = [
    {
        title: 'Agent Service Toolkit',
        description: '全栈 AI Agent 服务工具包，基于 LangGraph 构建生产级代理服务。',
        intro: '面向企业场景的 Agent 服务工程模板：统一的 streaming、工具调用、观测与部署规范，让团队可以更快把 Agent 从 demo 推到生产。',
        tags: ['LangGraph', 'FastAPI', 'Streamlit'],
        outcomes: [
            '沉淀可复用的 Agent 服务骨架（Routing / Memory / Tools / Streaming）',
            '内置可观测性与调试工作流（Trace / Prompt 版本化）',
            '提供多环境部署与配置约定，减少"每个项目都重写一遍"的成本',
        ],
        metrics: [
            { label: 'Focus', value: 'Architecture' },
            { label: 'Delivery', value: 'Production-ready' },
            { label: 'Mode', value: 'Template' },
        ],
        link: 'https://github.com/likebeans/agent-service-toolkit',
        stars: 'Featured',
        category: 'Architecture',
        year: '2025',
        image: { src: '/mock/project-agent-service-toolkit.svg', alt: 'Agent Service Toolkit cover' },
    },
    {
        title: 'ChatterPal',
        description: '你的 AI 闲聊伙伴，探索轻松对话的无限可能。',
        intro: '把"好聊"当作产品目标：更自然的对话节奏、更清晰的回复结构、更有温度的交互反馈。',
        tags: ['GenAI', 'Chatbot', 'Python'],
        outcomes: [
            '多轮对话与上下文记忆，支持可控的回复风格',
            '对话状态与转场设计，减少"突然断层"的割裂感',
            '可扩展的技能/工具接口，便于持续迭代能力边界',
        ],
        metrics: [
            { label: 'Stars', value: '13' },
            { label: 'UX', value: 'Conversational' },
            { label: 'Stack', value: 'Python' },
        ],
        link: 'https://github.com/likebeans/ChatterPal',
        stars: 13,
        category: 'Application',
        year: '2024',
        image: { src: '/mock/project-chatterpal.svg', alt: 'ChatterPal cover' },
    },
    {
        title: 'Genesis LLM',
        description: '从零构建大模型的完整工程流水线，深入理解 LLM 核心原理。',
        intro: '从数据、训练到评估的完整流水线，用工程化方式拆解 LLM 的关键模块，帮助快速建立系统理解与可复现能力。',
        tags: ['PyTorch', 'Training', 'LLM'],
        outcomes: [
            '训练/评估/推理 pipeline 拆解与复现，便于定位问题',
            '脚本化实验管理与日志规范，提升迭代效率',
            '按模块讲解核心概念：Tokenizer / Attention / Optimizer 等',
        ],
        metrics: [
            { label: 'Stars', value: '2' },
            { label: 'Level', value: 'Core Tech' },
            { label: 'Stack', value: 'PyTorch' },
        ],
        link: 'https://github.com/likebeans/Genesis-LLM',
        stars: 2,
        category: 'Core Tech',
        year: '2024',
        image: { src: '/mock/project-genesis-llm.svg', alt: 'Genesis LLM cover' },
    },
    {
        title: 'Notes on LLMs',
        description: 'LLM、RAG、Agent 学习与实践笔记，系统化的知识沉淀。',
        intro: '把学习路径变成可复用资产：按主题组织，配合实践与踩坑总结，持续迭代成可检索的知识库。',
        tags: ['Knowledge', 'RAG', 'Docs'],
        outcomes: [
            '按主题结构化：RAG / Agent / Prompt / Evaluation',
            '配套实践：最小可行 demo + 可复用模板',
            '持续更新：把"零散收藏"变成体系化沉淀',
        ],
        metrics: [
            { label: 'Stars', value: '1' },
            { label: 'Format', value: 'Docs' },
            { label: 'Scope', value: 'LLM/RAG/Agent' },
        ],
        link: 'https://github.com/likebeans/notes-on-llms',
        stars: 1,
        category: 'Knowledge Base',
        year: '2023–2025',
        image: { src: '/mock/project-notes-llms.svg', alt: 'Notes on LLMs cover' },
    },
    {
        title: 'RAG Knowledge Search',
        description: '面向企业知识库的检索增强生成：结构化回答 + 引用来源 + 可控体验。',
        intro: '把"能答"升级为"可信可用"：引用、证据链、可回溯，让业务用户更愿意使用。',
        tags: ['RAG', 'Vector DB', 'Citations'],
        outcomes: [
            '结构化回答模板 + 引用高亮，增强可读性与可信度',
            '多来源融合检索，减少信息遗漏与幻觉风险',
            '为非技术用户设计交互：更少参数、更清晰反馈',
        ],
        metrics: [
            { label: 'Goal', value: 'Trustworthy' },
            { label: 'Output', value: 'Citations' },
            { label: 'UX', value: 'Enterprise' },
        ],
        link: 'https://github.com/likebeans',
        stars: 'Featured',
        category: 'Enterprise',
        year: 'Mock',
        image: { src: '/mock/project-rag-search.svg', alt: 'RAG Knowledge Search cover' },
    },
    {
        title: 'Portfolio UI Motion',
        description: '这个站点的交互/动效系统：滚动叙事、光标标签、微交互与一致的动效节奏。',
        intro: '把"看起来高级"拆成可复用规则：统一 ease/duration、hover 抬升、scroll 进度与节奏。',
        tags: ['React', 'Framer Motion', 'Ant Design'],
        outcomes: [
            '全站动效节奏统一：reveal/hover/scroll 全部走 token',
            'Projects/Experience 支持 pinned 滚动叙事',
            '自定义光标 label + spotlight hover 提升交互反馈',
        ],
        metrics: [
            { label: 'Motion', value: 'Systemized' },
            { label: 'Scroll', value: 'Storytelling' },
            { label: 'A11y', value: 'Reduced Motion' },
        ],
        link: 'https://github.com/likebeans',
        stars: 'Featured',
        category: 'Design & Dev',
        year: '2026',
        image: { src: '/mock/project-portfolio-motion.svg', alt: 'Portfolio UI Motion cover' },
    },
];

const ProjectShowcase = ({ project }: { project: ProjectItem }) => {
    const mainImage = project.image ?? project.gallery?.[0];
    const isFeatured = project.stars === 'Featured';

    return (
        <article
            className="project-showcase"
            onMouseMove={setSpotlightPosition}
            onMouseLeave={clearSpotlightPosition}
        >
            <div className="project-showcase-grid">
                <div className="project-showcase-content">
                    <div className="project-showcase-meta">
                        <span className="project-category">{project.category}</span>
                        {project.year && <span className="project-year">{project.year}</span>}
                        {isFeatured && <span className="project-featured">Featured</span>}
                        {typeof project.stars === 'number' && (
                            <span className="project-stars">
                                <StarOutlined /> {project.stars}
                            </span>
                        )}
                    </div>

                    <h3 className="project-showcase-title">{project.title}</h3>
                    <p className="project-showcase-intro">{project.intro ?? project.description}</p>

                    {project.metrics && project.metrics.length > 0 && (
                        <div className="project-metrics">
                            {project.metrics.map((metric) => (
                                <div key={metric.label} className="metric-card">
                                    <div className="metric-label">{metric.label}</div>
                                    <div className="metric-value">{metric.value}</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {project.outcomes && project.outcomes.length > 0 && (
                        <ul className="project-outcomes">
                            {project.outcomes.map((outcome) => (
                                <li key={outcome}>{outcome}</li>
                            ))}
                        </ul>
                    )}

                    <div className="project-showcase-footer">
                        <div className="clean-tags">
                            {project.tags.map(tag => (
                                <span key={tag} className="minimal-tag">{tag}</span>
                            ))}
                        </div>

                        <div className="project-actions">
                            <MagneticButton strength={0.2}>
                                <a
                                    className="btn btn-primary"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cursor="Open"
                                >
                                    打开项目
                                </a>
                            </MagneticButton>
                            <MagneticButton strength={0.2}>
                                <a
                                    className="btn btn-outline"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-cursor="Code"
                                >
                                    查看源码
                                </a>
                            </MagneticButton>
                        </div>
                    </div>
                </div>

                <div className="project-showcase-media">
                    {mainImage && (
                        <div className="project-media-lg">
                            <img
                                src={mainImage.src}
                                alt={mainImage.alt ?? `${project.title} preview`}
                                loading="lazy"
                            />
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
};

// Card with fade in/out transitions
const ProjectCard = ({
    project,
    index,
    total,
    scrollYProgress
}: {
    project: ProjectItem;
    index: number;
    total: number;
    scrollYProgress: any;
}) => {
    const step = 1 / total;

    // This card's active range
    const activeStart = index * step;
    const activeEnd = (index + 1) * step;

    // Slide from right
    const x = useTransform(
        scrollYProgress,
        [activeStart, activeStart + step * 0.3],
        ['100%', '0%']
    );

    // Fade in when entering, fade out when next card comes
    const opacity = useTransform(
        scrollYProgress,
        [
            activeStart,           // start entering
            activeStart + step * 0.3, // fully visible
            activeEnd - step * 0.3,   // start fading out
            activeEnd              // fully faded
        ],
        [0, 1, 1, 0]
    );

    const isFirst = index === 0;
    const isLast = index === total - 1;

    // First card: visible at start, fades out when second comes
    const firstOpacity = useTransform(
        scrollYProgress,
        [0, step * 0.7, step],
        [1, 1, 0]
    );

    // Last card: doesn't fade out
    const lastOpacity = useTransform(
        scrollYProgress,
        [activeStart, activeStart + step * 0.3],
        [0, 1]
    );

    return (
        <motion.div
            className="stack-card"
            style={{
                zIndex: index + 1,
                x: isFirst ? 0 : x,
                opacity: isFirst ? firstOpacity : (isLast ? lastOpacity : opacity),
            }}
        >
            <ProjectShowcase project={project} />
        </motion.div>
    );
};

const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <section id="projects" className="projects-section">
            <div className="projects-header">
                <span className="section-subtitle">Selected Works</span>
                <Title level={2} className="section-title-minimal">
                    Recent Projects
                </Title>
            </div>

            <div
                ref={containerRef}
                className="projects-scroll-container"
                style={{ height: `${projects.length * 100}vh` }}
            >
                <div className="projects-sticky-viewport">
                    <div className="projects-cards-wrapper">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                                total={projects.length}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
