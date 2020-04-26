import React from 'react';
import styles from './WIP.module.scss';
import cn from 'classnames';
import { Typography, Icon } from 'antd';

const WIP = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <Icon style={{fontSize: '56px', marginTop: '20px', marginBottom: '20px'}} type="exclamation-circle" />
      <Typography.Title level={3}>Данный раздел находится в разработке...</Typography.Title>
    </div>
  );
};

export default WIP;
