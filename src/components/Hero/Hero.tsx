import { useState } from 'react';
import { Typography, Button, Tag, Modal } from 'antd';
import { GithubOutlined, ArrowRightOutlined, DownloadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import MagneticButton from '../MagneticButton';
import { fadeUpVariants, staggerContainer, transitions } from '../../theme/motion';
import profilePhoto from '../../assets/证件照.jpg';
import './Hero.css';

const { Title, Paragraph } = Typography;

const Hero = () => {
    const [photoVisible, setPhotoVisible] = useState(false);
    const containerVariants = staggerContainer(0.2, 0.08);
    const itemVariants = fadeUpVariants;
    const itemTransition = transitions.reveal;

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = '余非凡的简历.pdf';
        link.click();
    };

    const techStack = ['LLM', 'RAG', 'Agent', 'Python', 'React', 'FastAPI'];

    const blogStats = [
        { label: '原创', value: '350+' },
        { label: '阅读量', value: '42万+' },
        { label: '粉丝', value: '2.6k+' },
        { label: '浏览量', value: '105万+' },
    ];

    const projects = [
        {
            name: 'Notes on LLMs',
            desc: '大模型学习笔记与实践总结，涵盖核心原理与工程经验',
            url: 'https://likebeans.github.io/notes-on-llms/',
            tags: ['LLM', 'Learning'],
        },
        {
            name: 'Genesis-LLM',
            desc: '从零手搓大语言模型，深入理解 Transformer 架构',
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
                                用算法思考，用工程交付，用 AI 改变世界
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
                                        <Paragraph className="profile-role">大模型算法工程师 · 1年+ AI 开发经验</Paragraph>
                                    </div>
                                </div>
                                <Paragraph className="profile-desc">
                                    专注于大语言模型落地应用，擅长 RAG、Agent 系统设计与工程化实践。
                                    主导过多个企业级 AI 项目从0到1的落地，具备全栈开发能力。
                                </Paragraph>
                                <div className="profile-tags">
                                    {techStack.map(tag => (
                                        <Tag key={tag} className="tech-tag">{tag}</Tag>
                                    ))}
                                </div>
                                <div className="profile-actions">
                                    <MagneticButton>
                                        <Button type="primary" size="large" icon={<DownloadOutlined />} onClick={handleDownloadResume}>
                                            下载简历
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
                                <Title level={5} className="section-title">开源项目</Title>
                                <a href="https://github.com/likebeans" target="_blank" rel="noopener noreferrer" className="section-link">
                                    查看全部 <ArrowRightOutlined />
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
                                    <span className="blog-name">余非凡 · 各大社区优秀原创作者</span>
                                    <span className="blog-desc">持续输出 AI 算法原理和落地与工程实践</span>
                                </div>
                                <div className="blog-cta">
                                    查看主页 <ArrowRightOutlined className="blog-arrow" />
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
