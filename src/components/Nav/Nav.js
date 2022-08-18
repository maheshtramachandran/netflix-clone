import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="netflix logo"
      ></img>
      <img
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="user avatar"
      ></img>
    </div>
  );
}

export default Nav;
