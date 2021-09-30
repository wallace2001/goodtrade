import React from 'react';
import {InputProps, Input} from 'antd';
import styles from './index.module.scss';

interface InputCustomerProps extends InputProps{
    title: string;
    icon: any;
    type: string;
}

export const InputCustomer = ({title, icon, type, ...rest}: InputCustomerProps) => {
    return (
        <Input 
            placeholder={title}
            className={styles.container}
            prefix={icon}
            {...rest}
        />
    )
}
