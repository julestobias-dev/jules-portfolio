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
      <div class="mobile-exp-container">
        <MainExperience />
      </div>
      <div class="mobile-projects-container">
        <MainProjects />
      </div>
    </div>
  </div>
</template>

<script>
import MainAbout from "./components/MainAbout.vue";
import MainExperience from "./components/MainExperience.vue";
import MainProjects from "./components/MainProjects.vue";

export default {
  name: "App",
  components: {
    MainAbout,
    MainExperience,
    MainProjects,
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
          component: "MainExperience",
        },
        {
          label: "PROJECTS",
          component: "MainProjects",
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
        {
          label: "Code Pen",
          link: "https://codepen.io/jules-dev",
          icon: "la:codepen",
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
