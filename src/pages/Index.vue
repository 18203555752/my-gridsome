<template>

	<Layout>
		<!-- Page Header -->
		<header 
			class="masthead" 
			:style="{backgroundImage: `url(http://124.223.113.202:1337/uploads/thumbnail_2e7f189d56bbcd294cc0934dd297c5c9_57578072d6.jpeg)`}"
		>
			<div class="overlay"></div>
			<div class="container" style="z-index:12;position:relative">
				<div class="row">
					<div class="col-lg-8 col-md-10 mx-auto">
						<div class="site-heading">
							<h1>{{`我的博客丶`}}</h1>
							<span class="subheading">{{`生活、经历、学习`}}</span>
						</div>
					</div>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-10 mx-auto" >
					<div class="post-preview" v-for="(edges,index) of $page.posts.edges" :key="index">
						<g-link :to="'/post/'+edges.node.id">
							<h2 class="post-title">
								{{edges.node.title}}
							</h2>
						</g-link>
						<p class="post-meta">
							Posted by
							<a href="#"> wjp </a>
							on {{edges.node.created_at}}
						</p>

						<span v-for="(tags) of edges.node.tags" :key="tags.id">
							<g-link :to="'/tag/'+tags.id">{{tags.title}}</g-link> &nbsp;&nbsp;
						</span>
						<hr>
					</div>
					<!-- Pager -->
					<Pager :info="$page.posts.pageInfo"/>
				</div>				
			</div>			
		</div>
  	</Layout>
</template>

<script>
import { Pager } from 'gridsome'
export default {
	components:{Pager},
	metaInfo: {
		title: 'Hello, world!'
	},
	computed:{
		// general(){
		// 	return this.$page.general.edges[0].node
		// }
	}
}
</script>
<page-query>
	query ($page:Int){
		posts: allStrapiPost (perPage:2 , page: $page) @paginate{
			pageInfo{
				totalPages
				currentPage
			}
			edges{
				node{
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
		}

		
	}
</page-query>
<style>
.home-links a {
  margin-right: 1rem;
}
</style>
