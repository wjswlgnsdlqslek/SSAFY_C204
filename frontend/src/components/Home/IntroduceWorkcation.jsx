import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const IntroduceWokcation = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center">워케이션이란?</h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Carousel
              additionalTransfrom={0}
              autoPlaySpeed={4500}
              centerMode={false}
              className=""
              containerClass="container"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={responsive}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              <div className="w-56 mx-auto">
                <img
                  src="/assets/소개/워케이션이란.png"
                  alt="워케이션"
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="w-40 mx-auto">
                <img
                  src="/assets/소개/인식.png"
                  alt="인식"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </Carousel>
            <p className="text-xs text-center text-mainTxt mt-4">
              출처: 한국관광공사
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="mb-6 text-lg">
              Work(일), Vacation(휴가)의 합성어로, 집과 사무실에서 벗어나
              휴가지에서 업무와 휴식을 동시에 경험하는 새로운 근무제도를
              뜻합니다. WAVA에서 일(Work)상에서 쉼표가 되는 순간을 기대해주세요!
            </p>
            <Link
              to="/login"
              className="bg-mainBlue text-white px-6 py-2 rounded-full hover:bg-subBlue transition duration-300"
            >
              회원가입하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceWokcation;
