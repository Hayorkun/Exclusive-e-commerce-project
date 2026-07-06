import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const ProfileUpdate = () => {
  const { updateUserProfile, user } = useAuth();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: user?.displayName || "",
    email: user?.email || "",
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

  const handleSubmit = async (p) => {
    p.preventDefault();
    setSuccessMessage("");
    setErrors({});

    let newError = {};

    if (!formData.currentPassword.trim()) {
      newError.currentPassword = "Current Password is required to save changes";
    }

    if (formData.newPassword.trim()) {
      if (!formData.confirmNewPassword.trim()) {
        newError.confirmNewPassword = "Please confirm your new password";
      } else if (formData.newPassword !== formData.confirmNewPassword) {
        newError.confirmNewPassword = "New passwords do not match";
      }
    }

    setErrors(newError);
    if (Object.keys(newError).length > 0) return;

    try {
      await updateUserProfile(
        user.email,
        formData.currentPassword,
        formData.fullName,
        formData.newPassword,
        formData.email,
      );
      setSuccessMessage("Profile updated successfully");

      setFormData((prev) => ({
        ...prev,
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      }));
    } catch (error) {
      let backendErrors = {};
      switch (error.code) {
        case "auth/invalid-credential":
        case "auth/wrong-password":
          backendErrors.currentPassword =
            "The current password you entered is incorrect.";
          break;
        case "auth/email-already-in-use":
          backendErrors.email =
            "This email address is already registered to another account.";
          break;
        case "auth/invalid-email":
          backendErrors.email =
            "Please enter a valid email address structure (e.g., name@example.com).";
          break;
        case "auth/weak-password":
          backendErrors.newPassword =
            "The new password must be at least 6 characters long.";
          break;
        case "auth/requires-recent-login":
          backendErrors.general =
            "For security reasons, please log out and log back in before making these changes.";
          break;
        default:
          // Fallback for unexpected network or database issues
          backendErrors.general =
            error.message || "An unexpected error occurred. Please try again.";
      }
      setErrors(backendErrors);
    }
  };

  return (
    <div className="h-full shadow-xl bg-gray-50 p-2  md:p-5">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <p className="font-body text-red-400 mb-5">Edit your profile</p>
          {(errors.general || successMessage) && (
            <div
              className={`border p-2 text-xs rounded-md ${errors.general ? "border-red-300 bg-red-50" : "border-green-300 bg-green-50"}`}
            >
              {errors.general ? (
                <p className="">{errors.general}</p>
              ) : (
                <p>{successMessage}</p>
              )}
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-5 font-body text-sm mb-3">
          <label className="flex-col flex" htmlFor="fullName">
            Full Name
            <input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="p-2 bg-gray-200 text-xs rounded-md"
              type="text"
              placeholder="MD"
            />
            {errors.fullName && (
              <p className="text-red-500 font-body text-xs">
                {errors.fullName}
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
          <button
            type="reset"
            className="font-body text-sm py-2 px-4 bg-gray-200 rounded-sm active:scale-98"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="font-body text-sm py-2 px-6 bg-red-500 text-white rounded-sm active:scale-98"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;
