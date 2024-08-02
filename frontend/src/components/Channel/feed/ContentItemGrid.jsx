import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useDeviceStore from "../../../store/deviceStore";

const ContentItemGrid = ({ onSelectContent, contents }) => {
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

  return (
    <>
      <div
        className={`grid overflow-y-auto h-full select-none user ${
          isMobile ? "grid-cols-1 gap-y-6" : "grid-cols-2"
        } 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 gap-6 p-6`}
      >
        {contents?.map((content, index) => (
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
        {contents && <div ref={ref} />}
      </div>
    </>
  );
};

export default ContentItemGrid;
