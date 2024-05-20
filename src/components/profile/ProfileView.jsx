import React from "react";
import Button from "../form/Button";

function ProfileView({ name, jurusan, user_id, telepon, nim, toEdit, src }) {
  return (
    <>
      <div className="row">
        <div className="col-9">
          <div className="row gy-3">
            <div className="col-7">
              <h5>Nama Lengkap</h5>
              <p>{name}</p>
            </div>
            <div className="col-5">
              <h5>Jurusan</h5>
              <p>{jurusan}</p>
            </div>
            <div className="col-7">
              <h5>Username</h5>
              <p>{user_id.username}</p>
            </div>
            <div className="col-5">
              <h5>Nomor Telepon</h5>
              <p>{telepon}</p>
            </div>
            <div className="col-7">
              <h5>Email</h5>
              <p>{user_id.email}</p>
            </div>
            <div className="col-5">
              <h5>NIM</h5>
              <p>{nim}</p>
            </div>
            <div className="col-5 offset-7 mt-5">
              <Button onClickHandler={toEdit}>Edit Profil</Button>
            </div>
          </div>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center">
          <img src={src} alt="User Avatar" className="avatar-big" />
        </div>
      </div>
    </>
  );
}

export default ProfileView;
