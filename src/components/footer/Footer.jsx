import { useSelector } from "react-redux";
import FooterSection from "./FooterSection";

function Footer({ onLoading }) {
  if (onLoading) {
    return null;
  }
  const mapGithub = new Map([
    ["Github Frontend", "https://github.com/fidojahfal/SafeSpeak_FE"],
    ["Github Backend", "https://github.com/fidojahfal/SafeSpeak_BE"],
  ]);

  const mapResources = new Map([
    ["Icons8", "https://icons8.com/"],
    ["Bootstrap", "https://getbootstrap.com/"],
    ["React", "https://react.dev/"],
  ]);

  const mapDevelopers = new Map([
    ["Fido Jahfal Prayoga", "https://www.linkedin.com/in/fidojahfal/"],
    ["Giovillando", "https://www.linkedin.com/in/gio-villando-357b0b2a4"],
    [
      "Shabrina Nurmalitasari",
      "https://www.linkedin.com/in/shabrina-nurmalitasari",
    ],
  ]);

  return (
    <footer
      className="row p-5 footer-box-shadow"
      style={{ "--bs-gutter-x": "0" }}
    >
      <div className="col-lg-7 mb-3">
        <div className="d-flex align-items-center pe-2">
          <img
            src="/logo/SafeSpeak-Logo.svg"
            alt="SafeSpeak Logo"
            className="nav-logo pe-2"
          />
          <p className="fs-5 fw-bold m-0 text-primary">SafeSpeak</p>
        </div>
        <p className="text-body-secondary">© 2024</p>
      </div>
      <FooterSection mapOfLinks={mapGithub}>Links</FooterSection>
      <FooterSection mapOfLinks={mapResources}>Resources</FooterSection>
      <FooterSection mapOfLinks={mapDevelopers}>Developers</FooterSection>
    </footer>
  );
}

export default Footer;
