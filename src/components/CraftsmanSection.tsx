import React from 'react';
import { motion } from 'framer-motion';

const CraftsmanSection: React.FC = () => {
    return (
        <section className="relative py-24 bg-rinka-white overflow-hidden">
            {/* 裝飾背景文字 */}
            <div className="absolute top-10 left-10 text-[12rem] opacity-5 font-serif font-black select-none pointer-events-none text-rinka-black">
                匠
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* 左側：圖片與煙霧特效 */}
                    <div className="w-full md:w-1/2 relative h-[600px] overflow-hidden rounded-sm shadow-xl">
                        <motion.div
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 2 }}
                            className="w-full h-full"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1542351967-d5ae722fed71?q=80&w=2666&auto=format&fit=crop"
                                alt="Ramen Craftsman"
                                loading="lazy"
                                className="w-full h-full object-cover filter sepia-[.3] contrast-125 transition-all duration-700 hover:sepia-0"
                            />
                        </motion.div>

                        {/* 模擬熱氣/煙霧層 (簡單的 CSS Mask 或 Gradient 動畫) */}
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-rinka-white/20 to-transparent mix-blend-screen pointer-events-none" />
                        <div className="absolute inset-0 bg-rinka-wood/10 mix-blend-multiply" /> {/* 復古濾鏡 */}
                    </div>

                    {/* 右側：敘事文字 */}
                    <div className="w-full md:w-1/2 flex flex-row items-stretch justify-center md:justify-start space-x-8">

                        {/* 標題 (直式) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="h-full pt-10"
                        >
                            <h2 className="vertical-text text-4xl md:text-5xl font-serif font-bold text-rinka-red-dark tracking-wider leading-relaxed border-l-2 border-rinka-black/10 pl-6 ml-4">
                                一期一会の<br />味を求めて
                            </h2>
                        </motion.div>

                        {/* 內文 (直式) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="flex gap-8 text-rinka-black/80 font-medium leading-loose h-[400px]"
                        >
                            <p className="vertical-text text-lg tracking-widest">
                                五十年來，始終如一。<br />
                                如果不夠完美，<br />
                                那就不叫拉麵。<br />
                                我們用時間熬煮靈魂。
                            </p>
                            <p className="vertical-text text-lg tracking-widest mt-12">
                                豚骨的濃郁，<br />
                                與小麥的香氣交織。<br />
                                這就是凜香的堅持。<br />
                                請慢用。
                            </p>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CraftsmanSection;
