import React, { useState, useEffect } from 'react';
import styles from './SpecialistMaterials.module.scss';
import cn from 'classnames';
import { Typography, Divider, Card, Button, Tooltip } from 'antd';
import WIP from '../../WIP';
import { fromUnixTime, format, isPast } from 'date-fns';

export interface Material {
  id: string;
  courseId: string;
  startsAt: number;
  duration: number;
  roomSid?: any;
  roomType: string;
  title: string;
  created: number;
}

const SpecialistMaterials = () => {
  const [materials, setMaterials]: [Material[], any] = useState([]);

  useEffect(() => {
    fetch('https://obra.one/api/v1/classes?courseId=256aeaa336ef460ea273830780d63af7')
      .then(r => r.json())
      .then(setMaterials);
  }, []);

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

      <Button size="large" type="default" style={{ width: '100%' }}>
        Подобрать другого специалиста
      </Button>
    </div>
  );
};

export default SpecialistMaterials;
