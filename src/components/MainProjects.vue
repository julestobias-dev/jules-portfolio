<template>
  <div class="projects-container">
    <div
      class="project-item"
      v-for="(project, index) in projectList"
      :key="index"
      @click="handleLinkOpen(project.link)"
    >
      <div class="img-container">
        <img :src="project.imgURL" :alt="`Jules - ${project.title}`" />
      </div>
      <div class="project-details">
        <div class="project-title-container">
          <p>{{ project.title }}</p>
          <!-- <Icon icon="mdi:dot" width="30" height="30" class="icon" /> -->
          <!-- <p>{{ project.companyName }}</p> -->
        </div>
        <div class="project-description">
          <p>{{ project.description }}</p>
        </div>
        <div class="project-tech-list">
          <div
            class="project-tech-item"
            v-for="(tech, techIndex) in project.techList"
            :key="techIndex"
          >
            <Icon
              :icon="displayIcon(tech)"
              width="18"
              height="18"
              class="tech-icon"
            />
            <p>{{ tech }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      techListReference: [
        {
          label: "VueJS",
          icon: "teenyicons:vue-solid",
        },
        {
          label: "Javascript",
          icon: "ri:javascript-fill",
        },
        {
          label: "Typescript",
          icon: "lineicons:typescript",
        },
        {
          label: "HTML",
          icon: "flowbite:html-solid",
        },
        {
          label: "SASS",
          icon: "simple-icons:sass",
        },
        {
          label: "Gitlab",
          icon: "file-icons:gitlab",
        },
        {
          label: "VSCode",
          icon: "akar-icons:vscode-fill",
        },
        {
          label: "AWS Amplify",
          icon: "simple-icons:awsamplify",
        },
        {
          label: "AWS Cognito",
          icon: "logos:aws-cognito",
        },
        {
          label: "AWS S3",
          icon: "logos:aws-s3",
        },
        {
          label: "AWS Cloudfront",
          icon: "logos:aws-cloudfront",
        },
        {
          label: "Cloudinary",
          icon: "simple-icons:cloudinary",
        },
        {
          label: "Clickup",
          icon: "lineicons:clickup",
        },
        {
          label: "Lark",
          icon: "icon-park-outline:lark",
        },
        {
          label: "Axios",
          icon: "devicon-plain:axios",
        },
        {
          label: "Primevue",
          icon: "simple-icons:primevue",
        },
        {
          label: "Iconfiy",
          icon: "line-md:iconify2-static",
        },
        {
          label: "NextJS",
          icon: "akar-icons:nextjs-fill",
        },
        {
          label: "IntelliJ",
          icon: "devicon-plain:intellij",
        },
        {
          label: "Webstorm",
          icon: "devicon-plain:webstorm",
        },
        {
          label: "Photoshop",
          icon: "mage:photoshop",
        },
        {
          label: "SQL",
          icon: "ph:file-sql",
        },
        {
          label: "Microsoft Excel",
          icon: "file-icons:microsoft-excel",
        },
        {
          label: "Google Productivity Tools",
          icon: "logos:google-icon",
        },
        {
          label: "JIRA",
          icon: "mdi:jira",
        },
        {
          label: "Tailwind",
          icon: "flowbite:tailwind-solid",
        },
        {
          label: "Figma",
          icon: "solar:figma-bold-duotone",
        },
        {
          label: "CSS",
          icon: "flowbite:css-solid",
        },
        {
          label: "Bootstrap",
          icon: "ri:bootstrap-fill",
        },
        {
          label: "Sublime Text",
          icon: "simple-icons:sublimetext",
        },
        {
          label: "Github Pages",
          icon: "simple-icons:githubpages",
        },
        {
          label: "ReactJS",
          icon: "ri:reactjs-line",
        },
        {
          label: "MongoDB",
          icon: "lineicons:mongodb",
        },
        {
          label: "ExpressJS",
          icon: "lineicons:expressjs",
        },
        {
          label: "NodeJS",
          icon: "ri:nodejs-line",
        },
        {
          label: "Postman",
          icon: "devicon-plain:postman",
        },
        {
          label: "Vercel",
          icon: "ri:vercel-fill",
        },
      ],

      projectList: [
        {
          imgURL:
            "https://res.cloudinary.com/dmbjm2dpp/image/upload/v1737676651/e-commerce_abzmrk.png",
          link: "https://e-commerce-app-jtobias.vercel.app/",
          title: "E-commerce website",
          description:
            "A responsive E-commerce website with register, login, view products, admin retrieval, activation, and deactivation of products. This website was built in 2023 as a capstone project deployed in vercel under a Full Stack Web Developer Course.",
          techList: [
            "ReactJS",
            "HTML",
            "CSS",
            "Javascript",
            "Sublime Text",
            "Bootstrap",
            "MongoDB",
            "ExpressJS",
            "NodeJS",
            "Postman",
            "Gitlab",
            "Vercel",
          ],
        },
        {
          imgURL:
            "https://res.cloudinary.com/dmbjm2dpp/image/upload/v1737676651/portfolio_ksldrm.png",
          link: "https://julestobias.github.io/myportfolio/",
          title: "My Portfolio v1",
          description:
            "An old portfolio website deployed in github pages built in 2023 as one of my capstone projects to showcase the HTML and CSS learnings under a Full Stack Web Developer Course.",
          techList: [
            "HTML",
            "CSS",
            "Bootstrap",
            "Sublime Text",
            "Gitlab",
            "Github Pages",
          ],
        },
      ],
    };
  },

  methods: {
    displayIcon(label) {
      return (
        this.techListReference.find((item) => item.label == label)?.icon ||
        "material-symbols:star-rounded"
      );
    },
    handleLinkOpen(url) {
      window.open(url, "_blank");
    },
  },
};
</script>
