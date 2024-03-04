import React from 'react';

import BabyCool from "../assets/images/Baby/baby-cool.png"
import Check from "../assets/images/Svg/double-check.svg";

const Price = () => {
    const apply = [
        "Подписка на 1 месяц",
        "Все материалы канала, включая Библиотеку материнства и доступ к новым публикациям, а также возможность предлагать свои темы для разбора и пополнения Библиотеки\n",
        "Доступ к чату с Еленой Корневой (открывается раз в неделю) + к вебинару «Вопрос-ответ» (не менее 1 раза в месяц)\n",
        "9 вебинаров по развитию детей от 0 до 24 месяцев + вебинар «Как простыми действиями помочь малышу вырасти многогранной личностью»\n",
        "Эксклюзивный вебинар «Мама, не ори!»\n"
    ]

    return (
        <section className="bg-bg_light_primary mb-4" id="price">
            <div className="md:container px-5 pt-8">
                <h2 className="title mb-6" data-aos="fade-down">
                    Присоединитесь к каналу
                </h2>
                <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                    <div className="order-2 lg:order-1 flex flex-col justify-start items-start"
                         data-aos="slide-right">
                        <h2 className="mt-2 title ">и получите</h2>
                        {apply.map((element, index) =>
                            <div className="flex justify-center items-center" key={index}>
                                <img className="h-[25px]" src={Check} alt="baby_banner"/>
                                <span className="text-left flex-grow pl-4 my-2 ">
                                {element}
                            </span>
                            </div>
                        )
                        }

                    </div>
                    <div className="order-1 lg:order-2">
                        <img data-aos="slide-left"
                             className="lg:w-[500px] lg:h-auto md:w-[310px] md:h-[300px]"
                             src={BabyCool}
                             alt="Consultation"/>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h4 className="mt-2 lg:text-3xl md:text-lg ">1200 рублей
                    </h4>
                    <a href="https://payform.ru/d63Domf/" target="_blank">
                        <button className="btn mb-2">Купить</button>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Price;
