<template>
  <div id="app">
    <Header />
    <div class="row">
      <Navigation />
    </div>
    <div class="row last-row">
      <SideMenu />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Navigation from "@/components/Navigation.vue";
import SideMenu from "@/components/SideMenu.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Navigation,
    SideMenu,
    Footer,
  },
};
</script>

<style lang="scss">
body {
  margin: 0px;
}

#app {
  font-family: "Roboto", sans-serif;
}

* {
  box-sizing: border-box;
}

.dash {
  padding-top: 50px;
  padding-bottom: 80px;
}

.last-row {
  padding-bottom: 80px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
}

[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  .col-s-1 {
    width: 8.33%;
  }
  .col-s-2 {
    width: 16.66%;
  }
  .col-s-3 {
    width: 25%;
  }
  .col-s-4 {
    width: 33.33%;
  }
  .col-s-5 {
    width: 41.66%;
  }
  .col-s-6 {
    width: 50%;
  }
  .col-s-7 {
    width: 58.33%;
  }
  .col-s-8 {
    width: 66.66%;
  }
  .col-s-9 {
    width: 75%;
  }
  .col-s-10 {
    width: 83.33%;
  }
  .col-s-11 {
    width: 91.66%;
  }
  .col-s-12 {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) {
  .col-1 {
    width: 8.33%;
  }
  .col-2 {
    width: 16.66%;
  }
  .col-3 {
    width: 25%;
  }
  .col-4 {
    width: 33.33%;
  }
  .col-5 {
    width: 41.66%;
  }
  .col-6 {
    width: 50%;
  }
  .col-7 {
    width: 58.33%;
  }
  .col-8 {
    width: 66.66%;
  }
  .col-9 {
    width: 75%;
  }
  .col-10 {
    width: 83.33%;
  }
  .col-11 {
    width: 91.66%;
  }
  .col-12 {
    width: 100%;
  }
}
</style>
