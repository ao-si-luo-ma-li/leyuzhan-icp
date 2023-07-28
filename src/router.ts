export interface routersTypes {
  path: string;
  name: string;
  component: any;
  needLogin?: boolean;
  exact?: boolean;
  title?: string;
  realAuth?: boolean;
  shouldTab?: boolean;
  keepAlive?: boolean;
}

const routers: routersTypes[] = [
  {
    path: '/index',
    name: 'Home',
    component: () => import(/* webpackPrefetch: true */ './home'),
    needLogin: false,
    exact: true,
    title: '首页',
    shouldTab: true,
    keepAlive: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackPrefetch: true */ './login'),
    needLogin: false,
    exact: true,
    title: '欢迎登录',
    shouldTab: true,
    keepAlive: true,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackPrefetch: true */ './register'),
    needLogin: false,
    exact: true,
    title: '欢迎注册',
    shouldTab: true,
    keepAlive: true,
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackPrefetch: true */ './home'),
    needLogin: false,
    exact: true,
    title: '首页',
    shouldTab: true,
    keepAlive: true,
  },
  {
    path: '/album-list',
    name: 'Home',
    component: () => import(/* webpackPrefetch: true */ './albumList'),
    needLogin: false,
    exact: true,
    title: '作品选辑',
    shouldTab: true,
    keepAlive: true,
  },
  {
    path: '/about-us',
    name: 'Home',
    component: () => import(/* webpackPrefetch: true */ './aboutUs'),
    needLogin: false,
    exact: true,
    title: '关于我们',
    shouldTab: true,
    keepAlive: true,
  },
]

export default routers