import styles from "./Landing.module.scss";
import "@fontsource/poppins";
import image from "../../assets/Group 12.png";
import resume from "../../assets/Group 11.png";
import p1 from "../../assets/1.png";
import p2 from "../../assets/2.png";
import p3 from "../../assets/3.png";
import p4 from "../../assets/4.png";
import p5 from "../../assets/5.png";

export const Landing = () => {
  const courses = [
    "Coursera (Google) | Foundations of User Experience (UX) Design",
    "Uxcel | UX Design foundation",
    "Uxcel | Design terminology",
    "Uxcel | UI Components 1",
    "Uxcel | Design Mentorship Mastery with ADPList",
    "Uxcel | UX Design Patterns with Checklist Design",
    "Uxcel | UX Research"
  ];

  const projects = [
    {
      image: p1,
      title: "Bale Karzar",
      date: "September, 2024",
      detail: "The design and frontend development of the Bale Karzar website for celebrating Programmer Day.",
      link: "https://www.coursera.org/google-ux-design"
    },
    {
      image: p2,
      title: "Redesign Bale.ai",
      date: "August, 2024",
      detail: "Redesign the homepage of Bale.ai website to improve my skills.",
      link: "https://www.uxcel.com"
    },
    {
      image: p3,
      title: "Bale jobBoard",
      date: "October, 2024",
      detail: "Designed a new website for the Bale job board, after researching web trends.",
      link: "https://www.coursera.org/google-ux-design"
    },
    {
      image: p4,
      title: "Rasa Messenger",
      date: "September, 2023",
      detail: "Led the design and front-end development of a messaging application.",
      link: "https://www.uxcel.com"
    },
    {
      image: p5,
      title: "OpexShop",
      date: "December, 2023",
      detail: "Collaborated on front-end development for the OpexShop website.",
      link: "https://www.uxcell.com"
    }
  ];

  return (
    <div className={styles.Landing}>
      <div className={styles.container}>
        <div className={styles.header}>Zahra Tabatabaee</div>
        <div className={styles.about}>
          <div className={styles.aboutName}>
            <span className={styles.text1}>Hello, I’m Zahra,</span>
            <span className={styles.text2}>Product Designer</span>
            <span className={styles.text1}>based in Tehran.</span>
            <img src={resume} className={styles.Group} alt="Resume" />
          </div>
          <img src={image} className={styles.aboutImage} alt="About" />
        </div>

        <div className={styles.part}>
          <div className={styles.title}>about.</div>
          <div className={styles.text}>
            I am a product designer with a strong foundation in software development. My journey began in computer science, where I developed skills in both front-end and back-end technologies. Drawn to the creative aspects of product design, I'm now focused on expanding my knowledge and skills in this field, with a particular interest in user-centered approaches and innovative problem-solving. My enthusiasm for continuous learning and adaptability makes me a good candidate for entry-level positions in product design teams.
          </div>
        </div>

        <div className={styles.part}>
          <div className={styles.title}>courses.</div>
          <div className={styles.box}>
            {courses.map((course, index) => (
              <div key={index} className={styles.row}>
                <div className={styles.bullet}></div>
                <div className={styles.text3}>{course}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.part}>
          <div className={styles.title}>projects.</div>
          <div className={styles.box2}>
            {projects.map((project, index) => (
                <div key={index} className={styles.project}>
                <img src={project.image} className={styles.projectImage} alt={project.title} />
                <div className={styles.projectDate}>{project.date}</div>
                <div className={styles.projectText}>
                    <div className={styles.projectTitle}>{project.title}</div>
                    <div className={styles.projectDetail}>{project.detail}</div>
                </div>
                </div>
            ))}
          </div>
        </div>
        <div className={styles.part}>
          <div className={styles.title}>contact.</div>
          <div className={styles.text}>

          </div>
        </div>
      </div>
    </div>
  );
};
