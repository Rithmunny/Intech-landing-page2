import { useCallback } from "react";
import PropTypes from "prop-types";

const ContactUs = ({ className = "" }) => {
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
      "[data-scroll-to='contactUsThrough']",
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className={`flex-1 flex flex-row items-end justify-between max-w-full gap-5 text-left text-21xl text-darkturquoise font-outfit mq1325:flex-wrap ${className}`}
      data-scroll-to="contactUsContainer"
    >
      <div className="w-[639px] flex flex-col items-start justify-start gap-[46px] max-w-full mq1325:flex-1 mq800:gap-[23px] mq800:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[18px] max-w-full">
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-[124px] w-[124px] relative object-cover"
              alt=""
              src="/image-1-1@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[37.2px] px-0 pb-0">
              <h1 className="m-0 relative text-inherit font-bold font-[inherit] mq800:text-13xl mq450:text-5xl">
                <span>IN</span>
                <span className="text-orange">TECH</span>
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[19px] pr-0 box-border max-w-full text-5xl text-black">
            <div className="flex-1 relative font-light inline-block max-w-full mq450:text-lgi">
              Be the leading provider of cutting-edge smart technology,
              creatingsmarter, more efficient, and secure work environments for
              businesses of allsizes.
            </div>
          </div>
        </div>
        <div className="w-[543px] flex flex-row items-start justify-start py-0 px-[19px] box-border max-w-full text-xl text-black">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-5 mq800:flex-wrap">
            <div className="flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-2">
              <b
                className="relative cursor-pointer mq450:text-base"
                onClick={onHomeTextClick}
              >
                Home
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <b
                className="relative cursor-pointer mq450:text-base"
                onClick={onProductsTextClick}
              >
                Products
              </b>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 pb-0 pl-0 pr-2">
              <b
                className="relative cursor-pointer mq450:text-base"
                onClick={onAboutUsTextClick}
              >
                About Us
              </b>
            </div>
            <b
              className="relative cursor-pointer mq450:text-base"
              onClick={onContactUsTextClick}
            >
              Contact Us
            </b>
          </div>
        </div>
      </div>
      <div className="w-[499px] flex flex-col items-start justify-start gap-[22px] max-w-full text-5xl text-orange mq1325:flex-1 mq800:min-w-full">
        <div className="flex flex-row items-start justify-start py-0 pl-5 pr-[19px] box-border max-w-full">
          <div
            className="relative font-semibold mq450:text-lgi"
            data-scroll-to="contactUsThrough"
          >
            Contact us through Phone Number
          </div>
        </div>
        <div className="self-stretch rounded-6xl bg-white border-orange border-[0px] border-solid box-border flex flex-row items-start justify-between pt-3 pb-[13px] pl-[47px] pr-3.5 max-w-full gap-5 text-dimgray mq800:flex-wrap mq800:pl-[23px] mq800:box-border">
          <img
            className="h-[66px] w-[499px] relative rounded-6xl hidden max-w-full"
            alt=""
            src="/rectangle-90.svg"
          />
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="relative font-light z-[1] mq450:text-lgi">
              +885 12 345 678
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-1.5 pb-[5px] pl-[51px] pr-[49px] bg-orange rounded-6xl flex flex-row items-start justify-start z-[1] hover:bg-darkgoldenrod">
            <div className="h-[41px] w-48 relative rounded-6xl bg-orange hidden" />
            <div className="relative text-5xl font-medium font-outfit text-white text-left inline-block min-w-[92px] z-[2]">
              Call now
            </div>
          </button>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-5 pr-3.5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start gap-[9px] max-w-full mq450:flex-wrap">
            <div className="relative font-semibold inline-block min-w-[102px] mq450:text-lgi">
              Address :
            </div>
            <div className="flex-1 relative font-light text-dimgray inline-block min-w-[231px] max-w-full mq450:text-lgi">
              <p className="m-0">
                Green Arcade 1, 2 And 3, Thmey Village, Chambak Commune,
              </p>
              <p className="m-0">
                Phnom Srouch District, Kampong Speu Province, Cambodia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ContactUs.propTypes = {
  className: PropTypes.string,
};

export default ContactUs;
