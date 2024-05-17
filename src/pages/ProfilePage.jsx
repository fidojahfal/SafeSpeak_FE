import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../utils/api";

function ProfilePage() {
  // state
  const [user, setUser] = React.useState(null);

  // get path param
  const { id } = useParams();

  React.useEffect(() => {
    getUser(id).then(setUser);
  }, [id]);

  // get
  return (
    <section className="bg-yellow-100 p-3">
      <div className="card profile-card">
        <div className="card-body p-5">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="fw-bold color-yellow">Profil</h3>
            <div className="temp-circle"></div>
          </div>
          <div className="row gy-3">
            <div className="col-5">
              <h5>Nama Lengkap</h5>
              <p>{user.name}</p>
            </div>
            <div className="col-5">
              <h5>Jurusan</h5>
              <p>Seni Rupa</p>
            </div>
            <div className="col-5">
              <h5>Username</h5>
              <p>loremipsum77@gmail.com</p>
            </div>
            <div className="col-5">
              <h5>Nomor Telepon</h5>
              <p>085892121758</p>
            </div>
            <div className="col-5">
              <h5>Email</h5>
              <p>loremipsum@gmail.com</p>
            </div>
            <div className="col-5">
              <h5>NIM</h5>
              <p>2006596705</p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button type="button" className="btn btn-primary">
              Edit Profil
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
