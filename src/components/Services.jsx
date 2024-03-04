import baby1 from "../assets/images/Svg/baby-carriage.svg";
import baby3 from "../assets/images/Svg/baby-love.svg";
import baby4 from "../assets/images/Svg/playtime.svg";
import baby5 from "../assets/images/Svg/cool-boy.svg";
import baby6 from "../assets/images/Svg/single-mom.svg";
import baby2 from "../assets/images/Svg/baby-girl.svg";


const service_element = [
    {
        description: "Ищете надежную информацию по материнству, развитию и здоровью малыша, и вам важно иметь возможность получить проверенную и точную информацию",
        logo: baby6,
    },
    {
        description: "Путаетесь в колоссальном объеме противоречивой информации и не понимаете, кому верить и как действовать именно в вашем случае",
        logo: baby3,
    },
    {
        description: "Стремитесь  вырастить здорового и счастливого ребенка",
        logo: baby1,
    },
    {
        description: "Вам требуется помощь в вашем материнстве, вы устали переживать за очередную проблему или сомневаться, что делаете что-то не так",
        logo: baby4
    },
    {
        description: "Вы хотите получить экспертную поддержку от Елены Корневой и возможность получить ответ на вопрос или разбор проблемы, которая волнует вас здесь и сейчас",
        logo: baby5,
    },
    {
        description: "Вы - мама, которая хочет дать лучшее своему ребенку, и вам важно быть уверенной в том, что вы делаете для этого все, что нужно",
        logo: baby2,
    }
]

const Services = () => {
    return (
        <section id="services">
            <div className="md:container px-5 pt-8">
                <h2 className="title mb-6" data-aos="fade-down">
                    Этот канал для вас, если:
                </h2>
                <div
                    className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
                    {service_element.map((element, index) => (
                        <div className="relative"
                             key={index}
                             data-aos="fade-up"
                             data-aos-delay={index * 200}

                        >
                            <div className="absolute -inset-1">
                                <div
                                    className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                                </div>
                            </div>
                            <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                                <div className="p-9">
                                    <img className="h-[45px] w-full" src={element.logo} alt="baby_banner"/>
                                    <p className="mt-6 text-base text-gray-600">{element.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
