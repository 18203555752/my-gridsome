<template>
    <Layout>
        <div>
            <h1>{{$page.post.title}}</h1>
            <div>{{$page.post.content}}</div>
        </div>
    </Layout>
</template>

<script>
export default {
    name:'PostPage',
    metaInfo(){
        return {
            title: this.$page.post.title
        }
    }
}
</script>
<page-query>
    query($id:ID!){
        post(id:$id){
            id
            title
            content
        }
    }
</page-query>
<style>

</style>