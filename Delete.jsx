import React, { useContext } from "react";
import { useAuth } from "../../context/AuthProvider";
import toast from "react-hot-toast";

function Delete() {
  const [authUser, SetAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      SetAuthUser({
        ...authUser,
        UserActivation: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logout SuccessFully");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("invalid Logout");
      setTimeout(() => {}, 2000);
    }
  };
  return (
    <>
      <div>
        <button
          onClick={handleLogout}
          className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        >
          Logout
        </button>
      </div>
    </>
  );
}

export default Delete;
