import React from "react";
import { Link } from "react-router-dom";

// Импорт картинок
import Worke from "../assets/Work.png";
import Woman from "../assets/Women.png";
import Star from "../assets/star.svg";
import Sta from "../assets/sta.svg";
import Sun from "../assets/sun.svg";

import Logo1 from "../assets/Logos.svg";
import Logo2 from "../assets/Logos1.svg";
import Logo3 from "../assets/Logos2.svg";

import Foto1 from "../assets/Foto1.svg";
import Foto3 from "../assets/Foto3.svg";
import Foto4 from "../assets/Foto4.svg";
import Foto5 from "../assets/Foto5.svg";

import Author1 from "../assets/Logos4.svg";
import Author2 from "../assets/Logos5.svg";
import Author3 from "../assets/Logos6.svg";

const Work = () => {
  return (
    <>
      {/* Первая секция */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-6 lg:px-16 py-16">
        <img src={Worke} alt="Work illustration" className="w-full lg:w-1/2" />
        <div className="text-center lg:text-left max-w-xl">
          <h1 className="text-2xl md:text-3xl font-bold">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>

          <div className="space-y-4 py-6">
            <Feature text="We connect our customers with the best." />
            <Feature text="Advisor success customer launch party." />
            <Feature text="Business-to-consumer long tail." />
          </div>

          <Link to="/fourth">
            <button className="bg-blue-950 text-white text-lg md:text-xl py-2 px-6 md:px-8 rounded-3xl">
              Start now
            </button>
          </Link>
        </div>
      </div>

      {/* Вторая секция */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 px-6 lg:px-16 py-16">
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-2xl md:text-3xl font-bold py-5">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h1>

          <div className="space-y-4">
            <Option icon={Star} text="We connect our customers with the best." active />
            <Option icon={Sta} text="Advisor success customer launch party." />
            <Option icon={Sun} text="Business-to-consumer long tail." />
          </div>
        </div>
        <img src={Woman} alt="Business woman" className="w-full lg:w-1/2" />
      </div>

      {/* Отзывы */}
      <div className="bg-blue-950 py-16 px-6">
        <h1 className="text-white text-2xl md:text-3xl font-bold text-center max-w-3xl mx-auto">
          An enterprise template to ramp up your company website
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          <Testimonial
            text="Buyer buzz partner network disruptive non-disclosure agreement business"
            img={Logo1}
            name="Albus Dumbledore"
            role="Manager @ Hogwarts"
          />
          <Testimonial
            text="Release facebook responsive web design business model canvas seed money monetization."
            img={Logo3}
            name="Harry Potter"
            role="Team Leader @ Gryffindor"
          />
          <Testimonial
            text="Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor."
            img={Logo2}
            name="Severus Snape"
            role="Manager @ Slytherin"
          />
        </div>
      </div>

      {/* Секция с картинкой */}
      <div className="px-6 lg:px-20 py-16">
        <img src={Foto1} alt="Enterprise" className="w-full rounded-lg" />
      </div>

      {/* Вопросы */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 lg:px-20 py-16">
        <h1 className="text-2xl md:text-4xl font-bold lg:w-2/5 text-center lg:text-left">
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h1>
        <div className="text-center lg:text-left">
          <p className="text-lg md:text-xl py-2">We connect our customers with the best?</p>
          <p className="text-lg md:text-xl">Android research & development rockstar?</p>
        </div>
      </div>

      {/* Блог */}
      <div className="text-center pt-20 px-6">
        <h2 className="text-gray-600">Our Blog</h2>
        <h1 className="text-2xl md:text-4xl font-bold max-w-3xl mx-auto py-4">
          Value proposition accelerator product management venture
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20 py-14">
        <BlogCard
          img={Foto3}
          date="November 22, 2021"
          title="Pitch termsheet backing validation focus release."
          authorImg={Author1}
          author="Chandler Bing"
        />
        <BlogCard
          img={Foto4}
          date="November 22, 2021"
          title="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
          authorImg={Author2}
          author="Rachel Green"
        />
        <BlogCard
          img={Foto5}
          date="November 22, 2021"
          title="Beta prototype sales iPad gen-z marketing network effects value proposition."
          authorImg={Author3}
          author="Monica Geller"
        />
      </div>
    </>
  );
};

/* Доп. компоненты */
const Feature = ({ text }) => (
  <div className="flex items-center gap-3">
    <span className="w-3 h-3 bg-blue-950 rounded-full"></span>
    <h3 className="text-base md:text-lg">{text}</h3>
  </div>
);

const Option = ({ icon, text, active }) => (
  <div
    className={`flex items-center gap-3 w-full md:w-96 px-5 py-3 border rounded-lg ${
      active ? "bg-blue-950 text-white" : "border-black"
    }`}
  >
    <img src={icon} alt="" className="w-6 h-6" />
    <h3>{text}</h3>
  </div>
);

const Testimonial = ({ text, img, name, role }) => (
  <div className="bg-white rounded-xl shadow-md px-6 py-8">
    <p className="text-gray-700 text-sm md:text-base">{`“${text}”`}</p>
    <div className="flex items-center gap-3 pt-6">
      <img className="w-10" src={img} alt={name} />
      <div>
        <p className="text-xs font-bold">{name}</p>
        <p className="text-xs text-gray-500">{role}</p>
      </div>
    </div>
  </div>
);

const BlogCard = ({ img, date, title, authorImg, author }) => (
  <div className="w-full">
    <img src={img} alt={title} className="w-full rounded-lg" />
    <div className="flex gap-4 py-3 text-xs md:text-sm text-gray-600">
      <span className="font-bold">Category</span>
      <span>{date}</span>
    </div>
    <h1 className="text-lg font-semibold">{title}</h1>
    <div className="flex items-center gap-3 py-6">
      <img src={authorImg} alt={author} className="w-8 h-8" />
      <p className="text-sm">{author}</p>
    </div>
  </div>
);

export default Work;
``