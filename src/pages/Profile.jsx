import { useContext, useState } from "react";
import PageHeader from "../components/PageHeader";
import { AuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.init";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Profile = () => {
  const { Logout, updateUser, user, loading } = useContext(AuthContext);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        return auth.currentUser.reload();
      })
      .then(() => {
        setOpen(false);
        toast.success("Profile Updated Successfully");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Profile Update Failed");
      });
  };

  const [open, setOpen] = useState(false);

  // logout
  const navigate = useNavigate();

  // logout
  const handleLogout = () => {
    Logout()
      .then(() => {
        toast.success("Logout Successful");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Logout Failed");
      });
  };
  
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Navigate | My Profile</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>{" "}
      <PageHeader
        pageName="Profile"
        heading={"Your Profile"}
        subHeading={
          "View and update your personal information, settings, and preferences."
        }
      />
      <div className="max-w-md mx-auto bg-white shadow-md  overflow-hidden my-10 p-6 border">
        <div>
          <div className="flex justify-center mb-6 rounded-full">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <p>
              <span className="font-medium text-gray-700">Display Name:</span>{" "}
              {user.displayName}
            </p>
            <p>
              <span className="font-medium text-gray-700">Email:</span>{" "}
              {user.email}
            </p>
            <p>
              <span className="font-medium text-gray-700">Email Verified:</span>{" "}
              {user.emailVerified ? "Verified" : "Not Verified"}
            </p>
            <p>
              <span className="font-medium text-gray-700">UID:</span> {user.uid}
            </p>
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-4 mt-6">
            <button
              onClick={() => setOpen(true)}
              className="border border-accent text-accent font-semibold w-full px-6 py-2 shadow hover:bg-accent hover:text-white transition"
            >
              Update Profile
            </button>
            <button
              onClick={handleLogout}
              className="bg-accent text-white font-semibold w-full px-6 py-2 shadow hover:bg-accent/90 transition"
            >
              Logout
            </button>
          </div>
        </div>
        {open && (
          <>
            <hr className="my-6" />
            <form onSubmit={handleUpdateUser}>
              <h2 className="text-lg font-semibold mb-4">Update Profile</h2>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter new name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="photoURL"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  required
                  className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter image URL"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 hover:bg-primary/60 w-full"
              >
                Submit
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
