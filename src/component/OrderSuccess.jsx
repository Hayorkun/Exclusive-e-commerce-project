import { CheckIcon } from "lucide-react";

const OrderSuccess = () => {
  return (
    <section className="my-12">
      <div className="w-11/12 my-max-width mx-auto min-h-120 flex items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-heading font-semibold max-w-sm text-2xl mb-5">
            Your order has been successfully placed
          </h1>
          <div className="w-20 h-20 bg-green-500 flex items-center justify-center rounded-full animate-pulse mb-5">
            <CheckIcon className="size-10 stroke-7 stroke-white" />
          </div>
          <p className="font-body max-w-xs">
            Your order has been confirmed!
            <br />
            <span className="font-semibold tracking-widest text-sm">Check your email for order details</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderSuccess;
