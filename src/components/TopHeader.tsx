export const TopHeader: React.FC = () => {
  return (
    <div className="w-full h-22 bg-[#F1F1F1] px-5 shadow shadow-gray-300 flex flex-wrap items-center justify-center gap-3 md:gap-5">
      <div className="flex items-center gap-3">
        <button className="bg-white rounded-lg p-2 cursor-pointer hidden md:block ">
          <img src="/arrow-square-lft.png" alt="arrowRight" />
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-5 text-[#111111]">
        <button className="font-bold hidden lg:block bg-white px-4 py-3 text-sm rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white">
          دانستنی‌های سفر
        </button>
        <button className="font-bold hidden lg:block bg-white px-4 py-3 text-sm rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white">
          جاذبه‌های گردشگری
        </button>
        <button className="font-bold hidden lg:block bg-white px-4 py-3 text-sm rounded-lg cursor-pointer hover:bg-gray-700 hover:text-white">
          سفرهای ایمن
        </button>
        <button className="font-bold bg-purple-100 px-7 py-3  text-white text-sm rounded-lg cursor-pointer hover:bg-gray-700">
          اماکن تفریحی
        </button>
        <button className="font-bold bg-white px-4 py-3  hover:bg-gray-700 text-sm rounded-lg cursor-pointer hover:text-white">
          اماکن توریستی
        </button>
        <button className="font-bold bg-white px-4 py-3  hover:bg-gray-700 text-sm rounded-lg cursor-pointer hover:text-white">
          همه مقالات
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-white p-2 rounded-lg cursor-pointer hidden md:block">
          <img src="/arrow-square-left.png" alt="arrowLeft" />
        </button>
      </div>
    </div>
  );
};
