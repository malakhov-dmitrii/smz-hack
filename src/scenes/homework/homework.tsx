import React from 'react';
import styles from './homework.module.scss';
import cn from 'classnames';
import WIP from '../WIP';
import { Typography } from 'antd';
import SpecialistHomeworks from './SpecialistHomeworks';
import { Store } from '../../store';
import { useSelector } from 'react-redux';

const Homework = () => {
  const { role } = useSelector((state: Store) => state.config);

  if (role === 'tutor') return <SpecialistHomeworks />;
  return (
    <div>
      <Typography.Title level={3}>Моя домашка</Typography.Title>
      <Typography.Text>Появится здесь, когда будет</Typography.Text>
    </div>
  );
};

export default Homework;
