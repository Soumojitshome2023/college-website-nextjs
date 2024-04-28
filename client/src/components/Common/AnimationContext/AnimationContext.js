"use client"
// ======================== Imports ========================
import { createContext, useEffect } from "react";

// ======================== Create Context ========================
const AnimationContext = createContext();

export default function useAnimation() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const boxes = document.querySelectorAll('.soumojitanibox');
                const triggerBottom = window.innerHeight / 5 * 3;

                boxes.forEach(box => {
                    const boxTop = box.getBoundingClientRect().top;

                    if (boxTop < triggerBottom) {
                        box.classList.add('show');
                    } else {
                        box.classList.remove('show');
                    }
                });
            };
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Call initially to check boxes on mount
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);
}


// ======================== Auth Provider ========================
export const AnimationProvider = ({ children }) => {
    const ani = useAnimation();
    return (
        <AnimationContext.Provider value={ani}>
            {children}
        </AnimationContext.Provider>
    );
};


// ========================================================================