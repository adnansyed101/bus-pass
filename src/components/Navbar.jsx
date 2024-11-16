import { BiMenu } from "react-icons/bi";
import ULABLogo from "../assets/ulab-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="btn btn-ghost navLink">
        <a>Staff</a>
      </li>
      <li className="btn btn-ghost navLink">
        <a>Schedule</a>
      </li>
      <li className="btn btn-ghost navLink">
        <a>Route Map</a>
      </li>
      <li className="btn btn-ghost navLink">
        <a target="_blank" href="https://ulab.edu.bd/">
          About us
        </a>
      </li>
      <li className="btn btn-ghost navLink">
        <a target="_blank" href="https://admissions.ulab.edu.bd/">
          Admissions
        </a>
      </li>
    </>
  );

  return (
    <div className="flex justify-between items-center py-4">
      <div>
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <BiMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img src={ULABLogo} alt="ULAB Logo" className="w-40" />
        </Link>
      </div>
      <ul className="flex items-center gap-2">{links}</ul>
      <div>
        <a
          className="btn btn-accent text-white"
          target="_blank"
          href="https://oam.ulab.edu.bd/"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

export default Navbar;
