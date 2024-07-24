import React from "react";
import Carousel from "../components/Home/Carousel";
import IntroduceWorkcation from "../components/Home/IntroduceWorkcation";

function HomePage() {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* 메인 Section */}
      <section id="서비스 소개" className="py-16 bg-gray-100 text-center px-6">
        <h1 className="text-4xl font-bold">
          유저가 워케이션을 효과적으로 계획하고 즐길 수 있도록 다양한 정보를
          제공합니다.
        </h1>
        <p className="text-lg mt-4">
          워케이션을 효과적으로 계획하고, 네트워킹과 커뮤니티 활동을 통해
          즐기세요!
        </p>
        <img
          src="/api/placeholder/400/300"
          alt="Hero"
          className="w-4/5 max-w-lg mx-auto my-6"
        />
      </section>

      {/* 워케이션 소개 Section */}
      <section id="워케이션" className="py-12 bg-white text-center px-6">
        <IntroduceWorkcation />
      </section>

      {/* 진행중인 워케이션 */}
      <section
        id="진행중인 워케이션"
        className="py-12 text-center px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/팜플렛/부산 팜플렛.png')" }}
      >
        <h2 className="text-3xl font-semibold mb-5">진행중인 워케이션</h2>
        <Carousel />
      </section>

      {/* 기대효과 Section */}
      <section id="기대효과" className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-semibold">기대효과</h2>
        <img
          src="/api/placeholder/288/288"
          alt="Vase"
          className="w-72 mx-auto my-6"
        />
        <p className="text-lg">
          Elegant and unique vases to enhance your decor.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
