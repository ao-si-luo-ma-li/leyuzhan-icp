import { Link } from 'react-router-dom';
import './index.scss';

const BreadLine = (props) => {
  const { title, subTitle, tracePath = [] } = props;
  return (
    <div>
      <div className="mv-portfolio">
        <div className="mv-inner-pf">
          <div className="en-title">
            {title}
            <div className="ff-bass">{subTitle}</div>
          </div>
          <p className="lead">联系我们，获取更多作品参考</p>
        </div>
      </div>

      <div id="pankuzu">
        <ul className="pankuzu-list clearfix">
          <li>
            <Link to="/index">主页</Link>
          </li>
          {
            tracePath.map(item => (
              <li>&gt; {item}</li>
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default BreadLine;
