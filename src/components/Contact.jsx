const description = [
    {
        id: 0,
        text: 'elenakorneva.ru',
        link: 'https://elenakorneva.ru'
    },
    {
        id: 1,
        text: 'WhatsApp',
        link: 'https://wa.me/4917625187846?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5...'
    },
    {
        id: 2,
        text: 'Telegram',
        link: 'https://t.me/korneva_elena'
    },
    {
        id: 3,
        text: 'info@mrk.digital',
        link: 'mailto:info@mrk.digital'
    }
]
const legal = [
    {
        id: 0,
        text: 'Политика конфидициальности',
        link: 'https://elenakorneva.ru/privacy'
    },
    {
        id: 2,
        text: 'Пользовательское соглашение',
        link: 'https://elenakorneva.ru/terms'
    }
]


const Contact = () => {
    return (
        <section className="bg-dark_primary" id="contact">
            <div className="md:container px-5 ">
                <div className="flex gap-10 md:flex-row flex-col pt-4">
                  <div className="mt-10 p-6 lg:grid lg:grid-cols-2 lg:gap-8">
                    <div className="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0"  data-aos="fade-in"  data-aos-delay={300}>
                      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Контакты</h3>
                      <div className="font-normal text-gray-900 "       >
                        {description.map((content, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 text-gray-900 "
                            >
                              <a className="font-Lato text-gray-900" href={content.link} target="_blank">
                                {content.text}
                              </a>
                            </div>
                        ))}
                      </div>
                    </div>
                    <div  className="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100  lg:mb-0"  data-aos="fade-in"  data-aos-delay={400}>
                      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Информация</h3>
                      <div className="font-normal">
                        {legal.map((content, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 text-gray-900 "
                            >
                              <a className="font-normal" href={content.link} target="_blank">
                                {content.text}
                              </a>
                            </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <footer className="p-3 text-center">
                <h6 className="mb-3 text-white">Елена Корнева</h6>
                <p className="text-white">MRK Digital© All CopyRights Reserved 2022</p>
            </footer>
        </section>
    );
};

export default Contact;
