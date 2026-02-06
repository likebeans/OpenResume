import { ConfigProvider } from 'antd';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { MotionConfig } from 'framer-motion';
import { themeConfig, zhCN } from './theme/themeConfig';
import WebPage from './pages/WebPage';
import H5Page from './pages/H5Page';
import './App.css';
import './styles/scroll-modes.css';

function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <ConfigProvider theme={themeConfig} locale={zhCN}>
          <MotionConfig reducedMotion="user">
            <Routes>
              <Route path="/" element={<WebPage />} />
              <Route path="/h5" element={<H5Page />} />
            </Routes>
          </MotionConfig>
        </ConfigProvider>
      </LanguageProvider>
    </HashRouter>
  );
}

export default App;
