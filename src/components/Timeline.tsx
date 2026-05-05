import React, { useEffect, useRef, useState } from 'react';
import styles from './Timeline.module.css';
import { Reveal } from './Reveal';

export interface Step {
  n: string;
  title: string;
  desc: string;
}

interface TimelineProps {
  steps: Step[];
  /** When true, renders without the outer section wrapper, background, and heading */
  inline?: boolean;
}

const FAKE_CODE = `import React from 'react';\nimport { Canvas } from '@react-three/fiber';\n\nconst App = () => {\n  return (\n    <Canvas>\n      <ambientLight intensity={0.5} />\n      <directionalLight position={[10, 10, 5]} />\n      <mesh>\n        <boxGeometry args={[1, 1, 1]} />\n        <meshStandardMaterial color="hotpink" />\n      </mesh>\n    </Canvas>\n  );\n};\n\nexport default App;\n\nfunction calculateTrajectory(v0, theta, g=9.81) {\n  const rad = theta * (Math.PI / 180);\n  const tMax = (2 * v0 * Math.sin(rad)) / g;\n  const xMax = (v0 * v0 * Math.sin(2 * rad)) / g;\n  return { tMax, xMax };\n}\n\nclass QuantumState {\n  constructor(probabilityAmplitude) {\n    this.amplitude = probabilityAmplitude;\n  }\n  collapse() {\n    return Math.random() < Math.pow(Math.abs(this.amplitude), 2);\n  }\n}\n`;

const REPEATED_CODE = Array(10).fill(FAKE_CODE).join('\n');

export const Timeline: React.FC<TimelineProps> = ({ steps, inline = false }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      const { scrollLeft, clientWidth } = scrollRef.current;
      
      // Calculate the center of the viewport relative to the scroll container
      const scrollCenter = scrollLeft + clientWidth / 2;
      
      let closestIndex = 0;
      let minDistance = Infinity;

      const children = Array.from(scrollRef.current.children) as HTMLElement[];
      const stepElements = children.filter(child => child.classList.contains(styles.step));

      stepElements.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(scrollCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
      // Initial calculation with a slight delay to ensure layout is done
      setTimeout(handleScroll, 100);
      window.addEventListener('resize', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleScroll);
    };
  }, [activeIndex]);

  const handleCardClick = (idx: number) => {
    if (!scrollRef.current) return;
    const children = Array.from(scrollRef.current.children) as HTMLElement[];
    const stepElements = children.filter(child => child.classList.contains(styles.step));
    const target = stepElements[idx];
    if (target) {
      const scrollPos = target.offsetLeft - scrollRef.current.clientWidth / 2 + target.offsetWidth / 2;
      scrollRef.current.scrollTo({
        left: scrollPos,
        behavior: 'smooth'
      });
    }
  };

  const scrollContent = (
    <div className={styles.container}>
      <div className={styles.scrollArea} ref={scrollRef}>
        {/* The continuous line spanning all elements */}
        <div className={styles.track}></div>

        {steps.map((step, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={step.n}
              className={`${styles.step} ${isActive ? styles.active : ''}`}
              onClick={() => handleCardClick(idx)}
            >
              <div className={styles.indicator}>
                <div className={styles.stepNumber}>{step.n}</div>
                <div className={styles.diamondIcon}></div>
              </div>
              
              <div className={styles.node}></div>

              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{step.title}</h3>
                </div>
                <div className={styles.cardBody}>
                  <p className={styles.cardDesc}>{step.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  if (inline) {
    return <div className="mt-12">{scrollContent}</div>;
  }

  return (
    <section className={styles.timelineSection}>
      {/* Background elements */}
      <div className={styles.faintCodeBg} aria-hidden="true">
        {REPEATED_CODE}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8 mb-12 md:mb-16">
        <Reveal>
          <div className="text-center">
             <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary mb-4">
              How it works
            </p>
            <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto uppercase">
              The hackathon model
            </h2>
          </div>
        </Reveal>
      </div>

      {scrollContent}
    </section>
  );
};
