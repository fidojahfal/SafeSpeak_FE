import React from "react";

function ProfileInput() {
  return (
    <>
      <div className="row gy-3 gx-5">
        <div className="col-5">
          <label for="nama" class="form-profile-label">
            Nama Lengkap
          </label>
          <input
            type="text"
            class="form-control"
            id="nama"
            placeholder="Nama"
          ></input>
        </div>
        <div className="col-5">
          <label for="jurusan" class="form-profile-label">
            Jurusan
          </label>
          <input
            type="text"
            class="form-control"
            id="jurusan"
            placeholder="Jurusan"
          ></input>
        </div>
        <div className="col-5">
          <label for="username" class="form-profile-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="username"
            placeholder="loremipsum77@gmail.com"
            disabled
          ></input>
        </div>
        <div className="col-5">
          <label for="nomor-telp" class="form-profile-label">
            Nomor Telepon
          </label>
          <input
            type="email"
            class="form-control"
            id="nomor-telp"
            placeholder="085892121758"
          ></input>
        </div>
        <div className="col-5">
          <label for="email" class="form-profile-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
          ></input>
        </div>
        <div className="col-5">
          <label for="NIM" class="form-profile-label">
            NIM
          </label>
          <input
            type="text"
            class="form-control"
            id="NIM"
            placeholder="loremipsum77@gmail.com"
            disabled
          ></input>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button type="button" className="btn btn-primary">
          Simpan
        </button>
      </div>
      <div className="d-flex justify-content-center mt-5">
        <button type="button" className="btn btn-primary">
          Edit Profil
        </button>
      </div>
    </>
  );
}

export default ProfileInput;
