<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" :style="{backgroundImage: `url(http://124.223.113.202:1337${$page.post.cover.url})`}">
      <!-- <div class="overlay"></div> -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{$page.post.title}}</h1>
              <p class="post-meta">
                Posted by
                <a href="#"> wjp </a>
                on {{$page.post.created_at}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto" v-html="renderMd($page.post.content)"> </div>
        </div>
      </div>
    </article>
  </Layout>  
</template>

<script>
import MarkDownIt from 'markdown-it'
let md = new MarkDownIt()
export default {
  name: 'PostsPage',
  methods:{
    renderMd( mdStr ){
      return md.render(mdStr)
    }
  }
}

</script>

<page-query>
query ($id: ID!){
  post: strapiPost(id : $id){
        cover{
          url
        }
        id
        title
        content
        created_at
        tags{
          id
          title
        
    }
  }
}
</page-query>