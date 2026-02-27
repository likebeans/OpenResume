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
      title: '企业级大模型与智能应用平台建设',
      role: 'AI 应用开发工程师',
      description: t(
        '为公司药物研发等业务部门构建统一的企业级智能数据与 AI 平台。',
        'Built enterprise-level AI platform for drug R&D departments.'
      ),
      tags: ['LangGraph', 'RAG', 'SFT', 'RLHF', 'VLLM'],
      link: 'https://github.com/likebeans',
    },
    {
      title: '企业级 RAG 检索与知识服务平台',
      role: 'AI 应用开发工程师',
      description: t(
        '建设企业级统一检索与知识服务平台，作为公司 AI 应用的底层基础设施。',
        'Built enterprise-level unified retrieval and knowledge platform.'
      ),
      tags: ['RAG', 'Vector DB', 'Security', 'BM25'],
      link: 'https://github.com/likebeans',
    },
    {
      title: '企业 OA 系统智能化改造',
      role: 'AI 算法工程师',
      description: t(
        '为公司 2,000+ 名员工构建统一的智能办公能力层。',
        'Built intelligent office capabilities for 2000+ employees.'
      ),
      tags: ['LangGraph', 'FastAPI', 'RAG-Fusion'],
      link: 'https://github.com/likebeans',
    },
    {
      title: 'AI 浏览器',
      role: 'AI 算法工程师',
      description: t(
        '负责浏览器中所有 AI 模块研发，服务高校近万名师生。',
        'Responsible for all AI modules in browser for 10000+ users.'
      ),
      tags: ['Qwen2.5', 'LoRA', 'DeepSpeed', 'VLLM'],
      link: 'https://github.com/likebeans',
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
