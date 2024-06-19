import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Alert from '../components/form/Alert';
import ProfileCard from '../components/profile/ProfileCard';

// Profile Styling
import '../styles/profile-style.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveUser, asyncUpdateUser } from '../states/user/action';

function ProfilePage() {
  const { user, loadingBar, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  console.log(user);

  // get path param

  // get current url
  const location = useLocation();
  // to navigate programatically
  const navigate = useNavigate();
  const id = authUser._id;

  // get user by id
  React.useEffect(() => {
    dispatch(asyncReceiveUser());
  }, [dispatch]);

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

  if (!user || loadingBar.default) {
    return null;
  }

  // conditional to show ProfileView or ProfileInput based on URL path
  const isEditing = location.pathname.includes('/edit');

  return (
    <section className="bg-yellow-100 p-3">
      <Alert />
      <ProfileCard
        isEditing={isEditing}
        user={user}
        toEditHandler={toEditHandler}
        onUpdateHandler={onUpdateHandler}
        toViewHandler={toViewHandler}
      />
    </section>
  );
}

export default ProfilePage;
