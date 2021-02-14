import projects from "./../../lib/config/projects";

export default function Portfolio() {
    return (<section id="portfolio" className="portfolio section-bg">
          <div className="container">

            <div className="section-title">
              <h2>Portfolio</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">All</li>
                  <li data-filter=".filter-app">App</li>
                  {/* <li data-filter=".filter-card">Card</li> */}
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
              { projects.map((project, index) => {
                return (
                  <div className={ 'col-lg-4 col-md-6 portfolio-item ' + project.type } key={ index }>
                  <div className="portfolio-wrap">
                    <img src={ project.print } className="img-fluid" alt="" />
                    <div className="portfolio-links">
                      <a href={ project.print } data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                      <a href={ project.url } target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>
                </div>
                )
              }) }
            </div>

          </div>
        </section>)
}