import { blogData } from "../data/data";

export const BlogsComponent: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center md:mt-20 mx-5">
        <h5 className="text-[#111111] font-bold md:text-lg hidden md:block">
          چند روز دیگه بیا مقاله های جذاب بخون!
        </h5>
        <div className="md:bg-white text-nowrap rounded-t-xl py-5 md:px-4 lg:px-5 flex gap-2 lg:gap-8 justify-between md:justify-normal w-full md:w-auto">
          <button className="bg-[#343434] text-white md:py-2 px-3 pl-6 md:px-6 rounded-md flex gap-1 items-center text-sm lg:text-base">
            <img src="/timer.svg" alt="timer" className="w-4 h-4" />
            زمان انتشار{""}
          </button>
          <div className="flex gap-2 lg:gap-4">
            <button className="bg-[#E3E3E3] w-12 h-12 md:w-14 md:h-14 rounded-md text-[#343434] text-center content-center font-bold">
              56
            </button>
            <button className="bg-[#E3E3E3] w-12 h-12 md:w-14 md:h-14 rounded-md text-[#343434] text-center content-center font-bold">
              34
            </button>
            <button className="bg-[#E3E3E3] w-12 h-12 md:w-14 md:h-14 rounded-md text-[#343434] text-center content-center font-bold">
              12
            </button>
            <button className="bg-[#FF2727] w-12 h-12 md:w-14 md:h-14 rounded-md text-white text-center content-center font-bold">
              02
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-r-xl rounded-b-xl hidden md:grid grid-cols-1 md:grid-cols-2 p-6 gap-6 mx-5 overflow-x-hidden">
        {blogData.map((el) => (
          <div
            key={el.title}
            className="bg-[#F8F8F8] p-4 rounded-xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
          >
            <div className="flex gap-6">
              <img src={el.image} alt={el.title} className="w-28 h-24" />
              <div>
                <h5 className="text-base font-bold mb-2">{el.title}</h5>
                <p className="text-[#7A7A7A] text-sm">{el.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-5 py-8 overflow-x-auto snap-x snap-mandatory md:hidden scrollbar-none">
        {blogData.map((el) => (
          <div
            key={el.title}
            className="bg-white rounded-xl p-5 shadow-md w-[20rem] md:w-[22rem] shrink-0 snap-start"
          >
            <img src={el.image} alt={el.title} className="mb-4 w-full" />
            <h5 className="text-base font-bold text-[#111111]">{el.title}</h5>
            <p className="text-[#5E5E5E] font-medium text-sm mt-2">
              {el.description}
            </p>
            <div className="flex justify-between items-center mt-10">
              <button className="border border-[#DCDCDC] px-6 py-2 pb-2.5 text-purple-100 font-bold rounded-lg">
                مطالعه بیشتر
              </button>
              <div className="flex gap-1.5 text-[#5E5E5E] font-medium">
                {el.date}
                <img src="/calendar.svg" alt="date" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 justify-center items-center my-2 mb-14 md:hidden">
        <div className="bg-[#E3E3E3] w-6 h-1 rounded-full"></div>
        <div className="bg-purple-100 w-6 h-1 rounded-full"></div>
        <div className="bg-[#E3E3E3] w-6 h-1 rounded-full"></div>
        <div className="bg-[#E3E3E3] w-6 h-1 rounded-full"></div>
      </div>
    </>
  );
};
