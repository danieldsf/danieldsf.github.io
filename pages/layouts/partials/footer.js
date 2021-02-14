import person from "./../../../lib/config/personalInfo";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="copyright">
          &copy; Copyright &nbsp;
          <strong>
            <span>{person.name}</span>
          </strong>
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
}
