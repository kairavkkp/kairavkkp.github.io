import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      <strong> &copy; 2021 </strong>
      Find me on GitHub {" "}
      <a
        className="badge badge-dark"
        rel="noopener"
        href="https://github.com/kairavkkp"
        aria-label="My GitHub"
      >
        Kairav Pithadia
      </a>{" "}
      {/* using <i className="fab fa-react"></i>
      <p>
        <small className="text-muted">
          {" "}
          Project code is open source. Feel free to fork and make your own
          version.
        </small>
      </p> */}
    </footer>
  );
};

export default Footer;
