import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Typography } from 'antd';

const Welcome: FC = () => {
  return (
    <div>
      <Typography.Title level={2}>Выберите раздел</Typography.Title>
      <Link to="/profile?r=tutor">
        <Button style={{ width: '100%', margin: '5px 0' }}>Кабинет специалиста</Button>
      </Link>

      <Link to="/profile/?r=user">
        <Button style={{ width: '100%', margin: '5px 0' }}>Кабинет пользователя</Button>
      </Link>
    </div>
  );
};

export default Welcome;
