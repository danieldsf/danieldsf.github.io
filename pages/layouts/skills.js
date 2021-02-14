import {
  languages, technologies
} from "./../../lib/config/skills";

export default function Skills() {
  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            { languages.map((language, index) => {
              return (
                <div className="progress" key={index}>
                  <span className="skill">
                    {language.title} <i className="val">{language.number}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={language.number}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              )
            }) }
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

          { technologies.map((technology, index) => {
              return (
                <div className="progress" key={index}>
                  <span className="skill">
                    {technology.title} <i className="val">{technology.number}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={technology.number}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              )
            }) }
          </div>

        </div>
      </div>
    </section>
  );
}
