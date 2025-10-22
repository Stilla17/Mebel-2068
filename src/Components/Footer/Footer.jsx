import React from 'react'
import img from './../../assets/Стол-плюс-footer-1 1.png';
const Footer = () => {
    return (
        <footer  className='mt-[100px] p-[30px]'>
            <div className='flex gap-[250px] max-w-[1200px] mx-auto'>
                <div>
                    <img src={img} alt="" />
                    <p className='text-[#8CC004] mt-[20px] w-[267px] '>StolPlus - Компания по производствуи продажи мебели</p>
                    <p className='text-[10px] mt-[20px]'>Информация на сайте исключительно для ознакомления</p>
                </div>
                <div className='flex gap-[70px]'>
                    <ul>
                        <li><a className='text-[#3F3F3F]  text-[14px] mt-[15px] font-bold' href="#">Каталог</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15qpx]' href="#">Мебель из массива</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">Столы</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">Стулья</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px] font-bold' href="#">Консоли</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">Кухонные уголки</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">Кресла</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">Интерьерные диваны</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">Кровати</a></li>
                    </ul>
                    <ul>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px] font-bold' href="#">Помошь</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">Мебель из массива</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">Столы</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">Стулья</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px] font-bold' href="#">Консоли</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">Кухонные уголки</a></li>
                    </ul>
                    <ul>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px] font-bold' href="#">Контакты</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">г.Воронеж Бульвар Победы 23Б</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">+7 (961) 181-69-70</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px]' href="#">mailto:stolplus@mail.ru</a></li>
                        <li><a className='text-[#3F3F3F] text-[14px] mt-[15px] font-bold' href="#">Время работы: 10:00-21:00</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer