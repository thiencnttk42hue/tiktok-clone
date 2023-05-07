import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import images from '~/assets/images';
const cx = classNames.bind(styles);
function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('account-avatar')} src={images.avatar1} alt="accounts" />
      <div className={cx('account-info')}>
        <h4 className={cx('account-name')}>
          <span>hoa_2309</span>
          <FontAwesomeIcon className={cx('account-check')} icon={faCircleCheck} />
        </h4>
        <span className={cx('account-username')}>Ngô Ngọc Hoà🦄</span>
      </div>
    </div>
  );
}

export default AccountItem;
