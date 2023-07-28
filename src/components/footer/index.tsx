import './index.scss';

const Footer = () => {
  const handleGoTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <div className="footer-wrap">
      <div className="footer_go-top" onClick={handleGoTop}>
        TOP
      </div>
      <footer className="footer">
        <div className="main-content">
          <div className="footer_call">
            <i className="iconfont icon-24gf-telephone2"></i>
            <div className="footer_call-info">
              <div className="footer_call-info-txt">咨询热线</div>
              <div className="footer_call-info-phone"></div>
            </div>
          </div>
          <div className="footer_copy">版权所有：上海乐于战网络科技有限公司</div>
          <div className="footer_address">总部地址：上海市黄浦区雁荡路109号214室</div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="main-content">
          <span className="footer-left_copy">Copyright © 2022-2023 </span>
          <a className="footer-left_mail" href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
            ICP备案号：沪ICP备2023019280号-1
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
