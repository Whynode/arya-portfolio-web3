import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export default function TechStack() {
  const techCategories: SkillCategory[] = [
    {
      title: "Bahasa & Framework",
      skills: [
        { name: "TypeScript / JavaScript", level: 90, color: "bg-blue-400" },
        { name: "Python (Machine Learning)", level: 85, color: "bg-yellow-400" },
        { name: "PHP (Backend Logic)", level: 80, color: "bg-indigo-400" },
        { name: "React / Next.js", level: 88, color: "bg-cyan-400" }
      ]
    },
    {
      title: "Arsitektur AI & Tools",
      skills: [
        { name: "AI Prompt Engineering", level: 95, color: "bg-crypto-purple" },
        { name: "TensorFlow / Scikit-Learn", level: 75, color: "bg-orange-500" },
        { name: "Figma (UI/UX Design)", level: 85, color: "bg-pink-500" }
      ]
    },
    {
      title: "Sistem Eksekusi (DevOps)",
      skills: [
        { name: "Git & GitHub Workflow", level: 92, color: "bg-gray-200" },
        { name: "Vercel Deployment", level: 88, color: "bg-black" },
        { name: "Database (PostgreSQL)", level: 80, color: "bg-blue-600" }
      ]
    }
  ];

  return (
    <section id="techstack" className="py-24 relative z-10 bg-crypto-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Matriks <span className="text-transparent bg-clip-text bg-gradient-to-r from-crypto-purple to-blue-400 drop-shadow-neon-purple">Keahlian</span>
          </h2>
          <p className="text-crypto-silver max-w-2xl mx-auto">Infrastruktur teknologi yang saya kuasai untuk membangun ekosistem digital dari tahap riset data hingga peluncuran produksi.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-3xl bg-glass-bg border border-glass-border backdrop-blur-crypto hover:shadow-neon-purple transition-all duration-500 group"
            >
              <h3 className="text-xl font-bold text-white mb-8 border-b border-glass-border pb-4">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="relative">
                    <div className="flex justify-between text-sm mb-2 font-medium">
                      <span className="text-crypto-silver group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-crypto-purple">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-crypto-dark rounded-full overflow-hidden border border-glass-border">
                      <motion.div 
                        initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }}
                        className={`h-full ${skill.color} shadow-[0_0_10px_currentColor] rounded-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}