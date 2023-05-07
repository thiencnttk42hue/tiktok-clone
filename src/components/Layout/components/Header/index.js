import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as WrapperPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  });
  return (
    <header className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('logo')}>
          <img alt="logo" src={images.logo} />
        </div>
        <Tippy
          // Co the bam vao list tim kiem
          interactive={true}
          // Hien thi khi co ket qua tim kiem lon hon 1
          visible={searchResult.length > 0}
          // render ra list tìm kiem
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <WrapperPopper>
                <h4 className={cx('search-title')}>Tài Khoản</h4>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
                <AccountItem></AccountItem>
              </WrapperPopper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input className={cx('search-input')} placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('search-clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          <Button text>Tải lên</Button>
          <Button primary className={cx('border')}>
            Đăng nhập
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
