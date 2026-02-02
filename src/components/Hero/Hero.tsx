import { Typography, Button, Tag } from 'antd';
import { GithubOutlined, ArrowRightOutlined, RocketOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import MagneticButton from '../MagneticButton';
import { fadeUpVariants, staggerContainer, transitions } from '../../theme/motion';
import './Hero.css';

const { Title, Paragraph } = Typography;

const Hero = () => {
    const containerVariants = staggerContainer(0.2, 0.08);
    const itemVariants = fadeUpVariants;
    const itemTransition = transitions.reveal;

    const scrollToSection = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero-section">
            <div className="container">
                <motion.div
                    className="hero-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {/* 1. 主介绍卡片 (占据较大空间) */}
                    <motion.div className="bento-item main-intro" variants={itemVariants} transition={itemTransition}>
                        <div className="intro-content">
                            <div className="badge-wrapper">
                                <Tag color="success" className="status-badge">
                                    <span className="dot"></span> Open to Work
                                </Tag>
                            </div>
                            <Title level={1} className="hero-title">
                                Building the <span className="gradient-text">Future</span> with <br />
                                Large Language Models.
                            </Title>
                            <Paragraph className="hero-desc">
                                我是余非凡，一名热衷于 AI 落地应用的全栈开发者。
                                <br />
                                擅长将复杂的算法模型转化为直观、好用的产品体验。
                            </Paragraph>
                            <div className="hero-actions">
                                <MagneticButton>
                                    <Button type="primary" size="large" icon={<RocketOutlined />} onClick={() => scrollToSection('projects')}>
                                        查看作品
                                    </Button>
                                </MagneticButton>
                                <MagneticButton>
                                    <Button size="large" icon={<GithubOutlined />} href="https://github.com/likebeans" target="_blank">
                                        Github
                                    </Button>
                                </MagneticButton>
                            </div>
                        </div>
                        {/* 背景装饰图形 */}
                        <div className="bg-decoration"></div>
                    </motion.div>

                    {/* 2. 当前职位/状态 */}
                    <motion.div className="bento-item current-role" variants={itemVariants} transition={itemTransition}>
                        <div className="icon-wrapper glass">
                            <RocketOutlined />
                        </div>
                        <div>
                            <Title level={4} style={{ margin: 0 }}>大模型算法工程师</Title>
                            <Paragraph type="secondary" style={{ marginBottom: 0 }}>湖南九典制药</Paragraph>
                        </div>
                    </motion.div>

                    {/* 3. 技术栈概览 */}
                    <motion.div className="bento-item tech-stack" variants={itemVariants} transition={itemTransition}>
                        <Title level={5}>Core Tech Stack</Title>
                        <div className="stack-tags">
                            {['LLM', 'RAG', 'Agent', 'Python', 'React', 'FastAPI'].map(tag => (
                                <Tag key={tag} className="tech-tag">{tag}</Tag>
                            ))}
                        </div>
                    </motion.div>

                    {/* 4. 最新开源项目 (ChatterPal) */}
                    <motion.div
                        className="bento-item featured-project"
                        variants={itemVariants}
                        transition={itemTransition}
                        onClick={() => window.open('https://github.com/likebeans/ChatterPal', '_blank')}
                    >
                        <div className="project-badge">Featured</div>
                        <Title level={4} style={{ color: '#fff', marginTop: 16 }}>ChatterPal</Title>
                        <Paragraph style={{ color: 'rgba(255,255,255,0.8)' }}>
                            你的 AI 闲聊伙伴，探索轻松对话的无限可能。
                        </Paragraph>
                        <div className="project-arrow">
                            <ArrowRightOutlined />
                        </div>
                    </motion.div>

                    {/* 5. 统计数据 */}
                    <motion.div className="bento-item stats-box" variants={itemVariants} transition={itemTransition}>
                        <div className="stat-row">
                            <div className="stat">
                                <div className="stat-val">3+</div>
                                <div className="stat-label">Years</div>
                            </div>
                            <div className="stat-divider"></div>
                            <div className="stat">
                                <div className="stat-val">10+</div>
                                <div className="stat-label">Projects</div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
