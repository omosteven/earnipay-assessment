import Carousel from "react-grid-carousel";

import food1 from "../images/spaghetti-1932466_1920.jpg";
import food2 from "../images/vegetables-752153_1920.jpg";
import food3 from "../images/vegetables-1085063_1920.jpg";
import food4 from "../images/salad-2756467_1920.jpg";
import food5 from "../images/salmon-518032_1920.jpg";

const foodsList = [
  {
    date: "August 2, 2021",
    title: "How to Increase Your ROI Through scientific SEM?",
    image: food1,
  },
  {
    date: "August 2, 2021",
    title: "How to Increase Your ROI Through scientific SEM?",
    image: food2,
  },
  {
    date: "August 2, 2021",
    title: "How to Increase Your ROI Through scientific SEM?",
    image: food3,
  },
  {
    date: "August 2, 2021",
    title: "How to Increase Your ROI Through scientific SEM?",
    image: food4,
  },
  {
    date: "August 2, 2021",
    title: "How to Increase Your ROI Through scientific SEM?",
    image: food5,
  },
];

const LatestNews = () => {
  return (
    <>
      <section className="main mt-10 mb-14">
        <h1 className="text-big text-center mt-4">Latest News</h1>
        <p className="text-center mt-2 mb-4">
          Here's what trending in the marketing world. Stay updated with all the{" "}
          <br /> latest tech announcements. Markets Never Sleep!
        </p>

        <div>
          <Carousel cols={3} rows={1} gap={20} loop autoplay={2000} showDots>
            {foodsList.map((item, pos) => (
              <Carousel.Item key={pos}>
                <div>
                  <div
                    style={{
                      background: `linear-gradient(190deg,rgba(5,5,5,0.5),rgba(5,5,5,0.5)), url(${item?.image})`,
                      backgroundSize: "cover",height:'15em'
                    }}
                    className="shadow-md rounded-md card-blur-bg-color"
                  >
                    <div className="p-5">
                      <h5 className="text-xl font-semibold mb-8 text-white">
                        {item?.date}
                      </h5>
                      <p className="mb-10 text-white">{item?.title}</p>
                      <a href='https://earnipay.com' className="mt-8 text-white">READ MORE</a>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
