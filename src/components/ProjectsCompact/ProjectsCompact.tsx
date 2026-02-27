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
    title: '企业级大模型与智能应用平台建设',
    role: 'AI 应用开发工程师',
    description: t(
      '为公司药物研发等业务部门构建统一的企业级智能数据与 AI 平台，将传统数据平台能力与 AI 能力深度融合。',
      'Built enterprise-level AI platform for drug R&D departments, integrating traditional data platform capabilities with AI.'
    ),
    achievements: [
      t('完成数据层、模型层与应用层的分层设计，打通数据库、向量库与外部资源', 'Completed layered design of data, model, and application layers'),
      t('构建多智能体系统，实现自动检索、推理分析与结构化报告生成闭环，效率提升近 10 倍', 'Built multi-agent system with automatic retrieval, reasoning, and structured report generation'),
      t('完成医疗大模型从 CPT、SFT 到 RLHF 的全流程优化，基于 VLLM 部署上线', 'Completed full pipeline optimization from CPT, SFT to RLHF, deployed on VLLM'),
      t('微调 BERT 实现意图识别，准确率 95%+，推理速度为 LLM 的 1/10', 'Fine-tuned BERT for intent recognition with 95%+ accuracy'),
    ],
    takeaways: t(
      '深刻理解了企业级 AI 平台建设的核心挑战，掌握了从模型训练到部署的全流程能力。',
      'Gained deep understanding of enterprise AI platform challenges, mastered full pipeline from training to deployment.'
    ),
    tags: ['LangGraph', 'RAG', 'SFT', 'RLHF', 'VLLM'],
    link: 'https://github.com/likebeans',
  },
  {
    title: '企业级 RAG 检索与知识服务平台',
    role: 'AI 应用开发工程师',
    description: t(
      '建设企业级统一检索与知识服务平台，作为公司内部 AI 应用的底层基础设施。',
      'Built enterprise-level unified retrieval and knowledge platform as AI application infrastructure.'
    ),
    achievements: [
      t('设计多租户检索服务架构，实现租户隔离与精细化权限控制', 'Designed multi-tenant retrieval architecture with isolation and fine-grained access control'),
      t('统一封装 OpenAI 兼容接口，支持 Embeddings 与 Chat Completions 调用', 'Encapsulated OpenAI-compatible interfaces'),
      t('支持 Dense、BM25、Hybrid 等多种检索模式', 'Supported Dense, BM25, Hybrid retrieval modes'),
      t('建立企业级语义检索安全机制', 'Established enterprise semantic retrieval security mechanism'),
    ],
    takeaways: t(
      '掌握了企业级知识检索平台的建设方法，理解了数据安全与权限控制的重要性。',
      'Mastered enterprise knowledge retrieval platform construction, understood data security and access control.'
    ),
    tags: ['RAG', 'Vector DB', 'Security', 'BM25'],
    link: 'https://github.com/likebeans',
  },
  {
    title: '企业 OA 系统智能化改造',
    role: 'AI 算法工程师',
    description: t(
      '参与推动企业内部 OA 系统全面智能化升级，为公司 2,000+ 名员工构建统一的智能办公能力层。',
      'Participated in enterprise OA system intelligent upgrade for 2000+ employees.'
    ),
    achievements: [
      t('基于 LangGraph + FastAPI + FastMCP 构建智能体与中间层服务', 'Built agent and middleware services based on LangGraph + FastAPI + FastMCP'),
      t('搭建标准化知识库处理流程，覆盖数据采集到检索全链路', 'Built standardized knowledge base processing pipeline'),
      t('基于 MinerU 实现端到端文档解析', 'Implemented end-to-end document parsing with MinerU'),
      t('表单处理时间由 2-3 分钟降至约 10 秒', 'Reduced form processing time from 2-3 minutes to ~10 seconds'),
    ],
    takeaways: t(
      '深入理解了企业办公场景的 AI 改造痛点，积累了丰富的 RAG 工程实践经验。',
      'Deep understanding of enterprise office AI transformation challenges, accumulated rich RAG engineering experience.'
    ),
    tags: ['LangGraph', 'FastAPI', 'RAG-Fusion', 'HyDE'],
    link: 'https://github.com/likebeans',
  },
  {
    title: 'AI 浏览器',
    role: 'AI 算法工程师',
    description: t(
      '负责浏览器中所有 AI 模块研发，包括主界面 AI 搜索、智能问数系统、模型微调与部署等。',
      'Responsible for all AI module development in browser, including AI search, Q&A system, model fine-tuning and deployment.'
    ),
    achievements: [
      t('设计并实现 AI 搜索与智能问数功能', 'Designed and implemented AI search and intelligent Q&A'),
      t('选用 Qwen2.5，采用 LoRA + DeepSpeed 进行高效分布式微调', 'Used Qwen2.5 with LoRA + DeepSpeed for distributed fine-tuning'),
      t('基于 VLLM 框架优化推理与私有化部署', 'Optimized inference and private deployment based on VLLM'),
      t('负责大模型 benchmark、并发压测与 RAG 评估', 'Responsible for LLM benchmark, stress testing, and RAG evaluation'),
    ],
    takeaways: t(
      '掌握了从模型选型到部署的完整流程，积累了丰富的大模型工程化经验。',
      'Mastered complete flow from model selection to deployment, accumulated rich LLM engineering experience.'
    ),
    tags: ['Qwen2.5', 'LoRA', 'DeepSpeed', 'VLLM'],
    link: 'https://github.com/likebeans',
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
