import { Typography, Tag } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import './H5Projects.css';

const { Title } = Typography;

interface Project {
  title: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  link: string;
}

const H5Projects = () => {
  const { t } = useLang();

  const projects: Project[] = [
    {
      title: '企业级大模型与智能应用平台建设',
      role: t('AI 应用开发工程师', 'AI Application Developer'),
      period: '2025.08 – 至今',
      description: t(
        '构建企业级智能数据与 AI 一体化平台，打通数据管理、CRUD、模型服务、多智能体与知识检索。',
        'Built an integrated enterprise AI platform across data management, CRUD, model serving, multi-agent orchestration, and knowledge retrieval.'
      ),
      highlights: [
        t('完成数据层/模型层/应用层分层架构设计，统一结构化与非结构化数据调用。', 'Delivered layered architecture to unify structured and unstructured data access.'),
        t('落地多智能体闭环，报告生成效率从半月提升到约 30 分钟（近 10 倍）。', 'Implemented multi-agent loop; reduced report generation from half month to about 30 minutes (~10x).'),
        t('完成 CPT/SFT/RLHF + DRPO 对齐，并基于 VLLM 上线；BERT 意图识别准确率 95%+。', 'Completed CPT/SFT/RLHF + DRPO alignment and deployed on VLLM; BERT intent accuracy reached 95%+.'),
      ],
      tags: ['Platform', 'Multi-Agent', 'PEFT', 'VLLM'],
      link: 'https://github.com/likebeans',
    },
    {
      title: '企业级 RAG 检索与知识服务平台',
      role: t('AI 应用开发工程师', 'AI Application Developer'),
      period: '2025.09 – 至今',
      description: t(
        '建设公司统一 RAG 底座，为多业务系统提供标准化检索能力、权限控制与知识复用。',
        'Built a unified company-wide RAG foundation with standardized retrieval, permission control, and cross-system knowledge reuse.'
      ),
      highlights: [
        t('实现多租户检索与三层权限模型（操作权限 + 知识库范围 + 文档 ACL），引入 Security Trimming。', 'Implemented multi-tenant retrieval with 3-layer permissions and security trimming.'),
        t('封装 OpenAI 兼容接口，支持 Embeddings/Chat Completions，沉淀标准化入库流程。', 'Built OpenAI-compatible APIs and standardized knowledge ingestion flow.'),
        t('支持 Dense/BM25/Hybrid 检索并完善可观测审计，支撑多个 AI 应用稳定运行。', 'Enabled Dense/BM25/Hybrid retrieval with observability and auditing for stable multi-app usage.'),
      ],
      tags: ['RAG', 'BM25', 'Hybrid', 'Security'],
      link: 'https://github.com/likebeans',
    },
    {
      title: '企业 OA 系统智能化改造',
      role: t('AI 算法工程师', 'AI Algorithm Engineer'),
      period: '2025.05 – 2025.08',
      description: t(
        '为 2,000+ 员工重构 OA 高频流程，基于自然语言实现请假、外勤、会议室预定等自动填单与触发。',
        'Rebuilt high-frequency OA workflows for 2,000+ employees with natural-language form filling and process triggering.'
      ),
      highlights: [
        t('基于 LangGraph + FastAPI + FastMCP 构建 OA 智能体与 MCP 服务，打通待办/排班工具链。', 'Built OA agents and MCP services with LangGraph/FastAPI/FastMCP and integrated workflow tools.'),
        t('搭建知识库全链路并接入 MinerU 端到端文档解析（版面、OCR、公式识别）。', 'Built full knowledge pipeline with MinerU end-to-end parsing (layout, OCR, formulas).'),
        t('结合 RAG-Fusion、HyDE 优化检索，表单处理时间由 2–3 分钟降至约 10 秒。', 'Optimized retrieval with RAG-Fusion/HyDE and reduced form processing from 2–3 minutes to ~10 seconds.'),
      ],
      tags: ['LangGraph', 'FastAPI', 'FastMCP', 'MinerU'],
      link: 'https://github.com/likebeans',
    },
    {
      title: 'AI 浏览器',
      role: t('AI 算法工程师', 'AI Algorithm Engineer'),
      period: '2025.03 – 2025.05',
      description: t(
        '负责浏览器全部 AI 模块研发，服务高校近万名师生，覆盖 AI 搜索、智能问数、模型微调与部署。',
        'Owned all AI modules in an AI browser for nearly 10,000 campus users, including AI search, Q&A, fine-tuning, and deployment.'
      ),
      highlights: [
        t('主导 Qwen2.5 选型与语料处理，采用 LoRA + DeepSpeed 高效分布式微调。', 'Led Qwen2.5 model selection and data processing with LoRA + DeepSpeed distributed fine-tuning.'),
        t('基于 VLLM 进行推理优化与私有化部署，支撑十余项 AI 功能（智能体 + 工作流）。', 'Optimized inference and private deployment on VLLM, supporting 10+ AI features.'),
        t('负责 benchmark、并发压测与 RAG 评估，监控 latency/throughput/TTFT 并持续优化。', 'Owned benchmark, stress tests, and RAG evaluation with latency/throughput/TTFT monitoring.'),
      ],
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
              <p className="h5-project-meta">
                {project.role} · {project.period}
              </p>
              <p className="h5-project-desc">{project.description}</p>
              <ul className="h5-project-highlights">
                {project.highlights.map((item, idx) => (
                  <li key={`${project.title}-highlight-${idx}`}>{item}</li>
                ))}
              </ul>
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
