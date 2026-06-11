import { NavLink } from "react-router-dom"



const Error = () => {
  return (
    <section className="md:px-5 my-10">
      <div className="my-max-width w-11/12 mx-auto h-100 flex justify-center items-center">
       <div className="flex flex-col items-center">
        <h1 className="font-heading text-7xl mb-7">404 NOT FOUND</h1>
        <p className="font-body text-sm mb-7">Your visited page not found. You may go to homepage</p>
        <NavLink to="/" className="border w-fit py-2 px-4 bg-red-500 text-white rounded-sm text-xs hover:opacity-80 active:scale-99 transition-all ease-in-out">Back to Homepage</NavLink>
       </div>
      </div>
    </section>
  )
}

export default Error