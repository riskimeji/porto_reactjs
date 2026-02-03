// import { Lightbox } from 'react-modal-image';
import React, { useState, useEffect } from "react";
import ImageModal from "../components/landingPage/ImageModal";

//icon
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitter,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";
import ExperienceItem from "../components/ExperienceItem";
const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const handleDocumentClick = (e) => {
      if (modalOpen && e.target === document.documentElement) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [modalOpen]);

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/riskimeji" },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ahmad-rizki-akbar-ganiyu/",
    },
    {
      icon: <FaInstagramSquare />,
      url: "https://www.instagram.com/riski.meji_/",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/riskimeji",
    },
  ];
  const projectList = [
    {
      img: "library.png",
      title: "Book BorrowEase",
      url: "#",
      desc: "A book lending website has two user roles: visitor and staff. This project is created to complete my internship test at a certain company.",
      tech: ["Laravel 10", "MySQL", "Tailwind CSS"],
    },
    {
      img: "seopintar.png",
      title: "SeoPintar.com - Blog",
      url: "https://www.seopintar.com",
      desc: "SeoPintar.com is a blog that provides a variety of informative articles for readers. This blog is dedicated to delivering high-quality and valuable information on various topics, including SEO, technology, and much more.",
      tech: ["Blogspot"],
    },
    {
      img: "barakti.png",
      title: "BarakTI",
      url: "https://github.com/riskimeji/aplikasikasir-barakti",
      desc: "BarakTI is a user-friendly desktop POS application for managing customer orders, menu items, and tracking total transactions and revenue in real-time.",
      tech: ["VB", "MySQL"],
    },
    {
      img: "jobseeker.png",
      title: "JobSeeker",
      url: "https://github.com/riskimeji/Job-Seeker",
      desc: "JobSeeker is a website for job seekers and employers. Job seekers can search for jobs, while companies can register and post job listings.",
      tech: ["Laravel 9", "MySQL", "Bootstrap 5"],
    },
    {
      img: "absent.png",
      title: "TI-Presensi",
      url: "https://www.ti-presensi.my.id/",
      desc: "TI-Presensi is a QR Code-based attendance management system specifically developed for the Information Technology Department at Politeknik Negeri Padang. This web application streamlines the student attendance process through digital QR Code scanning, replacing conventional manual attendance systems. Built using modern technologies such as Laravel for backend, React.js with Inertia.js for frontend, and styled with Tailwind CSS for a responsive and user-friendly interface. The system optimizes attendance recording, facilitates lecturer monitoring, and provides accurate, real-time attendance data",
      tech: ["Laravel", "MySQL", "React.js", "Inertia.js", "Tailwind CSS"],
    },
  ];

  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    const sectionElements = document.querySelectorAll("section");

    const handleScroll = () => {
      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="font-inter bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className="w-full">
          <div className="lg:flex lg:gap-[140px] md:gap-10 md:p-28 p-10">
            {/* kiri grid grid-cols-1 lg:grid-cols-2 */}
            <div className="lg:fixed lg:top-28 lg:h-max lg:w-[40%]">
              <div className=" text-4xl font-bold text-[#E2E8F0]">
                Ahmad Rizki Akbar G
              </div>
              {/* typewriter */}
              <div className="text-xl text-left mt-4 text-[#E2E8F0] w-max typewriter">
                <p className="">QA Engineer</p>
              </div>
              <div className="mt-12">
                <div className="">
                  <p className="text-[#94A3B8]">
                    Junior QA Engineer dedicated to ensuring software quality
                    through thorough testing, committed to continuous learning,
                    and consistently improving system reliability and user
                    experience.
                  </p>
                </div>
              </div>
              <div className="mt-16 lg:block hidden">
                <ul className="text-[14px] font-bold">
                  <li
                    className={`hover:border-l-4 hover:font-bold hover:px-5 mt-5 hover:text-[#94A3B8] text-[#505E75] transition-all ${
                      activeLink === "about"
                        ? "text-[#5EEAD4] border-l-4 px-5 border-[#5EEAD4]"
                        : ""
                    }`}
                  >
                    <a href="#about">
                      <span className=" hover:mr-5 transition-all"></span>
                      About
                    </a>
                  </li>
                  <li
                    className={`hover:border-l-4 hover:font-bold hover:px-5 mt-5 hover:text-[#94A3B8] text-[#505E75] transition-all ${
                      activeLink === "experience"
                        ? "text-[#5EEAD4] border-l-4 px-5 border-[#5EEAD4]"
                        : ""
                    }`}
                  >
                    <a href="#experience">
                      <span className=" hover:mr-5 transition-all"></span>
                      Experience
                    </a>
                  </li>
                  <li
                    className={`hover:border-l-4 hover:font-bold hover:px-5 mt-5 hover:text-[#94A3B8] text-[#505E75] transition-all ${
                      activeLink === "project"
                        ? "text-[#5EEAD4] border-l-4 px-5 border-[#5EEAD4]"
                        : ""
                    }`}
                  >
                    <a href="#project">
                      <span className=" hover:mr-5 transition-all"></span>
                      Project
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-16">
                <ul className="flex lg:justify-items-center justify-center gap-6">
                  {socialLinks.map((link, index) => (
                    <li className="text-2xl hover:text-white" key={index}>
                      <a href={link.url}>{link.icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* kanan */}
            <div className="lg:ml-[43vw] lg:w-1/2 transition-all">
              <section className="" id="about">
                <p className="text-[#94A3B8] mt-8 lg:mt-0">
                  I am a graduate of Politeknik Negeri Padang with a background
                  in Information Technology, specializing in Software
                  Engineering Technology. I graduated in 2024 and have hands-on
                  experience in Quality Assurance through both internships and
                  real-world projects.
                </p>

                <p className="mt-8 text-[#94A3B8]">
                  I have been interested in technology and programming since
                  junior high school, and began exploring web development during
                  my vocational high school years in 2018. Over time, this
                  interest evolved into building real products and understanding
                  how systems should be tested, validated, and improved from a
                  quality perspective.
                </p>

                <p className="mt-8 text-[#94A3B8]">
                  Currently, my main focus is on{" "}
                  <span className="text-gray-300 font-semibold">
                    Quality Assurance
                  </span>
                  , including manual and automation testing, end-to-end flow
                  validation, and aligning business requirements with technical
                  implementation. I am also involved in a personal project,{" "}
                  <span className="text-gray-300 font-semibold">
                    <a
                      href="https://telekuy.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Telekuy.com
                    </a>
                  </span>
                  , where I actively participate in the development and testing
                  process to ensure system reliability and usability.
                </p>
              </section>
              <div className="mt-20 transition-all">
                <section id="experience" className="space-y-6">
                  <ExperienceItem
                    year="2024"
                    period="November – Present"
                    logo="telekuy.jpg"
                    company="Telekuy"
                    companyUrl="https://telekuy.com/"
                    role="Personal Project - QA Engineer"
                    description="Conducted end-to-end testing and validated business flows to ensure system behavior matched functional requirements. Reviewed pull requests and collaborated in improving product quality during the development process."
                    skills={[
                      "End-to-End Testing",
                      "Business Flow Validation",
                      "Manual Testing",
                      "User Journey Analysis",
                      "Quality Assurance",
                    ]}
                  />
                  <ExperienceItem
                    year="2025"
                    period="May – November"
                    logo="mbiz.jpg"
                    company="PT. Brilliant Ecommerce Berjaya"
                    companyUrl="https://mbizmarket.co.id/"
                    role="Internship Software Quality Assurance Tester"
                    description="Responsible for manual and automated testing using Robot Framework (Python, Selenium), supporting regression testing across web applications. Conducted end-to-end testing including API, functional, and UI testing, identifying high-risk and security-related issues such as XSS."
                    skills={[
                      "Robot Framework",
                      "Python",
                      "API Testing",
                      "Selenium",
                      "Appium",
                      "Git",
                    ]}
                  />

                  <ExperienceItem
                    year="2023"
                    period="Aug – Nov"
                    logo="sagara_red_icon.png"
                    company="Sagara Technology – Bandung"
                    companyUrl="https://sagaratechnology.com/"
                    role="Internship Software Engineer"
                    description="Developed and implemented API endpoints, created data scraping solutions, and managed personal projects to enhance programming skills."
                    skills={[
                      "Node.js",
                      "Tailwind CSS",
                      "Docker",
                      "Laravel",
                      "React.js",
                    ]}
                  />

                  <ExperienceItem
                    year="2023 – 2024"
                    period="Dec – Feb"
                    logo="thinkspedia_logo.png"
                    company="Thinkspedia – Jakarta Selatan"
                    companyUrl="https://thinkspedia.com/"
                    role="Internship Laravel Programmer"
                    description="Developed and maintained the main website for Sekolah Auliya, focusing on Education, Extracurricular, and Finance modules to support school operations, including grade management, activity registration, and financial tracking. Implemented a responsive UI/UX design to ensure accessibility and a seamless experience across devices for students, teachers, and administrators."
                    skills={["Laravel", "Bootstrap", "MySQL"]}
                  />
                </section>
              </div>
              <div className="mt-10">
                <a href="" className="">
                  <div className="flex justify-items-center ">
                    <p className="hover:mr-2 hover:border-b-2 border-[#5EEAD4] text-base font-bold text-[#E2E8F0]">
                      View Full Resume
                    </p>
                    <span className="ml-1 mt-1">
                      <FaArrowRight className="" />
                    </span>
                  </div>
                </a>
              </div>
              <div className="lg:mt-14 mt-10">
                {projectList.map((project, index) => (
                  <section className="" id="project" key={index}>
                    <div className="mb-2 md:flex md:justify-items-center gap-6 p-4 hover:bg-[#24355c49] hover:shadow-lg border-[#c4c4c48a] rounded-md transition-all">
                      <div className="">
                        <img
                          src={project.img}
                          className="rounded-lg object-contain w-full md:w-64 h-28 cursor-pointer"
                          alt={project.title}
                          onClick={() => openModal(project.img)}
                        />
                      </div>
                      <div className="md:mt-0 mt-4">
                        <label
                          htmlFor=""
                          className="text-[#E2E8F0] hover:text-[#5EEAD4] text-base cursor-pointer"
                        >
                          <div className="flex">
                            <a href={project.url}>
                              <div className="hover:mr-2">{project.title}</div>
                            </a>
                            <div className="">
                              <FaArrowUp className="ml-1 rotate-45" />
                            </div>
                          </div>
                        </label>
                        <p className="mt-2 md:max-w-[500px] lg:max-w-[500px] ">
                          {project.desc}
                        </p>
                        <div className="mt-2">
                          <ul className="gap-2 flex flex-wrap w-full max-w-full">
                            {project.tech.map((technology, techIndex) => (
                              <li key={techIndex}>
                                <button className="p-2 text-xs bg-[#122B39] w-max rounded-full px-5 text-[#5EEAD4]">
                                  {technology}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
        {modalOpen && (
          <ImageModal imageUrl={selectedImage} onClose={closeModal} />
        )}
      </div>
    </>
  );
};

export default Home;
