import { Typography, Tag } from 'antd';
import { motion } from 'framer-motion';
import { FullpageSection } from '../FullpageLayout';
import { useLang } from '../../context/LanguageContext';
import './AboutCompact.css';

const { Title, Paragraph } = Typography;

const AboutCompact = () => {
  const { t } = useLang();

  const highlights = [
    { icon: '🎯', label: t('专注领域', 'Focus'), value: 'LLM & AI Agent' },
    { icon: '💼', label: t('当前角色', 'Current Role'), value: t('AI 应用开发工程师', 'AI Application Developer') },
    { icon: '⚡', label: t('工作理念', 'Philosophy'), value: t('简洁、高效、落地', 'Simple, Efficient, Practical') },
  ];

  const skills = ['Python', 'LLM', 'RAG', 'Agent', 'FastAPI', 'React'];

  return (
    <FullpageSection id="about" className="about-compact">
      <div className="about-compact-layout">
        {/* 左侧：标题 + 简介 */}
        <div className="about-left">
          <div className="section-header-inline">
            <span className="section-label">{t('关于我', 'About')}</span>
            <Title level={2} className="section-title">
              {t('将复杂的 AI 技术', 'Turning complex AI')}<br />
              {t('转化为', 'into ')}<span className="text-gradient">{t('简单易用', 'simple & usable')}</span>{t('的产品', ' products')}
            </Title>
          </div>

          <div className="about-intro">
            <Paragraph className="intro-lead">
              {t('我是一名专注于大模型和 AI 应用的开发工程师，热爱探索前沿技术并将其落地为实际产品。', 'I am a developer focused on LLM and AI applications, passionate about exploring cutting-edge technology and turning it into real products.')}
            </Paragraph>
            <Paragraph className="intro-text">
              {t('目前就职于湖南九典制药股份有限公司，负责 AI 技术在企业场景中的应用与落地。我相信好的技术应该是「无感」的 —— 用户感受到的只有价值，而非复杂性。', 'Currently working at Hunan Jiudian Pharmaceutical Co., Ltd., responsible for applying AI technology in enterprise scenarios. I believe good technology should be "invisible" — users should only feel the value, not the complexity.')}
            </Paragraph>
          </div>

          <div className="about-skills">
            {skills.map((skill) => (
              <Tag key={skill} className="skill-tag">{skill}</Tag>
            ))}
          </div>
        </div>

        {/* 右侧：高亮卡片 */}
        <div className="about-right">
          <div className="highlights-grid">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
              >
                <span className="highlight-icon">{item.icon}</span>
                <span className="highlight-label">{item.label}</span>
                <span className="highlight-value">{item.value}</span>
              </motion.div>
            ))}
          </div>

          {/* 代码卡片 */}
          <div className="code-card">
            <div className="code-header">
              <span className="code-dot"></span>
              <span className="code-dot"></span>
              <span className="code-dot"></span>
            </div>
            <pre className="code-content">{`const developer = {
  name: "余非凡",
  passion: "Build AI that works",
  focus: ["LLM", "RAG", "Agent"]
};`}</pre>
          </div>
        </div>
      </div>
    </FullpageSection>
  );
};

export default AboutCompact;
