import { Typography } from 'antd';
import { MailOutlined, GithubOutlined, LinkOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useLang } from '../../context/LanguageContext';
import './H5Contact.css';

const { Title } = Typography;

const H5Contact = () => {
  const { t } = useLang();

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
      value: t('余非凡', 'Feifan Yu'),
      href: 'https://blog.csdn.net/m0_63309778',
    },
  ];

  return (
    <section id="h5-contact" className="h5-section h5-contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Badge */}
        <div className="h5-contact-badge">
          <span className="h5-badge-dot"></span>
          Open to Work
        </div>

        <Title level={2} className="h5-contact-title">
          Let's Build<br />
          Something <span className="h5-text-gold">Amazing</span>
        </Title>

        <p className="h5-contact-desc">
          {t(
            '如果你对 AI 应用开发、大模型落地有想法，欢迎联系我。',
            'If you have ideas about AI development or LLM implementation, feel free to reach out.'
          )}
        </p>

        {/* Divider */}
        <div className="h5-contact-divider"></div>

        {/* Links */}
        <div className="h5-contact-links">
          {links.map((link, index) => (
            <motion.a
              key={link.label}
              className="h5-contact-link"
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="h5-link-icon">{link.icon}</span>
              <div className="h5-link-info">
                <span className="h5-link-label">{link.label}</span>
                <span className="h5-link-value">{link.value}</span>
              </div>
              <ArrowRightOutlined className="h5-link-arrow" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="h5-contact-footer">
          <p>© 2025 {t('余非凡', 'Feifan Yu')}. All rights reserved.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default H5Contact;
