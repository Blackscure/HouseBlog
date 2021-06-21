<template>
<header>
    <nav class="conntainer">
         <div class="branding">
             <router-link class="header" :to="{ name: 'Home' }">HouseBlogs</router-link>
         </div>
         <div class="nav-links">
             <ul>
                <router-link class="link" to='#'>Home</router-link>
                <router-link class="link" to='#'>Blogs</router-link>
                <router-link class="link" to='#'>Create Post</router-link>
                <router-link class="link" to='#'>Login/Register</router-link>
             </ul>
         </div>
    </nav>
    <menuIcon/>
    <transition name="mobile-nav">
           <ul>
                <router-link class="link" to='#'>Home</router-link>
                <router-link class="link" to='#'>Blogs</router-link>
                <router-link class="link" to='#'>Create Post</router-link>
                <router-link class="link" to='#'>Login/Register</router-link>
             </ul>
    </transition>
</header>
</template>

<script>
import menuIcon from '../assets/Icons/bars-regular.svg';
export default {
    name: 'navigation',
    components:{
        menuIcon
    }
};
</script>

<style lang="scss" scoped>

header {
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 5px 10px #888888;
    z-index: 99;
}

.link {
    font-weight: 500;
    padding: 0 8px;
    transition: .3s color ease;

    &:hover {
        color: aqua;
    }
}

nav {
    display: flex;
    padding: 25px 0;

    .branding {
        display: flex;
        align-items: center;

        .header {
            font-weight: 600;
            font-size: 24px;
            color: black;
            text-decoration: none;
        }
    }
}

</style>