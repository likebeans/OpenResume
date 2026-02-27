import { Typography } from 'antd';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import './H5Experience.css';

const { Title } = Typography;

interface Experience {
  company: string;
  companyInfo?: string;
  role: string;
  period: string;
  description: string;
  isFuture?: boolean;
}

const H5Experience = () => {
  const { t } = useLang();

  const experiences: Experience[] = [
    {
      company: t('湖南九典制药股份有限公司', 'Hunan Jiudian Pharmaceutical'),
      companyInfo: t('A股上市（300705）', 'Listed (300705)'),
      role: t('AI 应用开发工程师', 'AI Application Developer'),
      period: t('2025.5 – 至今', '2025.5 – Present'),
      description: t(
        '负责公司 AI 应用的设计与开发，构建统一的企业级智能数据与 AI 平台。主导构建多智能体系统与企业级 RAG 检索平台。',
        'Responsible for AI application design and development, building a unified enterprise-level intelligent data and AI platform.'
      ),
    },
    {
      company: t('未来规划', 'Future Plan'),
      role: t('AI / 大模型方向', 'AI / LLM Direction'),
      period: t('待定', 'TBD'),
      description: t(
        '继续深耕大模型应用开发，专注 LLM、RAG、Agent 等方向，期待加入有技术深度的团队。',
        'Continue deepening LLM development, focusing on RAG and Agent. Looking to join a technically-driven team.'
      ),
      isFuture: true,
    },
  ];

  return (
    <section id="h5-experience" className="h5-section h5-experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="h5-section-label">{t('工作经历', 'Experience')}</span>
        <Title level={2} className="h5-section-title">
          {t('我的职业轨迹', 'Career Path')}
        </Title>
        <p className="h5-section-desc">
          {t('从前端到 AI，持续探索技术与产品的交汇点', 'From frontend to AI, exploring the intersection of tech and product')}
        </p>

        <div className="h5-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              className={`h5-timeline-item ${exp.isFuture ? 'is-future' : ''}`}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h5-timeline-dot"></div>
              <div className="h5-timeline-content">
                <div className="h5-exp-header">
                  <h3 className="h5-exp-company">
                    {exp.company}
                    {exp.companyInfo && (
                      <span className="h5-exp-info">{exp.companyInfo}</span>
                    )}
                  </h3>
                  <span className="h5-exp-period">{exp.period}</span>
                </div>
                <p className="h5-exp-role">{exp.role}</p>
                <p className="h5-exp-desc">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default H5Experience;
