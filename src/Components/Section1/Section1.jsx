import React from 'react'
import Btn from './Propuses/Btn'
import Card from './Propuses/Card'

const Section1 = () => {
    return (
        <section className='max-w-[1200px] mx-auto mt-[100px]'>
            <p className='text-[36px] text-center '>Популярные категории</p>
            <div className='flex items-center justify-center gap-[35px] mt-[50px]'>
                <Btn text={'Столы'} />
                <Btn text={'Стулья'} />
                <Btn text={'Консоли'} />
                <Btn text={'Кресла'} />
                <Btn text={'Интерьерные диваны'} />
                <Btn text={'Распродажа'} />
            </div>
            <div className='flex justify-between items-center flex-wrap mt-[100px]'>
                <Card text={'Стул Венеция'} color={'Белый'} price={'11 900'}/>
                <Card text={'Стул ALLY VBP-206'} color={'Светло бежевый'} price={'11900'}/>
                <Card text={'Стул Рио'} color={'Велюрово синий'} price={'14.900'}/>
                <Card text={'Стул Виктория'} color={'Желтый'} price={'8.500'}/>
                <Card text={'Стул Венеция'} color={'Белый'} price={'11.900'}/>
                <Card text={'Стул ALLY VBP-206'} color={'Светло бежевий '} price={'11.900'}/>
                <Card text={'Стул Рио'} color={'Велюрово синий'} price={'14.000'}/>
                <Card text={'Стул Виктория'} color={'Желтый'} price={'8.500'}/>
            </div>
        </section>
    )
}

export default Section1