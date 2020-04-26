/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react';
import styles from './Header.module.scss';
import { Logo } from '../../Icons/NavSvg/NavSvg';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';

import { Icon, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ConfigActions } from '../../../store/Config/Config.actions';
import { Store } from '../../../store';

const Header = () => {
  const dispatch = useDispatch();
  const { role } = useSelector((state: Store) => state.config);
  const h = useHistory();
  const handleRoleChange = () => {
    dispatch({ type: ConfigActions.ToggleRole, payload: role === 'tutor' ? 'user' : 'tutor' });
  };

  return (
    <div className={styles.Header}>
      <div className={styles.HeaderContent}>
        <div className={styles.Flex}>
          <Link style={{ color: '#01a964' }} to="/">
            Talestorm
          </Link>
        </div>
        <Tooltip placement="bottomRight" title="Сменить роль">
          <Icon onClick={handleRoleChange} type={role === 'tutor' ? 'solution' : 'user'} style={{ fontSize: '26px' }} />
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
