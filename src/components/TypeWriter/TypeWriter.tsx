import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './TypeWriter.css';

interface TypeWriterProps {
    texts: string[];
    speed?: number;
    deleteSpeed?: number;
    pauseDuration?: number;
    className?: string;
}

const TypeWriter = ({
    texts,
    speed = 100,
    deleteSpeed = 50,
    pauseDuration = 2000,
    className = '',
}: TypeWriterProps) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const text = texts[currentTextIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // 打字
                if (currentText.length < text.length) {
                    setCurrentText(text.slice(0, currentText.length + 1));
                } else {
                    // 打字完成，暂停后开始删除
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // 删除
                if (currentText.length > 0) {
                    setCurrentText(text.slice(0, currentText.length - 1));
                } else {
                    // 删除完成，切换到下一个文本
                    setIsDeleting(false);
                    setCurrentTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deleteSpeed : speed);

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentTextIndex, texts, speed, deleteSpeed, pauseDuration]);

    return (
        <span className={`typewriter ${className}`}>
            <span className="typewriter-text">{currentText}</span>
            <motion.span
                className="typewriter-cursor"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
            >
                |
            </motion.span>
        </span>
    );
};

export default TypeWriter;
