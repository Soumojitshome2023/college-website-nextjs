// components/AnimatedElement.js
"use client"
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './AnimatedElement.module.css'; // Import your CSS module

const AnimatedElement = ({ children, className = "" }) => {
    const [isVisible, setIsVisible] = React.useState(false);
    const { ref, inView } = useInView({
        threshold: 0.2, // Trigger when 20% of the element is in the viewport
    });

    // Reset isVisible state when inView changes back to false
    React.useEffect(() => {
        if (!inView) {
            setIsVisible(false);
        }
    }, [inView]);

    // Trigger the animation when the element is in view
    React.useEffect(() => {
        if (inView && !isVisible) {
            setIsVisible(true);
        }
    }, [inView, isVisible]);

    return (
        <div ref={ref} className={`${styles.animatedElement} ${className} ${isVisible ? styles.visible : ''}`}>
            {children}
        </div>
    );
};

export default AnimatedElement;
