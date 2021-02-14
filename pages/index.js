import Head from 'next/head'
import Facts from './src/layouts/facts';
import Resume from './src/layouts/resume';
import Skills from './src/layouts/skills';
import Footer from './src/layouts/footer';
import About from './src/layouts/about';
import Portfolio from './src/layouts/portfolio';
import Services from './src/layouts/services';
import Contact from './src/layouts/contact';
import Testimonials from './src/layouts/testimonials';
import Header from './src/layouts/header';

export default function Home() {
  
  return (
    <div className="ng-container">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="description" />
        <meta content="" name="keywords" />

        <title>My Portfolio - Daniel Farias</title>
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        
        {/* <!-- Google Fonts --> */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />

        {/* <!-- Vendor CSS Files --> */}
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/icofont/icofont.min.css" rel="stylesheet" />
        <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/venobox/venobox.css" rel="stylesheet" />
        <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />

        {/* <!-- Template Main CSS File --> */}
        <link href="assets/css/style.css" rel="stylesheet" />
                
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
        <script src="assets/js/fix.js"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js"></script>
      </Head>

      <button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>

      <Header />

      <main id="main">
        <About />

        <Facts />

        <Skills />

        <Resume />

        <Portfolio />

        <Services />

        {/* <Testimonials /> */}

        <Contact />
      </main>

      <Footer />

      <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
      {/*  */}
      <script src="assets/vendor/jquery/jquery.min.js"></script>
      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/jquery.easing/jquery.easing.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/vendor/waypoints/jquery.waypoints.min.js"></script>
      <script src="assets/vendor/counterup/counterup.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/venobox/venobox.min.js"></script>
      <script src="assets/vendor/owl.carousel/owl.carousel.min.js"></script>
      <script src="assets/vendor/typed.js/typed.min.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      

      <script src="assets/js/main.js"></script>
    </div>
  )
}
