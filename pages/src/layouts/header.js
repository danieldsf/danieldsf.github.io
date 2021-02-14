import person from "./../../src/config/personalInfo";

export default function Header() {
return (<header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="">{ person.name }</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <nav className="nav-menu">
            <ul>
              <li><a href=""><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li className="active"><a href="#portfolio"><i className="bx bx-book-content"></i> Portfolio</a></li>
              <li><a href="#services"><i className="bx bx-server"></i> Services</a></li>
              <li><a href="#contact"><i className="bx bx-envelope"></i> Contact</a></li>
            </ul>
          </nav>

          <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>
        </div>
      </header>
    )
}