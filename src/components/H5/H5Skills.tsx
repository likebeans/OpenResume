import { Typography } from 'antd';
import { CodeOutlined, CloudServerOutlined, ToolOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import './H5Skills.css';

const { Title } = Typography;

const H5Skills = () => {
  const { t } = useLang();

  const skillsData = [
    {
      category: 'AI Engineering',
      icon: <CodeOutlined />,
      desc: t('构建智能核心', 'Building intelligent core'),
      items: ['Large Language Models', 'RAG Architecture', 'LangChain', 'Prompt Engineering'],
    },
    {
      category: 'Full Stack',
      icon: <CloudServerOutlined />,
      desc: t('打造坚实底座', 'Solid foundation'),
      items: ['Python / PyTorch', 'FastAPI / Flask', 'React / TypeScript', 'PostgreSQL'],
    },
    {
      category: 'DevOps & Tools',
      icon: <ToolOutlined />,
      desc: t('提效与部署', 'Efficiency & deployment'),
      items: ['Docker / K8s', 'Git Workflow', 'Linux / Shell', 'CI/CD'],
    },
  ];

  return (
    <section id="h5-skills" className="h5-section h5-skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="h5-section-label">CAPABILITIES</span>
        <Title level={2} className="h5-section-title">
          Tech Stack
        </Title>

        <div className="h5-skills-grid">
          {skillsData.map((group, index) => (
            <motion.div
              key={group.category}
              className="h5-skill-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h5-skill-header">
                <span className="h5-skill-icon">{group.icon}</span>
                <div>
                  <h3 className="h5-skill-title">{group.category}</h3>
                  <p className="h5-skill-desc">{group.desc}</p>
                </div>
              </div>
              <ul className="h5-skill-list">
                {group.items.map((item) => (
                  <li key={item} className="h5-skill-item">
                    <span className="h5-skill-dot"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default H5Skills;
