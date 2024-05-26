import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function FooterSection({ children, mapOfLinks }) {
  return (
    <div className="col-sm mb-3">
      <h6>{children}</h6>
      <ul className="nav flex-column">
        {Array.from(mapOfLinks.entries()).map(([key, value]) => (
          <li className="nav-item mb-2" key={key}>
            <Link to={value} className="nav-link p-0 text-body-secondary">
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterSection.propTypes = {
  children: PropTypes.string.isRequired,
  mapOfLinks: PropTypes.instanceOf(Map).isRequired,
};

export default FooterSection;
