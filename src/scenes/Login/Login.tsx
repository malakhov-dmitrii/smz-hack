import React, { useState } from 'react';
import styles from './Login.module.scss';
import cn from 'classnames';
import WIP from '../WIP';
import { Typography, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { ConfigActions } from '../../store/Config/Config.actions';

const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    dispatch({
      type: ConfigActions.Login,
      payload: {
        log: login,
        pass,
      },
    });
  };
  return (
    <div>
      <Typography.Title style={{ textAlign: 'center' }}>Вход</Typography.Title>

      <div style={{ maxWidth: '500px', margin: 'auto' }}>
        <Input onChange={(e) => setLogin(e.target.value)} value={login} size="large" placeholder="Введите свой email" />
        <br />
        <br />
        <Input onChange={(e) => setPass(e.target.value)} value={pass} size="large" placeholder="Введите ключ-token" />
        <br />
        <br />
        <Button onClick={handleLogin} type="primary" size="large">
          Войти
        </Button>
      </div>
    </div>
  );
};

export default Login;
