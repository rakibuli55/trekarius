import { Link } from 'react-router-dom';
import Container from '../container/Container';
import CommonButton from '../common/CommonButton';

const JoinCommunitySection = () => {
  return (
    <div className="my-10 md:my-16 lg:my-20 font-montserrat">
      <Container>
        <div className="bg-primaryOrange text-white rounded-xl md:rounded-2xl lg:rounded-[20px] py-10 md:py-16 lg:py-20 xl:py-24 flex flex-col items-center justify-center px-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:leading-[48px]">
            Join our community & get <br className='hidden lg:block' /> connected{' '}
          </h2>

          <Link to={"/join-community"} className="mt-6 inline-block">
            <CommonButton text="Join Community" type="fill" bgColor="#1687C7" />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default JoinCommunitySection;
