// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "A select list of my publications showcasing relevant research.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-lectures",
          title: "lectures",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lectures/index.html";
          },
        },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-datasets",
              title: "datasets",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-robot-fleet",
              title: "robot fleet",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "nav-awards-amp-recognitions",
          title: "awards &amp; recognitions",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "post-introduction-to-compuational-photography-and-computer-vision",
      
        title: "Introduction to Compuational Photography and Computer Vision",
      
      description: "This lecture introduces key terminology and philosophical concepts of computer vision, the basic interpretation of images by the computer, basic intro to camera sensors and image manipulation via kernels. The lecture ends with an example of kernel convolution using Matlab (The software mainly used by the class).",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/lectures/2023/IntroCV/";
        
      },
    },{id: "post-introductory-robotics-tutorials",
      
        title: "Introductory Robotics Tutorials",
      
      description: "This series consists of a selection of hands-on tutorials which covers the practical side of building a robot from scratch. These tutorials are meant to develop the auxiliary skillsets necessary for robotics.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/lectures/2023/roboticsbasics/";
        
      },
    },{id: "post-capacitors-inductors",
      
        title: "Capacitors/ Inductors",
      
      description: "ecture provides an overview of capacitors and inductors, explaining their fundamental properties, behaviors, and roles in electrical circuits.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/lectures/2023/capacitorsinductors/";
        
      },
    },{id: "post-conditional-generative-models-for-implicit-plant-growth-modeling",
      
        title: "Conditional Generative Models for Implicit Plant Growth modeling.",
      
      description: "Can we predict what a plant will look like in the latter stages with only a sequence of images of the plant in the early stages? We explore this question further in the presentation.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/lectures/2023/PhDSeminar1/";
        
      },
    },{id: "post-neural-radiance-fields-nerfs-a-review-and-some-recent-developments",
      
        title: "Neural Radiance Fields (NeRFs): A Review and Some Recent Developments.",
      
      description: "Overview presentation and review paper on Neural Radiance Fields (NeRF).",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/lectures/2023/NeRF/";
        
      },
    },{id: "post-conditional-random-fields-for-image-analysis",
      
        title: "Conditional Random Fields for Image Analysis",
      
      description: "Overview presentation of Discriminative random fields, also known as non-sparse conditional random fields for a 2-D lattice.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/lectures/2023/CRF/";
        
      },
    },{id: "news-hello-world-sparkles-smile",
          title: 'Hello World! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%6F%68%61%6D%65%64.%64%65%62%62%61%67%68@%6D%61%69%6C.%6D%63%67%69%6C%6C.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mohas95# your GitHub user name", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0009-4636-1024", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=fHozot8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
