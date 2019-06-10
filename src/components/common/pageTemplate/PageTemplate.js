import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function PageTemplate() {
    return (
        <div className={cx('page-template')}>
            pageTemplate
        </div>
    )
}
