import React from "react";
import Button from "../form/Button";
import { PropTypes } from "prop-types";

function ProfileView({ name, jurusan, user_id, telepon, nim, toEdit, src }) {
  return (
    <>
      <div className="row d-flex flex-column-reverse flex-md-row">
        <div className="col-sm-9">
          <div className="row gy-3">
            <div className="col-sm-7">
              <h5>Nama Lengkap</h5>
              <p>{name}</p>
            </div>
            <div className="col-sm-5">
              <h5>Jurusan</h5>
              <p>{jurusan}</p>
            </div>
            <div className="col-sm-7">
              <h5>Username</h5>
              <p>{user_id.username}</p>
            </div>
            <div className="col-sm-5">
              <h5>Nomor Telepon</h5>
              <p>{telepon}</p>
            </div>
            <div className="col-sm-7">
              <h5>Email</h5>
              <p>{user_id.email}</p>
            </div>
            <div className="col-sm-5">
              <h5>NIM</h5>
              <p>{nim}</p>
            </div>
            <div className="col-sm-5 offset-sm-7 mt-5 xs-flex-center">
              <Button onClickHandler={toEdit}>Edit Profil</Button>
            </div>
          </div>
        </div>
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <img src={src} alt="User Avatar" className="avatar-big" />
        </div>
      </div>
    </>
  );
}

ProfileView.propTypes = {
  name: PropTypes.string.isRequired,
  jurusan: PropTypes.string.isRequired,
  user_id: PropTypes.object.isRequired,
  telepon: PropTypes.string.isRequired,
  nim: PropTypes.number.isRequired,
  toEdit: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default ProfileView;
