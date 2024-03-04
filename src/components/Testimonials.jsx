import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/images/FeedbackImg/Image03.jpg"
import img2 from "../assets/images/FeedbackImg/Image01.jpg"
import img3 from "../assets/images/FeedbackImg/Image05.jpg"
import img4 from "../assets/images/FeedbackImg/Image09.jpg"
import img5 from "../assets/images/FeedbackImg/Image12.jpg"
import img6 from "../assets/images/FeedbackImg/Image16.jpg"
import img7 from "../assets/images/FeedbackImg/Image17.jpg"
import img8 from "../assets/images/FeedbackImg/Image18.jpg"
import img9 from "../assets/images/FeedbackImg/Image22.jpg"
import img10 from "../assets/images/FeedbackImg/Image25.jpg"
import img11 from "../assets/images/FeedbackImg/Image29.jpg"
import img12 from "../assets/images/FeedbackImg/Image32.jpg"
import img13 from "../assets/images/FeedbackImg/Image33.jpg"
import img14 from "../assets/images/FeedbackImg/Image36.jpg"
import img15 from "../assets/images/FeedbackImg/Image41.jpg"

const images = [
  {
    label: 'Надежда',
    imgPath: img1
  },
  {
    label: 'Ксения П.',
    imgPath: img2
  },
  {
    label: 'Nastya',
    imgPath: img3
  },
  {
    label: 'Лейсан',
    imgPath: img4
  },
  {
    label: 'Анастасия',
    imgPath: img5
  },
  {
    label: 'Smex',
    imgPath: img6
  },
  {
    label: 'Alenka',
    imgPath: img7
  },
  {
    label: 'Александра Ф.',
    imgPath: img8
  },
  {
    label: 'Дарья',
    imgPath: img9
  },
  {
    label: 'Мария',
    imgPath: img10
  },
  {
    label: 'Ani M.',
    imgPath: img11
  },
  {
    label: 'Дарья',
    imgPath: img12
  },
  {
    label: 'Асель',
    imgPath: img13
  },
  {
    label: 'Наталья',
    imgPath: img14
  },
  {
    label: 'Марина П.',
    imgPath: img15
  }
];
import { Pagination } from "swiper";

const Feedbacks= () => {
  return (
    <section className="bg-bg_light_primary" id="clients">
      <div className="md:container px-5 pt-9 flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            Отзывы
          </h2>
        </div>
        <div className="flex items-center justify-center">
          <Swiper
            pagination={{
              clickable: true,
            }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xl drop-shadow-primary self-center"
          >
            {images.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-3xl "
              >
                <span className="lg:text-xl md:text-md">{content.label}</span>
                <img src={content.imgPath} alt={content.label} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
