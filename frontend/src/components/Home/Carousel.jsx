import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const CarouselComponent = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={4500}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
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
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {/* 기본 카드 형태 
			<div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src="/assets/팜플렛/강원 팜플렛.png" alt="Item 1" />
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title">강원특별자치도</h2>
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn text-mainTxt hover:bg-mainBlue">
            이동하기
          </button>
        </div>
      </div> */}

      <div className="card glass w-96 mx-auto">
        <figure className="relative">
          <img src="/assets/팜플렛/강원 팜플렛.png" alt="Item 1" />
          <button className="btn glass absolute bottom-4 left-1/2 transform -translate-x-1/2">
            이동하기
          </button>
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title">강원특별자치도</h2>
        </div>
      </div>

      <div className="card glass w-96 mx-auto">
        <figure className="relative">
          <img src="/assets/팜플렛/더 휴일 팜플렛.png" alt="Item 2" />
          <button className="btn glass absolute bottom-4 left-1/2 transform -translate-x-1/2">
            이동하기
          </button>
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title">더 휴일</h2>
        </div>
      </div>
      <div className="card glass w-96 mx-auto">
        <figure className="relative">
          <img src="/assets/팜플렛/데스커 팜플렛.png" alt="Item 3" />
          <button className="btn glass absolute bottom-4 left-1/2 transform -translate-x-1/2">
            이동하기
          </button>
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title">데스커</h2>
        </div>
      </div>
      <div className="card glass w-96 mx-auto">
        <figure className="relative">
          <img src="/assets/팜플렛/부산 팜플렛.png" alt="Item 4" />
          <button className="btn glass absolute bottom-4 left-1/2 transform -translate-x-1/2">
            이동하기
          </button>
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title">부산</h2>
        </div>
      </div>
      <div className="card glass w-96 mx-auto">
        <figure className="relative">
          <img src="/assets/팜플렛/서울 팜플렛.png" alt="Item 5" />
          <button className="btn glass absolute bottom-4 left-1/2 transform -translate-x-1/2">
            이동하기
          </button>
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title">서울</h2>
        </div>
      </div>
      <div className="card glass w-96 mx-auto">
        <figure className="relative">
          <img src="/assets/팜플렛/어촌체험 휴양마을 팜플렛.png" alt="Item 6" />
          <button className="btn glass absolute bottom-4 left-1/2 transform -translate-x-1/2">
            이동하기
          </button>
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title">어촌체험 휴양마을</h2>
        </div>
      </div>
      <div className="card glass w-96 mx-auto">
        <figure className="relative">
          <img src="/assets/팜플렛/전북 팜플렛.png" alt="Item 7" />
          <button className="btn glass absolute bottom-4 left-1/2 transform -translate-x-1/2">
            이동하기
          </button>
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title">전북특별자치도</h2>
        </div>
      </div>
      <div className="card glass w-96 mx-auto">
        <figure className="relative">
          <img src="/assets/팜플렛/제주 팜플렛.png" alt="Item 8" />
          <button className="btn glass absolute bottom-4 left-1/2 transform -translate-x-1/2">
            이동하기
          </button>
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title">제주도</h2>
        </div>
      </div>
      <div className="card glass w-96 mx-auto">
        <figure className="relative">
          <img src="/assets/팜플렛/충남 팜플렛.png" alt="Item 9" />
          <button className="btn glass absolute bottom-4 left-1/2 transform -translate-x-1/2">
            이동하기
          </button>
        </figure>
        <div className="card-body items-center p-4">
          <h2 className="card-title">충청남도</h2>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
