import { Typography, Tag } from 'antd';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import './H5About.css';

const { Title, Paragraph } = Typography;

const H5About = () => {
  const { t } = useLang();

  const highlights = [
    { icon: '🎯', label: t('专注领域', 'Focus'), value: 'LLM & AI Agent' },
    { icon: '💼', label: t('当前角色', 'Role'), value: t('AI 应用开发工程师', 'AI App Developer') },
    { icon: '⚡', label: t('工作理念', 'Philosophy'), value: t('简洁、高效、落地', 'Simple & Practical') },
  ];

  const skills = ['Python', 'LLM', 'RAG', 'Agent', 'FastAPI', 'React'];

  return (
    <section id="h5-about" className="h5-section h5-about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="h5-section-label">{t('关于我', 'About')}</span>
        <Title level={2} className="h5-section-title">
          {t('将复杂的 AI 技术转化为', 'Turning complex AI into')}
          <span className="h5-text-gradient"> {t('简单易用', 'simple & usable')}</span>
          {t('的产品', ' products')}
        </Title>

        <Paragraph className="h5-about-intro">
          {t(
            '我是一名专注于大模型和 AI 应用的开发工程师，热爱探索前沿技术并将其落地为实际产品。',
            'I am a developer focused on LLM and AI applications, passionate about exploring cutting-edge technology.'
          )}
        </Paragraph>

        {/* Highlights */}
        <div className="h5-highlights">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              className="h5-highlight-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="h5-highlight-icon">{item.icon}</span>
              <span className="h5-highlight-label">{item.label}</span>
              <span className="h5-highlight-value">{item.value}</span>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="h5-about-skills">
          {skills.map((skill) => (
            <Tag key={skill} className="h5-skill-tag">{skill}</Tag>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default H5About;
