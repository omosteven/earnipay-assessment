import testimonialImage from '../images/testimonialImage.png';

const WhatOurCustomersSay = () => {
  return (
    <>
      <section className="main mt-10 mb-10">
        <h1 className="text-big text-center mt-4">What Our Customers Say</h1>
        <p className="text-center mt-2 mb-4">
          In quo ignorare vas arbitrer, sed ipsius honestatis decore laudandis.
        </p>

        <div>
            <img src={testimonialImage} alt='Our Reviews'/>
        </div>
      </section>
    </>
  );
};

export default WhatOurCustomersSay;
