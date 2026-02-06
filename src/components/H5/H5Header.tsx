import { useState } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined, CloseOutlined, TranslationOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import './H5Header.css';

const H5Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  const navItems = [
    { key: 'hero', label: t('首页', 'Home') },
    { key: 'about', label: t('关于', 'About') },
    { key: 'experience', label: t('经历', 'Experience') },
    { key: 'projects', label: t('项目', 'Projects') },
    { key: 'skills', label: t('技能', 'Skills') },
    { key: 'contact', label: t('联系', 'Contact') },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`h5-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <header className="h5-header">
        <div className="h5-header-container">
          <div className="h5-logo">
            <span className="h5-logo-text">余非凡</span>
            <span className="h5-logo-dot"></span>
          </div>

          <div className="h5-header-actions">
            <Button
              className="h5-lang-btn"
              type="text"
              size="small"
              icon={<TranslationOutlined />}
              onClick={toggleLang}
            >
              {lang === 'zh' ? 'EN' : '中'}
            </Button>
            <Button
              className="h5-menu-btn"
              type="text"
              icon={menuOpen ? <CloseOutlined /> : <MenuOutlined />}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
      </header>

      <Drawer
        placement="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        width="70%"
        className="h5-menu-drawer"
        closable={false}
      >
        <nav className="h5-nav">
          <AnimatePresence>
            {navItems.map((item, index) => (
              <motion.a
                key={item.key}
                className="h5-nav-link"
                onClick={() => scrollToSection(item.key)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
          </AnimatePresence>
        </nav>
      </Drawer>
    </>
  );
};

export default H5Header;
