
import { places } from "../data/data";

export const OldBlogs: React.FC = () => {
  return (
    <div className="md:mt-20 px-8 overflow-x-hidden">
      <h5 className="text-[#111111] font-bold text-lg mt-6">
        مجله های قدیمی اماکن تفریحی
      </h5>

      <div className="flex flex-wrap gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 overflow-x-hidden">
        {places.slice(0, 4).map((el, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-md w-full xl:max-w-[20rem] shrink-0 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div className="relative">
              <img src={el.image} alt={el.title} className="mb-4 w-full" />
              <img
                src={el.tag}
                alt={el.title}
                className="absolute top-2 left-2"
              />
            </div>
            <h5 className="text-base font-bold text-[#111111]">{el.title}</h5>
            <p className="text-[#5E5E5E] font-medium text-sm mt-2">
              {el.description}
            </p>
            <div className="flex justify-between items-center mt-10">
              <button className="border border-[#DCDCDC] px-6 py-2 pb-2.5 text-purple-100 font-bold rounded-lg hover:bg-gray-700 hover:text-white">
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

      <div className="flex flex-wrap gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 overflow-x-hidden">
        {places.slice(4, 8).map((el, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-md w-full xl:max-w-[20rem] shrink-0 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div className="relative">
              <img src={el.image} alt={el.title} className="mb-4 w-full" />
              <img
                src={el.tag}
                alt={el.title}
                className="absolute top-2 left-2"
              />
            </div>
            <h5 className="text-base font-bold text-[#111111]">{el.title}</h5>
            <p className="text-[#5E5E5E] font-medium text-sm mt-2">
              {el.description}
            </p>
            <div className="flex justify-between items-center mt-10">
              <button className="border border-[#DCDCDC] px-6 py-2 pb-2.5 text-purple-100 hover:bg-gray-700 hover:text-white font-bold rounded-lg">
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
    </div>
  );
};
