"use client";
import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from "next/link";

function Body() {
  const animationData = require("../../../public/assets/projects.json");
  const [text, count] = useTypewriter({
    words: ["Hi, My name is Aniket Shankar Mendhe", "Learn with me", "I Love to code More"],
    loop: true,
    delaySpeed: 2000,
  });
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);

    const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        {/* First part */}
        <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8">
          <div className="w-full flex flex-col  item-start  md:w-2/4 mt-0 md:mt-28">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              <span className="mr-3 text-slate-400 ">{text}</span>
              <Cursor />
            </h1>
            <p className="text-white text-xl md:text-2xl mb-3 mt-2">
              I am A Full-Stack Developer who shares programmming knowledge with
              the community
            </p>
            <div>
              <button className="bg-blue-400 text-white px-4 py-1 rounded mr-4 hover:bg-blue-600">
                Learn More
              </button>

               <Link legacyBehavior href="#contact">
              <a className="bg-gray-300 text-gray-700 px-4 py-1 rounded mr-4 hover:bg-gray-400" onClick={scrollToContact}>
              Contact Me
              </a>
               </Link>
              </div>
              <p className="text-blue-500 text-small font-normal mt-2 ">Coding | Learnings | Lifestyle</p>
              {/* WRITE ABOUT YOUR PERSONAL DATA  */}

              <h1 className="text-slate-400 text-xl">ABOUT: <br> Aniket Shankar Mendhe
Based in Nagpur, I am a dedicated full stack developer with expertise in the MERN stack, JavaScript, React.js, Node.js, and WordPress. Currently studying at RTMNU University, I am passionate about creating dynamic and responsive web applications. My technical skills are complemented by my love for gaming, where I engage in competitive titles like BGMI, fostering my strategic thinking and teamwork abilities.

In addition to my development skills, I am a district-level football champion, which has instilled in me the values of discipline, leadership, and collaboration. I enjoy playing kho-kho and kabaddi, and I find strategic depth in chess, all of which enhance my problem-solving skills and resilience.

I am eager to leverage my technical expertise and diverse interests in a professional setting, contributing to innovative projects while continuously learning and growing in the tech field.

Skills: MERN Stack · Web Development · WordPress Design · JavaScript · HTML · React.js · Express.js · Cascading Style Sheets (CSS) · Node.js · MongoDB · mongoose</h1>

          </div>

          <div className="md:w-1/2 z-auto pt-2 md:mt-0">
            <div className="container" ref={container}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
