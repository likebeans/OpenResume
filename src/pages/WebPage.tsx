import { Layout } from 'antd';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutCompact from '../components/AboutCompact/AboutCompact';
import ExperienceCompact from '../components/ExperienceCompact/ExperienceCompact';
import ProjectsCompact from '../components/ProjectsCompact/ProjectsCompact';
import ContactCompact from '../components/ContactCompact/ContactCompact';
import CustomCursor from '../components/CustomCursor';
import SmoothScroll from '../components/SmoothScroll';
import { FullpageLayout } from '../components/FullpageLayout';

const { Content } = Layout;

const WebPage = () => {
  return (
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
  );
};

export default WebPage;
