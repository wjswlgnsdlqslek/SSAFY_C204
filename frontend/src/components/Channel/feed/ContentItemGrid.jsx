import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useDeviceStore from "../../../store/deviceStore";

const ContentItemGrid = ({ onSelectContent }) => {
  const isMobile = useDeviceStore((state) => state.isMobile);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      console.log("요청");
      setLoading(true);
    }
  }, [inView]);

  const contents = [
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl: "https://picsum.photos/200",
    },
    {
      imageUrl: "https://picsum.photos/200",
    },
    {
      imageUrl: "https://picsum.photos/200",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    {
      imageUrl:
        "https://fastly.picsum.photos/id/184/250/250.jpg?hmac=6ULGFzE9ycGK0cgb3NB9AJG6Jt0_w_Ez-QWFZpWEFRI",
    },
    /* array of content data */
  ];

  return (
    <>
      <div
        className={`grid overflow-y-auto h-full select-none user ${
          isMobile ? "grid-cols-1 gap-y-6" : "grid-cols-2"
        } 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-6 p-6`}
      >
        {contents.map((content, index) => (
          <div className="flex justify-center" key={index}>
            <img
              src={content.imageUrl}
              onClick={() => onSelectContent(content)}
              alt="Content"
              className="rounded-md cursor-pointer w-full"
            />
          </div>
        ))}
        {loading && (
          <>
            {[...Array(5)].map((_, index) => (
              <div className="flex justify-center animate-pulse " key={index}>
                <div className="rounded-md bg-gray-400 w-full aspect-square" />
              </div>
            ))}
          </>
        )}
        {/* observer */}
        <div ref={ref} />
      </div>
    </>
  );
};

export default ContentItemGrid;
