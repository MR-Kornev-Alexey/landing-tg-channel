import React from 'react';

import AuthorImg from "../assets/images/Hero/elena-main-green.png"
import Check from "../assets/images/Svg/double-check.svg"

const Author = () => {
    const apply = [
        "эксперт по развитию малышей от 0 до 3 лет с опытом работы с более чем 1000 успешными семьями\n",
        "более полумиллиона подписчиков на социальных платформах, получающие ценные советы по вопросам здоровья и развития детей\n",
        "высококвалифицированный врач-педиатр\n",
        "семейный психолог\n",
        "бизнес-леди и мастер делового администрирования (MBA)\n",
        "жена, мама трех успешных сыновей, бабушка\n",
        "сертифицированный специалист по современным методам развития мозга от Массачусетского университета"
    ]

    return (
        <section className="bg-bg_light_primary" id="author">
            <div className="md:container px-5 pt-8">
                <h2 className="title mb-6" data-aos="fade-down">
                    Елена Корнева
                </h2>
                <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                    <div className="order-2 lg:order-1 flex flex-col justify-start items-start"
                         data-aos="slide-right">
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
                             className="lg:w-[400px] lg:h-auto md:w-[310px] md:h-[300px] rounded-full"
                             src={AuthorImg}
                             alt="Consultation"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Author;
