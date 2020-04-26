import React, { useState } from 'react';
import styles from './SpecialistProfile.module.scss';
import cn from 'classnames';
import { Typography, Divider, Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { ConfigActions } from '../../../store/Config/Config.actions';

const SpecialistProfile = () => {
  const dispatch = useDispatch();
  const [stateINN, setStateINN] = useState(false);

  const handleLogout = () => {
    dispatch({ type: ConfigActions.Logout });
  };
  return (
    <div>
      <Typography.Title level={3}>Профиль специалиста</Typography.Title>
      <Typography.Text>Баланс: 4850 ₽</Typography.Text>
      <br />
      <Typography.Text>ИНН: {true ? <Button onClick={() => setStateINN(!stateINN)} size="small">Указать</Button> : 1234123}</Typography.Text>
      {
        stateINN && <>
        <br/><br/>
        <Input placeholder="Введите здесь свой ИНН"/>
        <br/>
        <br/>
        <Button>Проверить</Button>
        </>
      }
      <Divider />
      <Typography.Title level={4}>Ближайшие записи:</Typography.Title>
      <Typography.Text>Появятся здесь, когда будут</Typography.Text>

      <Divider />
      <Button type="primary">Редактировать расписание</Button>

      <Divider />

      <Button type="danger" onClick={handleLogout}>
        Выйти
      </Button>
    </div>
  );
};

export default SpecialistProfile;
