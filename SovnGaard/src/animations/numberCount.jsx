import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const NumberCount = ({ from, to, duration }) => {
    const [count, setCount] = useState(from);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const start = from;
            const end = to;
            const range = end - start;
            let current = start;
            const increment = range / (duration / 1000 * 60); // frames per second

            const updateCount = () => {
                current += increment;
                if (current >= end) {
                    setCount(end);
                    cancelAnimationFrame(animationId);
                } else {
                    setCount(Math.round(current));
                    animationId = requestAnimationFrame(updateCount);
                }
            };

            let animationId = requestAnimationFrame(updateCount);

            return () => cancelAnimationFrame(animationId); // Cleanup on unmount
        }
    }, [isVisible, from, to, duration]);

    return (
        <motion.span ref={ref} transition={{ duration }}>
            {count}
        </motion.span>
    );
};

export default NumberCount;
