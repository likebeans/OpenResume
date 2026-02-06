import { ConfigProvider, Layout } from 'antd';
import { LanguageProvider } from './context/LanguageContext';
import { MotionConfig } from 'framer-motion';
import { themeConfig, zhCN } from './theme/themeConfig';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutCompact from './components/AboutCompact/AboutCompact';
import ExperienceCompact from './components/ExperienceCompact/ExperienceCompact';
import ProjectsCompact from './components/ProjectsCompact/ProjectsCompact';
import ContactCompact from './components/ContactCompact/ContactCompact';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import { FullpageLayout } from './components/FullpageLayout';
import './App.css';
import './styles/scroll-modes.css';

const { Content } = Layout;

function App() {
  return (
    <LanguageProvider>
    <ConfigProvider theme={themeConfig} locale={zhCN}>
      <MotionConfig reducedMotion="user">
        <Layout className="app-layout">
          <SmoothScroll />
          <CustomCursor />
          <Header />
          <Content>
            <FullpageLayout>
              <Hero />
              <AboutCompact />
              <ExperienceCompact />
              <ProjectsCompact />
              <ContactCompact />
            </FullpageLayout>
          </Content>
        </Layout>
      </MotionConfig>
    </ConfigProvider>
    </LanguageProvider>
  );
}

export default App;
