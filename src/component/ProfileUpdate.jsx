const ProfileUpdate = () => {
  return (
    <div className="h-full shadow-xl bg-gray-50 p-2  md:p-5">
      <form>
        <p className="font-body text-red-400 mb-5">Edit your profile</p>
        <div className="grid grid-cols-2 gap-5 font-body text-sm mb-3">
          <label className="flex-col flex" htmlFor="firstName">
            First Name
            <input
              className="p-2 bg-gray-200 text-xs rounded-md"
              type="text"
              placeholder="MD"
            />
          </label>
          <label className="flex-col flex" htmlFor="lastName">
            Last Name
            <input
              className="p-2 bg-gray-200 text-xs rounded-md"
              type="text"
              placeholder="Kimbel"
            />
          </label>
          <label className="flex-col flex" htmlFor="email">
            Email
            <input
              className="p-2 bg-gray-200 text-xs rounded-md"
              type="email"
              placeholder="kimbel@gmail.com"
            />
          </label>
          <label className="flex-col flex" htmlFor="address">
            Address
            <input
              className="p-2 bg-gray-200 text-xs rounded-md"
              type="text"
              placeholder="Kingston, 0455, United State"
            />
          </label>
        </div>
        <p>Paswword Changes</p>
        <div className="flex flex-col gap-5 mb-5">
          <input
            type="password"
            className="p-2 bg-gray-200 text-xs rounded-md "
            placeholder="Current Password"
          />
          <input
            type="password"
            className="p-2 bg-gray-200 text-xs rounded-md "
            placeholder="New Password"
          />
          <input
            type="password"
            className="p-2 bg-gray-200 text-xs rounded-md "
            placeholder="Confirm New Password"
          />
        </div>
        <div className="flex justify-center md:justify-end-safe gap-5">
          <button className="font-body text-sm py-2 px-4 bg-gray-200 rounded-sm active:scale-98">
            Cancle
          </button>
          <button className="font-body text-sm py-2 px-6 bg-red-500 text-white rounded-sm active:scale-98">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;
