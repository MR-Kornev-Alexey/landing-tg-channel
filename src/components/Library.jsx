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


const Hireme = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <section className="bg-bg_light_primary">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <ul className="list-decimal px-4 font-Lato sm:text-sm text-xs !leading-7">
                    <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                    <li>Lorem ipsum dolor sit, ame.</li>
                    <li>Lorem ipsum dolor sit, amet consectetur</li>
                    <li>
                        Lorem ipsum dolor sit, amet dolor sit, amet consectetur adipisicing.
                    </li>
                    <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad est
                        beatae quos rem.
                    </li>
                </ul>
                <br/>
                <div className="flex justify-end">
                    <button onClick={closeModal} className="btn">
                        Закрыть
                    </button>
                </div>
            </Modal>
            <div className="md:container px-5 pt-8">
                <div>
                    <h2 className="title" data-aos="fade-down">
                        Библиотека материнства
                    </h2>
                    <br />
                </div>
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
                        className="border-2 border-dark_primary max-w-md
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
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

export default Hireme;
