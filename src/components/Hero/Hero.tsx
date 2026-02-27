import { useState } from 'react';
import { Typography, Button, Tag, Modal } from 'antd';
import { GithubOutlined, ArrowRightOutlined, DownloadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import MagneticButton from '../MagneticButton';
import { fadeUpVariants, staggerContainer, transitions } from '../../theme/motion';
import profilePhoto from '../../assets/证件照.jpg';
import { useLang } from '../../context/LanguageContext';
import './Hero.css';

const { Title, Paragraph } = Typography;

const Hero = () => {
    const { t } = useLang();
    const [photoVisible, setPhotoVisible] = useState(false);
    const containerVariants = staggerContainer(0.2, 0.08);
    const itemVariants = fadeUpVariants;
    const itemTransition = transitions.reveal;

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = t('余非凡的简历.pdf', 'Resume_YuFeifan.pdf');
        link.click();
    };

    const techStack = [
        { name: 'LLM', highlight: true },
        { name: 'RAG', highlight: true },
        { name: 'Agent', highlight: true },
        { name: 'RLHF', highlight: true },
        { name: 'Python', highlight: false },
        { name: 'PyTorch', highlight: false },
    ];

    const blogStats = [
        { label: t('原创', 'Original'), value: '350+' },
        { label: t('阅读量', 'Reads'), value: '42万+' },
        { label: t('粉丝', 'Followers'), value: '2.6k+' },
        { label: t('浏览量', 'Views'), value: '105万+' },
    ];

    const projects = [
        {
            name: 'Notes on LLMs',
            desc: t('大模型学习笔记与实践总结，涵盖核心原理与工程经验', 'LLM study notes and practice, covering core principles and engineering experience'),
            url: 'https://likebeans.github.io/notes-on-llms/',
            tags: ['LLM', 'Learning'],
        },
        {
            name: 'Genesis-LLM',
            desc: t('从零手搓大语言模型，深入理解 Transformer 架构', 'Building an LLM from scratch to deeply understand the Transformer architecture'),
            url: 'https://github.com/likebeans/Genesis-LLM',
            tags: ['LLM', 'Transformer'],
        },
    ];

    return (
        <section className="hero-section">
            <div className="container">
                <motion.div
                    className="hero-layout"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* 顶部：左右分栏布局 */}
                    <div className="hero-main">
                        {/* 左侧：大标题区域 */}
                        <motion.div className="hero-left" variants={itemVariants} transition={itemTransition}>
                            <Tag color="success" className="status-badge">
                                <span className="dot"></span> Open to Work
                            </Tag>
                            <Title level={1} className="hero-title">
                                Building the <span className="gradient-text">Future</span> with <br />
                                Large Language Models.
                            </Title>
                            <Paragraph className="hero-subtitle">
                                {t('用算法思考，用工程交付，用 AI 改变世界', 'Think with algorithms, deliver with engineering, change the world with AI')}
                            </Paragraph>
                        </motion.div>

                        {/* 右侧：个人信息卡片 */}
                        <motion.div className="hero-right" variants={itemVariants} transition={itemTransition}>
                            <div className="profile-card">
                                <div className="profile-header">
                                    <div className="profile-avatar" onClick={() => setPhotoVisible(true)} title="点击查看完整照片">
                                        <img src={profilePhoto} alt="余非凡" />
                                    </div>
                                    <div className="profile-basic">
                                        <Title level={4} className="profile-name">余非凡</Title>
                                        <Paragraph className="profile-role">{t('大模型算法工程师 · 1年+ AI 开发经验', 'LLM Algorithm Engineer · 1+ Year AI Dev Experience')}</Paragraph>
                                    </div>
                                </div>
                                <Paragraph className="profile-desc">
                                    {t(
                                        '专注于大语言模型落地应用，擅长 RAG、Agent 系统设计与工程化实践。主导过多个企业级 AI 项目从0到1的落地，具备全栈开发能力。熟练掌握继续预训练、模型微调、RLHF、知识蒸馏、训练数据处理及 Benchmark 评估。',
                                        'Focused on LLM application development, skilled in RAG & Agent system design and engineering. Led multiple enterprise AI projects from 0 to 1 with full-stack capability. Proficient in continual pre-training, fine-tuning, RLHF, knowledge distillation, training data processing, and benchmark evaluation.'
                                    )}
                                </Paragraph>
                                <div className="profile-tags">
                                    {techStack.map(tag => (
                                        <Tag key={tag.name} className={`tech-tag ${tag.highlight ? 'highlight' : ''}`}>{tag.name}</Tag>
                                    ))}
                                </div>
                                <div className="profile-actions">
                                    <MagneticButton>
                                        <Button type="primary" size="large" icon={<DownloadOutlined />} onClick={handleDownloadResume}>
                                            {t('下载简历', 'Resume')}
                                        </Button>
                                    </MagneticButton>
                                    <MagneticButton>
                                        <Button size="large" icon={<GithubOutlined />} href="https://github.com/likebeans" target="_blank">
                                            Github
                                        </Button>
                                    </MagneticButton>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* 底部：项目与博客展示 */}
                    <div className="hero-showcase">
                        {/* 开源项目列表 */}
                        <motion.div className="showcase-section projects-section" variants={itemVariants} transition={itemTransition}>
                            <div className="section-header">
                                <Title level={5} className="section-title">{t('开源项目', 'Open Source')}</Title>
                                <a href="https://github.com/likebeans" target="_blank" rel="noopener noreferrer" className="section-link">
                                    {t('查看全部', 'View All')} <ArrowRightOutlined />
                                </a>
                            </div>
                            <div className="projects-grid">
                                {projects.map((project) => (
                                    <motion.a
                                        key={project.name}
                                        className="project-card"
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -4 }}
                                    >
                                        <div className="project-card-header">
                                            <Title level={5} className="project-name">{project.name}</Title>
                                            <ArrowRightOutlined className="project-arrow" />
                                        </div>
                                        <Paragraph className="project-desc">{project.desc}</Paragraph>
                                        <div className="project-tags">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="project-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* 博客卡片 */}
                        <motion.a
                            className="showcase-section blog-section"
                            variants={itemVariants}
                            transition={itemTransition}
                            href="https://blog.csdn.net/m0_63309778?spm=1011.2415.3001.5343"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="blog-header">
                                <div className="blog-avatar">
                                    <img src={profilePhoto} alt="余非凡" />
                                </div>
                                <div className="blog-info">
                                    <span className="blog-name">{t('余非凡 · 各大社区优秀原创作者', 'Yu Feifan · Outstanding Original Creator')}</span>
                                    <span className="blog-desc">{t('持续输出 AI 算法原理和落地与工程实践', 'Sharing AI algorithm insights and engineering practices')}</span>
                                </div>
                                <div className="blog-cta">
                                    {t('查看主页', 'View Blog')} <ArrowRightOutlined className="blog-arrow" />
                                </div>
                            </div>
                            <div className="blog-stats">
                                {blogStats.map((stat) => (
                                    <div key={stat.label} className="blog-stat">
                                        <span className="stat-value">{stat.value}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
            <Modal
                open={photoVisible}
                onCancel={() => setPhotoVisible(false)}
                footer={null}
                centered
                width={400}
                className="photo-modal"
            >
                <img src={profilePhoto} alt="余非凡" style={{ width: '100%', borderRadius: 12 }} />
            </Modal>
        </section>
    );
};

export default Hero;
