import zhCN from 'antd/locale/zh_CN';

// 极简高级感主题配置
const themeConfig = {
  token: {
    // 主色调 - 极简黑白灰 + 点缀色
    colorPrimary: '#1a1a1a',
    colorLink: '#1a1a1a',
    colorLinkHover: '#595959',
    
    // 背景色
    colorBgContainer: '#ffffff',
    colorBgLayout: '#fafafa',
    
    // 文字颜色
    colorText: '#1a1a1a',
    colorTextSecondary: '#8c8c8c',
    colorTextTertiary: '#bfbfbf',
    
    // 边框
    colorBorder: '#f0f0f0',
    colorBorderSecondary: '#f5f5f5',
    
    // 圆角 - 极简风格用小圆角
    borderRadius: 4,
    borderRadiusLG: 8,
    borderRadiusSM: 2,
    
    // 字体
    fontFamily: '"Inter", "Noto Sans SC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: 16,
    fontSizeHeading1: 56,
    fontSizeHeading2: 40,
    fontSizeHeading3: 28,
    fontSizeHeading4: 20,
    
    // 间距
    padding: 24,
    margin: 24,
    
    // 动画
    motionDurationFast: '0.1s',
    motionDurationMid: '0.2s',
    motionDurationSlow: '0.3s',
  },
  components: {
    Button: {
      primaryColor: '#ffffff',
      colorPrimary: '#1a1a1a',
      algorithm: true,
    },
    Typography: {
      titleMarginBottom: '0.5em',
      titleMarginTop: '0',
    },
    Card: {
      paddingLG: 32,
    },
    Timeline: {
      dotBg: '#1a1a1a',
    },
  },
};

export { themeConfig, zhCN };
