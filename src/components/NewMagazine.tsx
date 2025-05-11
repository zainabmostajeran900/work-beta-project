
import { newMagazines } from "../data/data";

export const NewMagazine: React.FC = () => {
  return (
    <div className="md:mt-20 px-8 overflow-x-hidden">
      <h5 className="text-[#111111] font-bold text-lg mt-6">
        مجله های جدید اماکن تفریحی
      </h5>
      <div className="flex flex-wrap gap-6 py-10 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-x-hidden">
        {newMagazines.map((el, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-5 shadow-md w-full xl:max-w-[20rem] shrink-0 cursor-pointer hover:scale-105 transition-all duration-500 ease-in-out"
          >
            <div className="relative flex justify-center">
              <img
                src={el.image}
                alt={el.title}
                className="mb-4 w-full md:w-[90%] lg:w-[80%] xl:w-[70%] transition-all duration-500 ease-in-out"
              />
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
            <div className="flex justify-between items-center mt-10 gap-x-2">
              <button className="border border-[#DCDCDC] px-4 md:px-6 py-2 pb-2.5 text-nowrap text-purple-100 font-bold rounded-lg hover:bg-gray-700 hover:text-white">
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
