import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="py-20 lg:py-28 relative z-10" id="contact">
      <div className="glow-blob glow-blob-purple w-[500px] h-[500px] absolute top-[20%] left-[-5%] opacity-[0.08]"></div>

      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/15 text-accent text-[10px] font-semibold tracking-widest mb-4">
            GET IN TOUCH
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Inisiasi <span className="text-gradient">Kolaborasi</span>
          </h2>
          <p className="text-text-muted max-w-xl mx-auto text-sm">
            Saya selalu terbuka untuk mendiskusikan peluang proyek baru.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
          
          {/* Left: Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-lg font-bold text-text-primary mb-5">Informasi Kontak</h3>
            
            {[
              { 
                label: 'Email', value: 'arya.suhendra@workspace.dev', color: 'text-accent',
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              },
              {
                label: 'Lokasi', value: 'Indonesia (Remote)', color: 'text-accent',
                icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></>
              },
              {
                label: 'Status', value: 'Tersedia untuk Kolaborasi', color: 'text-emerald-400',
                icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
                iconColor: 'text-emerald-400', bgColor: 'bg-emerald-400/10', borderColor: 'border-emerald-400/20'
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="glass-card-interactive p-5 rounded-2xl flex items-center gap-4 group cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl ${item.bgColor || 'bg-accent/10'} border ${item.borderColor || 'border-accent/20'} flex items-center justify-center ${item.iconColor || 'text-accent'} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">{item.icon}</svg>
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className={`${item.color} font-medium text-sm`}>{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form 
              className="glass-card p-7 md:p-8 rounded-2xl flex flex-col gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.elements['name'].value;
                const email = form.elements['email'].value;
                const subject = form.elements['subject'].value;
                const message = form.elements['message'].value;
                window.open(`mailto:arya.suhendra@workspace.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Dari: ${name} (${email})\n\n${message}`)}`, '_self');
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input name="name" type="text" required className="w-full bg-bg-primary/60 border border-glass-border rounded-xl px-4 py-3.5 text-text-primary text-sm outline-none transition-all duration-500 placeholder:text-text-dim focus:border-accent/40 focus:shadow-[0_0_20px_rgba(167,139,250,0.08)]" placeholder="Nama Anda" />
                <input name="email" type="email" required className="w-full bg-bg-primary/60 border border-glass-border rounded-xl px-4 py-3.5 text-text-primary text-sm outline-none transition-all duration-500 placeholder:text-text-dim focus:border-accent/40 focus:shadow-[0_0_20px_rgba(167,139,250,0.08)]" placeholder="Alamat Email" />
              </div>

              <input name="subject" type="text" required className="w-full bg-bg-primary/60 border border-glass-border rounded-xl px-4 py-3.5 text-text-primary text-sm outline-none transition-all duration-500 placeholder:text-text-dim focus:border-accent/40 focus:shadow-[0_0_20px_rgba(167,139,250,0.08)]" placeholder="Subjek" />

              <textarea name="message" rows={4} required className="w-full bg-bg-primary/60 border border-glass-border rounded-xl px-4 py-3.5 text-text-primary text-sm outline-none resize-none transition-all duration-500 placeholder:text-text-dim focus:border-accent/40 focus:shadow-[0_0_20px_rgba(167,139,250,0.08)]" placeholder="Pesan atau Deskripsi Proyek" />

              <motion.button 
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-accent text-bg-primary font-bold text-sm hover:shadow-glow-strong transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
                data-hover
              >
                Kirim Pesan
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}