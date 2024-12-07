import { Tooltip } from "react-tooltip";

const Profile = ({ currentUser, handleLogout }) => {
  return (
    <div
      className="dropdown dropdown-end"
      data-tooltip-id="profile"
      data-tooltip-content="Profile"
      data-tooltip-place="top"
    >
      <Tooltip id="profile" className="z-10" />
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full ring-2">
          <img alt="User Avatar" src={currentUser?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-cardBg text-textPrimary rounded-box z-10 mt-3 w-52 p-2 shadow bg-white"
      >
        <li>
          <p className="text-secondaryColor text-base">
            {currentUser?.displayName}
          </p>
        </li>
        <li>
          <button
            onClick={handleLogout}
            type="button"
            className=" text-red-500 text-base"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
