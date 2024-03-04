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

const Skills = () => {
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
        <section className="min-h-fit bg-bg_light_primary" id="skills">
            <div className="md:container px-5  pt-14">
                <h2 className="title text-gray-600" data-aos="fade-down">
                    Ежемесячно на канале:
                </h2>
                <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
                    <div className="flex flex-col md:flex-row">
                        <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                            <img data-aos="slide-right"
                                 className="lg:w-[500px] lg:h-auto md:w-[310px] md:h-[300px] mx-auto"
                                 src={BabyRight}
                                 alt="baby_banner"/>
                        </div>

                        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                            {every_months.map((element, index) => (
                                <div className="w-full sm:w-1/2 mb-4 px-2 equal-height-container" key={index}
                                     data-aos="slide-left"
                                     data-aos-delay={index * 200}>
                                    <div className="lg:h-[200px] md:h-[160px] sm:h-[160px] py-4 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl flex justify-center items-center equal-height-item">
                                        <p className="mt-6 text-base text-gray-600">{element.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row md:justify-center items-center">
                <button data-aos="fade-in"
                        data-aos-delay={1100} className="btn md:ml-1">Оплатить
                </button>
            </div>
        </section>
    );
};

export default Skills;
