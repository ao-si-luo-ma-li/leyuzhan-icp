import { BreadLine } from '../components';
import './index.scss';

const AboutUs = () => {
  return (
    <div className="about-page">
      <BreadLine title="About Us" subTitle="关于我们" tracePath={['关于我们']}></BreadLine>

      <div className='about-us'>
        <div className='about-us_inner'>
          <p className='about-us_info'>
            乐于战拥有美术艺术的匠人工坊，主要为多媒体行业 <br></br>
            提供日系潮流的人物设计，角色设计，场景设计等多样优质美术制作，为您的产品赋予新生。<br></br>
            我们缔造了合作的新标准；为国内外知名厂商提供了大量制作资源。<br></br>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
