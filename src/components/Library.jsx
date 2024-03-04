import React, {useState} from 'react';
import babyRight from "../assets/images/Baby/baby-right.png"
import babyUp from "../assets/images/Baby/baby-up-2.png"
import Modal from "react-modal";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        maxWidth: "23rem",
        width: "96%"
    },
    overlay: {
        padding: "2rem",
    },
};

Modal.setAppElement("#root");


const Library = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section className="bg-bg_light_primary" id="library">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="list-decimal px-4 font-Lato sm:text-sm text-xs !leading-7 max-h-[600px] overflow-scroll">
                    <p>Полный комплект вебинаров по развитию малыша от 0 до 24 месяцев:</p>
                    <p>✅Вебинар для периода от 0 до 2 месяцев</p>
                    <p>✅Вебинар для периода от 3 до 4 месяцев</p>
                    <p>✅Вебинар для периода от 5 до 6 месяцев</p>
                    <p>✅Вебинар для периода от 7 до 8 месяцев</p>
                    <p>✅Вебинар для периода от 9 до 10 месяцев</p>
                    <p>✅Вебинар для периода от 11 до 13 месяцев</p>
                    <p>✅Вебинар для периода от 14 до 18 месяцев</p>
                    <p>✅Вебинар для периода от 19 до 24 месяцев</p>
                    <p>Благодаря этим вебинарам вы:</p>
                    <p>📌Узнаете об особенностях развития ребенка в соответствующем возрастном периоде</p>
                    <p>📌Поймете, какие навыки и способности нужно развивать у ребенка</p>
                    <p>📌Получив системные знания, приобретете уверенность в себе и в своих способностях</p>
                    <p>📌Создадите свою эффективную стратегию развития</p>
                    <p>📌Начнете лучше понимать и принимать своего малыша и его эмоциональное состояние</p>
                    <p>✅ Вебинар &laquo;Как простыми действиями помочь малышу вырасти многогранной личностью, используя новейшие научные данные&raquo;</p>
                    <p>✅ Методика развития детей в возрасте от 0 до 4 лет, которая основана на современных исследованиях мозга ребенка - информация, которой вы не найдете в широком доступе</p>
                    <p>✅ Вебинар &laquo;Мама, не ори!&raquo;</p>
                    <p>✅ Как перестать срываться на своего ребенка, избавиться от ощущения &laquo;я плохая мать&raquo; и взглянуть на свое материнство другими глазами</p>
                </div>
                <div className="flex justify-center items-center my-2 py-2">
                    <button onClick={closeModal} className="btn">
                        Закрыть
                    </button>
                </div>
            </Modal>
            <div className="md:container px-5 pt-8">
                <h2 className="title mb-6" data-aos="fade-down">
                    Библиотека материнства
                </h2>
                <div className="flex items-center md:flex-row flex-col-reverse ">
                    <img
                        src={babyRight}
                        alt="..."
                        data-aos="fade-right"
                        className="max-w-sm md:block hidden"
                    />
                    <img
                        src={babyUp}
                        data-aos="fade-up"
                        alt="..."
                        className="max-w-sm md:hidden mt-4"
                    />
                    <div
                        data-aos="fade-left"
                        className="ml-4 border-2 border-dark_primary max-w-md p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
                    >
                        <span className="leading-7 pb-6">На время подписки вы получаете доступ к закрытой и постоянно пополняющейся библиотеке с актуальными материалами по материнству, развитию, здоровью и детству</span>
                        <br/>
                        <button className="mt-3 btn bg-dark_primary text-white" onClick={() => {
                            openModal();
                        }}>
                            Полное содержание библиотеки
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Library;
