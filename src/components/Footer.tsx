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
                    <a href="#" className="hover:text-rinka-red transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="hover:text-rinka-red transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="hover:text-rinka-red transition-colors"><Facebook size={20} /></a>
                </div>

                <div className="text-xs tracking-widest mt-8">
                    &copy; 2026 RINKA RAMEN. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
