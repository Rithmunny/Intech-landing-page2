import PropTypes from "prop-types";

const Facerecognition = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch [background:linear-gradient(186.08deg,_#fff,_rgba(222,_144,_0,_0.62))] flex flex-row items-start justify-between pt-[114px] pb-[91.2px] pl-[122px] pr-0 box-border max-w-full gap-5 text-left text-45xl text-darkturquoise font-outfit mq1325:flex-wrap mq1325:pl-5 mq1325:pr-5 mq1325:box-border mq800:pt-[74px] mq800:pb-[59px] mq800:box-border ${className}`}
    >
      <div className="h-[728px] w-[1512px] relative [background:linear-gradient(186.08deg,_#fff,_rgba(222,_144,_0,_0.62))] hidden max-w-full" />
      <div className="w-[423.5px] flex flex-col items-start justify-start gap-[41.2px] max-w-full mq1325:flex-1 mq800:min-w-full mq450:gap-[21px]">
        <img
          className="self-stretch flex-1 relative rounded-6xl max-w-full overflow-hidden max-h-full object-contain z-[1]"
          alt=""
          src="/image-11@2x.png"
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
          <img
            className="h-[240.8px] flex-1 relative rounded-6xl max-w-full overflow-hidden object-contain z-[1]"
            alt=""
            src="/image-2@2x.png"
          />
        </div>
      </div>
      <div className="w-[765px] flex flex-col items-start justify-start pt-[116px] px-0 pb-0 box-border max-w-full mq1325:flex-1 mq1125:min-w-full mq450:pt-[75px] mq450:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
          <h1 className="m-0 relative text-inherit font-bold font-[inherit] z-[1] mq800:text-32xl mq450:text-19xl">
            <span>{`Face Recognition and Attendance `}</span>
            <span className="text-orange">System</span>
          </h1>
          <div className="w-[674px] relative text-xl font-light text-black inline-block max-w-full z-[1] mq450:text-base">
            Enhance workplace security and efficiency with real-time face
            recognition seamlessly integrated into CCTV systems. Automatically
            detect and record attendance with cutting-edge technology.
          </div>
        </div>
      </div>
    </section>
  );
};

Facerecognition.propTypes = {
  className: PropTypes.string,
};

export default Facerecognition;
