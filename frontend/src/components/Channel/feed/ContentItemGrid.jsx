import React from "react";
import useDeviceStore from "../../../store/deviceStore";

const ContentItemGrid = ({ onSelectContent }) => {
  const isMobile = useDeviceStore((state) => state.isMobile);
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
    /* array of content data */
  ];

  return (
    <div
      className={`grid select-none ${
        isMobile ? "grid-cols-1" : "grid-cols-2"
      } lg:grid-cols-4 md:grid-cols-3 gap-4 p-4`}
    >
      {contents.map((content, index) => (
        <div className="flex justify-center" key={index}>
          <img
            src={content.imageUrl}
            onClick={() => onSelectContent(content)}
            alt="Content"
            className="rounded cursor-pointer"
          />
        </div>
      ))}
    </div>
  );
};

export default ContentItemGrid;
