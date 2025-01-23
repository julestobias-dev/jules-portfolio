<template>
  <div class="experience-container">
    <div class="exp-item" v-for="(exp, index) in expList" :key="index">
      <div class="date-container">
        <p>{{ exp.date }}</p>
      </div>
      <div class="exp-details">
        <div class="exp-title-container">
          <p>{{ exp.jobTitle }}</p>
          <!-- <Icon icon="mdi:dot" width="30" height="30" class="icon" /> -->
          <p>{{ exp.companyName }}</p>
        </div>
        <div class="exp-description">
          <p>{{ exp.workDescription }}</p>
        </div>
        <div class="exp-tech-list">
          <div
            class="exp-tech-item"
            v-for="(tech, techIndex) in exp.techList"
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
      ],

      expList: [
        {
          date: "Aug 2024 - Present",
          jobTitle: "Software Engineering Specialist - Frontend",
          companyName: "Simpletrade Solutions Inc / Dropify PH ",
          workDescription:
            "Led the development and maintenance of the company's Sellers Hub website thru implementation of features and bug fix. One of the major feature that I developed was the POS System being used by the company's subscribers.",
          techList: [
            "VueJS",
            "Javascript",
            "Typescript",
            "Axios",
            "HTML",
            "SASS",
            "Gitlab",
            "VSCode",
            "AWS Amplify",
            "AWS Cognito",
            "AWS S3",
            "AWS Cloudfront",
            "Cloudinary",
            "Clickup",
            "Lark",
            "Primevue",
            "Iconfiy",
          ],
        },
        {
          date: "Feb 2024 - Aug 2024",
          jobTitle: "Developer",
          companyName: "TrycanSoft",
          workDescription:
            "Design, develop, and maintain frontend components of web applications both desktop and mobile. Implement responsive user interface and collaborate with Backend developers to integrate frontend components with web sockets and API.",
          techList: [
            "NextJS",
            "HTML",
            "SASS",
            "Tailwind",
            "Javascript",
            "IntelliJ",
            "Webstorm",
            "Gitlab",
            "Photoshop",
          ],
        },
        {
          date: "Jul 2023 - Dec 2023",
          jobTitle: "Software Engineer",
          companyName: "Rebar Solutions Inc",
          workDescription:
            "Frontend development, Backend Integration, and Bug Fixing for a web application, of a Client under a Construction line of business. This involves integration of REST API functionalities",
          techList: [
            "NextJS",
            "Javascript",
            "Tailwind",
            "Figma",
            "JIRA",
            "Gitlab",
            "VSCode",
          ],
        },
        {
          date: "May 2019 - Apr 2023",
          jobTitle: "Billing Associate",
          companyName: "JPMorgan Chase & Co.",
          workDescription:
            "Collaborated with Software Developers to establish an automation process for an account creation process which minimized the processing time per item and reduced the manual touch points resulting to team's higher accuracy and productivity. Maintained partnership with internal teams to ensure seamless process continuity",
          techList: [
            "SQL",
            "Microsoft Excel",
            "Google Productivity Tools",
            "JIRA",
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
  },
};
</script>
