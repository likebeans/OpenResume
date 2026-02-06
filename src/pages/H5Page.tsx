import { Layout } from 'antd';
import { motion } from 'framer-motion';
import { useLang } from '../context/LanguageContext';
import {
  H5Header,
  H5Hero,
  H5About,
  H5Experience,
  H5Projects,
  H5Contact,
} from '../components/H5';
import './H5Page.css';

const { Content } = Layout;

const H5Page = () => {
  const { lang } = useLang();

  return (
    <Layout className="h5-layout">
      <H5Header />
      <Content className="h5-content">
        <motion.div
          key={lang}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <H5Hero />
          <H5About />
          <H5Experience />
          <H5Projects />
          <H5Contact />
        </motion.div>
      </Content>
    </Layout>
  );
};

export default H5Page;
