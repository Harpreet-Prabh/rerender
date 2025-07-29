import React from "react";
import useAuthContext from "./useAuthContext";

function HomePage() {
  const { isLogin } = useAuthContext();
  return (
    <div className="border p-4 bg-blue-200 font-semibold text-justify">
      <p className="p-2">
        I'm a passionate and dedicated learner with a strong interest in
        front-end web development and home inspection. I enjoy turning ideas
        into functional, user-friendly websites using HTML, CSS, Tailwind,
        JavaScript, and React. I'm also committed to continuous learning and
        currently expanding my skills in building practical applications,
        inspecting residential properties, and solving real-world problems.
        Whether it’s coding, inspecting, or learning new tools, I’m always
        excited to grow and take on new challenges.
      </p>
      {isLogin && (
        <p className="p-2">
          My name is Harpreet Kaur, and I am a mother of three, living in Belle
          River, Ontario. I moved to Canada in 2017 and have been balancing
          family life while pursuing my goals in education and career. I
          recently gave birth to twins and have a 6-year-old daughter, which has
          made me deeply value time management, patience, and resilience. I'm
          currently learning front-end development with a passion for clean,
          minimal design, and also studying to become a certified home
          inspector. With hands-on experience in real-world projects and a
          strong desire to grow, I'm building a future where I can contribute
          meaningfully while also being present for my family.
        </p>
      )}
    </div>
  );
}

export default HomePage;
