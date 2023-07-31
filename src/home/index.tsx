import { Link } from 'react-router-dom';
import img01 from '../asset/home/illustration/01.jpeg';
import img02 from '../asset/home/illustration/02.jpeg';
import img03 from '../asset/home/illustration/03.jpeg';
import img04 from '../asset/home/illustration/04.jpeg';
import img05 from '../asset/home/illustration/05.jpeg';
import img06 from '../asset/home/illustration/06.jpeg';

import ceImg01 from '../asset/home/ct-merit/m.jpeg';
import ceImg02 from '../asset/home/ct-merit/m2.jpeg';
import ceImg03 from '../asset/home/ct-merit/yose.jpeg';
import pfLink from '../asset/home/pf-link.png';
import './index.scss';

const ServiceIllustration = [
  {
    title: '角色立绘设计',
    img: img01,
    pText: () => <p>角色立绘制作从写实风到手绘风、厚涂、薄涂、赛璐璐风格、像素风格...等我们都可以制作。<br />经验丰富的设计师也会根据您的需求为您量身定制合适的插画，<br />单幅作品也可以制作。</p>  },
  {
    title: 'SD角色设计',
    img: img02,
    pText: () => <p>我们熟知日系风格的SD角色制作。<br />基于角色立绘，我们可在不失细节的前提下，<br />制作精良的SD角色。并可灵活“拆分”各部位，<br />辅助角色在游戏中自由地活动。</p>
  },
  {
    title: '版权插画制作',
    img: img03,
    pText: () => <p>我们精通版权插画的专业团队长期受雇于日本知名厂商，<br />多年深耕于动漫/游戏/周边设计等领域，替您高度还原/绘制任何您喜欢的知名日本二次元版权作品。</p>
  },
  {
    title: '知名画师',
    img: img04,
    pText: () => <p>想联系日本知名画师却苦无联系管道吗?G-angle与多位知名画师合作的经验,能帮助您在沟通/工作上节约成本,达到最高品质。</p>
  },
  {
    title: '背景插画',
    img: img05,
    pText: () => <p>从动画电影级别的高品质背景，<br />至主机游戏、手游中的战斗背景<br />我们将精心为您打造，<br />多种风格的背景由您挑选。</p>
  },
  {
    title: '画风本地化',
    img: img06,
    pText: () => <p>我们可以将您的现有美术资源转换成地道的日系风格，<br />提升产品的市场接受度与曝光度，<br />开拓产品在日本市场上独一无二的全新可能。</p>
  },
]

const CtMerit = () => [
  {
    img: ceImg03,
    title: '广泛的艺术风格',
    pText: () => <p>我们拥有各种画风的创作经验，旗下注册了超过3000名日本才华横溢的画师。<br />无论各系画风，Le-Yu-Zhan都能将产品包装为最具原创性的优质作品。</p>
  },
  {
    img: ceImg02,
    title: '专业的项目管理',
    pText: () => <p>经验丰富的项目经理及设计师会仔细把控各个项目的制作过程。<br />从项目的初期设计至最终完稿,我们都会在每个阶段精益求精提升质量。<br />我们多语言的团队，也能提供英语、日语和中文的支持。</p>
  },
  {
    img: ceImg01,
    title: '多样的修改方案',
    pText: () => <p>我们致力於最高品质的作品，并追求客戶的最大满足。我们依照自身丰富的艺术经验,在修改反馈时为您提供多样的修改方案以及最佳建议。</p>
  }
]

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-page_banner">
        <div className="home-page_banner-main">
          <div className="banner-title">
            <span className="banner-title_big">美术设计</span>
            <span className="banner-title_small">ILLUSTRATION</span>
          </div>
          <div className="banner-sub">
            <p>LEYUZHAN 提供多样的客制2D插画服务，包括角色设计、背景插画、版权插画等</p>
            <p>为您提供全面的艺术解决方案，并与独立游戏及国际游戏开发团队等200余家企业深度合作</p>
            <p>旗下3000多名优秀的日本画师，每年产出1500余张作品，我们能在紧迫货期内制作各种高品质的美术素材</p>
          </div>
        </div>
      </div>
      <div className='service-illustration'>
        <div className='service-illustration_title'>
          <h2>Type of Illustration</h2>
          <p>设计种类</p>
        </div>
        <div className='service-illustration_list'>
          {
            ServiceIllustration.map(item => (
            <Link to="/login" className='service-illustration_list-item' key={item.title}>
              <div className="box-before">
                <img src={item.img} alt="" />
                <h3>{item.title}</h3>
              </div>
              <div className="box-after type_of_illust">
                {item.pText()}
              </div>
            </Link>
            ))
          }
        </div>
      </div>
      <div className='ct-merit'>
        <h2 className='ct-merit_e-title'>Why choose Le-Yu-Zhan</h2>
        <div className='ct-merit_ff-bass'>
          {
            CtMerit().map((item, index) => (
              <div className='ct-merit_ff-bass-item' key={item.title}>
                <img src={item.img} alt="" />
                <h3><span>优点{index + 1}</span>{item.title}</h3>
                {item.pText()}
              </div>
            ))
          }
        </div>
      </div>

      <div className='portfolio-link'>
        <div className='portfolio-img'>
          <Link to="/login">
            <picture>
              <source media="(max-width: 640px)" srcSet={pfLink}/>
              <img src={pfLink} alt="点击这里，查看更多插画选辑!!" />
            </picture>
          </Link>
        </div>
      </div>

      <div className='about-us'>
        <div className='about-us_inner'>
          <div className='title'>
            <h2>ABOUT US</h2>
            <span>关于我们</span>
          </div>
          <div className='about-us_info'>
            乐于战拥有美术艺术的匠人工坊，主要为多媒体行业 <br></br>
            提供日系潮流的人物设计，角色设计，场景设计等多样优质美术制作，为您的产品赋予新生。<br></br>
            我们缔造了合作的新标准；为国内外知名厂商提供了大量制作资源。<br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
