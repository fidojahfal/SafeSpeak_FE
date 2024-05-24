import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import ProfileView from "../components/profile/ProfileView";
import ProfileInput from "../components/profile/ProfileInput";

// Profile Styling
import "../styles/profile-style.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveUser, asyncUpdateUser } from "../states/user/action";

function ProfilePage() {
  const { user = null } = useSelector((states) => states);
  const dispatch = useDispatch();
  // state
  const [loading, setLoading] = React.useState(true);

  // get path param
  const { id } = useParams();
  // get current url
  const location = useLocation();
  // to navigate programatically
  const navigate = useNavigate();

  // get user by id
  React.useEffect(() => {
    dispatch(asyncReceiveUser(id));
    setLoading(false);
  }, [dispatch, id]);

  // handle navigate to edit page
  function toEditHandler() {
    navigate(`/profile/${id}/edit`);
  }

  // handle navigate to view page
  function toViewHandler() {
    navigate(`/profile/${id}`);
  }

  // handle submit at edit page
  async function onUpdateHandler({ name, jurusan, telepon, email }) {
    dispatch(asyncUpdateUser({ name, jurusan, telepon, email, id }));
    navigate(`/profile/${id}`);
  }

  if (!user) {
    return null;
  }

  // test handle on close
  // const handleCloseAlert = () => {
  //   setShowAlert(false);
  // };

  // conditional to show ProfileView or ProfileInput based on URL path
  const isEditing = location.pathname.includes("/edit");

  return (
    <section className="bg-yellow-100 p-3">
      {/* <Alert onClose={handleCloseAlert} /> */}
      <div className="card">
        <div className="card-body p-5 profile-card">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="fw-bold color-yellow">Profil</h3>
            {!loading && isEditing && (
              <img
                src={user.user_id.avatar}
                alt="User Avatar"
                className="avatar"
              />
            )}
          </div>
          {!loading && !isEditing && (
            <ProfileView
              {...user}
              toEdit={toEditHandler}
              src={user.user_id.avatar}
            />
          )}
          {!loading && isEditing && (
            <ProfileInput
              {...user}
              updateHandler={onUpdateHandler}
              toView={toViewHandler}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
