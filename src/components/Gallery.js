import food1 from "../images/spaghetti-1932466_1920.jpg";
import food2 from "../images/vegetables-752153_1920.jpg";
import food3 from "../images/vegetables-1085063_1920.jpg";
import food4 from "../images/salad-2756467_1920.jpg";
import food5 from "../images/salmon-518032_1920.jpg";


const Gallery = () => {
  return (
    <>
      <section className="main mt-10 mb-10">
        <h1 className="text-big text-center mt-4">Food Gallery</h1>
        <p className="text-center mt-2 mb-4">
          In quo ignorare vas arbitrer, sed ipsius honestatis decore laudandis.
        </p>

        <div>
          <section className="overflow-hidden text-gray-700 ">
            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
              <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={food1}
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={food2}
                    />
                  </div>
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={food3}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap w-1/2">
                  <div className="w-full p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={food4}
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={food5}
                    />
                  </div>
                  <div className="w-1/2 p-1 md:p-2">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-full h-full rounded-lg"
                      src={food2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Gallery;
