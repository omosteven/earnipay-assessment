import bgImage from "../images/rose-2417334_1920.jpg";

import food1 from "../images/spaghetti-1932466_1920.jpg";
import food2 from "../images/vegetables-752153_1920.jpg";
import food3 from "../images/vegetables-1085063_1920.jpg";
import food4 from "../images/salad-2756467_1920.jpg";
// import food5 from "../images/salmon-518032_1920.jpg";

const foodsList = [
  {
    image: food1,
    name: "Green Salad",
    price: "$ 8.45",
  },
  {
    image: food2,
    name: "Beef Hamburger",
    price: "$ 12.50",
  },
  {
    image: food3,
    name: "Roast Paprika",
    price: "$ 7.00",
  },
  {
    image: food4,
    name: "Fried Noodle",
    price: "$ 10.00",
  },
];

const NextTopView = () => {
  return (
    <>
      <section
        style={{
          background: `linear-gradient(190deg,rgba(5,5,5,0.5),rgba(5,5,5,0.5)), url(${bgImage})`,
          backgroundSize: "cover",
          height: "25em",
        }}
      >
        <div className="main p-5">
          <h1 className="text-big text-center mt-4 text-white">HURRY UP!</h1>
          <h2 className="text-big text-center mt-4 text-white">
            DEAL OF THE WEEK
          </h2>
          <p className="text-center mt-2 mb-4 text-white">
            SUNT AUTEM VEL EUM IURE REPREHENDERIT. QUI RATIONE
          </p>
        </div>
      </section>

      <section className="top-card shadow-md rounded-md">
        <div className="top-card-top"></div>
        <div className="top-card-container mb-10">
          <div className="px-4 py-4 mt-5">
            <div className="grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4">
              {foodsList.map((item, pos) => (
                <div className="mt-4 mb-4" key={pos}>
                  <img
                    src={item?.image}
                    className="top-card-image"
                    alt="FOOD"
                  />
                  <h3 className="mt-6 text-green text-small fade-text text-center">
                    {item?.name}
                  </h3>
                  <p className="mt-2 text-green text-title text-bold text-center">
                    {item?.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextTopView;
