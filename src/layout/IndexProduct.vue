<template>
  <div class="content">
    <top-navbar-pro></top-navbar-pro>
    <menu-bar></menu-bar>
    <dashboard-content @click="toggleSidebar">

    </dashboard-content>

    <content-footer></content-footer>

  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbarPro from './TopNavbarPro.vue'
import ContentFooter from './ContentFooter.vue'
import DashboardContent from './Content.vue'
import MobileMenu from './MobileMenu.vue'
import MenuBar from './MenuBar.vue'
export default {
  components: {
    TopNavbarPro,
    ContentFooter,
    DashboardContent,
    MobileMenu,
    MenuBar
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
    }
  }
}

</script>
<style>
</style>