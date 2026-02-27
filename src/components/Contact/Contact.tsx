import { Typography, Button, message } from 'antd';
import { GithubOutlined, MailOutlined, CopyOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import MagneticButton from '../MagneticButton';
import { createRevealFastProps, createRevealProps, transitions } from '../../theme/motion';
import './Contact.css';

const { Paragraph } = Typography;

const Contact = () => {
    const email = 'likebeanss@gmail.com'; // 您可以替换为真实邮箱

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        message.success('邮箱已复制到剪贴板');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        {
            name: 'GitHub',
            icon: <GithubOutlined />,
            url: 'https://github.com/likebeans',
        },
    ];

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <motion.div
                    className="contact-content"
                    {...createRevealProps()}
                >
                    <span className="section-label">联系方式</span>

                    {/* 大号 CTA 文字 */}
                    <motion.div
                        className="contact-cta"
                        {...createRevealFastProps(0.1)}
                    >
                        <h2 className="contact-title-large">
                            Let's work
                            <br />
                            <span className="contact-title-outline">together</span>
                        </h2>
                    </motion.div>

                    <Paragraph className="contact-subtitle">
                        无论是工作机会、技术交流还是开源协作，欢迎随时联系我
                    </Paragraph>

                    <div className="contact-actions">
                        <MagneticButton strength={0.2}>
                            <Button
                                type="primary"
                                size="large"
                                icon={<MailOutlined />}
                                className="contact-btn-primary"
                                href={`mailto:${email}`}
                                data-cursor="Email"
                            >
                                发送邮件
                            </Button>
                        </MagneticButton>
                        <MagneticButton strength={0.2}>
                            <Button
                                size="large"
                                icon={<CopyOutlined />}
                                className="contact-btn-secondary"
                                onClick={copyEmail}
                            >
                                复制邮箱
                            </Button>
                        </MagneticButton>
                    </div>

                    <div className="contact-divider">
                        <span>或在这里找到我</span>
                    </div>

                    <div className="social-links">
                        {socialLinks.map((link) => (
                            <MagneticButton key={link.name} strength={0.3}>
                                <motion.a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    whileHover={{ y: -4 }}
                                    transition={transitions.hover}
                                    whileTap={{ scale: 0.97 }}
                                    data-cursor="Link"
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </motion.a>
                            </MagneticButton>
                        ))}
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.footer
                    className="footer"
                    {...createRevealFastProps(0.1, 0)}
                >
                    <div className="footer-content">
                        <div className="footer-left">
                            <p className="footer-text">
                                © {new Date().getFullYear()} 余非凡
                            </p>
                            <p className="footer-credit">
                                Built with React & Framer Motion
                            </p>
                        </div>

                        <MagneticButton strength={0.3}>
                            <motion.button
                                className="back-to-top"
                                onClick={scrollToTop}
                                whileHover={{ y: -4 }}
                                transition={transitions.hover}
                                whileTap={{ scale: 0.97 }}
                                data-cursor="Top"
                            >
                                <ArrowUpOutlined />
                                <span>返回顶部</span>
                            </motion.button>
                        </MagneticButton>
                    </div>
                </motion.footer>
            </div>
        </section>
    );
};

export default Contact;
