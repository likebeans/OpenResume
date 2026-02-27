import { Typography } from 'antd';
import { motion } from 'framer-motion';
import { CodeOutlined, CloudServerOutlined, ToolOutlined } from '@ant-design/icons';
import { createRevealFastProps, createRevealProps } from '../../theme/motion';
import { useLang } from '../../context/LanguageContext';
import './Skills.css';

const { Title } = Typography;

const getSkillsData = (t: (zh: string, en: string) => string) => [
    {
        category: 'AI Engineering',
        icon: <CodeOutlined />,
        desc: t('构建智能核心', 'Building intelligent core'),
        items: ['Large Language Models', 'RAG Architecture', 'LangChain', 'Prompt Engineering', 'Model Fine-tuning']
    },
    {
        category: 'Full Stack',
        icon: <CloudServerOutlined />,
        desc: t('打造坚实底座', 'Solid foundation'),
        items: ['Python / PyTorch', 'FastAPI / Flask', 'React / TypeScript', 'PostgreSQL / Vector DB']
    },
    {
        category: 'DevOps & Tools',
        icon: <ToolOutlined />,
        desc: t('提效与部署', 'Efficiency & deployment'),
        items: ['Docker / K8s', 'Git Workflow', 'Linux / Shell', 'CI/CD Pipeline']
    },
];

const Skills = () => {
    const { t } = useLang();
    const skillsData = getSkillsData(t);

    return (
        <section id="skills" className="skills-section-modern">
            <div className="container">
                <div className="skills-layout">
                    <motion.div
                        className="skills-header"
                        {...createRevealProps()}
                    >
                        <span className="section-subtitle">CAPABILITIES</span>
                        <Title level={2} className="section-title-minimal">
                            Tech Stack
                        </Title>
                    </motion.div>

                    <div className="skills-columns">
                        {skillsData.map((group, index) => (
                            <motion.div
                                key={group.category}
                                className="skill-column"
                                {...createRevealFastProps(index * 0.08)}
                            >
                                <div className="column-header">
                                    <div className="column-icon">{group.icon}</div>
                                    <h3 className="column-title">{group.category}</h3>
                                    <p className="column-desc">{group.desc}</p>
                                </div>

                                <ul className="skill-list-modern">
                                    {group.items.map(item => (
                                        <li key={item} className="skill-item-modern">
                                            <span className="skill-dot"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
