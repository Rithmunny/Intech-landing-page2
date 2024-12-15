import Home1 from "../components/Home1";
import Products from "../components/Products";
import Facerecognition from "../components/Facerecognition";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[23.4px] box-border leading-[normal] tracking-[normal]">
      <section className="w-[1752.1px] h-[1718.1px] absolute !m-[0] top-[218.8px] left-[-1051.7px]">
        <div className="absolute top-[0.04px] left-[704.02px] [background:linear-gradient(237.95deg,_rgba(255,_166,_0,_0.62),_rgba(255,_255,_255,_0))] w-[1350.8px] h-[1116.1px] [transform:_rotate(39.1deg)] [transform-origin:0_0]" />
        <img
          className="absolute top-[617.2px] left-[1126.7px] w-[301.9px] h-[551.5px] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
      </section>
      <section className="flex flex-row items-start justify-start pt-0 px-0 pb-[187px] box-border max-w-[102%] mq800:pb-[79px] mq800:box-border mq1125:pb-[122px] mq1125:box-border">
        <Home1 />
      </section>
      <section className="self-stretch flex flex-row items-start justify-end pt-0 px-[33px] pb-[231px] box-border max-w-full text-left text-sm text-gray font-outfit mq800:pb-[150px] mq800:box-border">
        <div className="w-[1034px] flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
          <div className="flex flex-col items-start justify-start gap-12">
            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-6xl bg-white flex flex-col items-start justify-start pt-[15px] pb-[13px] pl-[35px] pr-[23px] gap-[26px] z-[1]">
              <div className="w-[167px] h-[123px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-6xl bg-white hidden" />
              <div className="self-stretch flex flex-row items-start justify-between gap-5">
                <div className="h-[29px] w-[29px] relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-200 w-full h-full z-[1]" />
                  <img
                    className="absolute top-[3px] left-[2px] w-6 h-6 overflow-hidden z-[2]"
                    alt=""
                    src="/icroundlogin.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                  <div className="relative font-light z-[1]">Check In</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[5px] text-teal font-inter">
                <b className="relative inline-block min-w-[68px] z-[1]">
                  09:00 am
                </b>
                <div className="relative font-light font-outfit text-gray z-[1]">
                  On Time
                </div>
              </div>
            </div>
            <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-6xl bg-white flex flex-col items-start justify-start pt-[15px] pb-[13px] pl-[35px] pr-4 gap-[26px] z-[1]">
              <div className="w-[167px] h-[123px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-6xl bg-white hidden" />
              <div className="flex flex-row items-start justify-start gap-[19px]">
                <div className="h-[29px] w-[29px] relative">
                  <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-200 w-full h-full z-[1]" />
                  <img
                    className="absolute top-[3px] left-[2px] w-6 h-6 overflow-hidden z-[2]"
                    alt=""
                    src="/icroundlogin-1.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                  <div className="relative font-light whitespace-pre-wrap z-[1]">
                    Check Out
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[5px] text-teal font-inter">
                <b className="relative z-[1]">05:00 pm</b>
                <div className="relative font-light font-outfit text-gray z-[1]">
                  Go Home
                </div>
              </div>
            </div>
          </div>
          <div className="w-[779px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border max-w-full text-45xl text-darkturquoise">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0">
                <h1 className="m-0 relative text-inherit font-bold font-[inherit] mq800:text-32xl mq450:text-19xl">
                  <span>Mobile Attendance</span>
                  <span className="text-black">{` `}</span>
                  <span className="text-orange">System</span>
                </h1>
              </div>
              <div className="relative text-xl font-light text-black mq450:text-base">
                Effortlessly track employee attendance with our seamless
                clock-in/out feature and real-time monitoring. Stay updated with
                accurate records, ensuring efficiency and reliability for your
                workforce.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border max-w-full">
        <Products />
      </section>
      <Facerecognition />
      <AboutUs />
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[90px] box-border gap-6 max-w-full mq450:pb-[58px] mq450:box-border">
        <div className="self-stretch h-6 relative bg-orange z-[4]" />
        <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[58px] pr-[52px] box-border max-w-full mq800:pl-[29px] mq800:pr-[26px] mq800:box-border">
          <ContactUs />
        </div>
      </section>
      <div className="self-stretch flex flex-col items-end justify-start gap-[27px] max-w-full">
        <div className="self-stretch h-px relative bg-orange" />
        <div className="w-[1501px] flex flex-row items-start justify-end py-0 px-[66px] box-border max-w-full mq800:pl-[33px] mq800:pr-[33px] mq800:box-border">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
