import { useState } from "react";

const ProfileUpdate = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (p) => {
    setFormData({
      ...formData,
      [p.target.name]: p.target.value,
    });
  };

  const handleSubmit = (p) => {
    p.preventDefault();

    let newError = {};

    if (!formData.firstName.trim()) {
      newError.firstName = "First name required";
    }
    if (!formData.lastName.trim()) {
      newError.lastName = "Last name required";
    }
    if (!formData.email.trim()) {
      newError.email = "Email required";
    }
    if (!formData.address.trim()) {
      newError.address = "Address required";
    }
    if (!formData.currentPassword.trim()) {
      newError.currentPassword = "Input old password";
    }
    if (!formData.newPassword.trim()) {
      newError.newPassword = "Input new password";
    }
    if (!formData.confirmNewPassword.trim()) {
      newError.confirmNewPassword = "Confirm new password";
    } else if (formData.newPassword !== formData.confirmNewPassword) {
      newError.confirmNewPassword = "Passwords do not match";
    }

    setErrors(newError);
    if (Object.keys(newError).length > 0) return;
  };

  return (
    <div className="h-full shadow-xl bg-gray-50 p-2  md:p-5">
      <form onSubmit={handleSubmit}>
        <p className="font-body text-red-400 mb-5">Edit your profile</p>
        <div className="grid grid-cols-2 gap-5 font-body text-sm mb-3">
          <label className="flex-col flex" htmlFor="firstName">
            First Name
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-2 bg-gray-200 text-xs rounded-md"
              type="text"
              placeholder="MD"
            />
            {errors.firstName && (
              <p className="text-red-500 font-body text-xs">
                {errors.firstName}
              </p>
            )}
          </label>
          <label className="flex-col flex" htmlFor="lastName">
            Last Name
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="p-2 bg-gray-200 text-xs rounded-md"
              type="text"
              placeholder="Kimbel"
            />
            {errors.lastName && (
              <p className="text-red-500 font-body text-xs">
                {errors.lastName}
              </p>
            )}
          </label>
          <label className="flex-col flex" htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 bg-gray-200 text-xs rounded-md"
              type="email"
              placeholder="kimbel@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 font-body text-xs">{errors.email}</p>
            )}
          </label>
          <label className="flex-col flex" htmlFor="address">
            Address
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="p-2 bg-gray-200 text-xs rounded-md"
              type="text"
              placeholder="Kingston, 0455, United State"
            />
            {errors.address && (
              <p className="text-red-500 font-body text-xs">{errors.address}</p>
            )}
          </label>
        </div>
        <p className="mb-3 font-body">Password Changes</p>
        <div className="flex flex-col gap-5 mb-5 text-sm">
          <label className="flex-col flex" htmlFor="currentPassword">
            Current Password
            <input
              id="currentPassword"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              type="password"
              className="p-2 bg-gray-200 text-xs rounded-md "
              placeholder="Example"
            />
            {errors.currentPassword && (
              <p className="text-red-500 font-body text-xs">
                {errors.currentPassword}
              </p>
            )}
          </label>
          <label className="flex-col flex" htmlFor="newPassword">
            New Password
            <input
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              type="password"
              className="p-2 bg-gray-200 text-xs rounded-md "
              placeholder="Example"
            />
            {errors.newPassword && (
              <p className="text-red-500 font-body text-xs">
                {errors.newPassword}
              </p>
            )}
          </label>
          <label className="flex-col flex" htmlFor="confirmNewPassword">
            Confirm New Password
            <input
              id="confirmNewPassword"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              type="password"
              className="p-2 bg-gray-200 text-xs rounded-md "
              placeholder="Example"
            />
            {errors.confirmNewPassword && (
              <p className="text-red-500 font-body text-xs">
                {errors.confirmNewPassword}
              </p>
            )}
          </label>
        </div>
        <div className="flex justify-center md:justify-end-safe gap-5">
          <button type="reset" className="font-body text-sm py-2 px-4 bg-gray-200 rounded-sm active:scale-98">
            Cancel
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
