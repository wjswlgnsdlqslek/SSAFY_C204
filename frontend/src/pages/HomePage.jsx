import { useState } from "react";
import Carousel from "../components/Home/Carousel";
import IntroduceWokcation from "../components/Home/IntroduceWorkcation";

function HomePage() {
  return (
    <div className="px-24">
      {/* Hero Section 메인 이미지와 소개 문구 */}
      <section id="서비스 소개" className="py-16 bg-gray-100 text-center">
        <h1 className="text-4xl font-bold">
          유저가 워케이션을 효과적으로 계획하고 즐길 수 있도록 다양한 정보를
          제공합니다.
        </h1>
        <p className="text-lg mt-4">
          워케이션을 효과적으로 계획하고, 네트워킹과 커뮤니티 활동을 통해
          즐기세요!
        </p>
        <img
          src="/hero-image.png"
          alt="Hero"
          className="w-4/5 max-w-lg mx-auto my-6"
        />
      </section>

      {/* 워케이션 소게 Section */}
      {/* <section id="워케이션" className="py-16 bg-white text-center">
        <div className="flex">
          <div>
            <img
              src="/assets/소개/워케이션이란.png"
              alt="워케이션"
              className="w-4/5 max-w-lg mx-auto my-6"
            />
            <img
              src="/assets/소개/인식.png"
              alt="인식"
              className="w-4/5 max-w-lg mx-auto my-6"
            />
            <small>
              <small>
                <small>츨처: 한국관광공사</small>
              </small>
            </small>
          </div>
          <div>
            <h3>워케이션이란?</h3>
            <p>
              Work(일), Vacation(휴가)의 합성어로, 집과 사무실에서 벗어나
              휴가지에서 업무와 휴식을 동시에 경험하는 새로운 근무제도를
              뜻합니다. WAVA에서 일(Work)상에서 쉼표가 되는 순간을 기대해주세요!
            </p>
          </div>
        </div>
      </section> */}
      <section id="워케이션" className="py-12 bg-white text-center">
        <IntroduceWokcation />
      </section>

      {/* 진행중인 워케이션 */}
      <section id="진행중인 워케이션" className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-5">진행중인 워케이션</h2>
        <Carousel />
      </section>

      {/* 기대효과 Section */}
      <section id="기대효과" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold">기대효과</h2>
        <img src="/vase.png" alt="Vase" className="w-72 mx-auto my-6" />
        <p className="text-lg">
          Elegant and unique vases to enhance your decor.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
