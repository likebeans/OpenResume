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
        title: '企业级大模型与智能应用平台建设',
        description: '为公司药物研发等业务部门构建统一的企业级智能数据与 AI 平台，将传统数据平台能力与 AI 能力深度融合。',
        intro: '构建集数据管理、业务 CRUD、模型服务、多智能体调度与知识检索于一体的综合智能底座，实现数据资产沉淀与统一治理。',
        tags: ['LangGraph', 'RAG', 'SFT', 'RLHF', 'PEFT', 'VLLM', 'BERT'],
        outcomes: [
            '完成数据层、模型层与应用层的分层设计，打通数据库、向量库与外部资源',
            '构建多智能体系统，实现自动检索、推理分析与结构化报告生成闭环，效率提升近 10 倍',
            '完成医疗大模型从 CPT、SFT 到 RLHF 的全流程优化，基于 VLLM 部署上线',
            '微调 BERT 实现意图识别，准确率 95%+，推理速度为 LLM 的 1/10',
        ],
        metrics: [
            { label: 'Focus', value: 'Enterprise AI' },
            { label: 'Efficiency', value: '10x' },
            { label: 'Accuracy', value: '95%+' },
        ],
        link: 'https://github.com/likebeans',
        stars: 'Featured',
        category: 'AI Platform',
        year: '2025',
    },
    {
        title: '企业级 RAG 检索与知识服务平台',
        description: '建设企业级统一检索与知识服务平台，作为公司 AI 应用的底层基础设施。',
        intro: '提供标准化 RAG 能力与权限安全控制，实现知识能力的平台化输出与规模化复用，支撑多个 AI 应用稳定运行。',
        tags: ['RAG', 'Vector DB', 'Multi-tenancy', 'Security', 'BM25', 'Hybrid'],
        outcomes: [
            '设计多租户检索服务架构，实现租户隔离与精细化权限控制',
            '统一封装 OpenAI 兼容接口，支持 Embeddings 与 Chat Completions 调用',
            '支持 Dense、BM25、Hybrid 等多种检索模式与增强检索策略',
            '建立企业级语义检索安全机制，解决大模型接入场景下的数据权限隔离问题',
        ],
        metrics: [
            { label: 'Focus', value: 'Infrastructure' },
            { label: 'Security', value: 'Enterprise' },
            { label: 'Mode', value: 'Platform' },
        ],
        link: 'https://github.com/likebeans',
        stars: 'Featured',
        category: 'Knowledge Platform',
        year: '2025',
    },
    {
        title: '企业 OA 系统智能化改造',
        description: '参与推动企业内部 OA 系统全面智能化升级，为公司 2,000+ 名员工构建统一的智能办公能力层。',
        intro: '通过自然语言交互重构传统表单流程，实现请假、外勤、会议室预定等高频场景的自动化填单与流程触发。',
        tags: ['LangGraph', 'FastAPI', 'FastMCP', 'RAG-Fusion', 'HyDE', 'MinerU'],
        outcomes: [
            '基于 LangGraph + FastAPI + FastMCP 构建智能体与中间层服务',
            '搭建标准化知识库处理流程，覆盖数据采集、预处理、分块、嵌入与检索全链路',
            '基于 MinerU 实现端到端文档解析，结合 RAG-Fusion、HyDE 等策略优化检索效果',
            '表单处理时间由 2-3 分钟降至约 10 秒，效率提升近 20 倍',
        ],
        metrics: [
            { label: 'Users', value: '2000+' },
            { label: 'Efficiency', value: '20x' },
            { label: 'Mode', value: 'Enterprise' },
        ],
        link: 'https://github.com/likebeans',
        stars: 'Featured',
        category: 'AI Application',
        year: '2025',
    },
    {
        title: 'AI 浏览器',
        description: '负责浏览器中所有 AI 模块研发，包括主界面 AI 搜索、智能问数系统、模型微调与部署等。',
        intro: '项目服务高校近万名师生，提供十余项 AI 功能，助力新生查询校规、教师提效。',
        tags: ['Qwen2.5', 'LoRA', 'DeepSpeed', 'VLLM', 'Benchmark', 'RAG'],
        outcomes: [
            '设计并实现 AI 搜索与智能问数功能，提升用户交互体验与信息获取效率',
            '选用 Qwen2.5，以校内新闻为语料，采用 LoRA + DeepSpeed 进行高效分布式微调',
            '基于 VLLM 框架优化推理与私有化部署',
            '负责大模型 benchmark、并发压测与 RAG 评估',
        ],
        metrics: [
            { label: 'Users', value: '10000+' },
            { label: 'Features', value: '10+' },
            { label: 'Stack', value: 'Qwen2.5' },
        ],
        link: 'https://github.com/likebeans',
        stars: 'Featured',
        category: 'AI Product',
        year: '2025',
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
