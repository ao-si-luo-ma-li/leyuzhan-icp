import { Link, NavLink } from 'react-router-dom'
import './index.scss'

const Header = () => {
  return (
    <div>
      <div className='header-placeholder'></div>
      <div className="header">
        <Link to="/index">
          <div className='header-logo'></div>
        </Link>
        <div className="header-right">
          <div className='header-menus'>
            <NavLink to="/index" className='header-menus_item'>首页</NavLink>
            <NavLink to="/album-list" className='header-menus_item'>美术设计</NavLink>
            <NavLink to="/about-us" className='header-menus_item'>关于我们</NavLink>
            <NavLink to="/login" className='header-menus_item'>注册登录</NavLink>
          </div>
        </div>
    </div>   
    </div>
  )
}

export default Header