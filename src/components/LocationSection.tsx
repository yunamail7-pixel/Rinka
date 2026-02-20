import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const LocationSection: React.FC = () => {
    return (
        <section className="relative py-24 bg-rinka-black text-rinka-white overflow-hidden">
            {/* 背景圖 (店鋪外觀 - 夜晚暖光) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src="https://images.unsplash.com/photo-1578474843222-274480829374?q=80&w=2670&auto=format&fit=crop"
                    alt="Storefront Night"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-rinka-black via-rinka-black/90 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* 資訊區塊 */}
                <div className="w-full md:w-1/2 p-8 border-l-4 border-rinka-red space-y-8 bg-rinka-black/80 backdrop-blur-md">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-widest text-rinka-beige mb-8">店舗案内</h2>

                    <div className="space-y-6 font-serif">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-rinka-red mt-1" />
                            <div>
                                <p className="text-lg font-bold text-rinka-white">博多本店</p>
                                <p className="text-rinka-white/70">〒810-0001 福岡県福岡市中央区天神 2-1-1</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="text-rinka-red mt-1" />
                            <div>
                                <p className="text-lg font-bold text-rinka-white">営業時間</p>
                                <p className="text-rinka-white/70">晝 11:00 - 15:00</p>
                                <p className="text-rinka-white/70">夜 17:00 - 23:00 (L.O. 22:30)</p>
                                <p className="text-rinka-red text-sm mt-1">※ 湯頭售完即止</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="text-rinka-red mt-1" />
                            <div>
                                <p className="text-lg font-bold text-rinka-white">電話</p>
                                <p className="text-rinka-white/70 tracking-widest">092-123-4567</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-rinka-white/10">
                        <button className="px-8 py-3 bg-rinka-red text-rinka-white font-serif tracking-widest hover:bg-rinka-red-dark transition-colors duration-300 w-full md:w-auto">
                            Google Map
                        </button>
                    </div>
                </div>

                {/* 地圖區塊 (示意圖) */}
                <div className="w-full md:w-1/2 h-80 md:h-[400px] bg-rinka-wood/20 border border-rinka-white/10 rounded-sm overflow-hidden relative group">
                    {/* 這裡通常放 Google Map iframe，這邊用圖片示意 */}
                    <img
                        src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?q=80&w=2670&auto=format&fit=crop"
                        alt="Map Preview"
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-rinka-white/80 font-serif tracking-widest bg-rinka-black/60 px-4 py-2">MAP PREVIEW</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LocationSection;
