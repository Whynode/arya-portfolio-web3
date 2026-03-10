import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const techCategories = [
  {
    title: "Bahasa & Framework",
    icon: <img src="https://cdn.simpleicons.org/codeigniter/a78bfa" className="w-5 h-5" alt="Code" />,
    skills: [
      { name: "TypeScript / JavaScript", level: 90, icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Python (Machine Learning)", level: 85, icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "PHP (Backend Logic)", level: 80, icon: "https://cdn.simpleicons.org/php/777BB4" },
      { name: "React / Next.js", level: 88, icon: "https://cdn.simpleicons.org/react/61DAFB" }
    ]
  },
  {
    title: "Arsitektur AI & Tools",
    icon: <img src="https://cdn.simpleicons.org/openai/a78bfa" className="w-5 h-5" alt="AI" />,
    skills: [
      { name: "AI Prompt Engineering", level: 95, icon: "https://cdn.simpleicons.org/anthropic/a78bfa" },
      { name: "TensorFlow / Scikit-Learn", level: 75, icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
      { name: "Figma (UI/UX Design)", level: 85, icon: "https://cdn.simpleicons.org/figma/F24E1E" }
    ]
  },
  {
    title: "Sistem Eksekusi (DevOps)",
    icon: <img src="https://cdn.simpleicons.org/rocket/a78bfa" className="w-5 h-5" alt="DevOps" />,
    skills: [
      { name: "Git & GitHub Workflow", level: 92, icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "Vercel Deployment", level: 88, icon: "https://cdn.simpleicons.org/vercel/ffffff" },
      { name: "Database (PostgreSQL)", level: 80, icon: "https://cdn.simpleicons.org/postgresql/4169E1" }
    ]
  }
];

// 3D Tilt card component
function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      rotateX: (0.5 - y) * 8,
      rotateY: (x - 0.5) * 8,
    });
  };

  const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={tilt}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="techstack" className="py-20 lg:py-28 relative z-10">
      {/* Section glow */}
      <div className="glow-blob glow-blob-purple w-[400px] h-[400px] absolute top-[20%] right-[-10%] opacity-[0.08]"></div>

      <div className="max-w-7xl mx-auto px-6" ref={containerRef}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/15 text-accent text-[10px] font-semibold tracking-widest mb-4">
            TECH STACK
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Matriks <span className="text-gradient">Keahlian</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm">
            Infrastruktur teknologi yang saya kuasai untuk membangun ekosistem digital.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {techCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.2, duration: 0.6, ease: 'easeOut' }}
            >
              <TiltCard className="glass-card-interactive p-8 rounded-2xl h-full cursor-default group">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-8 pb-5 border-b border-glass-border">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/20 flex items-center justify-center text-base shadow-[0_4px_12px_rgba(167,139,250,0.1),inset_0_1px_0_rgba(255,255,255,0.06)]" style={{ transform: 'perspective(200px) rotateX(5deg)' }}>
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-bold text-text-primary tracking-wide uppercase">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-5">
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: idx * 0.2 + sIdx * 0.1 + 0.3, duration: 0.4 }}
                      className="group/skill"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm w-6 h-6 rounded-md bg-glass-bg border border-glass-border flex items-center justify-center shadow-[0_2px_6px_rgba(0,0,0,0.3)] overflow-hidden" style={{ transform: 'perspective(120px) rotateY(-2deg)' }}>
                          <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain" />
                        </span>
                        <span className="text-sm text-text-muted group-hover/skill:text-text-primary transition-colors duration-300 flex-1">{skill.name}</span>
                        <span className="text-xs text-accent font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-bg-primary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: idx * 0.2 + sIdx * 0.15 + 0.5, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-blue relative"
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(167,139,250,0.6)]"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}