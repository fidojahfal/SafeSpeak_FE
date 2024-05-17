import React from "react";

function ProfileEditPage() {
  return (
    <section className="bg-yellow-100 p-3">
      <div className="card profile-card">
        <div className="card-body p-5">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="fw-bold color-yellow">Profil</h3>
            <div className="temp-circle"></div>
          </div>
          {/* Profile Edit Input Here */}
        </div>
      </div>
    </section>
  );
}

export default ProfileEditPage;
