import React from 'react';
import { FaPlay } from 'react-icons/fa';

function HeroSection() {
  return (
    <section className="text-center py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800 mb-6 leading-tight">
          حفظ، تجويد وتفسير
          <br />
          <span className="text-emerald-600">بأسلوب يناسب الجميع</span>
        </h1>
        <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          منصة مشكاة توفر لك بيئة تفاعلية مع معلمين متخصصين لتعلم القرآن الكريم والتفسير والفقه.
        </p>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all mb-16">
          ابدأ رحلة التعلم الآن
        </button>

        {/* مساحة الفيديو (Video Placeholder) */}
        <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] bg-gray-200 rounded-3xl shadow-2xl flex items-center justify-center group cursor-pointer overflow-hidden">
          <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-emerald-900/20 transition-all"></div>
          <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center text-3xl shadow-lg z-10 group-hover:scale-110 transition-transform">
            <FaPlay className="ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;