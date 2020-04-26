import React from 'react';
import styles from './Footer.module.scss';
import { Icon, Divider } from 'antd';
import { Link, NavLink } from 'react-router-dom';
import { Store } from '../../../store';
import { useSelector } from 'react-redux';

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.IconContainer}>
        <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to={"/profile"}>
          <Icon style={{ fontSize: '24px' }} type="profile" />
          Профиль
        </NavLink>
      </div>
      <Divider style={{ height: '100%' }} type="vertical" />
      <div className={styles.IconContainer}>
        <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to="/materials">
          <Icon style={{ fontSize: '24px' }} type="clock-circle" />
          Встречи
        </NavLink>
      </div>
      <Divider style={{ height: '100%' }} type="vertical" />
      <div className={styles.IconContainer}>
        <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to="/homework">
          <Icon style={{ fontSize: '24px' }} type="home" />
          Домашка
        </NavLink>
      </div>
      <Divider style={{ height: '100%' }} type="vertical" />
      <div className={styles.IconContainer}>
        <NavLink activeClassName={styles.ActiveLink} className={styles.Link} to="/messages">
          <Icon style={{ fontSize: '24px' }} type="message" />
          Сообщения
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
