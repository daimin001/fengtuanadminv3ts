export default [
  {
    auth_id: 1,
    icon: 'icon-home',
    auth_name: '后台首页',
    path: '',
    type: 1,
    auth_pid: 0,
    auth_pname: '',
    keep_alive: 0,
    component: '',
    sort: 1,
    created_at: '0',
    updated_at: '0',
    children: [
      {
        auth_id: 101,
        icon: 'icon-data-analysis',
        auth_name: '数据分析',
        path: '/analysis',
        type: 1,
        auth_pid: 1,
        auth_pname: '后台首页',
        keep_alive: 1,
        component: '@/views/index/analysis.vue',
        sort: 101,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 102,
        icon: 'icon-histogram-',
        auth_name: '大屏数据可视化',
        path: '/bigdata',
        type: 1,
        auth_pid: 1,
        auth_pname: '后台首页',
        keep_alive: 1,
        component: '@/views/index/bigData.vue',
        sort: 102,
        created_at: '0',
        updated_at: '0'
      }
    ]
  },
  {
    auth_id: 2,
    icon: 'icon-dianying',
    auth_name: '锋神电影',
    path: '',
    type: 1,
    auth_pid: 0,
    auth_pname: '',
    keep_alive: 0,
    component: '',
    sort: 2,
    created_at: '0',
    updated_at: '0',
    children: [
      {
        auth_id: 201,
        icon: 'icon-dianyingpiao',
        auth_name: '影院管理',
        path: '/fsdy/cinema',
        type: 1,
        auth_pid: 2,
        auth_pname: '锋神电影',
        keep_alive: 1,
        component: '@/views/fsdy/cinema/index.vue',
        sort: 201,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 202,
        icon: '',
        auth_name: '影院创建',
        path: '',
        type: 2,
        auth_pid: 2,
        auth_pname: '锋神电影',
        keep_alive: 0,
        component: '',
        sort: 202,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 203,
        icon: '',
        auth_name: '影院删除',
        path: '',
        type: 2,
        auth_pid: 2,
        auth_pname: '锋神电影',
        keep_alive: 0,
        component: '',
        sort: 203,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 204,
        icon: 'icon-yingyuan',
        auth_name: '电影管理',
        path: '/fsdy/film',
        type: 1,
        auth_pid: 2,
        auth_pname: '锋神电影',
        keep_alive: 1,
        component: '@/views/fsdy/film/index.vue',
        sort: 204,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 205,
        icon: '',
        auth_name: '电影创建',
        path: '',
        type: 2,
        auth_pid: 2,
        auth_pname: '锋神电影',
        keep_alive: 0,
        component: '',
        sort: 205,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 206,
        icon: '',
        auth_name: '电影删除',
        path: '',
        type: 2,
        auth_pid: 2,
        auth_pname: '锋神电影',
        keep_alive: 0,
        component: '',
        sort: 206,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 207,
        icon: 'icon-yinle',
        auth_name: '音乐管理',
        path: '/fsdy/music',
        type: 1,
        auth_pid: 2,
        auth_pname: '锋神电影',
        keep_alive: 1,
        component: '@/views/fsdy/music/index.vue',
        sort: 207,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 208,
        icon: '',
        auth_name: '音乐创建',
        path: '',
        type: 2,
        auth_pid: 2,
        auth_pname: '锋神电影',
        keep_alive: 0,
        component: '',
        sort: 208,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 209,
        icon: '',
        auth_name: '音乐删除',
        path: '',
        type: 2,
        auth_pid: 2,
        auth_pname: '锋神电影',
        keep_alive: 0,
        component: '',
        sort: 209,
        created_at: '0',
        updated_at: '0'
      }
    ]
  },
  {
    auth_id: 3,
    icon: 'icon-elment',
    auth_name: '锋团外卖 暂无',
    path: '',
    type: 1,
    auth_pid: 0,
    auth_pname: '',
    keep_alive: 0,
    component: '',
    sort: 3,
    created_at: '0',
    updated_at: '0',
    children: [
      {
        auth_id: 301,
        icon: 'icon-mendianguanli',
        auth_name: '门店管理',
        path: '/ftwm/store',
        type: 1,
        auth_pid: 3,
        auth_pname: '锋团外卖',
        keep_alive: 1,
        component: '@/views/ftwm/store/index.vue',
        sort: 301,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 302,
        icon: '',
        auth_name: '门店创建',
        path: '',
        type: 2,
        auth_pid: 3,
        auth_pname: '锋团外卖',
        keep_alive: 0,
        component: '',
        sort: 302,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 303,
        icon: '',
        auth_name: '门店删除',
        path: '',
        type: 2,
        auth_pid: 3,
        auth_pname: '锋团外卖',
        keep_alive: 0,
        component: '',
        sort: 303,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 304,
        icon: 'icon-shangpin',
        auth_name: '商品管理',
        path: '/ftwm/goods',
        type: 1,
        auth_pid: 3,
        auth_pname: '锋团外卖',
        keep_alive: 1,
        component: '@/views/ftwm/goods/index.vue',
        sort: 304,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 305,
        icon: '',
        auth_name: '商品创建',
        path: '',
        type: 2,
        auth_pid: 3,
        auth_pname: '锋团外卖',
        keep_alive: 0,
        component: '',
        sort: 305,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 306,
        icon: '',
        auth_name: '商品删除',
        path: '',
        type: 2,
        auth_pid: 3,
        auth_pname: '锋团外卖',
        keep_alive: 0,
        component: '',
        sort: 306,
        created_at: '0',
        updated_at: '0'
      }
    ]
  },
  {
    auth_id: 8,
    icon: 'icon-qiche',
    auth_name: '堵车么小程序',
    path: '',
    type: 1,
    auth_pid: 0,
    auth_pname: '',
    keep_alive: 0,
    component: '',
    sort: 3,
    created_at: '0',
    updated_at: '0',
    children: [
      {
        auth_id: 801,
        icon: 'icon-liebiao',
        auth_name: '微信用户',
        path: '/dcm/user',
        type: 1,
        auth_pid: 8,
        auth_pname: '堵车么小程序',
        keep_alive: 1,
        component: '@/views/dcm/user.vue',
        sort: 801,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 802,
        icon: 'icon-liebiao',
        auth_name: '路况信息',
        path: '/dcm/road',
        type: 1,
        auth_pid: 8,
        auth_pname: '堵车么小程序',
        keep_alive: 1,
        component: '@/views/dcm/road.vue',
        sort: 802,
        created_at: '0',
        updated_at: '0'
      }
    ]
  },
  {
    auth_id: 4,
    icon: 'icon-dingdandaifukuan',
    auth_name: '订单管理',
    path: '',
    type: 1,
    auth_pid: 0,
    auth_pname: '',
    keep_alive: 0,
    component: '',
    sort: 4,
    created_at: '0',
    updated_at: '0',
    children: [
      {
        auth_id: 401,
        icon: 'icon-liebiao',
        auth_name: '订单列表',
        path: '/order',
        type: 1,
        auth_pid: 4,
        auth_pname: '订单管理',
        keep_alive: 1,
        component: '@/views/order/index.vue',
        sort: 401,
        created_at: '0',
        updated_at: '0'
      }
    ]
  },
  {
    auth_id: 5,
    icon: 'icon-yonghuguanli',
    auth_name: '用户管理',
    path: '',
    type: 1,
    auth_pid: 0,
    auth_pname: '',
    keep_alive: 0,
    component: '',
    sort: 5,
    created_at: '0',
    updated_at: '0',
    children: [
      {
        auth_id: 501,
        icon: 'icon-liebiao',
        auth_name: '用户列表',
        path: '/user',
        type: 1,
        auth_pid: 5,
        auth_pname: '用户管理',
        keep_alive: 1,
        component: '@/views/user/index.vue',
        sort: 501,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 502,
        icon: 'icon-zengjia1',
        auth_name: '用户创建',
        path: '/user/create',
        type: 1,
        auth_pid: 5,
        auth_pname: '用户管理',
        keep_alive: 1,
        component: '@/views/user/create.vue',
        sort: 502,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 503,
        icon: '',
        auth_name: '用户编辑',
        path: '',
        type: 2,
        auth_pid: 5,
        auth_pname: '用户管理',
        keep_alive: 0,
        component: '',
        sort: 503,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 504,
        icon: '',
        auth_name: '用户删除',
        path: '',
        type: 2,
        auth_pid: 5,
        auth_pname: '用户管理',
        keep_alive: 0,
        component: '',
        sort: 504,
        created_at: '0',
        updated_at: '0'
      }
    ]
  },
  {
    auth_id: 6,
    icon: 'icon-jiaoseguanli',
    auth_name: '角色管理',
    path: '',
    type: 1,
    auth_pid: 0,
    auth_pname: '',
    keep_alive: 0,
    component: '',
    sort: 6,
    created_at: '0',
    updated_at: '0',
    children: [
      {
        auth_id: 601,
        icon: 'icon-liebiao',
        auth_name: '角色列表',
        path: '/role',
        type: 1,
        auth_pid: 6,
        auth_pname: '角色管理',
        keep_alive: 1,
        component: '@/views/role/index.vue',
        sort: 601,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 602,
        icon: 'icon-zengjia1',
        auth_name: '角色创建',
        path: '/role/create',
        type: 1,
        auth_pid: 6,
        auth_pname: '角色管理',
        keep_alive: 1,
        component: '@/views/role/create.vue',
        sort: 602,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 603,
        icon: '',
        auth_name: '角色编辑',
        path: '',
        type: 2,
        auth_pid: 6,
        auth_pname: '角色管理',
        keep_alive: 0,
        component: '',
        sort: 603,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 604,
        icon: '',
        auth_name: '角色删除',
        path: '',
        type: 2,
        auth_pid: 6,
        auth_pname: '角色管理',
        keep_alive: 0,
        component: '',
        sort: 604,
        created_at: '0',
        updated_at: '0'
      }
    ]
  },
  {
    auth_id: 7,
    icon: 'icon-fuwuquanxianguanli',
    auth_name: '权限管理',
    path: '',
    type: 1,
    auth_pid: 0,
    auth_pname: '',
    keep_alive: 0,
    component: '',
    sort: 7,
    created_at: '0',
    updated_at: '0',
    children: [
      {
        auth_id: 701,
        icon: 'icon-liebiao',
        auth_name: '权限列表',
        path: '/auth',
        type: 1,
        auth_pid: 7,
        auth_pname: '权限管理',
        keep_alive: 1,
        component: '@/views/auth/index.vue',
        sort: 701,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 702,
        icon: 'icon-zengjia1',
        auth_name: '权限创建',
        path: '/auth/create',
        type: 1,
        auth_pid: 7,
        auth_pname: '权限管理',
        keep_alive: 1,
        component: '@/views/auth/create.vue',
        sort: 702,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 703,
        icon: '',
        auth_name: '权限编辑',
        path: '',
        type: 2,
        auth_pid: 7,
        auth_pname: '权限管理',
        keep_alive: 0,
        component: '',
        sort: 703,
        created_at: '0',
        updated_at: '0'
      },
      {
        auth_id: 704,
        icon: '',
        auth_name: '权限删除',
        path: '',
        type: 2,
        auth_pid: 7,
        auth_pname: '权限管理',
        keep_alive: 0,
        component: '',
        sort: 704,
        created_at: '0',
        updated_at: '0'
      }
    ]
  }
]
