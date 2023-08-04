import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../Modal';
import { EditProfileForm } from '../EditProfileForm';
import { gettUser } from 'store/user/selectorsAuth';
import photo from '../../assets/images/user.png';
import css from './UserInfo.module.css';

export const UserInfo = ({ handleClose }) => {
  const user = useSelector(gettUser);

  // const [name, setName] = useState('');
  // const [photo, setPhoto] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <div className={css.profile}>
      <h2 className={css.userName}>{user.name}</h2>
      <img
        className={css.userPhoto}
        src="../../assets/images/user.png"
        alt={photo}
        onClick={openModal}
      />
      {modalVisible && (
        <Modal handleClose={handleClose}>
          <EditProfileForm handleClose={handleClose} />
        </Modal>
      )}
    </div>
  );
};
