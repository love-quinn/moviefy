import icon from "../../assets/favicon.svg";
import earth from "../../assets/earth.svg";

function Header() {
  const linkedinUrl = "https://www.linkedin.com/in/love-quinn-dev/";
  const githubUrl = "https://github.com/love-quinn/";
  const youtubeUrl = "https://www.youtube.com/@love-quinn-dev";
  return (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="d-flex align-items-end">
        <h1 className="mb-3">Moviefy</h1>
        <i className="px-3 mb-3">
          <img src={icon} alt="Movies Image" width="50px" />
          {/* <img src="/favicon.svg" alt="Movies Image" width="50px" /> */}
        </i>
      </div>

      <h3 className="fw-light mb-3">
        Discover the daily-most popular movies on earth{" "}
        <img src={earth} alt="" width="22px" />
      </h3>
      <cite className="fw-light text-muted">by Lucas Santana 🧑‍💻</cite>
      <div className="social-media">
        <a className="rounded-circle" target="blank" href={linkedinUrl}>
          <i className="fs-2 bi bi-linkedin"></i>
        </a>
        <a
          className="link-body-emphasis rounded-circle"
          target="blank"
          href={githubUrl}
        >
          <i className="fs-2 ms-4 bi bi-github"></i>
        </a>

        <a
          className="link-danger rounded-circle"
          target="blank"
          href={youtubeUrl}
        >
          <i className="fs-2 ms-4 bi bi-youtube"></i>
        </a>
      </div>
    </div>
  );
}

export default Header;
