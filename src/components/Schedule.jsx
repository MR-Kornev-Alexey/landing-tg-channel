import React from 'react';
import According from "./According.jsx";

const Schedule_months = [
    {   date: "11-17 марта",
        title: "<strong>Работающая модель</strong> воспитания для малышей первых лет",
        description: "<p>✔️ Почему методы воспитания наших мам и бабушек не работают?</p>\n" +
            "<p>✔ ️Чем хороша данная модель воспитания, какие есть особенности</p>\n" +
            "<p>✔️ Четыре ключевых момента эффективного подхода к воспитанию</p>\n" +
            "<p>✔ ️<strong>Подробная инструкция:</strong>Четыре простых шага к желаемому результату</p>"
    },
    {   date: "18-24 марта",
        title: "<strong>Весна без простуд.</strong> Мифы иммунитета и что действительно<strong> &ldquo;работает&rdquo;</strong>",
        description: "<p>✔️ Почему весна - напряженный период для иммунитета?</p>\n" +
            "<p>✔️<strong>Миф №1.</strong> Весна - время авитаминоза и депрессий</p>\n" +
            "<p>✔️<strong>&rdquo;Фероны&rdquo;</strong> если пить, то что, как и для чего?</p>\n" +
            "<p>✔️<strong>Пять проверенных способов</strong> укрепления иммунитета, борьбы с инфекцией и весенней депрессией: <strong>что действительно работает</strong></p>"
    },
    {   date: "25-31 марта",
        title: "<strong>Я - плохая мать?</strong> Разбираем суть теории привязанности и то как она влияет на отношения на самом деле",
        description: "<p>✔️ Мифы относительно теории привязанности, разбираем что происходит на самом деле между вами и ребенком</p>\n" +
            "<p>✔️ Перестаньте винить себя! Заблуждения и фейки, которые заставляют вас считать себя плохой матерью</p>\n" +
            "<p>✔️ На чем стоит сосредоточится и что действительно необходимо сделать</p>"
    },
    {   date: "1-7 апреля",
        title: "<strong>Развитие речи у ребенка</strong>: ключевые моменты и почему Ваш запуск речи не работает",
        description: "<p>✔️ Что такое запуск речи, и почему это не единственное, что влияет на речь крохи?</p>\n" +
            "<p>✔️ Важные шаги для развития речи и почему без них нет результата</p>\n" +
            "<p>✔️ Действующие инструкции и алгоритмы</p>"
    },
    {   date: "8-14 апреля",
        title: "<strong>Витамины:</strong> как подобрать их для себя, семьи и ребенка с максимальной пользой",
        description: "<p>✔️ Как понять, когда витамины принесут пользу, а когда это - ненужная трата денег</p>\n" +
            "<p>✔️ Обсуждаем виды, формы, варианты сочетания</p>\n" +
            "<p>✔️ Мама, витамины и ГВ</p>"
    }
]

const Schedule = () => {
    return (
        <section className="min-h-fit bg-bg_light_primary" id="schedule">
            <div className="md:container px-5 pt-8">
                <h2 className="title mb-6" data-aos="fade-down">
                    В ближайший месяц на канале:
                </h2>
                <div className="max-w-screen-xl mx-auto px-4 lg:py-10 lg:px-6">
                    {Schedule_months.map((element, index) =>
                        <According
                            key={index}
                            date={element.date}
                            title={element.title}
                            description={element.description}
                        />
                    )}
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center items-center">
                <a href="#price">
                <button data-aos="fade-in"
                        data-aos-delay={1100} className="btn md:ml-1">Оплатить
                </button></a>
            </div>
        </section>
    );
};

export default Schedule;
