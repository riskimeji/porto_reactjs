// import { Lightbox } from 'react-modal-image';
import React, { useState, useEffect, useRef } from 'react';
import About from '../components/landingPage/About';
import ImageModal from '../components/landingPage/ImageModal';

//icon
import {
  FaGithub,
  FaLinkedin,
  FaInstagramSquare,
  FaTwitter,
  FaArrowUp,
  FaArrowRight,
} from 'react-icons/fa';

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
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    const handleDocumentClick = (e) => {
      if (modalOpen && e.target === document.documentElement) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleDocumentClick);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [modalOpen]);

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/riskimeji' },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/ahmad-rizki-akbar-ganiyu/',
    },
    {
      icon: <FaInstagramSquare />,
      url: 'https://www.instagram.com/riski.meji_/',
    },
    {
      icon: <FaTwitter />,
      url: '#',
    },
  ];
  const projectList = [
    {
      img: 'library.png',
      title: 'Book BorrowEase',
      url: '#',
      desc: 'A book lending website has two user roles: visitor and staff. This project is created to complete my internship test at a certain company.',
      tech: ['Laravel 10', 'MySQL', 'Tailwind CSS'],
    },
    {
      img: 'seopintar.png',
      title: 'SeoPintar.com - Blog',
      url: 'https://www.seopintar.com',
      desc: 'SeoPintar.com is a blog that provides a variety of informative articles for readers. This blog is dedicated to delivering high-quality and valuable information on various topics, including SEO, technology, and much more.',
      tech: ['Blogspot'],
    },
    {
      img: 'barakti.png',
      title: 'BarakTI',
      url: 'https://github.com/riskimeji/aplikasikasir-barakti',
      desc: 'BarakTI is a user-friendly desktop POS application for managing customer orders, menu items, and tracking total transactions and revenue in real-time.',
      tech: ['VB', 'MySQL'],
    },
    {
      img: 'jobseeker.png',
      title: 'JobSeeker',
      url: 'https://github.com/riskimeji/Job-Seeker',
      desc: 'JobSeeker is a website for job seekers and employers. Job seekers can search for jobs, while companies can register and post job listings.',
      tech: ['Laravel 9', 'MySQL', 'Bootstrap 5'],
    },
  ];

  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    const sectionElements = document.querySelectorAll('section');

    const handleScroll = () => {
      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='font-inter bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'>
        <div className='w-full'>
          <div className='lg:flex lg:gap-[140px] md:gap-10 md:p-28 p-10'>
            {/* kiri grid grid-cols-1 lg:grid-cols-2 */}
            <div className='lg:fixed lg:top-28 lg:h-max lg:w-[40%]'>
              <div className=' text-4xl font-bold text-[#E2E8F0]'>
                Ahmad Rizki Akbar G
              </div>
              {/* typewriter */}
              <div className='text-xl text-left mt-4 text-[#E2E8F0] w-max typewriter'>
                <p className=''>Software Engineer</p>
              </div>
              <div className='mt-12'>
                <div className=''>
                  <p className='text-[#94A3B8]'>
                    Junior software engineer dedicated to creating inclusive,
                    accessible web experiences, committed, and continuously
                    expanding my skills.
                  </p>
                </div>
              </div>
              <div className='mt-16 lg:block hidden'>
                <ul className='text-[14px] font-bold'>
                  <li
                    className={`hover:border-l-4 hover:font-bold hover:px-5 mt-5 hover:text-[#94A3B8] text-[#505E75] transition-all ${
                      activeLink === 'about'
                        ? 'text-[#5EEAD4] border-l-4 px-5 border-[#5EEAD4]'
                        : ''
                    }`}
                  >
                    <a href='#about'>
                      <span className=' hover:mr-5 transition-all'></span>
                      About
                    </a>
                  </li>
                  <li
                    className={`hover:border-l-4 hover:font-bold hover:px-5 mt-5 hover:text-[#94A3B8] text-[#505E75] transition-all ${
                      activeLink === 'experience'
                        ? 'text-[#5EEAD4] border-l-4 px-5 border-[#5EEAD4]'
                        : ''
                    }`}
                  >
                    <a href='#experience'>
                      <span className=' hover:mr-5 transition-all'></span>
                      Experience
                    </a>
                  </li>
                  <li
                    className={`hover:border-l-4 hover:font-bold hover:px-5 mt-5 hover:text-[#94A3B8] text-[#505E75] transition-all ${
                      activeLink === 'project'
                        ? 'text-[#5EEAD4] border-l-4 px-5 border-[#5EEAD4]'
                        : ''
                    }`}
                  >
                    <a href='#project'>
                      <span className=' hover:mr-5 transition-all'></span>
                      Project
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-16'>
                <ul className='flex lg:justify-items-center justify-center gap-6'>
                  {socialLinks.map((link, index) => (
                    <li className='text-2xl hover:text-white' key={index}>
                      <a href={link.url}>{link.icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* kanan */}
            <div className='lg:ml-[43vw] lg:w-1/2 transition-all'>
              <section className='' id='about'>
                <p className='text-[#94A3B8] mt-8 lg:mt-0 '>
                  I am a student at Politeknik Negeri Padang, majoring in
                  Information Technology with a specialization in Software
                  Engineering Technology.
                </p>
                <p className='mt-8 text-[#94A3B8]'>
                  I've been interested in programming since I was in junior high
                  school, but I began learning about website development during
                  my vocational high school years, around 2018. At that time, I
                  started developing my own website using the Blogger platform,
                  and the website is called{' '}
                  <a
                    href='https://www.seopintar.com'
                    className='hover:text-[#5EEAD4] font-bold text-gray-300'
                  >
                    SeoPintar
                  </a>
                  .
                </p>
                <p className='mt-8 text-[#94A3B8]'>
                  My main focus these days is developing websites using React JS
                  or Laravel, and I also have the ability to develop websites
                  using other technologies.
                </p>
              </section>
              <div className='mt-20 transition-all'>
                <section className='' id='experience'>
                  <div className='md:flex md:justify-items-center gap-6 p-4 hover:bg-[#24355c49] hover:shadow-lg border-[#c4c4c48a] rounded-md transition-all'>
                    <div className=''>
                      <label htmlFor=''>2023</label>
                      <p className='whitespace-nowrap'>August - November</p>
                      <div className='flex items-center justify-center h-[70%] mt-2 md:mt-0 lg:mt-0 mb-2 md:mb-0 lg:mb-0'>
                        <img
                          src='sagara_red_icon.png'
                          alt='sagara icon'
                          className='w-24 h-28'
                        />
                      </div>
                    </div>

                    <div className=''>
                      <label
                        htmlFor=''
                        className='text-[#E2E8F0] hover:text-[#5EEAD4] text-base cursor-pointer'
                      >
                        <a href='https://sagaratechnology.com/'>
                          Sagara Technology - Bandung
                        </a>
                      </label>
                      <br />
                      <span className='text-[#64748B] text-base'>
                        Internship Software Engineer
                      </span>
                      <p className='mt-2 '>
                        Developing and implementing API endpoints, designing and
                        developing data scraping solutions for blog platforms,
                        and creating and managing personal projects to enhance
                        programming skills.
                      </p>
                      <div className='mt-2'>
                        <ul className='gap-2 flex flex-wrap w-full max-w-full'>
                          <li className=''>
                            <button className='p-2 text-xs bg-[#122B39] w-max rounded-full px-5 text-[#5EEAD4]'>
                              Node Js
                            </button>
                          </li>
                          <li className=''>
                            <button className='p-2 text-xs bg-[#122B39] w-max rounded-full px-5 text-[#5EEAD4]'>
                              Tailwind CSS
                            </button>
                          </li>
                          <li className=''>
                            <button className='p-2 text-xs bg-[#122B39] w-max rounded-full px-5 text-[#5EEAD4]'>
                              Docker
                            </button>
                          </li>
                          <li className=''>
                            <button className='p-2 text-xs bg-[#122B39] w-max rounded-full px-5 text-[#5EEAD4]'>
                              Laravel
                            </button>
                          </li>
                          <li className=''>
                            <button className='p-2 text-xs bg-[#122B39] w-max rounded-full px-5 text-[#5EEAD4]'>
                              React Js
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='md:flex md:justify-items-center gap-6 p-4 hover:bg-[#24355c49] hover:shadow-lg border-[#c4c4c48a] rounded-md transition-all'>
                    <div className=''>
                      <label htmlFor=''>2023 - 2024</label>
                      <p className='whitespace-nowrap'>Desember - February</p>
                      <div className='flex items-center justify-center h-[70%] mt-2 md:mt-0 lg:mt-0 mb-2 md:mb-0 lg:mb-0'>
                        <img
                          src='thinkspedia_logo.png'
                          alt='sagara icon'
                          className='w-24 h-28'
                        />
                      </div>
                    </div>
                    <div className=''>
                      <label
                        htmlFor=''
                        className='text-[#E2E8F0] hover:text-[#5EEAD4] text-base cursor-pointer'
                      >
                        <a href='https://thinkspedia.com/'>
                          Thinkspedia - Jakarta Selatan
                        </a>
                      </label>
                      <br />
                      <span className='text-[#64748B] text-base'>
                        Internship Laravel Programmer
                      </span>
                      <p className='mt-2 '>
                        I handled bug fixes from the previous developer and
                        spearheaded the development of the three modules:
                        financial, educational, and extracurricular.
                      </p>
                      <div className='mt-2'>
                        <ul className='gap-2 flex flex-wrap w-full max-w-full'>
                          <li className=''>
                            <button className='p-2 text-xs bg-[#122B39] w-max rounded-full px-5 text-[#5EEAD4]'>
                              Bootstrap
                            </button>
                          </li>
                          <li className=''>
                            <button className='p-2 text-xs bg-[#122B39] w-max rounded-full px-5 text-[#5EEAD4]'>
                              Laravel
                            </button>
                          </li>
                          <li className=''>
                            <button className='p-2 text-xs bg-[#122B39] w-max rounded-full px-5 text-[#5EEAD4]'>
                              MySQL
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className='mt-10'>
                <a href='' className=''>
                  <div className='flex justify-items-center '>
                    <p className='hover:mr-2 hover:border-b-2 border-[#5EEAD4] text-base font-bold text-[#E2E8F0]'>
                      View Full Resume
                    </p>
                    <span className='ml-1 mt-1'>
                      <FaArrowRight className='' />
                    </span>
                  </div>
                </a>
              </div>
              <div className='lg:mt-14 mt-10'>
                {projectList.map((project, index) => (
                  <section className='' id='project' key={index}>
                    <div className='mb-2 md:flex md:justify-items-center gap-6 p-4 hover:bg-[#24355c49] hover:shadow-lg border-[#c4c4c48a] rounded-md transition-all'>
                      <div className=''>
                        <img
                          src={project.img}
                          className='rounded-lg object-contain w-full md:w-64 h-28 cursor-pointer'
                          alt={project.title}
                          onClick={() => openModal(project.img)}
                        />
                      </div>
                      <div className='md:mt-0 mt-4'>
                        <label
                          htmlFor=''
                          className='text-[#E2E8F0] hover:text-[#5EEAD4] text-base cursor-pointer'
                        >
                          <div className='flex'>
                            <a href={project.url}>
                              <div className='hover:mr-2'>{project.title}</div>
                            </a>
                            <div className=''>
                              <FaArrowUp className='ml-1 rotate-45' />
                            </div>
                          </div>
                        </label>
                        <p className='mt-2 md:max-w-[500px] lg:max-w-[500px] '>
                          {project.desc}
                        </p>
                        <div className='mt-2'>
                          <ul className='gap-2 flex flex-wrap w-full max-w-full'>
                            {project.tech.map((technology, techIndex) => (
                              <li key={techIndex}>
                                <button className='p-2 text-xs bg-[#122B39] w-max rounded-full px-5 text-[#5EEAD4]'>
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
