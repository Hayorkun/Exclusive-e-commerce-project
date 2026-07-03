import { NavLink } from "react-router-dom";
import Images from "../assets/Image";

const About = () => {


  return (
    <section className="my-12">
      <div className="my-max-width w-11/12 mx-auto">
        <div className="grid md:grid-cols-2 gap-3 md:gap-0 mb-10">
          <div className="flex flex-col justify-center">
            <h1 className="font-heading font-semibold text-4xl mb-6">
              Our Story
            </h1>
            <p className="font-body text-sm max-w-sm">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands, serving 3
              million customers across the region.
            </p>
            <p className="mt-5 font-body text-sm max-w-sm">
              Exclusive has more than 1 million products to offer, growing at a
              very fast pace. We offer a diverse assortment in categories
              ranging from consumer electronics to lifestyle essentials.
            </p>
          </div>
          <div className="">
            <img src={Images.AfricanShoppers} alt="Two smiling women holding shopping bags and looking at a smartphone" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <div className="p-5 border"></div>
          <div className="p-5 border"></div>
          <div className="p-5 border"></div>
          <div className="p-5 border"></div>
         
          
        </div>
      </div>
    </section>
  );
};

export default About;
