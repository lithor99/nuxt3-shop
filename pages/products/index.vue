<template>
    <div class="container">
        <div v-for="product in data.products">
            <nuxt-link :to="`/products/${product.id}`">
                <h2 class="title">{{ product.title }}</h2>
            </nuxt-link>
            <img :src="product.thumbnail">
        </div>
    </div>
</template>

<script setup>
//set page title and description
useHead({
    title: "Products",
    meta: [
        { name: "description", content: "product description" },
    ]
})

const { data: data } = await useFetch('https://dummyjson.com/products?limit=10&skip=0')
</script>
 
<style  scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container div {
    width: 300px;
    height: 300px;
    margin: 30px 15px;
    background: #333;
}

.title {
    color: white;
    text-align: center;
    font-size: 1.2em;
}

.container div :hover {
    background: orange;
}

img {
    width: 300px;
    height: 300px;
}

a {
    text-decoration: none;
}
</style>