import ULABCampus from "../assets/campus.jpg";
const Footer = () => {
  return (
    <>
      <figure>
        <img src={ULABCampus} alt="Campus" className="pb-1"/>
      </figure>
      <div>
        <p className="border-t-2 border-black text-center p-2">All Rights Reserved. &copy;{new Date().getFullYear()}</p>
      </div>
    </>
  );
};

export default Footer;
