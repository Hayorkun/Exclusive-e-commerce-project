import { useAuth } from "../context/AuthContext"

const MyProfile = () => {

const { user } = useAuth();

  return (
    <section className="my-5">
      <div className="my-max-width w-11/12 mx-auto h-screen">
        <div className="flex justify-between items-center h-30">
          <h3>My Account</h3>
          <p>Welcome! {user}</p>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyProfile