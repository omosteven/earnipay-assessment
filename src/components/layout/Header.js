import { useState } from "react";
import logo from "../../images/logo.png";
import FormModal from "./FormModal";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <header>
        <div className="main p-5">
          <div className="mt-1 mb-1 grid grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3">
            <div>
              <img src={logo} alt="Your Logo" className="header-logo" />
            </div>

            <div className="header-text-flex mt-1 text-medium hide-on-mobile">
              <span className="text-green-800">Home</span>
              <span className="text-green-700">About Us</span>
              <span className="text-green-700">Features</span>
              <span className="text-green-700">Shop</span>
              <span className="text-green-700">Blog</span>
            </div>

            <div className="header-button-flex mt-0">
              <button
                onClick={handleOpen}
                className="header-button text-green-500 hover:bg-green-700 hover:text-white text-white font-bold py-2 px-2"
              >
                SIGN UP
              </button>
              <button
                onClick={handleOpen}
                className="header-button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4"
              >
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </header>

      <FormModal handleClose={handleClose} open={open} />
    </>
  );
};

export default Header;
