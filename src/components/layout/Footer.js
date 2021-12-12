const Footer = () => {
  return (
    <>
      {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 mt-4">
  Button
</button> */}
      <footer>
        <div className="main">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
            <div className="mt-8">
              <div className="text-footer">
                <h1 className="text-white text-title">YOUR LOGO</h1>
                <p className="text-white fade-text mt-4 text-extra-small">
                  Lorem Ipsumis simpley dummy text of the printing and
                  typesetting industry. Lorem Ipsumhas been the
                  indfustyrry'standard dummy text ever since the 1500s
                </p>

                <p className="mt-4 text-white fade-text text-extra-small">
                  support@organic.com
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  234 456 789
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Level 13, 2 Elizabeth St, Melboune, Victorial3000, Australia
                </p>
              </div>
            </div>

            <div className="mt-8 text-border-left">
              <div className="text-footer">
                <h1 className="text-white text-title">USEFUL LINKS</h1>
                <p className="mt-4 text-white fade-text text-extra-small">
                  About Us
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Our Products
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Our Services
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Shop
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  News Blog
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Contact Us
                </p>
              </div>
            </div>

            <div className="mt-8 text-border-left">
              <div className="text-footer">
                <h1 className="text-white text-title">OUR SERVICES</h1>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Online Shopping
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Free Home Delivery
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Return Money
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Delivery on Place
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Wishlist
                </p>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Discount
                </p>
              </div>
            </div>

            <div className="mt-8 text-border-left">
              <div className="text-footer">
                <h1 className="text-white text-title">NEWSLETTER</h1>
                <p className="mt-4 text-white fade-text text-extra-small">
                  Subscribe To Our Newsletter
                </p>

                <form className="mt-4 mb-8">
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      className="shadow appearance-none border rounded w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="Full Name"
                    />
                  </div>
                  <button className="full-width bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  mt-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
