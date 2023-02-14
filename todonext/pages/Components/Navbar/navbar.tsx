import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand m-2 p-2" href="#">
          TO DO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item m-2 p-2">
              <Link href="/LandingPages/landingHome/landingHome">
                <h4 className="text-secondary">To do List</h4>
              </Link>
            </li>
            <li className="nav-item m-2 p-2">
              <Link href="/LandingPages/aboutUs">
                <h4 className="text-secondary">About</h4>
              </Link>
            </li>
            <li className="nav-item m-2 p-2">
              <Link href="/">
                <h4 className="text-secondary">Log in</h4>
              </Link>
            </li>
            <li className="nav-item m-2 p-2">
              <Link href="/">
                <h4 className="text-secondary">Sign up</h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
