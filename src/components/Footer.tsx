import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-rinka-black text-rinka-white/40 py-12 border-t border-rinka-white/5 font-serif">
            <div className="container mx-auto px-6 flex flex-col items-center justify-center space-y-6">

                <div className="text-2xl font-bold tracking-[0.5em] text-rinka-white opacity-80">
                    凜香
                </div>

                <div className="flex space-x-8">
                    <a href="#" aria-label="Instagram" className="hover:text-rinka-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rinka-red rounded-sm"><Instagram size={20} /></a>
                    <a href="#" aria-label="Twitter" className="hover:text-rinka-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rinka-red rounded-sm"><Twitter size={20} /></a>
                    <a href="#" aria-label="Facebook" className="hover:text-rinka-red transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rinka-red rounded-sm"><Facebook size={20} /></a>
                </div>

                <div className="text-xs tracking-widest mt-8">
                    &copy; 2026 RINKA RAMEN. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
