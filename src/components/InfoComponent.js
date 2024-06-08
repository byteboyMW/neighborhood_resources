export default function InfoComponent({ header, info, image }) {
  return (
    <div className="container mx-auto my-14 px-5 lg:px-20 dt:px-0">
      <div className="bg-gradient-to-r from-teal-500 to-teal-800 text-lg text-white rounded-xl text-center w-100 dt:w-5/6 px-6 shadow-2xl mx-auto">
        <div className="se:h-[50vh] phone:h-[37vh] h-[45vh] md:h-[32vh] ipad:h-[40vh] pro:h-[33vh]">
          <img
            className="h-1/2 w-full lg:w-5/6 dt:w-1/2 pro:w-3/6 2xl:w-1/2 mx-auto rounded-b-xl"
            src={image}
            alt=""
          />
          <h1 className="se:pt-2 pt-5 font-bold se:text-xl text-2xl lg:text-4xl ipad:text-4xl mx-auto">{header}</h1>
          <p className="se:pt-0 pt-2 text-sm lg:text-xl ipad:text-xl pro:text-xl lg:w-4/6 dt:w-1/2 mt-1 lg:mt-3 mx-auto">{info}</p>
        </div>
      </div>
    </div>
  );
}
