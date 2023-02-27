import React from "react";
import "./experience.css";
import { BsPatchCheckFill} from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>what Skills I have</h5>
      <h2>My Skills</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Professional Skills </h3>
          <div className="experience_content">
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">HTML</h4>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">CSS</h4>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">JavaScript</h4>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">Git</h4>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">React</h4>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">NPM</h4>
            </article>
          </div>
        </div>
        <div className="experience_frontend">
          <h3>Personal Developer</h3>
          <div className="experience_content">
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">Autodidact</h4>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">Proactive</h4>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">Adaptable</h4>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill  className='experience_details-icons' />
              <h4 className="text-light">Calm</h4>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">Focused</h4>
            </article>
            <article className="experince_details">
              <BsPatchCheckFill className='experience_details-icons'  />
              <h4 className="text-light">Fast learner</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
