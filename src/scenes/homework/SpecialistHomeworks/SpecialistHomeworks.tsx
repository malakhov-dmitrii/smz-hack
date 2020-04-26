import React from 'react';
import styles from './SpecialistHomeworks.module.scss';
import cn from 'classnames';
import { Typography, Divider } from 'antd';

const SpecialistHomeworks = () => {
  return (
    <div>
      <Typography.Title level={3}>Назначить домашку студентам</Typography.Title>

      <Divider />

      <Typography.Title level={4}>Выбрать студента(-ов)</Typography.Title>
      <Typography.Text>Появятся здесь, когда будут</Typography.Text>

      <Typography.Title level={4}>Выбрать материалы к назначению</Typography.Title>
      <Typography.Text>Появятся здесь, когда будут</Typography.Text>
    </div>
  );
};

export default SpecialistHomeworks;
