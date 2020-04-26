import React from 'react';
import styles from './notfound.module.scss';
import cn from 'classnames';
import { Typography, Button } from 'antd';
import { useHistory } from 'react-router';

const Notfound = () => {
  const h = useHistory();
  return (
    <div style={{textAlign: "center"}}>
      <Typography.Title level={1}>404</Typography.Title>
      <Typography.Text>Похоже, что такой страницы у нас нет =(</Typography.Text>
      <br />
      <hr />
      <Button style={{width: '100%', marginTop: '20px'}} onClick={h.goBack} type="primary">
        Назад
      </Button>
    </div>
  );
};

export default Notfound;
