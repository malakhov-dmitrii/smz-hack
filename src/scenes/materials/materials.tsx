import React from 'react';
import styles from './materials.module.scss';
import cn from 'classnames';
import WIP from '../WIP';
import { useSelector } from 'react-redux';
import { Store } from '../../store';
import { Typography, Button } from 'antd';
import SpecialistMaterials from './SpecialistMaterials';

const Materials = () => {
  const { role } = useSelector((state: Store) => state.config);

  if (role === 'tutor') return <SpecialistMaterials />;

  return (
    <div>
      <Typography.Title level={3}>Актуальные встречи</Typography.Title>

      <div className={styles.MeetingContainer}>
        <div className={styles.Flex}>
          <div className={styles.Title}>
            Вс, 26 апреля <br /> 11:00 - 12:00
            <Button style={{ padding: 0, margin: '0 0 10px 0' }} type="link">
              Подробнее
            </Button>
          </div>
          <div>Артемий</div>
        </div>
        <a href="https://obra.one/class/2750866cafd14e24a0a1c22f035c1a07" target="_blank">
          <Button type="primary" style={{ width: '100%' }} size="large">
            Начать встречу
          </Button>
        </a>
      </div>

      <div className={styles.MeetingContainer}>
          <Typography.Title level={3}>Хотите поговорить по душам?</Typography.Title>
        Наш сервис подберет вам подходящего специалиста и вы сможете с ним в любом месте и в любое время онлайн обсудить
        все ваши душевные вопросы.
        <a href="https://obra.one/class/2750866cafd14e24a0a1c22f035c1a07" target="_blank">
          <Button type="primary" style={{ width: '100%', marginTop: '25px' }} size="large">
            Создать встречу
          </Button>
        </a>
      </div>

      <Button size="large" type="default" style={{ width: '100%' }}>
        Подобрать другого специалиста
      </Button>
    </div>
  );
};

export default Materials;
