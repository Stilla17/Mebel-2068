import React from 'react'
import logo2 from './../../assets/logo2.png';
const Footer = () => {
    return (
        <footer className="bg-white py-14 mt-[70px] ">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10">
                <div>
                    <img src={logo2} alt="Foodeli Logo" />
                    <p className="text-[#8CC004] font-bold text-[16px] ">
                   StolPlus - Компания по производствуи продажи мебели
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Каталог</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><a href="#">Мебель из массива</a></li>
                        <li><a href="#">Столы</a></li>
                        <li><a href="#">Стулья</a></li>
                        <li><a href="#">Консоли</a></li>
                        <li><a href="#">Кухонные уголки</a></li>
                        <li><a href="#">Кресла</a></li>
                        <li><a href="#">Интерьерные диваны</a></li>
                        <li><a href="#">Кровати</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Помощь</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><a href="#">Мебель из массива</a></li>
                        <li><a href="#">Столы</a></li>
                        <li><a href="#">Стулья</a></li>
                        <li><a href="#">Консоли</a></li>
                        <li><a href="#">Кухонные уголки</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Контакты</h3>
                    <ul className="space-y-2 text-gray-600 text-sm">
                        <li><a href="#">г.Воронеж Бульвар Победы 23Б</a></li>
                        <li><a href="#">+7 (961) 181-69-70</a></li>
                        <li><a href="#">mailto:stolplus@mail.ru</a></li>
                        <li><a href="#">Время работы: 10:00-21:00</a></li>
                    </ul>
                </div>

              
            </div>
        </footer>
    )
}

export default Footer