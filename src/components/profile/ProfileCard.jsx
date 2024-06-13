import React from "react";
import ProfileView from "./ProfileView";
import ProfileInput from "./ProfileInput";

function ProfileCard({
  isEditing,
  user,
  toEditHandler,
  onUpdateHandler,
  toViewHandler,
}) {
  return (
    <div className="card">
      <div className="card-body p-5 profile-card">
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mb-3">
          <h3 className="fw-bold color-yellow">
            {isEditing ? "Edit Profil" : "Profil"}
          </h3>
          {isEditing && (
            <img
              src={user.user_id.avatar}
              alt="User Avatar"
              className="avatar"
            />
          )}
        </div>
        {!isEditing && (
          <ProfileView
            {...user}
            toEdit={toEditHandler}
            src={user.user_id.avatar}
          />
        )}
        {isEditing && (
          <ProfileInput
            {...user}
            updateHandler={onUpdateHandler}
            toView={toViewHandler}
          />
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
