import React from "react";

function ProfileView({ name, jurusan, user_id, telepon, nim, toEdit }) {
  return (
    <>
      <div className="row gy-3">
        <div className="col-5">
          <h5>Nama Lengkap</h5>
          <p>{name}</p>
        </div>
        <div className="col-5">
          <h5>Jurusan</h5>
          <p>{jurusan}</p>
        </div>
        <div className="col-5">
          <h5>Username</h5>
          <p>{user_id.username}</p>
        </div>
        <div className="col-5">
          <h5>Nomor Telepon</h5>
          <p>{telepon}</p>
        </div>
        <div className="col-5">
          <h5>Email</h5>
          <p>{user_id.email}</p>
        </div>
        <div className="col-5">
          <h5>NIM</h5>
          <p>{nim}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button type="button" className="btn btn-primary" onClick={toEdit}>
          Edit Profil
        </button>
      </div>
    </>
  );
}

export default ProfileView;
