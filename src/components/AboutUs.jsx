import PropTypes from "prop-types";

const AboutUs = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[174px] pb-[116px] pl-[124px] pr-[52px] box-border relative gap-[37px] max-w-full z-[1] text-left text-77xl text-black font-outfit mq1325:flex-wrap mq800:gap-[18px] mq800:pt-[113px] mq800:pb-[75px] mq800:pl-[62px] mq800:pr-[26px] mq800:box-border mq450:pl-5 mq450:box-border ${className}`}
    >
      <div
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-white"
        data-scroll-to="background"
      />
      <div className="w-[472px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border max-w-full mq1325:flex-1 mq800:min-w-full">
        <h1 className="m-0 relative text-inherit font-bold font-[inherit] z-[1] mq800:text-29xl mq450:text-10xl">
          <span>{`Why `}</span>
          <span className="text-darkturquoise">IN</span>
          <span className="text-orange">TECH?</span>
        </h1>
      </div>
      <div className="h-64 flex-1 relative min-w-[538px] max-w-full text-5xl mq800:min-w-full">
        <img
          className="absolute top-[71px] left-[12px] w-6 h-6 overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="/mingcutetimeline.svg"
        />
        <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start w-full h-full">
          <div className="relative leading-[64px] font-medium z-[2] mq450:text-lgi mq450:leading-[51px]">
            <p className="m-0">
              At InTech, we deliver solutions that prioritize:
            </p>
            <p className="m-0 whitespace-pre-wrap">
              {" "}
              Efficiency: Streamline operations and save time with smart
              technology.
            </p>
            <p className="m-0 whitespace-pre-wrap">
              {" "}
              Security: Safeguard your workplace with advanced, reliable
              systems.
            </p>
            <p className="m-0 whitespace-pre-wrap">
              {" "}
              Innovation: Stay ahead with cutting-edge solutions designed for
              the future.
            </p>
          </div>
          <img
            className="w-[26px] h-[26px] absolute !m-[0] top-[79px] left-[0px] overflow-hidden shrink-0 object-cover z-[3]"
            alt=""
            src="/iconparksolidsetting@2x.png"
          />
          <img
            className="w-6 h-6 absolute !m-[0] bottom-[87px] left-[2px] overflow-hidden shrink-0 z-[3]"
            loading="lazy"
            alt=""
            src="/materialsymbolssecurity.svg"
          />
          <img
            className="w-6 h-6 absolute !m-[0] bottom-[23px] left-[2px] overflow-hidden shrink-0 z-[3]"
            loading="lazy"
            alt=""
            src="/hugeiconsaiinnovation03.svg"
          />
        </div>
      </div>
    </section>
  );
};

AboutUs.propTypes = {
  className: PropTypes.string,
};

export default AboutUs;
