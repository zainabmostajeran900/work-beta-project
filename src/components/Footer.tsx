export const Footer: React.FC = () => {
  return (
    <div className="bg-[#f7f7f7] px-5">
      <div className="mx-auto max-w-[1450px]">
        <div className="flex md:justify-center justify-end">
          <span
            className="bg-[#F7F7F7] w-24 h-24 rounded-full relative top-10 flex items-center justify-center"
            style={{
              maskImage: "linear-gradient(to bottom, black 100%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 100%, black 100%)",
            }}
          >
            <img
              src="/arrow-circle-up.svg"
              alt="arrow-circle-up"
              className="md:w-24 w-12 h-9 md:h-10 relative md:top-1 top-2"
              style={{
                maskImage: "linear-gradient(to bottom, black 100%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 100%, black 100%)",
              }}
            />
          </span>
        </div>
        <div
          className="bg-white rounded-xl py-10 px-5 md:px-8 shadow-md"
          dir="rtl"
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <div className="flex gap-3 items-center">
                <div className="w-1 h-4 rounded-full bg-purple-100"></div>
                <h5 className="text-[#111111] font-bold text-base">
                  داستان حاجیجا چیست؟
                </h5>
              </div>
              <div className="flex gap-3 items-center">
                <div className="">
                  <div className="w-1 h-5 rounded-full bg-purple-100"></div>
                  <div className="w-1 h-5 rounded-full bg-purple-200 opacity-60"></div>
                  <div className="w-1 h-5 rounded-full bg-purple-200 opacity-20"></div>
                </div>
                <p className="text-[#888888] font-medium text-sm leading-6 md:pl-20 line-clamp-3 md:line-clamp-none">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
                  آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم
                  افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                  طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
              </div>
            </div>
            <img
              src="/Group 189.svg"
              alt="logo"
              className="hidden md:block"
            />
          </div>

          <div className="space-y-4 mt-10 md:hidden">
            <div className="bg-[#F1F1F1] rounded-lg flex justify-between items-center w-full p-5">
              <div className="flex gap-3 items-center pb-2">
                <div className="w-1 h-6 rounded-full bg-[#343434]"></div>
                <h5 className="text-[#343434] font-bold text-base">
                  راهنمای مشتریان{" "}
                </h5>
              </div>
              <img
                src="/arrow-square-next.svg"
                alt="next"
                className="w-6 h-6"
              />{" "}
            </div>
            <div className="bg-[#F1F1F1] rounded-lg flex justify-between items-center w-full p-5">
              <div className="flex gap-3 items-center pb-2">
                <div className="w-1 h-6 rounded-full bg-[#343434]"></div>
                <h5 className="text-[#343434] font-bold text-base">
                  محصولات ما{" "}
                </h5>
              </div>
              <img
                src="/arrow-square-next.svg"
                alt="next"
                className="w-6 h-6"
              />{" "}
            </div>

            <div className="bg-[#F1F1F1] rounded-lg flex justify-between items-center w-full p-5">
              <div className="flex gap-3 items-center pb-2">
                <div className="w-1 h-6 rounded-full bg-[#343434]"></div>
                <h5 className="text-[#343434] font-bold text-base">
                  اقامتگاه{" "}
                </h5>
              </div>
              <img
                src="/arrow-square-next.svg"
                alt="next"
                className="w-6 h-6"
              />{" "}
            </div>
          </div>

          <div className="flex xl:flex md:flex-row flex-col lg:grid lg:grid-cols-3 gap-y-14 xl:grid-cols-5 gap-3 xl:gap-10 items-start mt-10">
            <div className="space-y-2 md:w-full xl:w-[10%] hidden md:block">
              <div className="flex gap-3 items-center pb-2">
                <div className="w-1 h-4 rounded-full bg-purple-100"></div>
                <h5 className="text-[#111111] font-bold text-base text-nowrap">
                  راهنمای مشتریان{" "}
                </h5>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2 truncate">درباره ما</span>
              </div>
              <div className="text-[#111111] text-base">
                {String.fromCharCode(8226)}
                <span className="pr-2">تماس با ما</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">سوالات متداول</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">حقوق کابران</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">قوانین و مقرارت</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">وبلاگ حاجیجا</span>
              </div>
            </div>

            <div className="space-y-2 md:w-full xl:w-[10%] hidden md:block">
              <div className="flex gap-3 items-center pb-2">
                <div className="w-1 h-4 rounded-full bg-purple-100"></div>
                <h5 className="text-[#111111] font-bold text-base">
                  محصولات ما{" "}
                </h5>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">درباره ما</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">تماس با ما</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">سوالات متداول</span>
              </div>
              <div className="text-[#111111] text-base">
                {String.fromCharCode(8226)}
                <span className="pr-2">حقوق کابران</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">قوانین و مقرارت</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">وبلاگ حاجیجا</span>
              </div>
            </div>

            <div className="space-y-2 md:w-full xl:w-[10%] hidden md:block">
              <div className="flex gap-3 items-center pb-2">
                <div className="w-1 h-4 rounded-full bg-purple-100"></div>
                <h5 className="text-[#111111] font-bold text-base">
                  اقامتگاه{" "}
                </h5>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">شهر تهران</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">شهر مشهد</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">شهر کردستان</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">شهر شیراز</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">شهر خوزستان</span>
              </div>
              <div className="text-[#ABABAB]">
                {String.fromCharCode(8226)}
                <span className="pr-2">شهر تبریز</span>
              </div>
            </div>

            <div className="space-y-3 w-full xl:w-[35%]">
              <div className="flex gap-3 items-center pb-2">
                <div className="w-1 h-4 rounded-full bg-purple-100"></div>
                <h5 className="text-[#111111] font-bold text-base">
                  ارتباط با ما
                </h5>
              </div>
              <div className="bg-[#F1F1F1] rounded-lg px-4 py-2.5 flex gap-4 items-center">
                <div className="bg-white py-3 rounded-lg flex w-12 justify-center">
                  <img src="/call-calling.svg" alt="phone" />
                </div>
                <p className="text-[#111111] font-semibold text-sm">
                  021 - 88844243
                </p>
              </div>
              <div className="bg-[#F1F1F1] rounded-lg px-4 py-2.5 flex gap-4 items-center">
                <div className="bg-white py-3 rounded-lg flex w-12 justify-center">
                  <img src="/sms.svg" alt="phone" />
                </div>
                <p className="text-[#111111] font-semibold text-sm">
                  info@hajija.com
                </p>
              </div>
              <div className="bg-[#F1F1F1] rounded-lg px-4 py-2.5 flex gap-4 items-center">
                <div className="bg-white py-3 rounded-lg flex w-12 justify-center">
                  <img src="/location.svg" alt="phone" />
                </div>
                <p className="text-[#111111] font-semibold text-sm">
                  تهران، جردن خیابان مطهری، رو به رو بانک پارسیان
                </p>
              </div>
            </div>
            <div className="space-y-3 w-full xl:w-[35%]">
              <div className="flex gap-3 items-center pb-4">
                <div className="w-1 h-4 rounded-full bg-purple-100"></div>
                <h5 className="text-[#111111] font-bold text-base">
                  شمارتو ثبت کن از تخفیف ها خبر دار شو
                </h5>
              </div>
              <div className="bg-[#F1F1F1] rounded-lg px-4 py-2.5 mb-4 flex gap-4 justify-between items-center">
                <p className="text-[#111111] font-semibold text-sm">
                  09912366290{" "}
                </p>
                <button className="text-white bg-purple-100 px-6 py-2 rounded-lg">
                  ثبت شماره
                </button>
              </div>
              <div className="flex gap-4 justify-center">
                <div className="bg-[#F1F1F1] rounded-lg px-5 py-2.5 flex justify-center items-center">
                  <img src="/Logo Enamad 1.svg" alt="timer" />
                </div>
                <div className="bg-[#F1F1F1] rounded-lg px-5 py-2.5 flex justify-center items-center">
                  <img src="/Logo Neshane Meli 1.svg" alt="timer" />
                </div>
                <div className="bg-[#F1F1F1] rounded-lg px-5 py-2.5 flex justify-center items-center">
                  <img src="/Logo Enamad 2.svg" alt="timer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:bg-[#F1F1F1] rounded-lg mt-12 md:mt-14 md:flex justify-between">
            <h6 className="text-[#111111] bg-[#F1F1F1] mb-1 md:mb-0 rounded-lg font-bold text-sm md:mr-5 p-6">
              تمامی حقوق این وبسایت متعلق به شرکت حاجیجا میباشد.
            </h6>
            <div className="bg-[#111111] text-white w-72 rounded-lg md:flex justify-center items-center hidden">
              Design & Develop By Sevin Team
            </div>
          </div>
        </div>
        <div className="bg-[#111111] text-white w-full p-5 py-9 flex justify-center items-center md:hidden">
          Design & Develop By
          <span className="text-purple-100 ml-2">Sevin Team</span>
        </div>
      </div>
    </div>
  );
};
