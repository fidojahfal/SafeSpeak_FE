import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getUser, updateUser } from '../utils/api';
import ProfileView from '../components/profile/ProfileView';
import ProfileInput from '../components/profile/ProfileInput';

// Profile Styling
import '../styles/profile-style.css';

function ProfilePage() {
  // state
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  // get path param
  const { id } = useParams();
  // get current url
  const location = useLocation();
  // to navigate programatically
  const navigate = useNavigate();

  // get user by id
  React.useEffect(() => {
    async function fetchUserById(id) {
      const { data } = await getUser(id);
      if (!data) {
        alert('Temporary Alert: User is null');
      }
      setUser(data);
      setLoading(false);
    }
    fetchUserById(id);
  }, [id]);

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
    console.log({ name, jurusan, telepon, email });
    const { error } = await updateUser({ name, jurusan, telepon, email, id });
    console.log(id);

    if (!error) {
      navigate(`/profile/${id}`);
      navigate(0);
    }
  }

  // conditional to show ProfileView or ProfileInput based on URL path
  const isEditing = location.pathname.includes('/edit');

  return (
    <section className="bg-yellow-100 p-3">
      <div className="card profile-card">
        <div className="card-body p-5">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h3 className="fw-bold color-yellow">Profil</h3>
            {!loading && (
              <img
                src={user.user_id.avatar}
                alt="User Avatar"
                className="avatar"
              />
            )}
          </div>
          {!loading && !isEditing && (
            <ProfileView {...user} toEdit={toEditHandler} />
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
