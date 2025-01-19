<template>
  <div class="main-page">
    <div class="main-left">
      <div class="left-top-section">
        <div class="left-header">
          <h1>Jules Tobias</h1>
          <h3>Software Engineer</h3>
        </div>
        <div class="menu-list-wrapper">
          <div
            class="menu-wrapper"
            v-for="(menu, index) in links"
            :key="index"
            @click="handleClickComponent(menu.component)"
            :class="{ clicked: activeComponent == menu.component }"
          >
            <div class="horizontal"></div>
            <p class="menu-label">{{ menu.label }}</p>
          </div>
        </div>
      </div>
      <div class="personal-links">
        <div
          class="icons-wrapper"
          v-for="(item, index) in personalLinks"
          :key="index"
        >
          <a :href="item.link" target="_blank"
            ><Icon :icon="item.icon" width="30" height="30" class="icons"
          /></a>
        </div>
      </div>
    </div>
    <div class="main-right">
      <component :is="activeComponent"></component>
    </div>
  </div>
</template>

<script>
import MainAbout from "./components/MainAbout.vue";

export default {
  name: "App",
  components: {
    MainAbout,
  },
  data() {
    return {
      activeComponent: "MainAbout",
      links: [
        {
          label: "ABOUT",
          component: "MainAbout",
        },
        {
          label: "EXPERIENCE",
          component: "experience",
        },
        {
          label: "PROJECTS",
          component: "projects",
        },
      ],
      personalLinks: [
        {
          label: "Github",
          link: "https://github.com/julestobias-dev",
          icon: "mdi:github",
        },
        {
          label: "LinkedIn",
          link: "https://www.linkedin.com/in/julestobias",
          icon: "mdi:linkedin",
        },
      ],
    };
  },
  methods: {
    handleClickComponent(component) {
      this.activeComponent = component;
    },
  },
};
</script>
