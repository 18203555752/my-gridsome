// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'wjp',
  siteDescription:'大前端', //meta标签的content属性，是网站的基本介绍，有利于 SEO搜索引擎优化
  pathPrefix:'',  //类似于webpack的 assetPublic，跟网站部署的子目录有关的
  titleTemplate:'%s - <siteName>',
  //定义路由模板  用于集合
  templates:{
    Post:[
      {
        path: '/postdemo/:id',
        component: './src/templates/Post-demo.vue'
      }
    ],
    StrapiPost:[
      {
        path: '/post/:id',
        component: './src/templates/Post.vue'
      }
    ],
    StrapiTag:[
      {
        path: '/tag/:id',
        component: './src/templates/Tag.vue'
      }
    ]
  },  
  plugins: [
    {
      use : '@gridsome/source-filesystem',
      options:{
        typeName:'BlogPost',
        path:'./static/content/blog/**/*.md',
        remark: {
          //Config options can be added here
        }
      }
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://124.223.113.202:1337',
        contentTypes: ['post','tag'], // 查询的数据类型
        queryLimit: 1000, // Defaults to 100
        // singleTypes: ['homeindex'], // 单个节点
        // loginData: {
        //   identifier: 'xjb',
        //   password: '123456'
        // }
      }
    }
  ]
}
