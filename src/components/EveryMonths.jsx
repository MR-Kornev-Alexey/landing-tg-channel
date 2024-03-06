import BabyRight from "../assets/images/Baby/baby-right-1.png"
import { useEffect } from 'react';

const every_months = [
    {
        description: "Разбор актуальных проблем по здоровью, развитию и материнству"
    },
    {
        description: " Еженедельные видео, подкасты, гайды и чек-листы по обсуждаемой теме"
    },
    {
        description: "Вебинар + чат «Вопрос-ответ» с обратной связью от Елены Корневой"
    },
    {
        description: "Доступ к Библиотеке материнства с эксклюзивными вебинарами и полезными материалами "
    }
]

const EveryMonth = () => {
    useEffect(() => {
        const containers = document.querySelectorAll('.equal-height-container');
        containers.forEach(container => {
            let max_height = 0;
            container.querySelectorAll('.equal-height-item').forEach(block => {
                const height = block.offsetHeight;
                if (height > max_height) {
                    max_height = height;
                }
            });
            container.querySelectorAll('.equal-height-item').forEach(block => {
                block.style.height = `${max_height}px`;
            });
        });
    }, [every_months]);
    return (
        <section className="min-h-fit bg-bg_light_primary" id="every_month">
            <div className="md:container px-5 pt-8">
                <h2 className="title mb-6" data-aos="fade-down">
                    Ежемесячно на канале:
                </h2>
                <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
                    <div className="flex flex-col md:flex-row">
                        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                            <img data-aos="slide-right"
                                 className="lg:w-[450px] lg:h-auto md:w-[310px] md:h-[300px] mx-auto"
                                 src={BabyRight}
                                 alt="baby banner every months"/>
                        </div>

                        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                            {every_months.map((element, index) => (
                                <div className="w-full sm:w-1/2 mb-4 px-2 equal-height-container relative" key={index}
                                     data-aos="slide-left"
                                     data-aos-delay={index * 200}>
                                    <div className="absolute -inset-1">
                                        <div
                                            className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-blue-400 via-violet-500 to-green-700">
                                        </div>
                                    </div>
                                    <div className="lg:h-[200px] p-4 relative overflow-hidden bg-white flex justify-center items-center equal-height-item">
                                        <p className="mt-6 text-base text-gray-600">{element.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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

export default EveryMonth;
