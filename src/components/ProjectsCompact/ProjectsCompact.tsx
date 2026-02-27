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
  period: string;
  description: string;
  achievements: string[];
  outcomes: string[];
  tags: string[];
  link: string;
}

const getProjects = (t: (zh: string, en: string) => string): Project[] => [
  {
    title: '企业级大模型与智能应用平台建设',
    role: t('AI 应用开发工程师', 'AI Application Developer'),
    period: '2025.08 – 至今',
    description: t(
      '为公司药物研发等业务部门构建统一的企业级智能数据与 AI 平台，形成集数据管理、业务 CRUD、模型服务、多智能体调度与知识检索于一体的综合智能底座。',
      'Built a unified enterprise AI platform for drug R&D teams, integrating data management, CRUD workflows, model services, multi-agent orchestration, and knowledge retrieval.'
    ),
    achievements: [
      t(
        '完成数据层、模型层、应用层分层架构设计，打通数据库、向量库与外部资源，统一结构化与非结构化数据检索调用。',
        'Designed layered architecture across data/model/application layers and unified retrieval over structured and unstructured data.'
      ),
      t(
        '构建多智能体系统（本地库 + 企业知识库 + 网络资源），实现自动检索、推理分析与结构化报告生成闭环。',
        'Built a multi-agent system over local DB, enterprise KB, and web resources for end-to-end retrieval, reasoning, and structured reporting.'
      ),
      t(
        '完成医疗大模型 CPT/SFT/RLHF 全流程优化，结合 PEFT + Transformers + verl（DRPO）并通过 C-Eval、MMLU 评测，最终基于 VLLM 部署上线。',
        'Optimized medical LLM pipeline (CPT/SFT/RLHF) with PEFT, Transformers, and DRPO alignment, evaluated by C-Eval/MMLU, then deployed on VLLM.'
      ),
      t(
        '微调 BERT 轻量模型实现高频意图识别（95%+），推理速度达到 LLM 的 1/10，并落地轻重模型分层路由机制。',
        'Fine-tuned lightweight BERT for 95%+ intent accuracy with 10x faster inference than LLM and productionized a hybrid routing strategy.'
      ),
    ],
    outcomes: [
      t(
        '完成企业级智能数据与 AI 平台建设，实现数据、模型、知识能力统一整合与标准化输出，支持多业务部门快速接入。',
        'Delivered an enterprise AI foundation that standardized data/model/knowledge capabilities and enabled fast cross-team onboarding.'
      ),
      t(
        '报告生成效率提升近 10 倍（半月 → 30 分钟），显著降低人工成本。',
        'Improved report generation efficiency by nearly 10x (half month to 30 minutes), cutting manual effort.'
      ),
      t(
        '沉淀统一模型服务、RAG 与多智能体框架，形成可持续扩展的长期基础设施。',
        'Standardized reusable model serving, RAG, and multi-agent framework as long-term scalable infrastructure.'
      ),
    ],
    tags: ['Platform', 'Multi-Agent', 'PEFT', 'DRPO', 'VLLM', 'BERT'],
    link: 'https://github.com/likebeans',
  },
  {
    title: '企业级 RAG 检索与知识服务平台',
    role: t('AI 应用开发工程师', 'AI Application Developer'),
    period: '2025.09 – 至今',
    description: t(
      '建设企业级统一检索与知识服务平台，作为公司内部 AI 应用底层基础设施，为各类智能系统提供标准化 RAG 能力与权限安全控制。',
      'Built an enterprise retrieval and knowledge platform as shared infrastructure for internal AI applications, with standardized RAG and permission controls.'
    ),
    achievements: [
      t(
        '设计并落地多租户检索架构，实现租户隔离、配额管理与精细化权限控制，构建“操作权限 + 知识库范围 + 文档 ACL”三层权限模型。',
        'Implemented multi-tenant retrieval with isolation, quota controls, and a three-layer permission model: operation, knowledge scope, and document ACL.'
      ),
      t(
        '在检索阶段引入 Security Trimming，确保语义检索场景下数据安全与合规访问。',
        'Introduced security trimming in retrieval stage to enforce compliant and secure semantic access.'
      ),
      t(
        '统一封装 OpenAI 兼容接口，支持 Embeddings 与 Chat Completions，配套标准化知识入库处理流程。',
        'Built OpenAI-compatible API layer for embeddings/chat and standardized knowledge ingestion workflows.'
      ),
      t(
        '支持 Dense、BM25、Hybrid 等检索模式与增强策略，并完善可观测与审计机制保障生产稳定性。',
        'Supported Dense/BM25/Hybrid retrieval plus enhancement strategies, with observability and auditing for production reliability.'
      ),
    ],
    outcomes: [
      t(
        '形成公司统一知识检索与 RAG 服务底座，支撑多个 AI 应用稳定运行并实现跨系统复用。',
        'Established a unified company-wide RAG service foundation reused across multiple AI systems.'
      ),
      t(
        '建立企业级语义检索安全机制，解决大模型接入场景下的数据权限隔离问题。',
        'Solved enterprise data isolation risks in LLM scenarios through production-grade semantic retrieval security.'
      ),
      t(
        '显著降低各业务线重复建设成本，推动 AI 能力从单点应用升级为可规模化复用的基础设施。',
        'Reduced duplicated build cost and upgraded AI capabilities from isolated use-cases to scalable infrastructure.'
      ),
    ],
    tags: ['RAG', 'BM25', 'Hybrid', 'ACL', 'Security', 'OpenAI API'],
    link: 'https://github.com/likebeans',
  },
  {
    title: '企业 OA 系统智能化改造',
    role: t('AI 算法工程师', 'AI Algorithm Engineer'),
    period: '2025.05 – 2025.08',
    description: t(
      '参与推动企业内部 OA 系统智能化升级，为 2,000+ 员工构建统一智能办公能力层，通过自然语言重构请假、外勤、会议室预定等高频流程。',
      'Led OA intelligence upgrade for 2,000+ employees, rebuilding high-frequency workflows like leave, field work, and meeting booking with natural language interaction.'
    ),
    achievements: [
      t(
        '基于 LangGraph + FastAPI + FastMCP 构建 OA 智能体与 MCP 服务，打通待办、排班等工具链并支持本地/网络检索与深度思考。',
        'Built OA agents and MCP services with LangGraph, FastAPI, and FastMCP, integrating workflow tools and local/web retrieval.'
      ),
      t(
        '构建自然语言填单系统，实现意图识别与字段自动映射，自动触发流程。',
        'Implemented natural-language form filling with intent recognition, field mapping, and automatic process triggering.'
      ),
      t(
        '搭建标准化知识库链路（采集、预处理、分块、嵌入、检索），并基于 MinerU 完成版面分析、OCR、公式识别等端到端解析。',
        'Built a full knowledge pipeline and used MinerU for end-to-end parsing including layout analysis, OCR, and formula recognition.'
      ),
      t(
        '结合 RAG-Fusion、HyDE 优化检索效果，显著提升问答召回率与准确率。',
        'Improved retrieval quality with RAG-Fusion and HyDE, significantly boosting answer recall and accuracy.'
      ),
    ],
    outcomes: [
      t(
        '表单处理时间由 2–3 分钟缩短至约 10 秒，大幅提升员工日常 OA 操作效率。',
        'Reduced form processing time from 2–3 minutes to around 10 seconds, sharply improving daily OA efficiency.'
      ),
      t(
        '构建的知识库成为公司内部信息服务与文化传递核心模块。',
        'Delivered a knowledge base that became a core internal information and culture distribution module.'
      ),
      t(
        '实现传统业务流程与大模型能力深度融合，形成可复制的智能办公落地方案。',
        'Deeply integrated traditional OA workflows with LLM capabilities into a reusable intelligent-office blueprint.'
      ),
    ],
    tags: ['LangGraph', 'FastAPI', 'FastMCP', 'MinerU', 'RAG-Fusion', 'HyDE'],
    link: 'https://github.com/likebeans',
  },
  {
    title: 'AI 浏览器',
    role: t('AI 算法工程师', 'AI Algorithm Engineer'),
    period: '2025.03 – 2025.05',
    description: t(
      '负责浏览器全部 AI 模块研发，覆盖主界面 AI 搜索、智能问数、模型微调与部署，项目服务高校近万名师生并提供十余项 AI 功能。',
      'Owned all AI modules in an AI browser, covering AI search, intelligent Q&A, model fine-tuning and deployment for nearly 10,000 campus users.'
    ),
    achievements: [
      t(
        '设计并实现 AI 搜索与智能问数系统，提升师生信息获取效率与交互体验。',
        'Designed and implemented AI search and intelligent Q&A to improve user efficiency and interaction quality.'
      ),
      t(
        '主导模型选型与微调部署：选用 Qwen2.5，基于校内新闻语料完成清洗与预处理，采用 LoRA + DeepSpeed 高效分布式微调。',
        'Led model selection and fine-tuning with Qwen2.5, campus-news corpus processing, and LoRA + DeepSpeed distributed training.'
      ),
      t(
        '基于 VLLM 完成推理优化与私有化部署，保证服务稳定可用。',
        'Optimized inference and private deployment via VLLM for stable production service.'
      ),
      t(
        '负责 benchmark、并发压测与 RAG 评估，监控 latency、throughput、TTFT，使用 Locust + RAGas + LLM-as-a-Judge 持续优化效果。',
        'Owned benchmark, stress testing, and RAG evaluation with latency/throughput/TTFT metrics using Locust, RAGas, and LLM-as-a-Judge.'
      ),
    ],
    outcomes: [
      t(
        '支撑高校近万名师生使用，落地十余项 AI 功能（智能体 + 工作流）。',
        'Served nearly 10,000 students and teachers with 10+ AI features (agents + workflows).'
      ),
      t(
        '沉淀从模型选型、训练、部署到评估的全链路工程化能力。',
        'Built an end-to-end engineering workflow from model selection and training to deployment and evaluation.'
      ),
      t(
        '建立可量化性能评估体系，为后续模型迭代与容量规划提供依据。',
        'Established measurable performance evaluation for future model iteration and capacity planning.'
      ),
    ],
    tags: ['Qwen2.5', 'LoRA', 'DeepSpeed', 'VLLM', 'Locust', 'RAGas'],
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
                <div className="project-meta-row">
                  <span className="project-role">{project.role}</span>
                  <span className="project-period">{project.period}</span>
                </div>
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
              <h4 className="takeaway-title">{t('项目成效', 'Project Impact')}</h4>
              <ul className="takeaway-list">
                {project.outcomes.map((item, idx) => (
                  <li key={`${project.title}-outcome-${idx}`}>{item}</li>
                ))}
              </ul>
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
