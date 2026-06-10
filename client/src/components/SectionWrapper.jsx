import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SectionWrapper({ id, label, title, subtitle, children, alt = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id={id}
      className={`section ${alt ? 'section--alt' : ''}`}
      ref={ref}
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">{label}</p>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
