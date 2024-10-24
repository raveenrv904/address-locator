import { MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__title">Get Your Address Instantly</h1>
      <MapPin className="navbar__icon" />
    </div>
  );
};

export default Navbar;
