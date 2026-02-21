import React from 'react';
import { motion } from 'framer-motion';

const MENU_ITEMS = [
    { id: 1, name: "博多豚骨", price: "880", category: "拉麵" },
    { id: 2, name: "黑蒜油豚骨", price: "980", category: "拉麵" },
    { id: 3, name: "激辛地獄", price: "950", category: "拉麵" },
    { id: 4, name: "特製叉燒", price: "1150", category: "拉麵" },
    { id: 5, name: "一口餃子", price: "450", category: "一品" },
    { id: 6, name: "日式炸雞", price: "580", category: "一品" },
    { id: 7, name: "替玉(加麵)", price: "150", category: "配料" },
    { id: 8, name: "生啤酒", price: "600", category: "飲品" },
];

const MenuSection: React.FC = () => {
    return (
        <section className="py-24 bg-rinka-wood relative overflow-hidden text-rinka-black">
            {/* 背景紋理 */}
            <div className="absolute inset-0 bg-noise opacity-10" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-rinka-white mb-4 tracking-widest">お品書き</h2>
                    <p className="text-rinka-beige/60 font-serif tracking-widest">獻給懂味道的您</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {MENU_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }}
                            className="relative bg-rinka-beige h-64 md:h-80 border-4 border-rinka-wood/30 shadow-lg flex flex-col items-center justify-between py-8 cursor-pointer group rounded-sm focus:outline-none focus:ring-4 focus:ring-rinka-red"
                            tabIndex={0}
                            style={{
                                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)`,
                                backgroundSize: '100% 4px'
                            }}
                        >
                            {/* 頂部孔洞裝飾 */}
                            <div className="w-3 h-3 rounded-full bg-rinka-wood/40 mb-2 shadow-inner" />

                            {/* 分類印章 */}
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-rinka-red/50 flex items-center justify-center opacity-60">
                                <span className="text-[10px] text-rinka-red-dark font-serif">{item.category}</span>
                            </div>

                            {/* 菜名 (直式) */}
                            <div className="flex-grow flex items-center justify-center">
                                <h3 className="vertical-text text-2xl md:text-3xl font-serif font-black text-rinka-black tracking-widest group-hover:text-rinka-red-dark transition-colors duration-300">
                                    {item.name}
                                </h3>
                            </div>

                            {/* 價格 */}
                            <div className="mt-4 border-t border-rinka-wood/20 pt-2 w-16 text-center">
                                <span className="font-serif font-bold text-lg">¥{item.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-rinka-white/40 text-sm font-sans tracking-widest">※ 圖片僅供參考，請以實物為準</p>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
