import { Typography } from 'antd';
import { motion } from 'framer-motion';
import { FullpageSection } from '../FullpageLayout';
import { useLang } from '../../context/LanguageContext';
import './ExperienceCompact.css';

const { Title } = Typography;

interface Experience {
  company: string;
  companyInfo?: string;
  role: string;
  period: string;
  description: string;
  isFuture?: boolean;
}

const getExperiences = (t: (zh: string, en: string) => string): Experience[] => [
  {
    company: t('湖南九典制药股份有限公司', 'Hunan Jiudian Pharmaceutical Co., Ltd.'),
    companyInfo: t('A股上市（300705）', 'Listed on A-share (300705)'),
    role: t('AI 应用开发工程师', 'AI Application Developer'),
    period: t('2025.5 – 至今', '2025.5 – Present'),
    description: t(
      '主导开发智能问答系统，基于大模型技术实现药品知识库的智能检索；构建深度学习模型用于生产数据分析，提升质量控制效率。',
      'Led the development of an intelligent Q&A system using LLM for pharmaceutical knowledge retrieval; built deep learning models for production data analysis to improve quality control.'
    ),
  },
  {
    company: t('未来规划', 'Future Plan'),
    role: t('AI / 大模型方向', 'AI / LLM Direction'),
    period: t('待定', 'TBD'),
    description: t(
      '继续深耕大模型应用开发，专注 LLM、RAG、Agent 等方向，探索 AI 在更多行业的落地与产品化，期待加入有技术深度的团队。',
      'Continue deepening LLM application development, focusing on RAG, Agent, and exploring AI productization across industries. Looking to join a technically-driven team.'
    ),
    isFuture: true,
  },
];

const ExperienceCompact = () => {
  const { t } = useLang();
  const experiences = getExperiences(t);

  return (
    <FullpageSection id="experience" className="experience-compact">
      <div className="experience-compact-layout">
        {/* 左侧：标题 */}
        <div className="experience-header">
          <span className="section-label">{t('工作经历', 'Experience')}</span>
          <Title level={2} className="section-title">
            {t('我的职业轨迹', 'Career Path')}
          </Title>
          <p className="section-desc">
            {t('从前端到 AI，持续探索技术与产品的交汇点', 'From frontend to AI, continuously exploring the intersection of tech and product')}
          </p>
        </div>

        {/* 右侧：时间线 */}
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className="timeline-item"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <span className="marker-dot"></span>
                {index < experiences.length - 1 && <span className="marker-line"></span>}
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company">
                    {exp.company}
                    {exp.companyInfo && <span className="company-info">{exp.companyInfo}</span>}
                  </h3>
                  <span className="period">{exp.period}</span>
                </div>
                <span className="role">{exp.role}</span>
                <p className="description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </FullpageSection>
  );
};

export default ExperienceCompact;
