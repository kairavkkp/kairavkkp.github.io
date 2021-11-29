import codeIcon from "./images/code.svg";
import codepenIcon from "./images/codepen.svg";
import cssIcon from "./images/css.svg";
import designIcon from "./images/design.svg";
import dribbbleIcon from "./images/dribbble.svg";
// Social Icon
import githubIcon from "./images/github.svg";
// Skills Icons
import htmlIcon from "./images/html.svg";
import instagramIcon from "./images/instagram.svg";
import jsIcon from "./images/javascript.svg";
import reactIcon from "./images/react.svg";
import techStack from "./constants";

const myData = {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Kairav",
  headerTagline: ["Building robust", "backend solutions"],
  //   Header Paragraph
  headerParagraph:
    "Backend Developer | Jr. Data Science Engineer @ Cilans Systems Pvt. Ltd.",

  //Contact Email
  contactEmail: "kairavpithadia13@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Nuvola",
      para: "Django based Backend for Briggo Barrista Bot.",
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      projectMetadata: {
        tenure: {
          start: "November, 2020",
          end: "July, 2021",
        },
        stack: [
          techStack.DJANGO,
          techStack.DRF,
          techStack.PYTHON,
          techStack.CELERY,
          techStack.TWISTED,
          techStack.STRIPE,
          techStack.RABBITMQ,
        ],
        location: "Remote/Client Project",
        decription: "",
      },
    },
    {
      title: "Nuvola",
      para: "Django based Backend for Briggo Barrista Bot.",
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      projectMetadata: {
        tenure: {
          start: "November, 2020",
          end: "July, 2021",
        },
        stack: [
          techStack.DJANGO,
          techStack.DRF,
          techStack.PYTHON,
          techStack.CELERY,
          techStack.TWISTED,
          techStack.STRIPE,
          techStack.RABBITMQ,
        ],
        location: "Remote/Client Project",
        decription: "",
      },
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: reactIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: designIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: codeIcon,
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/chetanverma16" },
    {
      img: codepenIcon,
      url: "https://www.codepen.com/",
    },
    {
      img: dribbbleIcon,
      url: "https://dribbble.com/chetanverma",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
};

export default myData;
// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
