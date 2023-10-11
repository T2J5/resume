export const projectData = {
  'CYCLONE AI CHAT': {
    name: 'CYCLONE AI CHAT',
    skills: ['react', 'tailwindCss', 'zustand', 'typescript', 'umi'],
    desc: [
      '负责整体框架设计与搭建，规范制定',
      '对话内容做流式输出',
      '使用zustand-persist做数据持久化处理',
      '使用插件化思维处理对话内容'
    ],
  },
  'CYCLONE APPS': {
    name: 'CYCLONE APPS',
    skills: ['react', 'lerna', 'umi', 'typescript'],
    desc: [
      '负责整体框架设计与搭建，规范制定和code review',
      '使用zx写脚本：一键打包，本地开发优化，同步更新各组件库的版本号，一键创建新表单',
      'schema转json设计',
      '使用context规范化处理表单组件样式',
      '配置化思维处理表单组件',
      '使用工厂方法+抽象方法处理组件的事件，同时利用lerna进行分包处理',
      '为了方便其他项目使用，添加数据防腐层和适配层'
    ],
  },
  'CIRI': {
    name: 'CIRI',
    skills: ['react', 'electron', 'typescript', 'taro', 'luckysheet-excel', 'indexDB', 'worker'],
    desc: [
      '人机表单数据出参入参的统一化处理(加一层控制层)',
      '为了定制化功能，使用ciri-crypto + wasm(二进制传输)进行接口数据加密',
      '使用react-pdf + luckysheet 处理pdf和excel',
      '使用Web Worker对excel做渲染优化',
      '为支持项目定制化，使用zx写脚本自定义配置',
      '使用electron-builder为windows打包',
      '独立开发完成taro企微版本'
    ],
  },
  '薄荷健康APP': {
    name: '薄荷健康APP',
    skills: ['react', 'redux', 'react-router', 'sentry', 'webpack'],
    desc: [
      '使用echarts做图表展示',
      '利用url参数进行主体化设置',
      '使用sentry + docker 搭建项目异常监控系统'
    ]
  },
  'bamaying': {
    name: '爸妈营-后台(全栈)',
    skills: ['react', 'webpack', 'rollup', 'antd', 'node'],
    desc: [
      '使用antd-admin搭建后台项目，后端使用express+mongodb',
      '使用react-sortable设计标签树展示和修改',
      '使用react-hooks重构项目',
      '微信公众号文章爬虫并输入到后台编辑器',
      '编辑器功能扩展文章拆分功能和添加卡片功能',
      '使用rollup打包公共包到私有npm源'
    ],
  },
  'bamaying-mini': {
    name: '爸妈营小程序',
    skills: ['react', 'wx-mini-program'],
    desc: [
      '使用原生小程序搭建项目',
      '语音助手接入',
      'css3实现PK的动画效果 + 自行完成日历打卡全部功能（前后端）',
      '使用db-migrate做数据库迁移和修改'
    ]
  }
}