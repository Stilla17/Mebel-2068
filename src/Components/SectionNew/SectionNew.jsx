import React from 'react'
import glo from './../../assets/glowing_youtube_logo_on_a_realistic_3d_circle 1.png';

const SectionNew = () => {
  return (
    <section className="px-8 py-10 section-new">
      <div>
        <h1 className="font-bold text-[36px] mb-6">Новости и предложения</h1>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-10">
          <div className="relative w-[680px] h-[383px] bg-gray-800 rounded-2xl text-white overflow-hidden free">
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <div className="relative z-10 p-10">
              <p className="text-lg text-green-400">Диван Альмека</p>
              <h1 className="text-[40px] font-bold">Хит недели</h1>
              <p className="text-sm mt-1">Цвет: Синий аметист</p>
              <h1 className="text-2xl font-semibold mt-2">11.990 руб</h1>
              <button className="mt-4 w-[118px] h-[44px] bg-green-500 rounded-lg hover:bg-green-600 transition">
                В корзину
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="relative w-[396px] h-[180px] rounded-2xl flex items-center frese">
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <div className="relative z-10 ml-10">
                <h1 className="text-[24px] w-[192px] text-white font-bold">
                  Новинки в мире диванов
                </h1>
              </div>
            </div>
            <div className="relative w-[396px] h-[180px] rounded-2xl flex items-center freses">
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <div className="relative z-10 ml-10">
                <h1 className="text-[24px] w-[287px] text-white font-bold">
                  Выбираем правильный стол вместе
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          <div className="relative w-[259px] h-[229px] rounded-3xl text-white overflow-hidden freses">
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <div className="relative z-10 p-6">
              <h1 className="text-[18px] mt-10 font-bold">
                Правильные интерьерные кресла
              </h1>
              <a className="text-gray-300 underline mt-2 block" href="#">
                К статье
                
              </a>
            </div>
          </div>
          <div className="relative w-[259px] h-[229px] rounded-3xl text-white overflow-hidden freses">
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <div className="relative z-10 p-6">
              <h1 className="text-[18px] mt-10 font-bold">
                Как выбрать удобный диван
              </h1>
              <a className="text-gray-300 underline mt-2 block" href="#">
                К статье
              </a>
            </div>
          </div>
          <div className="relative w-[259px] h-[229px] rounded-3xl text-white overflow-hidden freses">
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <div className="relative z-10 p-6">
              <h1 className="text-[18px] mt-10 font-bold">
                Модные тренды интерьера
              </h1>
              <a className="text-gray-300 underline mt-2 block" href="#">
                К статье
              </a>
            </div>
          </div>
          <div className="relative w-[259px] h-[229px] rounded-3xl text-white overflow-hidden freses">
            <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
            <div className="relative z-10 p-6">
              <h1 className="text-[18px] mt-10 font-bold">
                Стильная мебель для дома
              </h1>
              <a className="text-gray-300 underline mt-2 block" href="#">
                К статье
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between bg-red-500 rounded-3xl mt-14 px-10 py-8">
          <div className="max-w-[600px] text-white">
            <h1 className="font-bold text-[44px]">Мы на YouTube</h1>
            <p className="text-[18px] mt-3">
              Специально для вас мы создали канал с полезными и интересными роликами
            </p>
            <button className="bg-white w-[117px] h-[44px] rounded-lg text-red-500 font-medium mt-5 hover:bg-gray-100 transition">
              Смотреть
            </button>
          </div>

          <div className="flex justify-end">
            <img
              src={glo}
              alt="YouTube logo"
              className="w-[200px] h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNew;
