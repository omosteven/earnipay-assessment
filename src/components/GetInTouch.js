import mapImage from "../images/map.png";

const GetInTouch = () => {
  return (
    <>
      <section className="main mt-14 mb-10">
        {/* <div className="grid grid-cols-3 gap-1"> */}
        <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4">
          <div className="col-span-2">
            <h1 className="text-big mb-4">GET IN TOUCH</h1>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    Full Name*
                  </label>
                  <input
                    className="shadow appearance-none block w-full bg-white-200 text-gray-700 border border-white-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder="Full name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email Address*
                  </label>
                  <input
                    className="shadow appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Message*
                  </label>
                  <textarea
                    className="shadow appearance-none block w-full bg-white-200 text-gray-700 border border-gray-200 rounded py-14 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="Message"
                  />
                </div>
              </div>

              <button
                style={{ width: "240px", borderRadius: "64px" }}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-4 rounded  mt-2 mb-4"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-span-2 mt-2 hide-on-mobile">
            <img src={mapImage} alt="MAP" className="full-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
