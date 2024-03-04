import React from 'react';
import Consultation from "../assets/images/Baby/consultation-main.png"


const Feedback = () => {
    return (
        <section className="bg-bg_light_primary" id="feedback">
            <div className="md:container px-5 pt-8">
                <h2 className="title mb-6" data-aos="fade-down">
                    Обратная связь от Елены
                </h2>
                <div className="grid lg:grid-cols-2 flex items-center justify-items-center gap-5">
                    <div className="order-2 lg:order-1 flex flex-col justify-center items-center"
                         data-aos="slide-right">
                        <div className="mt-2 lg:text-3xl  md:text-2xl text-center">Каждый подписчик может задать свой
                            вопрос и получить обратную связь по волнующей проблеме в чате с Еленой Корневой или на
                            вебинаре "Вопрос-ответ"</div>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center items-center">
                        <img data-aos="slide-left"
                             className="lg:w-[500px] lg:h-auto md:w-[310px] md:h-[300px]"
                             src={Consultation}
                             alt="Consultation"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
