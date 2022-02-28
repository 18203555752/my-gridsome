<template>
    <div>
        <h1>posts2</h1>
        <ul>
            <li v-for="(item,index) of $page.posts.edges" :key="index">
                <g-link :to="item.node.path">{{item.node.title}}</g-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>
<page-query>
    query{
        posts: allPost{
            edges{
                node{
                    id
                    title
                    path
                }                
            }
        }
    }
</page-query>
<style>

</style>