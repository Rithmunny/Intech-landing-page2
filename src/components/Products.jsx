import PropTypes from "prop-types";

const Products = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-end justify-between pt-[17px] pb-[18px] pl-[122px] pr-[33px] box-border relative max-w-full gap-5 z-[1] text-left text-45xl text-darkturquoise font-outfit mq1325:flex-wrap mq800:pl-[61px] mq800:box-border mq450:pl-5 mq450:box-border ${className}`}
    >
      <div
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(90deg,_#fff,_rgba(0,_217,_241,_0.41))]"
        data-scroll-to="laundrySystemImagePlacehold"
      />
      <div className="w-[781px] flex flex-col items-start justify-start pt-0 px-0 pb-11 box-border max-w-full mq1325:flex-1 mq800:pb-[29px] mq800:box-border mq1125:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[78px] max-w-full mq800:gap-[39px] mq450:gap-[19px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
              <h1 className="m-0 relative text-inherit font-bold font-[inherit] inline-block max-w-full z-[1] mq800:text-32xl mq450:text-19xl">
                <span>{`Smart Laundry `}</span>
                <span className="text-orange">System</span>
              </h1>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full text-xl text-black">
                <div className="flex-1 relative font-light inline-block max-w-full z-[1] mq450:text-base">
                  Simplify your laundry routine with QR code activation and
                  automated weekly system refresh. Enjoy a hassle-free and
                  efficient experience tailored to modern living.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[79px] text-sm text-black mq800:gap-[39px] mq1125:flex-wrap mq450:gap-5">
            <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-mini bg-white flex flex-col items-start justify-start pt-[21px] px-0 pb-0 gap-[19px] z-[1]">
              <div className="self-stretch h-[238px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-mini bg-white hidden" />
              <div className="flex flex-row items-start justify-start pt-0 pb-2 pl-[43px] pr-11">
                <b className="relative inline-block min-w-[83px] z-[1]">
                  Big Washer 1
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-3.5 text-3xs">
                <div className="flex-1 flex flex-col items-end justify-start">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pl-[27px] pr-[19px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-1">
                      <div className="flex flex-col items-start justify-start pt-[83px] px-0 pb-0">
                        <div className="relative font-thin z-[1]">2</div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start gap-[13.5px]">
                        <div className="h-[67px] flex-1 relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-gainsboro-100 w-full h-full z-[1]" />
                          <div className="absolute w-[calc(100%_-_17px)] top-[9px] right-[9px] left-[8px] h-[50px]">
                            <div className="absolute top-[0px] left-[0px] w-full h-full">
                              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full z-[2]" />
                              <img
                                className="absolute top-[8px] left-[13px] w-6 h-6 overflow-hidden z-[3]"
                                alt=""
                                src="/bxswasher.svg"
                              />
                            </div>
                            <div className="absolute top-[31px] left-[10px] font-thin inline-block w-[31px] h-[13px] min-w-[31px] whitespace-nowrap z-[3]">
                              00:00
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[83px] px-0 pb-0">
                          <div className="relative font-thin z-[1]">6</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between gap-5 mt-[-1px]">
                    <div className="relative font-thin z-[1]">
                      current usage
                    </div>
                    <div className="relative font-thin z-[1]">max load</div>
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] py-4 pl-16 pr-[63px] bg-mediumspringgreen rounded-t-none rounded-b-mini flex flex-row items-start justify-start z-[1] hover:bg-forestgreen">
                <div className="h-[45px] w-[169px] relative rounded-t-none rounded-b-mini bg-mediumspringgreen hidden" />
                <div className="relative text-3xs font-outfit text-black text-left z-[2]">
                  Available
                </div>
              </button>
            </div>
            <div className="flex flex-col items-start justify-start py-0 pl-0 pr-[21px]">
              <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-mini bg-white flex flex-col items-end justify-start pt-[21px] pb-0 pl-0 pr-px gap-[19px] z-[1]">
                <div className="self-stretch h-[238px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)_inset] rounded-mini bg-white hidden" />
                <div className="self-stretch flex flex-row items-start justify-end py-0 pl-3.5 pr-[13px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[27px]">
                    <div className="flex flex-row items-start justify-start py-0 pl-[29px] pr-7">
                      <b className="relative z-[1]">Big Washer 2</b>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-4 text-3xs">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[37px] pr-[38px]">
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="h-[67px] flex-1 relative">
                            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-red-100 w-full h-full z-[1]" />
                            <div className="absolute top-[0px] left-[0px] w-full h-full">
                              <img
                                className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                                alt=""
                                src="/ellipse-42.svg"
                              />
                              <div className="absolute w-[calc(100%_-_17px)] top-[9px] right-[9px] left-[8px] h-[50px]">
                                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full z-[3]" />
                                <img
                                  className="absolute top-[8px] left-[13px] w-6 h-6 overflow-hidden z-[4]"
                                  alt=""
                                  src="/bxswasher-1.svg"
                                />
                                <div className="absolute top-[31px] left-[12px] font-thin inline-block w-7 h-[13px] min-w-[28px] whitespace-nowrap z-[5]">
                                  20:06
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-end justify-start">
                        <div className="flex flex-row items-start justify-end py-0 pl-[27px] pr-[19px]">
                          <div className="w-[95.5px] flex flex-row items-start justify-between gap-5">
                            <div className="relative font-thin z-[1]">2</div>
                            <div className="relative font-thin z-[1]">6</div>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-5 mt-[-1px]">
                          <div className="relative font-thin z-[1]">
                            current usage
                          </div>
                          <div className="relative font-thin z-[1]">
                            max load
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-4 pl-[71px] pr-[70px] bg-red-300 rounded-t-none rounded-b-mini flex flex-row items-start justify-start z-[1] hover:bg-red-200">
                  <div className="h-[45px] w-[169px] relative rounded-t-none rounded-b-mini bg-red-300 hidden" />
                  <div className="relative text-3xs font-outfit text-black text-left z-[2]">
                    In Use
                  </div>
                </button>
              </div>
            </div>
            <img
              className="h-[238px] w-[257px] relative rounded-mini object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
          </div>
        </div>
      </div>
      <img
        className="w-[323px] relative max-h-full object-cover max-w-full z-[1] mq1325:flex-1"
        loading="lazy"
        alt=""
        src="/image-5@2x.png"
      />
    </div>
  );
};

Products.propTypes = {
  className: PropTypes.string,
};

export default Products;
