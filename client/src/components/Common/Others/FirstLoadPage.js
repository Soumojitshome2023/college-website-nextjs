"use client"
// ======================== Imports ========================
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import styles from './FirstLoadPage.module.css';

export default function FirstLoadPage({ children }) {
  const [FirstLoad, setFirstLoad] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 100);

    const timer = setTimeout(() => {
      setFirstLoad(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      {FirstLoad &&
        <div className={`${styles.fadeContainer} ${show ? styles.fadeOut : ''}`}>

          <h1 className={`m-4 ${styles.btnshine} text-2xl font-s font-extrabold md:text-5xl lg:text-6xl`}>WELCOME TO</h1>
          <h1 className={`m-4 ${styles.btnshine} text-2xl font-s font-extrabold md:text-5xl lg:text-6xl`}>ACADEMY OF TECHNOLOGY</h1>

        </div>
      }
      <>
        <div className=" min-h-screen overflow-x-hidden">
          {children}
        </div>
        <Footer />
      </>

    </>
  )
}

// ===============================================================