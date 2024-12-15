import { useState, useCallback } from "react";
import Root from "./Root";

import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const Home1 = ({ className = "" }) => {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='homeButtonBackground']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProductsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='laundrySystemImagePlacehold']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='background']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactUsContainer']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <div
        className={`flex flex-col items-start justify-start py-0 pl-0 pr-[25px] box-border max-w-full z-[1] text-left text-45xl text-darkturquoise font-outfit ${className}`}
      >
        <div className="w-[1512px] flex flex-col items-start justify-start pt-2 px-[25px] pb-[79.5px] box-border relative gap-[71px] mq800:gap-[35px] mq800:pt-5 mq800:pb-[52px] mq800:box-border mq450:gap-[18px] mq450:pb-[34px] mq450:box-border">
          <div
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(72.19deg,_rgba(217,_217,_217,_0),_rgba(0,_217,_241,_0.76))]"
            data-scroll-to="homeButtonBackground"
          />
          <header className="w-[1426px] flex flex-row items-end justify-between gap-5 max-w-full text-left text-xl text-darkturquoise font-outfit">
            <div className="flex flex-row items-start justify-start">
              <img
                className="h-[60px] w-[60px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
                <a className="[text-decoration:none] relative font-bold inline-block min-w-[79px] z-[1] text-[inherit]">
                  <span>IN</span>
                  <span className="text-orange">TECH</span>
                </a>
              </div>
            </div>
            <div className="w-[751px] flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border max-w-full">
              <div className="self-stretch flex flex-row items-end justify-start gap-16 max-w-full mq800:gap-8 mq450:gap-4">
                <nav className="m-0 flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[7px] box-border max-w-full mq1125:hidden">
                  <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-5 text-left text-xl text-black font-outfit">
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2">
                      <a
                        className="[text-decoration:none] relative font-bold text-[inherit] cursor-pointer z-[1]"
                        onClick={onHomeTextClick}
                      >
                        Home
                      </a>
                    </div>
                    <a
                      className="[text-decoration:none] relative font-bold text-[inherit] cursor-pointer z-[1]"
                      onClick={onProductsTextClick}
                    >
                      Products
                    </a>
                    <div className="flex flex-col items-start justify-start py-0 pl-0 pr-2">
                      <a
                        className="[text-decoration:none] relative font-bold text-[inherit] cursor-pointer z-[1]"
                        onClick={onAboutUsTextClick}
                      >
                        About Us
                      </a>
                    </div>
                    <a
                      className="[text-decoration:none] relative font-bold text-[inherit] cursor-pointer z-[1]"
                      onClick={onContactUsTextClick}
                    >
                      Contact Us
                    </a>
                  </nav>
                </nav>
                <button className="cursor-pointer border-orange border-[1px] border-solid pt-2 px-4 pb-2.5 bg-orange h-[47px] rounded-3xs box-border flex flex-row items-start justify-start z-[1] hover:bg-darkgoldenrod hover:border-darkgoldenrod hover:border-[1px] hover:border-solid hover:box-border">
                  <div className="h-[47px] w-[182px] relative rounded-3xs bg-orange border-orange border-[1px] border-solid box-border hidden" />
                  <a
                    className="[text-decoration:none] relative text-xl font-bold font-outfit text-white text-left cursor-pointer z-[1]"
                    onClick={openFrame}
                  >
                    Request a Demo
                  </a>
                </button>
              </div>
            </div>
          </header>
          <div className="w-[1177.9px] flex flex-row items-start justify-start py-0 px-3 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq1125:flex-wrap">
              <div className="w-[633px] flex flex-col items-start justify-start pt-[72px] px-0 pb-0 box-border max-w-full mq800:min-w-full mq1125:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <h1 className="m-0 relative text-inherit font-bold font-[inherit] z-[1] mq800:text-32xl mq450:text-19xl">
                    <span>{`Smarter Workplaces, `}</span>
                    <span className="text-orange">Secure Solutions.</span>
                  </h1>
                  <div className="self-stretch relative text-5xl font-light text-black z-[1] mq450:text-lgi">
                    <p className="m-0">
                      Revolutionize workplace efficiency and security through
                    </p>
                    <p className="m-0">
                      innovative smart technology solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start relative mq1125:flex-1">
                <img
                  className="h-[674px] w-[503.7px] absolute !m-[0] right-[-345.8px] bottom-[-79.5px] object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
                <img
                  className="h-[551.5px] flex-1 relative max-w-full overflow-hidden object-contain z-[2] mq1125:flex-1"
                  alt=""
                  src="/image-4@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Root onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

Home1.propTypes = {
  className: PropTypes.string,
};

export default Home1;
