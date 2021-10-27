import React from 'react';
import styles from './index.module.scss';
import { getContext } from '../../../context/context.global';
import { AiOutlineClose } from 'react-icons/ai';
import { LoginForm, RegisterForm } from '../Input/login';

type FormData = {
  name?: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
  code?: string;
};


export const LoginRegister = () => {

    const {
        darkMode,
        isOpenLoginAndRegister,
        changeViewerLoginAndRegister
    } = getContext();

    const isLogin = isOpenLoginAndRegister === 'Login';

    return (
        <div className={styles.container}>
            <div className={styles.closeButton}>
                <AiOutlineClose 
                    size={40} 
                    color='var(--light)'
                    style={{
                        cursor: 'pointer'
                    }}
                    onClick={() => 
                        changeViewerLoginAndRegister('')
                    }
                />
            </div>
            <div className={styles.contentImageBlur}>
            <div className={styles.content} style={
                isLogin
                ? {flexDirection: 'row-reverse'}
                : {flexDirection: 'row'}
            }>
                <div className={styles.form}>
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                    <p className={styles.copyright}>Copyright © 2021/22 ApostaMelhor.com. Todos os direitos reservados. </p>
                </div>
                <div className={styles.image} style={
                    isLogin ?
                    {right: '70px'} :
                    {left: '70px'}
                }>
                    <img src={!darkMode ?
                    '/images/dark/image_login_dark.png' :
                    '/images/light/image_login_light.png'
                    }
                    style={
                        isLogin ? 
                        { 
                            transform: 'rotateY(180deg)',
                        } : {
                            transform: 'rotate(0deg)'
                        }
                    }
                    />
                </div>
            </div>
            </div>
        </div>
    )
}
