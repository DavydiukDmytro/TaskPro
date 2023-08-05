import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../Modal';
import { EditProfileForm } from '../EditProfileForm';
import { gettUser } from 'store/user/selectorsAuth';
import photo from '../../assets/images/defaultuserimg/user 2x.jpg';
import css from './UserInfo.module.css';

export const UserInfo = () => {
  const [showEditForm, setShowEditForm] = useState(false);
  const user = useSelector(gettUser);
  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleCloseForm = () => {
    setShowEditForm(false);
  };

  return (
    <div>
      <div className={css.user}>
        <h2 className={css.user__name}>{user.name || 'Profile'}</h2>
        <div className={css.photo}>
          <img
            className={css.photo__img}
            src={photo}
            alt="avatar"
            onClick={handleEditClick}
          />
        </div>
      </div>

      {showEditForm && (
        <Modal>
          <EditProfileForm user={user} onClose={handleCloseForm} />
        </Modal>
      )}
    </div>
  );
};
