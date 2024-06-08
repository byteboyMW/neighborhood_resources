import { useState } from "react";

export default function Testimonials() {
  const testimonialData = [
    {
      contentText:
        "David, Samuel, Micah and Malachi, young kids in the neighborhood, showed up at my door this morning asking to wash my cars for money. They presented themselves more professionally than most adults, so I gave them a shot. They are young but worked really hard. I had them vaccumm my cars too. Money well spent. I like to encourage that sort of entrepreneurship and hard work in kids. If you need your car washed, call them...",
      testimonalName: "Ptony Mirabile",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonialData.length;

  const previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="mx-auto md:mx-[200px] ipad:mx-[50px] dt:mx-[300px] px-4" id="testimonials">
      <section className="flex h-[25vh] my-auto justify-center items-center">
        <div>
          {testimonialData.map(
            (item, index) =>
              index === current && (
                <div key={index}>
                  <div className="pb-[0px] md:pb-[40px] flex items-start gap-4">
                    <img src="quotes-s.png" alt="" />
                    <h2 className="text-white text-md lg:text-2xl md:text-lg ipad:text-xl font-bold md:line-clamp-[20] line-clamp-[7]">
                      {item.contentText}
                    </h2>
                  </div>
                  <div className="flex justify-between items-end mt-6 md:mt-0 ml-11">
                    <div className="flex items-center">
                      <div>
                        <h6 className="text-white font-bold">- {item.testimonalName}</h6>
                      </div>
                    </div>
                    <div className="hidden gap-4" onClick={previous}>
                      <div className="bg-gray-800 p-4 rounded-md">
                        <img src="leftarrow.png" alt="" />
                      </div>
                      <div className="bg-gray-800 p-4 rounded-md" onClick={next}>
                        <img className="" src="arrow.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </section>
    </div>
  );
}
