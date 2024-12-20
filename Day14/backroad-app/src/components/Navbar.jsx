import { menu,socialIcons } from "./Data";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src="./images/logo.svg" className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          <ul className="nav-links" id="nav-links">
            {menu.map((item, id) => {
              const { text, link } = item;
              return (
                <li key={id}>
                  <a href={link} className="nav-link">
                    {" "}
                    {text}{" "}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {socialIcons.map((item) => {
              const { id, url, icon } = item;
              return (
                <li key={id}>
                  <a href={url} className="nav-icon">
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;