<template>
    <div>
        <header>
            <nav>
                <h1 class="logo">Shop</h1>
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/about">About</nuxt-link>
                <nuxt-link to="/products">Products</nuxt-link>
            </nav>
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>
nav {
    margin: 0;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 12px;
    font-size: 18px;
    padding: 10px;
}

nav a:hover {
    color: orange;
}

.logo {
    margin-right: auto;
    padding-left: 10px;
    color: white;
}
</style>