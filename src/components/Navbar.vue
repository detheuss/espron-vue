<template>
    <container>
        <b-navbar
            toggleable="sm"
            type="light"
            variant="fade"
            class="espron-navbar"
        >
            <b-navbar-brand href="#"><img src="../assets/Logo/logo-trans-horizontal.png" class="espron-logo" alt=""></b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">About Us</b-nav-item>
                    <b-nav-item href="#">How It Works</b-nav-item>
                    <b-nav-item href="#">Case Studies</b-nav-item>
                    <b-nav-item href="#">Contact</b-nav-item>
                </b-navbar-nav>
            </b-collapse>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-navbar>
    </container>
</template>

<style scoped>
.espron-logo {
    max-height: 3vh;
    max-width: auto;
}
.espron-navbar {
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    z-index: 1000;
    width: 100%;
    margin: 0;
}
</style>
