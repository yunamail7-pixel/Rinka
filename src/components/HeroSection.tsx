import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-rinka-black text-rinka-white">
            {/* 背景視覺 (預留影片/圖片位置) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* 遮罩 */}
                <img
                    src="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?q=80&w=2070&auto=format&fit=crop"
                    alt="Hakata Ramen"
                    fetchPriority="high"
                    className="h-full w-full object-cover opacity-80"
                />
            </div>

            {/* 噪點紋理覆蓋 */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-30 mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
            />

            {/* 內容容器 */}
            <div className="relative z-20 h-full w-full flex flex-row-reverse items-center justify-center p-8 md:p-16">

                {/* 品牌標誌 (直式書法) */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="flex flex-col items-center ml-8 md:ml-16"
                >
                    <div className="border-2 border-rinka-white/80 p-6 md:p-10 mb-6 backdrop-blur-sm bg-rinka-black/20">
                        <h1 className="vertical-text text-6xl md:text-9xl font-serif font-black tracking-widest text-rinka-white drop-shadow-lg">
                            凜香
                        </h1>
                    </div>
                    <div className="w-px h-24 md:h-40 bg-rinka-red/80 mt-8" /> {/* 裝飾紅線 */}
                </motion.div>

                {/* 標語 (直式) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.5 }}
                    className="h-[60vh] flex flex-col justify-center items-end mr-4 md:mr-12"
                >
                    <h2 className="vertical-text text-xl md:text-3xl font-serif font-medium tracking-widest text-rinka-white/90 leading-loose">
                        一碗入魂，<br />
                        博多の真髄。<br />
                        <span className="text-sm md:text-base mt-4 text-rinka-white/60 font-sans tracking-normal">SINCE 1985</span>
                    </h2>
                </motion.div>

                {/* 裝飾印章 */}
                <motion.div
                    initial={{ scale: 2, opacity: 0, rotate: 15 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
                    className="absolute bottom-10 left-10 md:bottom-20 md:left-20"
                >
                    <div className="w-16 h-16 md:w-24 md:h-24 bg-rinka-red rounded-full flex items-center justify-center border-4 border-rinka-white/20 shadow-lg">
                        <span className="text-rinka-white font-serif font-bold text-lg md:text-2xl transform -rotate-12">正宗</span>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default HeroSection;
