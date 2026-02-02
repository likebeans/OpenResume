import { Row, Col, Typography, Tag } from 'antd';
import { motion } from 'framer-motion';
import { createRevealFastProps, createRevealProps, transitions, VIEWPORT } from '../../theme/motion';
import './About.css';

const { Title, Paragraph } = Typography;

const About = () => {
    const highlights = [
        { label: '专注领域', value: 'LLM & AI Agent' },
        { label: '当前角色', value: 'AI 应用开发工程师' },
        { label: '工作理念', value: '简洁、高效、落地' },
    ];

    return (
        <section id="about" className="about section">
            <div className="container">
                <Row gutter={[64, 48]} align="middle">
                    {/* 左侧文字 */}
                    <Col xs={24} lg={14}>
                        <motion.div
                            className="about-content"
                            {...createRevealProps()}
                        >
                            <span className="section-label">关于我</span>

                            <Title level={2} className="about-title">
                                将复杂的 AI 技术
                                <br />
                                转化为<span className="highlight">简单易用</span>的产品
                            </Title>

                            <div className="about-text">
                                <Paragraph className="about-paragraph lead">
                                    我是一名专注于大模型和 AI 应用的开发工程师，热爱探索前沿技术并将其落地为实际产品。
                                </Paragraph>

                                <Paragraph className="about-paragraph">
                                    目前就职于湖南九典制药股份有限公司，负责 AI 技术在企业场景中的应用与落地。
                                    在这之前，我深入研究了 LLM、RAG、AI Agent 等技术，并在 GitHub 上分享了多个开源项目。
                                </Paragraph>

                                <Paragraph className="about-paragraph">
                                    我相信好的技术应该是「无感」的 —— 用户感受到的只有价值，而非复杂性。
                                    这也是我一直追求的工程目标：让 AI 变得更简单、更实用。
                                </Paragraph>
                            </div>

                            {/* 高亮信息 */}
                            <motion.div
                                className="about-highlights"
                                {...createRevealFastProps(0.1)}
                            >
                                {highlights.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        className="highlight-item"
                                        whileHover={{ y: -4 }}
                                        transition={transitions.hover}
                                    >
                                        <span className="highlight-label">{item.label}</span>
                                        <span className="highlight-value">{item.value}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </Col>

                    {/* 右侧装饰 */}
                    <Col xs={24} lg={10}>
                        <motion.div
                            className="about-visual"
                            initial={{ opacity: 0, scale: 0.96 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={VIEWPORT}
                            transition={{ ...transitions.reveal, delay: 0.1 }}
                        >
                            <div className="visual-card">
                                <div className="visual-code">
                                    <div className="code-header">
                                        <span className="code-dot red"></span>
                                        <span className="code-dot yellow"></span>
                                        <span className="code-dot green"></span>
                                    </div>
                                    <pre className="code-content">
                                        {`const developer = {
  name: "余非凡",
  role: "AI Developer",
  skills: [
    "Large Language Models",
    "RAG Architecture",
    "AI Agent Development"
  ],
  passion: "Build AI that works"
};`}
                                    </pre>
                                </div>
                            </div>

                            {/* 浮动标签 */}
                            <motion.div
                                className="floating-tag tag-1"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Tag color="default">🤖 LLM</Tag>
                            </motion.div>
                            <motion.div
                                className="floating-tag tag-2"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            >
                                <Tag color="default">🔗 RAG</Tag>
                            </motion.div>
                            <motion.div
                                className="floating-tag tag-3"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity }}
                            >
                                <Tag color="default">🧠 Agent</Tag>
                            </motion.div>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    );
};

export default About;
