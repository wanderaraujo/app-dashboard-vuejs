<template>
  <div class="col-3 col-s-3">
    <nav :class="$store.getters.urlActive" v-on:click.prevent>
      <router-link to="/" @click.native="changeUrl('Company Data')"
        >Company Data</router-link
      >
      <router-link
        to="/company-table"
        @click.native="changeUrl('Company Table')"
        >Company Table</router-link
      >
      <router-link to="/company-page" @click.native="changeUrl('Company Page')"
        >Company Page</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
  methods: {
    changeUrl: function (url) {
      this.$store.dispatch("updateUrl", url);
    },
  },
};
</script>

<style scoped>
nav {
  display: grid;
  font-size: 15px;
  border-radius: 6px;
  box-sizing: border-box;
  background-color: #ffffff;
  border: 1px solid #d4d9e3;
}

nav a {
  display: inline-block;
  padding: 35px 30px;
  color: #5d699a !important;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none !important;
  line-height: 1;
  text-transform: uppercase;
  background-color: transparent;
  border-bottom: 1px solid #d4d9e3;

  -webkit-transition: background-color 0.25s;
  -moz-transition: background-color 0.25s;
  transition: background-color 0.25s;
}

nav a:first-child {
  border-radius: 2px 0 0 2px;
}

nav a:last-child {
  border-radius: 0 2px 2px 0;
}

nav .router-link-exact-active {
  background-color: #fafbfc;
  color: #505050 !important;
  border-left: 4px solid #344279;
}
</style>
