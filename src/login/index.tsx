import { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom'
import './index.scss';

interface Fields {
  email: string;
  password: string;
}
const Login = () => {
  const  navigate = useNavigate();
  const [showPsd, setShowPsd] = useState(false);
  const [fields, setFields] = useState<Fields>({} as any);
  const [codeSrc, setCodeSrc] = useState('http://www.yegoo.com/patchca.htm?0.7482498817235992')
  const handleSubmit = () => {
    const {email, password} = fields;
    if (!email) {
      alert('请输入邮箱')
      return
    }
    if(!/[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/.test(email)) {
      alert('邮箱格式有误')
      return
    }
    if (!password || password.length < 8) {
      alert('请输入正确的密码')
      return
    }

    alert('登录成功')

    navigate('/index')
  }

  const refreshCode = () => {
    setCodeSrc(`${codeSrc}${Math.random()}`)
  }
  return (
    <div className="login-page">
      <div className="main-content">
        <div className="login-page_wrap">
          <div className="login-page_left"></div>
          <div className="login-page_modal">
            <div className="login-page_modal-logo"></div>
            <h3>会员登录</h3>
            <div className="input">
              <i className="icon-wode-wode iconfont"></i>
              <input
                type="text"
                placeholder="请输入email账号"
                onChange={(e) => {
                  setFields({ ...fields, email: e.target.value });
                }}
                value={fields?.email}
              />
            </div>
            <div className="input">
              <i className="icon-mima iconfont"></i>
              <input
                type={showPsd ? 'text' : 'password'}
                placeholder="请输入密码"
                onChange={(e) => {
                  setFields({ ...fields, password: e.target.value });
                }}
                value={fields?.password}
              />
              <i
                className={`iconfont ${showPsd ? 'icon-yulan' : 'icon-yanjing_yincang'}`}
                onClick={() => setShowPsd(!showPsd)}
              ></i>
            </div>
            <div className="input code">
              <input type="text" placeholder="请验证码" />
              <a href="javascript:void(0);" className="codeimg captcha-refresh" title="點擊更換驗證碼" onClick={refreshCode}>
                <img id="checkCodeImg" src={codeSrc}  alt="验证码"></img>
              </a>
            </div>
            <div className="text-left">
              <label className="checkbox-theme"><input type="checkbox" name="save_login_account" /><span><i></i></span>記住帳號</label>
              </div>
            <div className="login user-btn" onClick={handleSubmit}>登录</div>
            <Link to="/register">
              <div className="register user-btn">注册新账号</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
