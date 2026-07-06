import Images from "../assets/Image";
import { StoreIcon, LucideCircleDollarSign, LucideGift, BadgeDollarSign } from "lucide-react";

const About = () => {
  const STATS = [
    { icon: <StoreIcon />, rate: "10.5k", desc: "Seller active on site" },
    { icon: <LucideCircleDollarSign />, rate: "33k", desc: "Monthly product sale" },
    { icon: <LucideGift />, rate: "45.5k", desc: "Customers active on our site" },
    { icon: <BadgeDollarSign />, rate: "25k", desc: "Annual gross sale on site" },
  ];

  return (
    <section className="my-12">
      <div className="my-max-width w-11/12 mx-auto">
        <div className="grid md:grid-cols-2 gap-3 md:gap-0">
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
            <img
              src={Images.AfricanShoppers}
              alt="Two smiling women holding shopping bags and looking at a smartphone"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-15">
          {STATS.map((s, index) => (
            <div key={index} className="p-5 border flex flex-col items-center">
              <div className="p-2.5 rounded-full bg-gray-400/35 mb-3">
                <div className="p-1.5 rounded-full bg-black text-white">{s.icon}</div>
              </div>
              <p className="font-body text-2xl"><strong>{s.rate}</strong></p>
              <p className="font-body text-xs">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3">

        </div>
      </div>
    </section>
  );
};

export default About;
