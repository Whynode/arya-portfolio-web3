import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Database Tautan Sosial Media Anda
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/aryasuhendra',
      svg: <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/aryasuhendra',
      svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/aryasuhendra',
      svg: <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/6281234567890',
      svg: <path d="M12.031 0C5.394 0 .012 5.385.01 12.023c0 2.122.553 4.192 1.603 6.014L.22 23.111l5.222-1.369c1.761 1.05 3.766 1.604 5.811 1.604h.005c6.634 0 12.016-5.386 12.018-12.025 0-3.216-1.252-6.239-3.526-8.514C17.476 1.254 14.453 0 12.031 0zm-1.045 17.502h-.003c-1.745-.001-3.456-.47-4.945-1.355l-.355-.21-3.674.964.982-3.582-.23-.367C1.787 11.458 1.28 9.73 1.28 7.936c0-5.592 4.551-10.141 10.147-10.141 2.709 0 5.257 1.057 7.173 2.975 1.915 1.917 2.97 4.466 2.97 7.178-.002 5.594-4.553 10.144-10.146 10.144zm5.568-7.607c-.305-.153-1.805-.891-2.084-.993-.28-.102-.483-.153-.687.153-.204.305-.788.993-.966 1.197-.178.204-.356.23-.661.077-1.743-.873-3.15-2.01-4.004-3.504-.216-.38-.026-.575.123-.728.134-.138.305-.356.458-.534.153-.178.204-.305.305-.51.102-.204.051-.382-.025-.535-.077-.153-.687-1.657-.942-2.268-.248-.593-.5-.512-.687-.521-.178-.009-.382-.009-.585-.009-.204 0-.534.076-.814.382-.28.305-1.069 1.044-1.069 2.545s1.094 2.953 1.247 3.157c.153.204 2.152 3.284 5.212 4.606 2.056.888 2.872.96 3.967.807 1.217-.17 2.607-1.066 2.973-2.094.366-1.028.366-1.91.256-2.094-.11-.184-.416-.29-.721-.443z" />
    }
  ];

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden border-t border-glass-border bg-crypto-dark/80 backdrop-blur-md">
      {/* Efek Cahaya Latar Bawah */}
      <div className="absolute bottom-[-50%] left-1/2 transform -translate-x-1/2 w-full max-w-2xl h-64 bg-crypto-purple opacity-10 blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Logo & Slogan */}
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold text-white tracking-wider cursor-pointer block mb-2">
              ARYA<span className="text-crypto-purple drop-shadow-neon-purple">.DEV</span>
            </a>
            <p className="text-sm text-crypto-silver">
              Merancang ekosistem digital presisi untuk Web3 & Masa Depan.
            </p>
          </div>

          {/* Ikon Sosial Media (Neon Hover) */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-crypto-silver hover:text-crypto-purple transition-all duration-300 transform hover:scale-125 hover:drop-shadow-neon-purple group"
                aria-label={social.name}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  {social.svg}
                </svg>
              </a>
            ))}
          </div>

        </div>

        {/* Hak Cipta */}
        <div className="text-center pt-8 border-t border-glass-border/50 text-xs text-gray-500 font-medium tracking-wide">
          &copy; {currentYear} Arya Suhendra. Seluruh Hak Cipta Dilindungi. <br className="md:hidden" />
          <span className="hidden md:inline"> | </span> Direkayasa dengan presisi di SMK TKJ.
        </div>
      </div>
    </footer>
  );
}