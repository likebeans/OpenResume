import { Typography } from 'antd';
import { motion } from 'framer-motion';
import { GithubOutlined, MailOutlined, LinkOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { FullpageSection } from '../FullpageLayout';
import { useLang } from '../../context/LanguageContext';
import './ContactCompact.css';

const { Title } = Typography;

const links = [
  {
    icon: <MailOutlined />,
    label: 'Email',
    value: 'yufeifandd@gmail.com',
    href: 'mailto:yufeifandd@gmail.com',
  },
  {
    icon: <GithubOutlined />,
    label: 'GitHub',
    value: '@likebeans',
    href: 'https://github.com/likebeans',
  },
  {
    icon: <LinkOutlined />,
    label: 'CSDN',
    value: '余非凡',
    href: 'https://blog.csdn.net/m0_63309778',
  },
];

const ContactCompact = () => {
  const { t } = useLang();

  return (
    <FullpageSection id="contact" className="contact-compact" dark>
      <div className="contact-compact-layout">
        {/* Header area */}
        <div className="contact-header">
          <div className="contact-badge">
            <span className="badge-dot"></span>
            Open to Work
          </div>
          <Title level={2} className="contact-title">
            Let's Build<br />
            Something <span className="text-gold">Amazing</span>
          </Title>
          <p className="contact-desc">
            {t('如果你对 AI 应用开发、大模型落地有想法，或者想聊聊技术与产品，欢迎联系我。', 'If you have ideas about AI application development, LLM implementation, or want to discuss tech and product, feel free to reach out.')}
          </p>
        </div>

        {/* Divider */}
        <div className="contact-divider"></div>

        {/* Links */}
        <div className="contact-links">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="contact-link"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              <span className="link-icon-wrap">{link.icon}</span>
              <div className="link-info">
                <span className="link-label">{link.label}</span>
                <span className="link-value">{link.value}</span>
              </div>
              <ArrowRightOutlined className="link-arrow" />
            </motion.a>
          ))}
        </div>
      </div>
    </FullpageSection>
  );
};

export default ContactCompact;
