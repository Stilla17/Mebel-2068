import React from 'react'
import logo from './../../assets/logo.png';
const Nav = () => {
  return (
     <header className="bg-[#9dc82c] py-4">
      <div className="max-w-7xl m-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" />
          
          </div>

          <button className="flex items-center space-x-2 border border-white text-white px-4 py-1 rounded-md text-sm">
            <span className="text-xl">:::</span>
            <span>Каталог</span>
          </button>

          <nav className="hidden md:flex space-x-6 text-white text-sm">
            <a href="#">Доставка</a>
            <a href="#">Способы оплаты</a>
            <a href="#">Контакты</a>
            <a href="#">Гарантии и возврат</a>
            <a href="#">Политика конфиденциальности</a>
          </nav>
        </div>

        <div className="flex items-center space-x-2 text-white text-sm">
          <span></span>
          <span>Корзина</span>
        </div>
      </div>
    </header>

  )
}

export default Nav