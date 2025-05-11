export const SearchInput: React.FC = () => {
  return (
    <div className="flex flex-col items-start justify-center lg:flex-row lg:items-center md:justify-between  px-8 md:py-10 py-5">
      <div className="relative w-full md:w-[600px] lg:w-[500px]">
        <input
          type="text"
          name="search"
          id="search-input"
          className="block bg-white cursor-pointer font-bold  text-right px-5 w-full rounded-lg py-4 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#B2B2B2] focus:ring-1 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 pr-10"
          placeholder="دنبال چه مقاله ای میگردی؟"
        />
        <div className="absolute inset-y-0 left-3 flex items-center">
          <img  src="/input-prefix.svg" alt="search icon" className="w-5 h-5" />
        </div>
      </div>
      <div className="flex flex-col gap-y-5  md:flex  justify-between items-center text-[#111111] md:justify-center gap-x-4 font-bold  pt-4 lg:pt-0">
        <div className="flex justify-between bg-white rounded-lg">
          <div className="flex items-center justify-center pr-3 py-2 rounded-lg cursor-pointer">
            <img src="/heart.png" alt="heart icon" />
            <p className="px-3">مقالاتی که ذخیره کردید</p>
          </div>
          <button className="text-white rounded-lg px-3  bg-[#111111]">23</button>
        </div>
        <div className="flex items-center justify-center bg-white px-4 py-4 rounded-lg cursor-pointer">
          <p className="">10,165 مقاله</p>
        </div>
      </div>
    </div>
  );
};
