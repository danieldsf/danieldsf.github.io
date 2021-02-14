import person from './../../lib/config/personalInfo';

export default function About() {
    return (
        <section id="about" className="about">
          <div className="container">

            <div className="section-title">
              <h2>About</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
              </div>
              <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                <h3>{ person.roles.join(' & ') }.</h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>

                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> { person.birthDate.toLocaleDateString() }</li>
                      <li><i className="icofont-rounded-right"></i> <strong>Website: </strong><a href={ person.website } target="_blank">{ person.website }</a></li>
                      <li><i className="icofont-rounded-right"></i> <strong>Telegram: </strong><a href={ person.telegram } target="_blank">Click here</a></li>
                      <li><i className="icofont-rounded-right"></i> <strong>City:</strong> { person.address }</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> { person.age }</li>
                      <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> { person.degree }</li>
                      <li><i className="icofont-rounded-right"></i> <strong>E-mail:</strong> { person.email }</li>
                      <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> { person.canFreelance ? 'Available' : 'Unavailable' }</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                </p>
              </div>
            </div>

          </div>
        </section>
    )
}