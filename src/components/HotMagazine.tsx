export const HotMagazine: React.FC = () => {
  return (
    <div className=" w-full px-8  md:mt-8">
      <h5 className="text-[#111111] font-bold text-lg mt-10 md:mt-6 py-6 md:py-0">
        مجله های داغ و محبوب اماکن تفریحی
      </h5>
      <div className="flex flex-col  items-center gap-y-4 py-10 justify-center lg:flex-row lg:justify-between  lg:items-center gap-x-3 ">
        <div className=" flex flex-col items-center justify-center bg-white  lg:flex-row lg:items-start lg:justify-center lg:gap-x-3 gap-x-5 rounded-lg">
          <div className="relative">
            <img
              src="/Rectangle 70400.png"
              className="mb-4 cursor-pointer"
              alt="image"
            />
            <img
              src="/Group 75.svg"
              alt="heart"
              className="absolute top-2 left-2"
            />
            <img
              src="/Group 1931.svg"
              alt="place name"
              className="absolute bottom-7 right-2"
            />
          </div>
          <div className="flex flex-col gap-y-5 text-[#ABABAB] text-xl lg:text-base font-bold lg:p-0 pt-4 border-r-3">
            <div className=" flex items-center pr-2">
              {String.fromCharCode(8226)}
              <p className=" flex items-center cursor-pointer p-6 lg:p-2 hover:animate-bounce transition-all duration-700 ease-in-out">
                گردش خنک تابستانی در جنگل عالی شاهرود
              </p>
            </div>
            <div className="flex items-center pr-2">
              {String.fromCharCode(8226)}
              <p className=" flex items-center cursor-pointer p-6 lg:p-2 hover:animate-bounce transition-all duration-700 ease-in-out">
                هفت خان رستم تهران کجاست
              </p>
            </div>
            <div className="flex items-center p-6  lg:p-2 hover:animate-bounce border-r-purple-100 transition-all duration-700 ease-in-out">
              <div className=" flex items-center">
                {String.fromCharCode(8226)}
                <p className="text-purple-100 bg-gray-200 cursor-pointer md:w-[20rem] px-3 py-2 rounded-lg ">
                  سفربا خودروی شخصی در جزیره کیش
                </p>
              </div>
            </div>
            <div className=" flex items-center pr-2">
              {String.fromCharCode(8226)}
              <p className=" flex items-center p-6 cursor-pointer lg:p-2 hover:animate-bounce transition-all duration-700 ease-in-out">
                ازتاریخچه جنگل جزیره الکاس بیشتر بدانید
              </p>
            </div>
            <div className=" flex items-center pr-2">
              {String.fromCharCode(8226)}
              <p className=" flex items-center  cursor-pointer p-6 lg:p-2 hover:animate-bounce transition-all duration-700 ease-in-out">
                سفربا وسایل نقلیه عمومی به کجا
              </p>
            </div>
            <div className=" flex items-center pr-2">
              {String.fromCharCode(8226)}

              <p className=" flex items-center cursor-pointer p-6 lg:p-2 hover:animate-bounce transition-all duration-700 ease-in-out">
                چرا به جنگل ابرباید رفت؟
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <div className="border-r-4 border-r-purple-100 p-1 rounded-xs hover:bg-gray-300 cursor-pointer">
            <div className="bg-white px-10 py-3 md:p-3 rounded-lg flex justify-between items-center gap-x-3 w-[450px]">
              <div className="flex items-center justify-center gap-x-3">
                <img  src="/Group 1818.png" alt="1" />
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-purple-100 font-bold">
                    نشانی جدید جنگل ابر کجاست؟
                  </h3>
                  <p className="text-[#5E5E5E] font-bold">
                    از زیباترین مناطق ایران در جنگل ابرکه{" "}
                  </p>
                </div>
              </div>
              <img
                className="w-4 h-4"
                src="/arrow-square-leftnew.svg"
                alt=""
              />
            </div>
          </div>

          <div className="border-r-4 border-gray-300 p-1 rounded-xs  hover:bg-gray-300 cursor-pointer">
            <div className="bg-white px-10 py-3 md:p-3 rounded-lg flex gap-x-3 w-[450px]">
              <img src="/Group 1818.png" alt="2" />
              <div className="flex flex-col gap-y-2">
                <h3 className="font-bold text-[#111111]">
                  نشانی جدید جنگل ابر کجاست؟
                </h3>
                <p className="text-[#5E5E5E] font-bold">
                  از زیباترین مناطق ایران در جنگل ابرکه{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="border-r-4 border-r-gray-300 p-1 rounded-xs hover:bg-gray-300 cursor-pointer">
            <div className="bg-white px-10 py-3 md:p-3 rounded-lg flex gap-x-3 w-[450px]">
              <img src="/Group 1845.png" alt="3" />
              <div className="flex flex-col gap-y-2">
                <h3 className="font-bold text-[#111111]">
                  نشانی جدید جنگل ابر کجاست؟
                </h3>
                <p className="text-[#5E5E5E] font-bold">
                  از زیباترین مناطق ایران در جنگل ابرکه{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="border-r-4 border-r-gray-300 p-1 rounded-xs hover:bg-gray-300 cursor-pointer">
            <div className="bg-white px-10 py-3 md:p-3 rounded-lg flex gap-x-3 w-[450px] ">
              <img src="/Group 1784.png" alt="4" />
              <div className="flex flex-col gap-y-2">
                <h3 className="font-bold text-[#111111]">
                  نشانی جدید جنگل ابر کجاست؟
                </h3>
                <p className="text-[#5E5E5E] font-bold">
                  از زیباترین مناطق ایران در جنگل ابرکه{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
