import bgImage from "../images/spaghetti-1932466_1920.jpg";

const services = [
  {
    icon: "",
    title: "Birthday Party",
    text: "Lorem Ipsum is simply dummy text of the printing and typeseting induLorem Ipsum",
  },
  {
    icon: "",
    title: "Events Party",
    text: "Lorem Ipsum is simply dummy text of the printing and typeseting induLorem Ipsum",
  },
  {
    icon: "",
    title: "Private Dinning",
    text: "Lorem Ipsum is simply dummy text of the printing and typeseting induLorem Ipsum",
  },
  {
    icon: "",
    title: "Charity Events",
    text: "Lorem Ipsum is simply dummy text of the printing and typeseting induLorem Ipsum",
  },
];

const OurServices = () => {
  return (
    <>
      <section
        style={{
          background: `linear-gradient(190deg,rgba(5,5,5,0.7),rgba(5,5,5,0.7)), url(${bgImage})`,
          backgroundSize: "contain"
        }}
      >
        <div className="main p-5">
          <h1 className="text-big text-center mt-14 text-white">
            Best Services
          </h1>
          <p className="text-center mt-10 mb-4 text-white">
            In quo ignorare vas arbitrer, sed ipsius honestatis decore
            laudandis.
          </p>
          {}

          <div className="mt-10 mb-10 grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4">
           {
               services.map((item,pos)=>(
                <div className="mt-4" key={pos}>
                    <h2 className="text-title text-white text-center">{item?.title}</h2>
                    <p className="mt-4 text-white text-small text-center fade-text">{item?.text}</p>
                    <hr className="card-under-rule"/>
                </div>  
               ))
           }
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
