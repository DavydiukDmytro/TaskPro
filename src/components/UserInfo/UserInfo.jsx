import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../Modal';
import { EditProfileForm } from '../EditProfileForm';
import { gettUser } from 'store/user/selectorsAuth';
import photo from '../../assets/images/defaultuserimg/user 2x.jpg';
import css from './UserInfo.module.css';

export const UserInfo = () => {
  // const user = useSelector(gettUser);
  const [showEditForm, setShowEditForm] = useState(false);
  const user = {
    photo,
    name: '',
    email: '',
    password: '',
  };
  const handleEditClick = () => {
    setShowEditForm(true);
  };

  const handleCloseForm = () => {
    setShowEditForm(false);
  };
  // const [name, setName] = useState('');
  // const [photo, setPhoto] = useState('');
  // const [modalVisible, setModalVisible] = useState(false);

  // const openModal = () => {
  //   setModalVisible(true);
  // };

  return (
    <div className={css.profile}>
      <h2 className={css.userName}>{user.name}</h2>
      <img
        className={css.userPhoto}
        src={photo}
        alt="avatar"
        onClick={handleEditClick}
      />
      {showEditForm && (
        <Modal>
          <EditProfileForm user={user} onClose={handleCloseForm} />
        </Modal>
      )}
    </div>
  );
};
