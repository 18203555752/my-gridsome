<template>
    <Layout>
		<!-- Page Header -->
		<header class="masthead" style="background-image: url('/img/home-bg.jpg')">
			<div class="overlay"></div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="site-heading">
							<h1>{{$page.tag.title}}</h1>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto" >
					<div class="post-preview" v-for="(posts,index) of $page.tag.posts" :key="index">
						<g-link :to="'/post/'+posts.id">
							<h2 class="post-title">
								{{posts.title}}
							</h2>
						</g-link>
						<p class="post-meta">
							Posted by
							<a href="#"> wjp </a>
							on {{posts.created_at}}
						</p>
						<hr>
					</div>
					<!-- Pager -->
					<!-- <Pager :info="$page.posts.pageInfo"/> -->
				</div>				
			</div>			
		</div>
  	</Layout>
</template>

<script>
export default {

}
</script>
<page-query>
    query($id: ID!){
        tag: strapiTag(id:$id){
            title
            id
            posts{
                id
                title
                created_at
            }
        }
    }
</page-query>
<style>

</style>