import { ConfigProvider, Layout } from 'antd';
import { MotionConfig } from 'framer-motion';
import { themeConfig, zhCN } from './theme/themeConfig';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import SmoothScroll from './components/SmoothScroll';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <ConfigProvider theme={themeConfig} locale={zhCN}>
      <MotionConfig reducedMotion="user">
        <Layout className="app-layout">
          <SmoothScroll />
          <CustomCursor />
          <Header />
          <Content>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </Content>
        </Layout>
      </MotionConfig>
    </ConfigProvider>
  );
}

export default App;
