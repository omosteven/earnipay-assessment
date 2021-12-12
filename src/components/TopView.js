import roundImage from "../images/round-image-2.png";

const TopView = () => {
  return (
    <>
      <section className="top-view">
        <div className="mt-14">
          <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1">
            <div className="mains top-view-left p-5">
              <h1 className="font-bold mt-4 text-green-800">WELCOME TO OUR</h1>
              <h2 className="text-big-2x mt-0">
                Healthy Food
                <br />
                Collection!
              </h2>
              <p className="text-small mt-2 mb-4 text-gray-black">
                Et quidem exercitus quid ex eo delectu rerum, quem ad eam non
                quo voluptas expetenda, fugiendus dolor sit voluptatem
              </p>
              <button
                style={{
                  borderRadius: "16px",
                  width: "200px",
                  border: "2.5px solid",
                }}
                className="half-width text-green-500 hover:bg-green-700 hover:text-white text-white font-bold py-2 px-2 rounded  mt-2"
              >
                SHOP NOW
              </button>
            </div>
            <div>
              <img
                className="top-view-image "
                src={roundImage}
                alt="Food Plate"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopView;
