import React, { useEffect } from 'react';
import styles from './profile.module.scss';
import cn from 'classnames';
import { Typography, Divider, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../store';
import SpecialistProfile from './SpecialistProfile';
import { ConfigActions } from '../../store/Config/Config.actions';
import { useRouteMatch, useHistory } from 'react-router';

const Profile = () => {
  const { role } = useSelector((state: Store) => state.config);
  const dispatch = useDispatch();
  const rp = useHistory();

  useEffect(() => {
    if (rp.location.search.split("=")[1] === 'tutor' || rp.location.search.split("=")[1] === 'user') {
      console.log(rp.location.search.split("=")[1]);
      
      dispatch({ type: ConfigActions.ToggleRole, payload: rp.location.search.split("=")[1] });      
    }
  }, [rp])

  const handleLogout = () => {
    dispatch({ type: ConfigActions.Logout });
  };

  if (role === 'tutor') return <SpecialistProfile />;

  return (
    <div>
      <Typography.Title level={3}>Профиль</Typography.Title>
      <Typography.Text>Баланс: 0₽</Typography.Text>
      <Divider />
      <Typography.Title level={4}>Записаться на прием</Typography.Title>
      <Button>Выбрать время и специалиста</Button>

      <Divider />

      <Button type="danger" onClick={handleLogout}>Выйти</Button>
    </div>
  );
};

export default Profile;
