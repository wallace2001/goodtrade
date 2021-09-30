import React from 'react';
import {FiUsers} from 'react-icons/fi';
import {IoMdKey} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import {FaFacebook, FaGoogle, FaUserAlt} from 'react-icons/fa';
import styles from './index.module.scss';
import { getContext } from '../../../context/context.global';
import { useForm } from "react-hook-form";
import { InputCustomer as Input } from '../Input';
import { AiOutlineClose } from 'react-icons/ai';

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  code: string;
};


export const LoginRegister = () => {

    const {
        darkMode,
        isOpenLoginAndRegister,
        changeViewerLoginAndRegister
    } = getContext();

    const isLogin = isOpenLoginAndRegister === 'Login';

    const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));

    return (
        <div className={styles.container}>
            <div className={styles.contentImageBlur}>
            <AiOutlineClose 
                size={50} 
                color='var(--light)'
                style={{
                    padding: '1rem 0 0 1rem',
                    cursor: 'pointer'
                }}
                onClick={() => 
                    changeViewerLoginAndRegister('')
                }
            />
            <div className={styles.content} style={
                isLogin
                ? {flexDirection: 'row-reverse'}
                : {flexDirection: 'row'}
            }>
                <div className={styles.form}>
                    <form onSubmit={onSubmit}>
                        {isLogin ?
                                (
                                    <p style={{
                                        textAlign: 'start'
                                    }}>
                                        <strong>Bem-vindo, </strong>
                                        insira seu login
                                        e senha para acessar a plataforma
                                    </p>
                                ) :
                                (
                                    <p style={{
                                        textAlign: 'start'
                                    }}>                                
                                        <strong>Bem-vindo, </strong>
                                        insira seu nome de usuário, email e senha para acessar a plataforma
                                    </p>
                                )
                        }
                        <Input
                            title='Seu nome de usuário'
                            icon={<FaUserAlt size={20} color='var(--blue-100)'/>}
                            type='text'
                            {...register('name', {required: true})}
                        />
                        {!isLogin &&                        
                            <Input
                                title='email'
                                icon={<MdEmail size={20} color='var(--blue-100)'/>}
                                type='email'
                                {...register('email', {required: true})}
                            />
                        }
                        {!isLogin &&                        
                            <div style={{
                                width: '100%',
                                display: 'flex'
                            }}>
                                <Input
                                    title='Senha'
                                    icon={<IoMdKey size={20} color='var(--blue-100)'/>}
                                    {...register('password', {required: true})}
                                    type='password'
                                    style={{
                                        marginRight: '1rem',
                                    }}
                                />
                                <Input
                                    title='Confirmar Senha'
                                    icon={<IoMdKey size={20} color='var(--blue-100)'/>}
                                    type='password'
                                    {...register('passwordConfirmation', {required: true})}
                                />
                            </div>
                        }
                        {isLogin &&
                            <Input
                                title='Senha'
                                icon={<IoMdKey size={20} color='var(--blue-100)'/>}
                                type='password'
                                {...register('password', {required: true})}
                            />
                        }
                        {!isLogin &&                        
                            <Input
                                title='Opcional; codigo da pessoa que o convidou'
                                icon={<FiUsers size={20} color='var(--blue-100)'/>}
                                type='text'
                                {...register('code', {required: false})}
                            />
                        }

                        <button
                            type='button'
                            className={styles.buttonSubmit}
                        >Cadastrar</button>

                        <div className={styles.socials}>
                            <button>
                                Acessar com <FaFacebook size={20} color='var(--color-facebook)'/>
                            </button>
                            <button>
                                Acessar com <FaGoogle size={20} color='var(--color-google)'/>
                            </button>
                        </div>

                        <p>
                            Já possui cadastro ? <a>Clique aqui</a>
                        </p>
                    </form>
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
                    } />
                </div>
            </div>
            </div>
        </div>
    )
}
