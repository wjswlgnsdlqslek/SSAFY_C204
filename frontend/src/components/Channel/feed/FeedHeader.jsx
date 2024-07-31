import React from "react";

const FeedHeader = ({ openCreateDrawer }) => {
  return (
    <div className="p-4 flex">
      <div className="flex flex-col items-center">
        <img
          src="https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI"
          alt="Profile"
          className="rounded-full w-24 h-24 select-none"
        />
        <div className="mt-4 flex flex-col ">
          <div>팔로잉 128</div>
          <div>팔로워 154</div>
          <div>게시물 35</div>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-start p-2 mx-4">
        <div>
          <h1 className="text-2xl font-bold mt-2 inline-block">전지훈</h1>
          <button onClick={openCreateDrawer} className="btn btn-primary mt-2">
            글 작성
          </button>
        </div>
        <div>
          <p className="mt-2">전지훈의 개인 채널입니다.</p>
        </div>
      </div>
    </div>
  );
};

export default FeedHeader;
