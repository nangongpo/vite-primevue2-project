import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout/AppMain.vue'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/pages/Login.vue')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'pi pi-fw pi-home', affix: true, noCache: false }
      },
      {
        path: 'formlayout',
        name: 'formlayout',
        component: () => import('@/views/FormLayoutDemo.vue'),
        meta: { title: '表单', icon: 'pi pi-fw pi-id-card', noCache: false }
      },
      {
        path: 'input',
        name: 'input',
        component: () => import('@/views/InputDemo.vue'),
        meta: { title: '输入框', icon: 'pi pi-fw pi-check-square', noCache: false }
      },
      {
        path: 'button',
        name: 'button',
        component: () => import('@/views/ButtonDemo.vue'),
        meta: { title: '按钮', icon: 'pi pi-fw pi-mobile', noCache: false }
      },
      {
        path: 'table',
        name: 'table',
        component: () => import('@/views/TableDemo.vue'),
        meta: { title: '表格', icon: 'pi pi-fw pi-table', noCache: false }
      },
      {
        path: 'list',
        name: 'list',
        component: () => import('@/views/ListDemo.vue'),
        meta: { title: '列表', icon: 'pi pi-fw pi-list', noCache: false }
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/TreeDemo.vue'),
        meta: { title: '树', icon: 'pi pi-fw pi-share-alt', noCache: false }
      },
      {
        path: 'panel',
        name: 'panel',
        component: () => import('@/views/PanelsDemo.vue'),
        meta: { title: '面板', icon: 'pi pi-fw pi-tablet', noCache: false }
      },
      {
        path: 'overlay',
        name: 'overlay',
        component: () => import('@/views/OverlaysDemo.vue'),
        meta: { title: '遮罩层', icon: 'pi pi-fw pi-clone', noCache: false }
      },
      {
        path: 'menu',
        // name: 'menu',
        component: () => import('@/views/MenusDemo.vue'),
        meta: { title: '菜单', icon: 'pi pi-fw pi-bars', noCache: false },
        children: [
          {
            path: '',
            meta: { title: '菜单', icon: 'pi pi-fw pi-bars', noCache: false },
            component: () => import('@/views/menu/PersonalDemo.vue')
          },
          {
            path: 'seat',
            meta: { title: '菜单', icon: 'pi pi-fw pi-bars', noCache: false },
            component: () => import('@/views/menu/SeatDemo.vue')
          },
          {
            path: 'payment',
            meta: { title: '菜单', icon: 'pi pi-fw pi-bars', noCache: false },
            component: () => import('@/views/menu/PaymentDemo.vue')
          },
          {
            path: 'confirmation',
            meta: { title: '菜单', icon: 'pi pi-fw pi-bars', noCache: false },
            component: () => import('@/views/menu/ConfirmationDemo.vue')
          }]
      },
      {
        path: 'messages',
        name: 'messages',
        component: () => import('@/views/MessagesDemo.vue'),
        meta: { title: '提示', icon: 'pi pi-fw pi-comment', noCache: false }
      },
      {
        path: 'file',
        name: 'file',
        component: () => import('@/views/FileDemo.vue'),
        meta: { title: '文件上传', icon: 'pi pi-fw pi-file', noCache: false }
      },
      {
        path: 'chart',
        name: 'chart',
        component: () => import('@/views/ChartsDemo.vue'),
        meta: { title: '图表', icon: 'pi pi-fw pi-chart-bar', noCache: false }
      },
      {
        path: 'misc',
        name: 'misc',
        component: () => import('@/views/MiscDemo.vue'),
        meta: { title: '小装饰', icon: 'pi pi-fw pi-circle-off', noCache: false }
      },
      {
        path: 'icons',
        name: 'icons',
        component: () => import('@/views/utilities/Icons.vue'),
        meta: { title: '图标', icon: 'pi pi-fw pi-search', noCache: false }
      },
      {
        path: 'widgets',
        name: 'widgets',
        component: () => import('@/views/utilities/Widgets.vue'),
        meta: { title: '小组件', icon: 'pi pi-fw pi-star', noCache: false }
      },
      {
        path: 'grid',
        name: 'grid',
        component: () => import('@/views/utilities/GridDemo.vue'),
        meta: { title: '网格', icon: 'pi pi-fw pi-th-large', noCache: false }
      },
      {
        path: 'spacing',
        name: 'spacing',
        component: () => import('@/views/utilities/SpacingDemo.vue'),
        meta: { title: '空格', icon: 'pi pi-fw pi-arrow-right', noCache: false }
      },
      {
        path: 'elevation',
        name: 'elevation',
        component: () => import('@/views/utilities/ElevationDemo.vue'),
        meta: { title: '阴影', icon: 'pi pi-fw pi-external-link', noCache: false }
      },
      {
        path: 'typography',
        name: 'typography',
        component: () => import('@/views/utilities/Typography.vue'),
        meta: { title: '段落', icon: 'pi pi-fw pi-align-center', noCache: false }
      },
      {
        path: 'display',
        name: 'display',
        component: () => import('@/views/utilities/DisplayDemo.vue'),
        meta: { title: '显示', icon: 'pi pi-fw pi-desktop', noCache: false }
      },
      {
        path: 'flexbox',
        name: 'flexbox',
        component: () => import('@/views/utilities/FlexBoxDemo.vue'),
        meta: { title: 'Flexbox', icon: 'pi pi-fw pi-home', noCache: false }
      },
      {
        path: 'text',
        name: 'text',
        component: () => import('@/views/utilities/TextDemo.vue'),
        meta: { title: '文本', icon: 'pi pi-fw pi-pencil', noCache: false }
      },
      {
        path: 'empty',
        name: 'empty',
        component: () => import('@/views/EmptyPage.vue'),
        meta: { title: '空白', icon: 'pi pi-fw pi-circle-off', noCache: false }
      },
      {
        path: 'crud',
        name: 'crud',
        component: () => import('@/views/pages/CrudDemo.vue'),
        meta: { title: '表格', icon: 'pi pi-fw pi-pencil', noCache: false }
      },
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import('@/views/pages/CalendarDemo.vue'),
        meta: { title: '日历', icon: 'pi pi-fw pi-calendar-plus', noCache: false }
      },
      {
        path: 'invoice',
        name: 'invoice',
        component: () => import('@/views/pages/Invoice.vue'),
        meta: { title: '打印', icon: 'pi pi-fw pi-dollar', noCache: false }
      },
      {
        path: 'help',
        name: 'help',
        component: () => import('@/views/pages/Help.vue'),
        meta: { title: '帮助', icon: 'pi pi-fw pi-question-circle', noCache: false }
      },
      {
        path: 'documentation',
        name: 'documentation',
        component: () => import('@/views/Documentation.vue'),
        meta: { title: '文档', icon: 'pi pi-fw pi-question', noCache: false }
      },
      {
        path: 'access',
        name: 'access',
        component: () => import('@/views/pages/Access.vue'),
        meta: { title: '403', icon: 'pi pi-fw pi-lock', noCache: false }
      },
      {
        path: 'error',
        name: 'error',
        component: () => import('@/views/pages/Error.vue'),
        meta: { title: '500', icon: 'pi pi-fw pi-times-circle', noCache: false }
      },
      {
        path: 'notfound',
        name: 'notfound',
        component: () => import('@/views/pages/NotFound.vue'),
        meta: { title: '404', icon: 'pi pi-fw pi-exclamation-circle', noCache: false }
      },
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        name: 'baidu',
        component: null,
        meta: { title: 'External Link', isURL: true, icon: 'link', noCache: false }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/notfound', hidden: true }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = []

const createRouter = () => new VueRouter({
  mode: import.meta.env.VITE_ROUTER_HISTORY, // require service support
  base: import.meta.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export default router
