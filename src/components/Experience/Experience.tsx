import type { MouseEventHandler } from 'react';
import { useRef } from 'react';
import { Typography, Tag } from 'antd';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Experience.css';

const { Title, Paragraph } = Typography;

interface ExperienceItem {
    company: string;
    position: string;
    period: string;
    description: string;
    achievements: string[];
    tags: string[];
    media?: {
        src: string;
        alt?: string;
    };
}

const experiences: ExperienceItem[] = [
    {
        company: '湖南九典制药股份有限公司',
        position: 'AI 应用开发工程师',
        period: '2025.05 – 至今',
        description: '负责公司 AI 应用的设计与开发，为公司药物研发等业务部门构建统一的企业级智能数据与 AI 平台。',
        achievements: [
            '企业级大模型与智能应用平台建设：完成数据层、模型层与应用层的分层设计，实现智能数据统一检索与调用',
            '构建融合本地数据库、企业知识库与网络资源的多智能体系统，实现自动检索与分析闭环',
            '企业级 RAG 检索与知识服务平台建设：作为公司内部 AI 应用的底层基础设施，提供标准化 RAG 能力',
        ],
        tags: ['LLM', 'RAG', 'Agent', 'Platform'],
        media: { src: '/images/exp-jiudian.svg', alt: 'Hunan Jiudian Pharma AI application' },
    },
    {
        company: '广州沃思网络科技有限公司',
        position: 'AI 算法工程师',
        period: '2025.03 – 2025.05',
        description: '参与企业 OA 系统智能化改造与 AI 浏览器模块研发，实现传统业务流程与大模型能力的深度融合。',
        achievements: [
            '企业 OA 系统改造：基于 LangGraph + FastMCP 构建智能体与中间层服务，实现自动化表单填单，效率提升 20 倍',
            'AI 浏览器模块：负责 AI 搜索、智能问数功能的研发，模型基于 Qwen2.5 使用 LoRA + DeepSpeed 高效微调',
            '搭建标准化知识库处理流程：覆盖数据采集、预处理、分块、嵌入与检索全链路',
        ],
        tags: ['FastAPI', 'LangGraph', 'Qwen2.5', 'LoRA'],
        media: { src: '/images/exp-wosi.svg', alt: 'Wosi AI algorithm engineer' },
    },
];

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

const ExperienceShowcase = ({ exp }: { exp: ExperienceItem }) => {
    return (
        <article
            className="experience-showcase"
            onMouseMove={setSpotlightPosition}
            onMouseLeave={clearSpotlightPosition}
        >
            <div className="experience-showcase-grid">
                <div className="experience-showcase-content">
                    <div className="experience-header">
                        <div className="experience-info">
                            <h3 className="experience-company">{exp.company}</h3>
                            <span className="experience-position">{exp.position}</span>
                        </div>
                        <span className="experience-period">{exp.period}</span>
                    </div>

                    <Paragraph className="experience-description">
                        {exp.description}
                    </Paragraph>

                    <ul className="experience-achievements">
                        {exp.achievements.map((achievement) => (
                            <li key={achievement}>{achievement}</li>
                        ))}
                    </ul>

                    <div className="experience-tags">
                        {exp.tags.map((tag) => (
                            <Tag key={tag} className="experience-tag">
                                {tag}
                            </Tag>
                        ))}
                    </div>
                </div>

                {exp.media && (
                    <div className="experience-showcase-media">
                        <div className="experience-media-lg">
                            <img
                                src={exp.media.src}
                                alt={exp.media.alt ?? `${exp.company} preview`}
                                loading="lazy"
                            />
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
};

// Card with fade in/out transitions
const ExperienceCard = ({
    exp,
    index,
    total,
    scrollYProgress
}: {
    exp: ExperienceItem;
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
            activeStart,
            activeStart + step * 0.3,
            activeEnd - step * 0.3,
            activeEnd
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
            className="exp-stack-card"
            style={{
                zIndex: index + 1,
                x: isFirst ? 0 : x,
                opacity: isFirst ? firstOpacity : (isLast ? lastOpacity : opacity),
            }}
        >
            <ExperienceShowcase exp={exp} />
        </motion.div>
    );
};

const Experience = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <section id="experience" className="experience section">
            <div className="experience-header-section">
                <span className="section-label">工作经历</span>
                <Title level={2} className="section-title">
                    我的职业轨迹
                </Title>
            </div>

            <div
                ref={containerRef}
                className="experience-scroll-container"
                style={{ height: `${experiences.length * 100}vh` }}
            >
                <div className="experience-sticky-viewport">
                    <div className="experience-cards-wrapper">
                        {experiences.map((exp, index) => (
                            <ExperienceCard
                                key={exp.company}
                                exp={exp}
                                index={index}
                                total={experiences.length}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
