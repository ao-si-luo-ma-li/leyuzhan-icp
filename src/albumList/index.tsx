import img01 from '../asset/gallery/gallery-001.jpeg';
import img02 from '../asset/gallery/gallery-002.jpeg';
import img03 from '../asset/gallery/gallery-003.jpeg';
import img04 from '../asset/gallery/gallery-004.jpeg';
import img05 from '../asset/gallery/gallery-005.jpeg';
import img06 from '../asset/gallery/gallery-006.jpeg';
import img07 from '../asset/gallery/gallery-007.jpeg';
import img08 from '../asset/gallery/gallery-008.jpeg';
import img09 from '../asset/gallery/gallery-009.jpeg';
import img10 from '../asset/gallery/gallery-010.jpeg';
import { BreadLine } from '../components';
import './index.scss';

const albumList = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
];

const AlbumList = () => {
  return (
    <div className="album-list">
      <BreadLine title="Illustration Portfolio" subTitle="作品选辑" tracePath={['美术设计', '作品选辑']}></BreadLine>

      <div className="main-contents">
        <div className="gallery">
          <div className="gallery-wrap">
            {albumList.map((src, i) => (
              <div className="gallary-item">
                <div className="gallary-img">
                  <img src={src} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumList;
