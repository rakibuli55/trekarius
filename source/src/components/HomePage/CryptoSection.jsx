import { Link } from 'react-router-dom';
import Container from '../container/Container';
import CommonButton from '../common/CommonButton';
import rightBg from '../../assets/images/crypto-bg.png';
import leftBg from '../../assets/images/crypto-left.png';
const CryptoSection = () => {
  return (
    <section className="custom-xs:pt-5 pt-[40px] pb-[80px] custom-xs:pb-5">
      <Container>
        <div className="p-[87px] custom-md:p-[60px] custom-sm:p-[30px] custom-xs:p-5 bg-[#1687C7] text-center rounded-[20px] relative z-[1] custom-xs:rounded-[16px] custom-xs:pb-7 overflow-hidden">
          <div className="max-md:relative max-md:h-[350px] max-md:w-[422px] custom-xs:!h-[280px] custom-sm:!w-full custom-xs:!w-full max-md:mx-auto max-md:mb-[30px] custom-xs:!mb-5">
            <img
              className="absolute top-0 right-0  custom-xs:right-[50px] bottom-0 h-full w-full custom-lg:w-[330px] lg:w-[330px] xl:w-[330px] object-cover custom-sm:w-full custom-xs:w-full custom-xs:left-0 z-[-1] max-md:z-[1] lg:rounded-r-[20px] custom-lg:rounded-l-none lg:rounded-l-none rounded-[16px]"
              src={rightBg}
              alt=""
            />
            <img
              className="absolute top-0 left-0 custom-sm:left-0 bottom-0 w-[422px] custom-sm:w-full custom-xs:w-full h-full z-[-1] hidden custom-lg:block lg:block xl:block"
              src={leftBg}
              alt=""
            />
          </div>
          <h3 className="w-[868px] max-md:w-full mx-auto text-[40px] font-bold text-white custom-xs:text-[20px]">
            Crypto Friendly
          </h3>
          <h3 className="w-[868px] max-md:w-full mx-auto text-[32px] font-bold text-white custom-xs:text-[18px]">
            We accept crypto
          </h3>
          <Link to={'/shop'} className="mt-6 inline-block">
            <CommonButton text="Shop Now" bgColor="#FF7701" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default CryptoSection;
