import { Typography, Tag } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import './H5Projects.css';

const { Title } = Typography;

interface Project {
  title: string;
  role: string;
  description: string;
  tags: string[];
  link: string;
}

const H5Projects = () => {
  const { t } = useLang();

  const projects: Project[] = [
    {
      title: 'Agent Service Toolkit',
      role: 'Creator & Maintainer',
      description: t(
        '全栈 AI Agent 服务工具包，基于 LangGraph 构建生产级代理服务。',
        'Full-stack AI Agent toolkit built on LangGraph for production-grade agent services.'
      ),
      tags: ['LangGraph', 'FastAPI', 'Production'],
      link: 'https://github.com/likebeans/agent-service-toolkit',
    },
    {
      title: 'Genesis LLM',
      role: 'Solo Developer',
      description: t(
        '从零构建大模型的完整工程流水线，手写 Transformer 每一行代码。',
        'Complete LLM pipeline from scratch, hand-writing every line of Transformer code.'
      ),
      tags: ['PyTorch', 'Training', 'LLM'],
      link: 'https://github.com/likebeans/Genesis-LLM',
    },
    {
      title: 'Notes on LLMs',
      role: 'Author',
      description: t(
        'LLM、RAG、Agent 学习与实践笔记，系统化的知识沉淀。',
        'Systematic knowledge base covering LLM, RAG, and Agent learning.'
      ),
      tags: ['Knowledge', 'RAG', 'Docs'],
      link: 'https://likebeans.github.io/notes-on-llms/',
    },
  ];

  return (
    <section id="h5-projects" className="h5-section h5-projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="h5-section-label">Selected Works</span>
        <Title level={2} className="h5-section-title">
          {t('项目经历', 'Projects')}
        </Title>

        <div className="h5-projects-list">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              className="h5-project-card"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h5-project-header">
                <h3 className="h5-project-title">{project.title}</h3>
                <ArrowRightOutlined className="h5-project-arrow" />
              </div>
              <p className="h5-project-role">{project.role}</p>
              <p className="h5-project-desc">{project.description}</p>
              <div className="h5-project-tags">
                {project.tags.map((tag) => (
                  <Tag key={tag} className="h5-project-tag">{tag}</Tag>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default H5Projects;
