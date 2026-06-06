import Images from "../assets/Image";

const Signup = () => {
  return (
    <section className="my-12">
      <div className="my-max-width mx-auto w-11/12 h-150 flex flex-col md:flex-row">
        <div className="flex-2/3 ">
          <img
            src={Images.SignupCart}
            alt=""
            className="object-center h-full object-fill"
          />
        </div>
        <div className="flex-1/3 md:order-1">
        <div>
          <h1>Create an account</h1>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
