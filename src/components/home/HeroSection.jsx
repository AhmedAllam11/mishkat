import React from 'react'

function HeroSection() {
  return (
    <>
      <section className='app-container pt-24 pb-12  '>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* right content */}
          <div className="space-y-6 text-center lg:text-right">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">
              تعلم دينك بسهولة مع 
              <span className="text-green-500"> أكاديمية مشكاة</span>
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              منصة تعليمية متكاملة لتعلم القرآن الكريم، التفسير،  
              بأسلوب مبسط يناسب جميع المستويات، بإشراف نخبة من المعلمين المتخصصين.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-500 transition">
                ابدأ التعلم الآن
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                تصفح المسارات
              </button>
            </div>

            {/* stats */}
            <div className="flex justify-center lg:justify-start gap-5 pt-6 text-center">
              <div>
                <h3 className="text-2xl font-bold text-green-500">+5000</h3>
                <p className="text-gray-500 text-sm">طالب</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-500">+50</h3>
                <p className="text-gray-500 text-sm">دورة</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold  text-green-500">+20</h3>
                <p className="text-gray-500 text-sm">مدرس</p>
              </div>
            </div>
          </div>

          {/* left content */}
          <div className="flex justify-center">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" 
              alt="تعلم القرآن"
              className="w-72 md:w-96"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection