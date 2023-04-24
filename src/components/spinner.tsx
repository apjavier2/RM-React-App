import { Spin } from 'antd';
import style from '@/styles/spin.module.css';

export default function loadingSpinner() {
    return (
        <div className={style.spinner}>
          <Spin size="large" />
        </div>
      );
};