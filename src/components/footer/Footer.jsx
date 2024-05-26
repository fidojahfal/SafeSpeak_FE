import FooterSection from "./FooterSection";

function Footer() {
  const mapGithub = new Map([
    ["Github Frontend", "#"],
    ["Github Backend", "#"],
  ]);

  const mapResources = new Map([
    ["Icons8", "#"],
    ["Bootstrap", "#"],
    ["React", "#"],
  ]);

  const mapDevelopers = new Map([
    ["Fido Jahfal Prayoga", "#"],
    ["Giovillando", "#"],
    ["Shabrina Nurmalitasari", "#"],
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
