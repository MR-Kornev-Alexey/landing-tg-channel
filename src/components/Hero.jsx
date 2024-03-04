import mainImage from "../assets/images/Hero/avatar-900.png"

const Hero = () => {
    return (
        <section id="home" className="overflow-hidden">
            <div
                className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
                <div
                    data-aos="slide-left"
                    data-aos-delay="1200"
                    className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
                >
                    <h1 className="rotate-90 absolute top-[15%] right-[-22%] sm:right-[-12%] lg:text-4xl  text-[#EAF2FA]">
                        Елена{" "}
                        <span className="text-dark_primary">{" "}Корнева</span>
                    </h1>
                </div>
                <div className="pb-16 px-6 pt-5 " data-aos="fade-down">
                    <p className="uppercase text-xl">
                        Закрытый Telegram-канал
                    </p>
                    <h2 className="uppercase text-bold text-center lg:text-5xl  md:text-4xl  mobile:text-4xl">Материнство<br/>это
                        просто</h2>
                    <p className="text-xl">
                        Как вырастить здорового, счастливого ребенка и не сойти с ума
                    </p>
                    <br/>
                    <div className="flex flex-col md:flex-row md:justify-center items-center">
                        <a href="#schedule">
                            <button className="btn md:mr-1 mobile:mb-4 md:mb-0">Программа</button>
                        </a>

                        <a href="#price">
                            <button className="btn md:ml-1">Оплатить</button>
                        </a>
                    </div>
                </div>
                <div className="md:h-[37rem] h-96">
                    <img
                        src={mainImage}
                        data-aos="slide-up"
                        alt="..."
                        className="h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
