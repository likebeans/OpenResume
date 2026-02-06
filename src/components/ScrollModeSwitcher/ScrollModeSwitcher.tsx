import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useScrollMode, type ScrollMode } from '../../context/ScrollModeContext';
import './ScrollModeSwitcher.css';

const modes: { key: ScrollMode; label: string; desc: string }[] = [
  { key: 'default', label: '默认', desc: '当前布局' },
  { key: 'snap', label: '轻度', desc: 'Scroll Snap 吸附' },
  { key: 'fullpage', label: '中度', desc: '全屏 Section' },
  { key: 'cinematic', label: '深度', desc: '暗色电影感' },
];

const ScrollModeSwitcher = () => {
  const { mode, setMode } = useScrollMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="scroll-mode-switcher">
      <motion.button
        className="switcher-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="toggle-icon">🎨</span>
        <span className="toggle-label">切换风格</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="switcher-panel"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="panel-header">
              <h4>选择滚动风格</h4>
              <p>预览不同的交互体验</p>
            </div>
            <div className="mode-options">
              {modes.map((m) => (
                <motion.button
                  key={m.key}
                  className={`mode-option ${mode === m.key ? 'active' : ''}`}
                  onClick={() => {
                    setMode(m.key);
                    setIsOpen(false);
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mode-label">{m.label}</span>
                  <span className="mode-desc">{m.desc}</span>
                  {mode === m.key && (
                    <motion.span
                      className="mode-check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollModeSwitcher;
