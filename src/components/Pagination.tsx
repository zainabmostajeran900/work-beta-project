export const Pagination: React.FC = () => {
  return (
    <div>
      <div className="mt-3 md:mt-16 md:pb-20 flex flex-wrap gap-4 items-center justify-center">
        <div className="bg-[#EAEAEA] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg relative hover:bg-gray-300">
          <img
            src="/arrow-square-right.svg"
            alt="back"
            className="p-2 absolute top-1 right-1 md:top-2 md:right-2 text-white text-lg"
          />
        </div>
        <div className="bg-[#EAEAEA] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg relative hover:bg-gray-300 cursor-pointer">
          <span className="absolute top-3.5 right-4.5 md:top-4.5 md:right-5 text-purple-200 font-semibold">
            06
          </span>
        </div>
        <div className="bg-[#EAEAEA] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg relative hover:bg-gray-300 cursor-pointer">
          <span className="absolute top-3.5 right-4.5 md:top-4.5 md:right-5 text-purple-200 font-semibold">
            ...
          </span>
        </div>
        <div className="bg-[#EAEAEA] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg relative hover:bg-gray-300 cursor-pointer">
          <span className="absolute top-3.5 right-4.5 md:top-4.5 md:right-5 text-purple-200 font-semibold">
            04
          </span>
        </div>
        <div className="bg-[#EAEAEA] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg relative hover:bg-gray-300 cursor-pointer">
          <span className="absolute top-3.5 right-4.5 md:top-4.5 md:right-5 text-purple-200 font-semibold ">
            03
          </span>
        </div>
        <div className="bg-[#EAEAEA] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg relative hover:bg-gray-300 cursor-pointer">
          <span className="absolute top-3.5 right-4.5 md:top-4.5 md:right-5 text-purple-200 font-semibold">
            02
          </span>
        </div>
        <div className="bg-purple-100 w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg text-white relative cursor-pointer">
          <span className="absolute top-3.5 right-4.5 md:top-4.5 md:right-5 text-white font-semibold">
            01
          </span>
        </div>
        <div className="bg-[#EAEAEA] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-lg relative hover:bg-gray-300 cursor-pointer">
          <img
            src="/arrow-square-left.svg"
            alt="back"
            className="p-2 absolute top-1 right-1 md:top-2 md:right-2 text-white text-lg"
          />
        </div>
      </div>
    </div>
  );
};
