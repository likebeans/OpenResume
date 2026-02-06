import { Typography, Tag, Button } from 'antd';
import { DownloadOutlined, GithubOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import './H5Hero.css';

const { Title, Paragraph } = Typography;

const H5Hero = () => {
  const { t } = useLang();

  const skills = ['LLM', 'RAG', 'Agent', 'Python', 'FastAPI', 'React'];

  return (
    <section id="h5-hero" className="h5-hero">
      <motion.div
        className="h5-hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Badge */}
        <div className="h5-hero-badge">
          <span className="h5-badge-dot"></span>
          Open to Work
        </div>

        {/* Title */}
        <Title level={1} className="h5-hero-title">
          Building the <span className="h5-text-gradient">Future</span> with Large Language Models.
        </Title>

        {/* Subtitle */}
        <Paragraph className="h5-hero-subtitle">
          {t('用算法思考，用工程交付，用 AI 改变世界', 'Think with algorithms, deliver with engineering, change the world with AI')}
        </Paragraph>

        {/* Profile Card */}
        <div className="h5-profile-card">
          <img 
            src="/avatar.jpg" 
            alt="余非凡" 
            className="h5-profile-avatar"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=yufeifan';
            }}
          />
          <div className="h5-profile-info">
            <h3 className="h5-profile-name">{t('余非凡', 'Feifan Yu')}</h3>
            <p className="h5-profile-role">
              {t('大模型算法工程师 · 1年+ AI 开发经验', 'LLM Engineer · 1+ year AI dev experience')}
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="h5-hero-skills">
          {skills.map((skill) => (
            <Tag key={skill} className="h5-skill-tag">{skill}</Tag>
          ))}
        </div>

        {/* Actions */}
        <div className="h5-hero-actions">
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size="large"
            className="h5-btn-primary"
            href="/resume.pdf"
          >
            {t('下载简历', 'Download CV')}
          </Button>
          <Button
            icon={<GithubOutlined />}
            size="large"
            className="h5-btn-secondary"
            href="https://github.com/likebeans"
            target="_blank"
          >
            Github
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default H5Hero;
