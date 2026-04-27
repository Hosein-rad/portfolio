"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const About = () => {
  const [openStory, setOpenStory] = useState(false);
  const ref = useRef();
  const ref2 = useRef();

  const setImage1 = () => {
    if (ref && ref2) {
      ref.current.style.opacity = "1";
      ref2.current.style.opacity = "0";
    }
  };
  const setImage2 = () => {
    if (ref && ref2) {
      ref.current.style.opacity = "0";
      ref2.current.style.opacity = "1";
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpenStory(false);
    }
  };

  useEffect(() => {
    if (openStory) {
      document.body.style.overflow = "clip";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [openStory]);

  return (
    <div
      id="about"
      className="h-fit pt-25 bg-sky-200 dark:bg-sky-950 flex flex-col items-center text-black dark:text-white"
    >
      {openStory && (
        <div
          id="dots-boxes"
          onClick={handleOverlayClick}
          className="absolute -mt-100 -left-20 w-[150dvw] h-[300dvh] backdrop-blur-3xl z-100 duration-300"
        >
          {createPortal(
            <div className="fixed h-full top-0 left-0 mx-40 flex flex-col items-end rounded-4xl border backdrop-brightness-20 text-white z-101 animate-open-portal origin-[90%_50%] leading-relaxed">
              <div className="w-full flex justify-end border-b bg-black/90 rounded-t-4xl z-101">
                <Image
                  src="/svgs/close.svg"
                  alt="close btn"
                  width={30}
                  height={30}
                  className="mr-5 my-3 size-10 border border-white rounded-full bg-black hover:bg-red-600 hover:rotate-360 cursor-pointer duration-500"
                  onClick={() => setOpenStory(() => false)}
                />
              </div>
              <p className="h-140 px-5 mx-10 -mt-15 -mb-15 py-20 text-justify overflow-y-scroll scroll-hidden z-100">
                I&apos;m a 28 year-old English teacher. I entered the classroom
                for one simple reason: <strong>passion</strong>. I genuinely
                wanted to <em>shape minds and make a difference</em>. But after
                only 2 months in front of the classroom, I hit a shock of
                realization:{" "}
                <span className="block text-indigo-200">
                  - The job, the system, the daily reality; Nothing like I
                  imagined. Not much about teaching, mostly just babysitting. No
                  growth. No future. Just the bare minimum survival -
                </span>{" "}
                I felt a deep, unsettling mismatch between what I was doing and
                what I was capable of. So, I didn&apos;t just complain. I
                started a rigorous obsessive research on myself. I analyzed my{" "}
                <i>personality type</i>, my <i>long-term vision</i>, and
                specifically my <i>cognitive needs</i>. I&apos;ve learned that
                doing simpler repetitive work, with no room to
                <span className="text-amber-100"> thrive</span> and{" "}
                <span className="text-green-200"> grow</span>, without cognitive
                challenge and improvement, feels like{" "}
                <em className="text-gray-300">slow erosion</em>, with such
                little impact in the world. Certainly not enough impact to look
                back on and be proud of, when I&apos;m old... I craved{" "}
                <b>complexity</b>. I needed an uphill, to keep
                <strong>
                  {" "}
                  going <sup> up</sup>
                </strong>
                . That&apos;s when I kept stumbling over the same word again and
                again:
                <b className="bg-[linear-gradient(90deg,rgb(150,150,255)0%,rgb(255,150,150)100%)] bg-clip-text text-transparent">
                  {" "}
                  {"<"}Programming{" />"}
                </b>{" "}
                <br />
                That was the <span className="text-yellow-200">spark</span>. I
                dove into Front-End Development with hunger. The basics came
                quickly, but I soon realized that &quot;knowing the basics&quot;
                in this field is like knowing the alphabet. So I went deeper. I
                buried myself in frameworks, libraries, and the adjacent skills
                that turn a coder into a creator— editing, design sensibility,
                workflow optimization, you name it. Due to my proficiency in
                English, I had a <b>superpower</b>: I could consume the{" "}
                <i>world&apos;s best documentation and tutorials</i> for free,
                and faster than most. I learned quick. I built a lot. <br />
                But the journey from &quot;learning&quot; to &quot;being
                qualified&quot; has been a brutal, 2.5-year marathon of
                self-discipline. And I want to be completely honest with you
                about that struggle. During this time, I was working a second
                job just to keep the lights on. There were{" "}
                <b className="text-red-300">zero rewards</b> along the way— no
                paychecks for a nice UI, no pats on the back for debugging a
                tricky component. There was only the echo of my own{" "}
                <i className="text-blue-300">hope</i>. I&apos;ve put my entire
                life on pause. I&apos;ve said{" "}
                <i className="text-red-200"> No</i> to friends,{" "}
                <i className="text-red-200"> No</i> to family gatherings,{" "}
                <i className="text-red-200"> No </i>
                to nearly every social event. I even turned down quick-money
                opportunities that I desperately needed, opportunities that were
                right there in front of me. I said no, not because I&apos;m
                foolish, but because I knew saying yes would pull me away from
                the gravitational pull of{" "}
                <b className="text-amber-200">my dream</b>. <br />
                And I won&apos;t pretend I was perfect. It wasn&apos;t always a
                straight line. I got pulled away for{" "}
                <span className="text-red-200">months</span> at a time. A few
                times, I genuinely tried to change course — serious deviations
                from the main trajectory, not just distractions. I walked away
                from this path entirely. But time has a way of revealing the
                truth: the grass is never{" "}
                <span className="text-green-300">greener</span>. Slowly, the
                deep-rooted goals and the calm, honest desires of my heart
                started whispering again and kept pulling me back, bit by bit,
                until I&apos;d find myself, once again, on the same old plan,
                same old{" "}
                <code className="px-1 bg-[#1e1e1e] text-[#d4d4d4] rounded-lg font-[Courier_New]">
                  code
                </code>
                . The same quiet certainty that this was always where I
                belonged.
                <br />
                This is why I know this is my destiny. I&apos;m no longer in
                that wide-eyed, enthusiastic beginner phase. That phase is
                <span className="text-gray-300"> long gone</span>. Now, this is
                about <b>survival</b> and, honestly, a bit of{" "}
                <span className="text-red-200">aggression</span>. It&apos;s
                about much more than passion now, It&apos;s about{" "}
                <em>My Future</em>.
                <br />I can promise you this: I am{" "}
                <u className="text-red-200">not</u> the employee who clocks in,
                collects the paycheck and settles for average. That kind of
                existence is what I&apos;ve been fighting against for the last
                two and a half years. Once my foot is through the door, I will
                improve with all I&apos;ve got. I have{" "}
                <em className="text-red-200">removed</em> every single
                distraction from my life— including people who mattered the
                most. My world right now is very, very simple. It consists of
                two things: my faith in <b>God</b>, and <b>my dream</b>.
                <br />
                I&apos;ve proven I can endure the <em>silence</em>, the{" "}
                <em>lack of reward</em>, and the crushing <em>self-doubt</em>{" "}
                without <b className="text-red-200">any support</b>. On the
                contrary,{" "}
                <span className="inline text-gray-300">
                  with many quiet votes of disbelief, louder than any &quot;give
                  up&quot;.
                </span>{" "}
                Now, imagine what I can do for a business with a direction, a
                team, and a mission to align with. I&apos;ll tell you this:
                There&apos;s no failure in my vocabulary, I WILL get to it one
                way or another, it&apos;s just a matter of{" "}
                <strong className="text-blue-300">when</strong>. <br />
                I&apos;m not looking for an easy path or a comfortable career.
                I&apos;m looking for a door. Give me the chance, and I&apos;ll
                show you what I&apos;m made of. <br /> That&apos;s my story. And
                I can&apos;t wait to prove it.
              </p>
              <div className="w-full h-15 flex border-t bg-black/90 rounded-b-4xl z-101"></div>
            </div>,
            document.getElementById("about")
          )}
        </div>
      )}
      <h1 className="w-fit px-20 py-5 text-black dark:text-white text-center text-6xl border-white dark:border-black border-b-4 mask-x-from-85%">
        Who am I ?
      </h1>

      <div className="flex justify-between flex-col md:flex-row-reverse w-4/5 overflow-hidden">
        <div
          id="my-story"
          className="relative flex flex-col items-center justify-center duration-300 group"
        >
          <div
            className="relative hover:scale-90 duration-300 cursor-pointer"
            onClick={() => setOpenStory(() => true)}
            onMouseEnter={setImage2}
            onMouseLeave={setImage1}
          >
            <Image
              ref={ref}
              src={"/images/me.webp"}
              alt="Hosein.dev"
              width={250}
              height={250}
              className="size-60 mt-8 mb-3 rounded-[60px] duration-300"
            />
            <Image
              ref={ref2}
              src={"/images/me-hover.webp"}
              alt="Hosein.dev"
              width={250}
              height={250}
              className="absolute top-0 size-60 mt-8 mb-3 rounded-[60px] opacity-0 duration-300"
            />
          </div>
          <button
            className={`px-5 py-3 my-2 font-bold text-blue-300 rounded-2xl bg-black cursor-pointer hover:scale-110 animate-pulse duration-300 text-shadow-white hover:text-black hover:bg-cyan-300 hover:animate-none`}
            onClick={() => setOpenStory(() => true)}
            onMouseEnter={setImage2}
            onMouseLeave={setImage1}
          >
            My Story
          </button>
        </div>
        <p className="w-[70%] mt-10 text-md text-justify">
          <span className="block mb-4 text-lg text-center font-normal">
            <span className="text-cyan-700 dark:text-cyan-200">
              Front-End Developer
            </span>{" "}
            |
            <span className="text-fuchsia-700 dark:text-fuchsia-200">
              {" "}
              2.5 Years Self-Taught
            </span>{" "}
            |
            <span className="text-amber-700 dark:text-amber-200">
              {" "}
              Ready to start immediately
            </span>
          </span>
          I&apos;m Hosein Rad. specialized in building clean, complex interfaces
          and solving problems—if there&apos;s a bug, I find it. If there&apos;s
          a new tool, I learn it quickly. With{" "}
          <strong>professional fluency in English</strong>, I navigate
          documentations and technical resources with ease. <br />I have a
          strong eye for{" "}
          <em className="text-green-800 dark:text-green-100">design</em> and{" "}
          <em className="text-purple-900 dark:text-purple-100">detail</em>, and
          I genuinely enjoy turning complicated layouts into smooth, working
          code.
          <br /> While my current strength is front-end, I&apos;m very
          enthusiastic about roles that touch Python, C#, or Java on the
          backend. I want to grow into a <b>full-stack</b> mindset and would
          welcome any exposure to those technologies.
          <br /> I do my best work when I can lock in and focus deeply. I&apos;m
          self-driven and used to delivering results
          <strong className="text-gray-600 dark:text-gray-300">
            {" "}
            without someone looking over my shoulder
          </strong>
          . I&apos;m not looking for just a paycheck—I&apos;m looking for a
          place to contribute, provide value, solve real problems and move up
          from Junior to Mid-level as efficiently as my output allows, and keep
          climbing ...
        </p>
      </div>
    </div>
  );
};

export default About;
