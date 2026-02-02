import { useState, useEffect } from 'react';
import { Layout, Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from '../MagneticButton';
import { transitions } from '../../theme/motion';
import './Header.css';

const { Header: AntHeader } = Layout;

const navItems = [
    { key: 'about', label: '关于' },
    { key: 'experience', label: '经历' },
    { key: 'projects', label: '项目' },
    { key: 'skills', label: '技能' },
    { key: 'contact', label: '联系' },
];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    const { scrollY, scrollYProgress } = useScroll();
    const headerBackground = useTransform(
        scrollY,
        [0, 50],
        ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
    );
    const progressOpacity = useTransform(scrollYProgress, [0, 0.02], [0, 1]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // 检测当前活跃区域
            const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <motion.div
            className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}
            style={{
                backgroundColor: headerBackground,
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            }}
        >
            <AntHeader className="header">
                <div className="header-container">
                    {/* Logo */}
                    <motion.div
                        className="logo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <span className="logo-text">YF</span>
                        <span className="logo-dot"></span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ ...transitions.revealFast, delay: index * 0.05 }}
                            >
                                <MagneticButton strength={0.15}>
                                    <a
                                        className={`nav-link ${activeSection === item.key ? 'active' : ''}`}
                                        onClick={() => scrollToSection(item.key)}
                                        data-cursor="Go"
                                    >
                                        {item.label}
                                        {activeSection === item.key && (
                                            <motion.span
                                                className="nav-indicator"
                                                layoutId="navIndicator"
                                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </a>
                                </MagneticButton>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <Button
                        className="mobile-menu-btn"
                        type="text"
                        icon={mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    />
                </div>
            </AntHeader>

            <motion.div
                className="scroll-progress"
                style={{
                    scaleX: scrollYProgress,
                    opacity: progressOpacity,
                    originX: 0,
                }}
            />

            {/* Mobile Drawer */}
            <Drawer
                className="mobile-drawer"
                placement="right"
                closable={false}
                onClose={() => setMobileMenuOpen(false)}
                open={mobileMenuOpen}
                width="100%"
            >
                <div className="mobile-nav">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={item.key}
                            className={`mobile-nav-link ${activeSection === item.key ? 'active' : ''}`}
                            onClick={() => scrollToSection(item.key)}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <span className="mobile-nav-number">0{index + 1}</span>
                            <span className="mobile-nav-text">{item.label}</span>
                        </motion.a>
                    ))}
                </div>
            </Drawer>
        </motion.div>
    );
};

export default Header;
