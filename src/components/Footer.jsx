import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`flex-1 flex flex-row items-start justify-between max-w-full gap-5 text-left text-xl text-black font-outfit mq800:flex-wrap ${className}`}
    >
      <div className="w-[363px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-5 mq450:flex-wrap">
          <div className="relative mq450:text-base">{`Terms & Conditions`}</div>
          <div className="relative inline-block min-w-[129px] mq450:text-base">
            Privacy Policy
          </div>
        </div>
      </div>
      <div className="flex flex-row items-end justify-start gap-[24.6px]">
        <img
          className="h-[46.5px] w-[46.5px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/icbaselinefacebook.svg"
        />
        <img
          className="h-[42.7px] w-[42.7px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/formkittwitter.svg"
        />
        <img
          className="h-[46.5px] w-[46.5px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/riinstagramfill.svg"
        />
        <img
          className="h-[46.5px] w-[46.5px] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/lineiconstiktokalt.svg"
        />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
