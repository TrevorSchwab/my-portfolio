import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn, FaTwitter, FaReact } from 'react-icons/fa';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
  const [author, setAuthor] = useState(null);
  const [company, setCompany] = useState(null);
  const [bio, setBio] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  console.log(bio);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
            name,
            "bio": bio[0].children[0].text,
            "authorImage": companyImage, image1, image2, image3
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "company"]{
            companyLogo,
            stackImage1,
            stackImage2,
            stackImage3,
            githubLogo,
            "companyDescription": companyDescription[0].children[0].text
        }`
      )
      .then((data) => setCompany(data[0]))
      .catch(console.error);

    sanityClient
      .fetch(
        `*[_type == "bio"]{
            bioImage,
            bioBlurb,
            "resume": resume.asset->url,
            workStatus,
        }`
      )
      .then((data) => setBio(data[0]))
      .catch(console.error);
  }, []);

  const scrollTo = () => {
    document.querySelector('#skills').scrollIntoView({
      behavior: 'smooth',
    });
  };

  if (!author || !company || !bio) return <div>Loading...</div>;
  return (
    <main className="min-h-screen container mx-auto sm:px-4 md:px-8">
      <nav class="py-3 lg:py-6 px-3 md:px-0">
        <div className="flex justify-between">
          <div class="h-10 w-10 md:h-12 md:w-12 flex items-center col-start-1 col-span-1">
            <a href="/">
              <span className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-600 text-white text-3xl font-serif">
                T
              </span>
            </a>
          </div>
          <div className="cursor-pointer">
            {!dropdown ? (
              <FaBars
                className="text-xl inline-flex align-middle"
                onClick={(e) => setDropdown(!dropdown)}
              />
            ) : (
              <FaTimes
                className="text-xl inline-flex align-middle"
                onClick={(e) => setDropdown(!dropdown)}
              />
            )}
          </div>
        </div>
        {dropdown && (
          <div className="h-12 mb-24 flex pt-6 pb-6 flex-col items-center space-y-6 list-none text-sm lg:hidden">
            <ul className="flex flex-col items-center justify-around">
              <a href="#skills" onClick={scrollTo}>
                <li className="text-3xl mb-4">Skills</li>
              </a>
              <a href="#projects">
                <li className="text-3xl mb-4">Companies</li>
              </a>
              <a href="#projects">
                <li className="text-3xl mb-4">Projects</li>
              </a>
              <a href="#contact">
                <li className="text-3xl mb-4">Contact</li>
              </a>
              <div className="flex">
                <a href="https://github.com/TrevorSchwab">
                  <FaGithub className="h-8 w-8" />
                </a>
                <a href="https://www.linkedin.com/in/trevor-schwab-a811a7174/">
                  <FaLinkedinIn className="h-8 w-8 mx-8" />
                </a>
                <a href="https://twitter.com/_trevorschwab">
                  <FaTwitter className="h-8 w-8" />
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
      <div className="container mx-auto sm:px-4 md:px-8">
        <div className="px-6 lg:px-0 py-12 md:py-16 lg:py-24">
          <img
            src={urlFor(bio.bioImage).url()}
            alt="Trevor Schwab"
            className="h-40 md:h-48 lg:h-56"
          />
          <h3 className="font-semibold leading-relaxed text-3xl tracking-tight text-gray-900 mt-6 md:leading-relaxed text-4xl sm:leading-relaxed text-3xl mt-12 ">
            {bio.bioBlurb}
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center mt-6 sm:space-x-12 text-sm sm:text-base">
            <a
              href={`${bio.resume}?dl=`}
              className="flex items-center font-medium text-gray-900 hover:text-blue-1000 transition duration-300 ease-in-out mb-4 sm:mb-0 outline-none focus:outline-none"
            >
              Resume{' '}
              <span className="inline-block transform ml-1 md:ml-2 align-middle origin-center -rotate-45">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-4 md:w-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
            <div className="flex items-center space-x-2 md:space-x-3 text-blue-1000 text-sm sm:text-base">
              <div className="rounded-full bg-blue-100 p-1 sm:p-2">
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 sm:w-4 sm:h-4"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <p className="font-medium">Currently available for full-time work</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="skills"
        className="bg-blue-50 px-6 lg:px-0 pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-32 lg:pb-16"
      >
        <div className="container mx-auto sm:px-4 md:px-8">
          <div className="px-2">
            <div className="flex flex-col lg:flex-row -mx-2">
              <div id="skills" className="w-full tracking-tight">
                <div className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-semibold mb-8">
                  <h1
                    style={{
                      width: '12%',
                      boxShadow: 'inset 0 -0.000002em 0 #fafafa, inset 0 -0.5em 0 #fbe5a2',
                    }}
                  >
                    Skills
                  </h1>
                </div>
                <div class="flex flex-col md:flex-row space-y-8 md:space-y-0 -mx-2">
                  <div class="flex-1 px-2 border-b md:border-0 py-8">
                    <div class="flex items-center space-x-2 md:space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                        {' '}
                        Front-end{' '}
                      </h3>
                    </div>
                    <ul class="list-none space-y-6 mt-6 text-sm sm:text-base px-2">
                      <li>JavaScript</li>
                      <li>React</li>
                      <li>React Native</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                  </div>
                  <div class="flex-1 px-2 border-b md:border-0 py-8">
                    <div class="flex items-center space-x-2 md:space-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                      <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                        {' '}
                        Middleware / Back-end{' '}
                      </h3>
                    </div>
                    <ul class="list-none space-y-6 mt-6 text-sm sm:text-base px-2">
                      <li>REST</li>
                      <li>GraphQL - Apollo</li>
                      <li>Node</li>
                      <li>Express</li>
                      <li>Hapi</li>
                    </ul>
                  </div>
                  <div class="flex-1 px-2 border-b md:border-0 py-8">
                    <div class="flex items-center space-x-2 md:space-x-3">
                      <img alt="Tools" class="h-5 w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                      <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                        {' '}
                        Tools{' '}
                      </h3>
                    </div>
                    <ul class="list-none space-y-6 mt-6 text-sm sm:text-base px-2">
                      <li>TypeScript</li>
                      <li>Redux</li>
                      <li>Git</li>
                      <li>Firebase</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="px-6 lg:px-0 pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-32 lg:pb-16">
        <div className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-semibold mb-14">
          <h1
            style={{
              width: '20%',
              boxShadow: 'inset 0 -0.000002em 0 #fafafa, inset 0 -0.5em 0 #faaf98',
            }}
          >
            Companies
          </h1>
        </div>
        <div className="px-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            <div>
              <div className="shadow rounded-md p-4 md:p-5 lg:p-6 h-full border border-gray-200">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <img
                        src={urlFor(author.authorImage).url()}
                        alt="Bite Pay"
                        className="h-12 w-12 mr-3 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                      <img
                        src={urlFor(author.image1).url()}
                        alt="ReactJS"
                        className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                      <img
                        src={urlFor(author.image2).url()}
                        alt="NodeJS"
                        className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                      <img
                        src={urlFor(author.image3).url()}
                        alt="Firebase"
                        className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                    </div>
                    <div className="flex items-center">
                      <a href="https://github.com/aw33598/Folor" target="_blank">
                        <img
                          src={urlFor(company.githubLogo).url()}
                          alt="Github"
                          className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 md:mt-5 lg:mt-6">
                    <p className="text-sm sm:text-base">{company.companyDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            <div>
              <div className="shadow rounded-md p-4 md:p-5 lg:p-6 h-full border border-gray-200">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <img
                        src={urlFor(company.companyLogo).url()}
                        alt="Bite Pay"
                        className="h-12 w-12 mr-3 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                      <img
                        src={urlFor(company.stackImage1).url()}
                        alt="ReactJS"
                        className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                      <img
                        src={urlFor(company.stackImage2).url()}
                        alt="NodeJS"
                        className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                      <img
                        src={urlFor(company.stackImage3).url()}
                        alt="Firebase"
                        className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                    </div>
                    <div className="flex items-center">
                      <a href="https://github.com/aw33598/Folor" target="_blank">
                        <img
                          src={urlFor(company.githubLogo).url()}
                          alt="Github"
                          className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 md:mt-5 lg:mt-6">
                    <p className="text-sm sm:text-base">
                      {' '}
                      React Native App for restaurant bill splitting and payment{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="px-6 lg:px-0 pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-32 lg:pb-16">
        <div className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-semibold mb-14">
          <h1
            style={{
              width: '20%',
              boxShadow: 'inset 0 -0.000002em 0 #fafafa, inset 0 -0.5em 0 #cde19f',
            }}
          >
            Projects
          </h1>
        </div>
        <div className="px-2">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            <div>
              <div className="shadow rounded-md p-4 md:p-5 lg:p-6 h-full border border-gray-200">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <div className="flex">
                      <img
                        src={urlFor(author.image1).url()}
                        alt="ReactJS"
                        className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                      <img
                        src={urlFor(author.image2).url()}
                        alt="NodeJS"
                        className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                      <img
                        src={urlFor(author.image3).url()}
                        alt="Firebase"
                        className="h-12 w-12 sm:h-7 sm:w-7 ml-1 md:ml-2"
                      />
                    </div>
                    <div className="flex items-center">
                      <a href="https://github.com/aw33598/Folor" target="_blank">
                        <FaGithub className="h-9 w-9" />
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 md:mt-5 lg:mt-6">
                    <p className="text-sm sm:text-base">
                      {' '}
                      React Native App for restaurant bill splitting and payment{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="px-6 lg:px-0 pt-16 pb-8 md:pt-20 md:pb-12 lg:pt-32 lg:pb-16">
        <div className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-semibold mb-14">
          <h1
            style={{
              width: '20%',
              boxShadow: 'inset 0 -0.000002em 0 #fafafa, inset 0 -0.5em 0 #feb36c',
            }}
          >
            Contact
          </h1>
        </div>
        <div className="px-2">Email me!</div>
      </div>
      <div id="contact" class="py-12 px-6 md:py-16 border-t mt-24 md:mt-32 lg:mt-48">
        <div class="flex justify-between items-center">
          <div class="flex items-center text-gray-900 space-x-4 sm:space-x-5 md:space-x-10 lg:space-x-12">
            <div className="flex w-full">
              <a href="https://github.com/TrevorSchwab">
                <FaGithub className="h-8 w-8 mr-4" />
              </a>
              <a href="https://www.linkedin.com/in/trevor-schwab-a811a7174/">
                <FaLinkedinIn className="h-8 w-8 mr-4" />
              </a>
              <a href="https://twitter.com/_trevorschwab">
                <FaTwitter className="h-8 w-8 mr-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
