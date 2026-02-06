import { useRef } from 'react';
import { Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FullpageSection } from '../FullpageLayout';
import { useLang } from '../../context/LanguageContext';
import './ProjectsCompact.css';

const { Title } = Typography;

interface Project {
  title: string;
  role: string;
  description: string;
  achievements: string[];
  takeaways: string;
  tags: string[];
  link: string;
}

const getProjects = (t: (zh: string, en: string) => string): Project[] => [
  {
    title: 'Agent Service Toolkit',
    role: 'Creator & Core Maintainer',
    description: t('全栈 AI Agent 服务工具包，基于 LangGraph 构建生产级代理服务，旨在解决 Agent 从 Demo 到 Production 的工程化难题。', 'Full-stack AI Agent service toolkit built on LangGraph for production-grade agent services, solving the engineering challenges from Demo to Production.'),
    achievements: [
      t('提供完整的 FastAPI 异步服务模板，支持 SSE 流式响应', 'Complete FastAPI async service template with SSE streaming support'),
      t('内置会话持久化、工具调用追踪与结构化日志系统', 'Built-in session persistence, tool call tracing, and structured logging'),
      t('大幅降低 Agent 应用的开发与部署门槛', 'Significantly lowered the barrier for Agent app development and deployment'),
    ],
    takeaways: t('深刻理解了 Agent 工程化的核心痛点，掌握了如何构建高可用、可观测的 AI 服务架构。', 'Gained deep understanding of Agent engineering pain points and mastered building highly available, observable AI service architectures.'),
    tags: ['LangGraph', 'FastAPI', 'Production'],
    link: 'https://github.com/likebeans/agent-service-toolkit',
  },
  {
    title: 'Genesis LLM',
    role: 'Solo Developer',
    description: t('从零构建大模型的完整工程流水线，不依赖高级封装库，手写 Transformer 每一行代码，深入理解 LLM 核心原理。', 'Complete LLM engineering pipeline built from scratch, hand-writing every line of Transformer code without high-level libraries to deeply understand LLM core principles.'),
    achievements: [
      t('实现了从 Tokenizer 训练到模型预训练（Pre-training）的全流程', 'Implemented the full pipeline from Tokenizer training to model pre-training'),
      t('手写实现 Attention、LayerNorm 等核心组件', 'Hand-wrote Attention, LayerNorm, and other core components'),
      t('构建了可视化训练监控与评估脚本', 'Built visual training monitoring and evaluation scripts'),
    ],
    takeaways: t('"What I cannot create, I do not understand." 通过手搓模型，对 Transformer 架构细节有了像素级的认知。', '"What I cannot create, I do not understand." Building the model by hand gave me pixel-level cognition of the Transformer architecture.'),
    tags: ['PyTorch', 'Training', 'LLM'],
    link: 'https://github.com/likebeans/Genesis-LLM',
  },
  {
    title: 'Notes on LLMs',
    role: 'Author',
    description: t('LLM、RAG、Agent 学习与实践笔记，系统化的知识沉淀，涵盖了从理论基础到工程实践的广泛内容。', 'Systematic knowledge base covering LLM, RAG, and Agent learning and practice, from theoretical foundations to engineering implementation.'),
    achievements: [
      t('梳理了 RAG 的高级检索策略与优化范式', 'Organized advanced RAG retrieval strategies and optimization patterns'),
      t('总结了 Agent 设计模式与主流框架对比', 'Summarized Agent design patterns and mainstream framework comparisons'),
      t('累计输出 50k+ 字的技术笔记', 'Produced 50k+ words of technical notes'),
    ],
    takeaways: t('写作是最好的学习。通过系统化输出，构建了自己的 LLM 知识体系，也帮助了更多初学者。', 'Writing is the best way to learn. Systematic output built my own LLM knowledge system and helped many beginners.'),
    tags: ['Knowledge', 'RAG', 'Docs'],
    link: 'https://likebeans.github.io/notes-on-llms/',
  },
];

const ProjectCard = ({ project, index, total }: { project: Project; index: number; total: number }) => {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const isLast = index === total - 1;
  
  // 增强动画效果：缩放更明显，模糊更重，透明度变化
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]); // 提前消失，避免穿帮
  const filter = useTransform(scrollYProgress, [0, 1], ['blur(0px)', 'blur(10px)']);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']); // 稍微向上移动一点，增加视差感

  return (
    <div ref={ref} className="project-card-container">
      <motion.div 
        className="project-card-sticky"
        style={{
          scale: isLast ? 1 : scale,
          opacity: isLast ? 1 : opacity,
          filter: isLast ? 'none' : filter,
          y: isLast ? 0 : y,
        }}
      >
        <div className="project-card-inner">
          {/* Left Column: Basic Info & Achievements */}
          <div className="project-left">
            <div className="project-header-group">
                <div className="project-title-row">
                <h3 className="project-title">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.title} <ArrowRightOutlined className="arrow-icon" />
                    </a>
                </h3>
                </div>
                <span className="project-role">{project.role}</span>
            </div>
            
            <p className="project-desc">{project.description}</p>
            
            <ul className="project-achievements">
              {project.achievements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right Column: Takeaways */}
          <div className="project-right">
            <div className="takeaway-box">
              <h4 className="takeaway-title">{t('收获与思考', 'Takeaways')}</h4>
              <p className="takeaway-content">{project.takeaways}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsCompact = () => {
  const { t } = useLang();
  const projects = getProjects(t);

  return (
    <FullpageSection id="projects" className="projects-compact">
      <div className="projects-wrapper">
        <div className="projects-header-static">
          <span className="section-label">Selected Works</span>
          <Title level={2} className="section-title">
            {t('项目经历', 'Projects')}
          </Title>
        </div>
        
        <div className="projects-stack-container">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
              total={projects.length} 
            />
          ))}
        </div>
      </div>
    </FullpageSection>
  );
};

export default ProjectsCompact;
