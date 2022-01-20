.<template>
  <header class="header" id="navbar-collapse-toggle">
    <!-- Fixed Navigation Starts -->
    <ul class="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
        <li class="icon-box active">
            <i class="fa fa-home"></i>
            <router-link :to="{name:'Home'}">
                <h2>Home</h2>
            </router-link>
        </li>
        <li class="icon-box">
            <i class="fa fa-user"></i>
            <router-link :to="{name:'About'}">
                <h2>About</h2>
            </router-link>
        </li>
        <li class="icon-box">
            <i class="fa fa-briefcase"></i>
            <router-link :to="{name:'Portfolio'}">
                <h2>Portfolio</h2>
            </router-link>
        </li>
        <li class="icon-box">
            <i class="fa fa-envelope-open"></i>
            <router-link :to="{name:'Contact'}">
                <h2>Contact</h2>
            </router-link>
        </li>
        <li class="icon-box">
            <i class="fa fa-comments"></i>
            <router-link :to="{name:'Blog'}">
                <h2>Blog</h2>
            </router-link>
        </li>
    </ul>
    <!-- Fixed Navigation Ends -->
    <!-- Mobile Menu Starts -->
    <nav role="navigation" class="d-block d-lg-none">
        <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul class="list-unstyled" id="menu">
                <li class="active"><a href="index.html"><i class="fa fa-home"></i><span>Home</span></a></li>
                <li><a href="about.html"><i class="fa fa-user"></i><span>About</span></a></li>
                <li><a href="portfolio.html"><i class="fa fa-folder-open"></i><span>Portfolio</span></a></li>
                <li><a href="contact.html"><i class="fa fa-envelope-open"></i><span>Contact</span></a></li>
                <li><a href="blog.html"><i class="fa fa-comments"></i><span>Blog</span></a></li>
            </ul>
        </div>
    </nav>
    <!-- Mobile Menu Ends -->
</header>
</template>

<script>
export default {

}
</script>

<style>

</style>