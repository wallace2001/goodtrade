import React from 'react';
import {Input, Tooltip, Button} from 'antd';
import {FaFacebook, FaGoogle, FaCheckCircle} from 'react-icons/fa';
import styles from './index.module.scss';
import {FiUsers} from 'react-icons/fi';
import {IoMdKey} from 'react-icons/io';
import {MdEmail} from 'react-icons/md';
import {AiOutlineWarning, AiOutlineQuestionCircle} from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import _ from 'lodash';

import * as yup from 'yup';
import { useFormik } from 'formik';

interface InputForm {
    name: string;
    password: string;
}

interface InputFormRegister{
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    code: string;
}

export const Socials = () => {
    return (
        <div className={styles.socialContainer}>
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
        </div>
    );
}

export const LoginForm = () => {

    const validationSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatorio'),
        password: yup.string().required('Senha obrigatoria').min(6).max(10),
    });

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        setSubmitting,
        handleSubmit
    } = useFormik({
        onSubmit: console.log,
        validationSchema,
        initialValues: {
            name: '',
            password: '',
        }
    });

    console.log(isSubmitting);

    return (
        <form
            className={styles.container}
            onSubmit={handleSubmit}
            style={{
                padding: '10px 139px 10px 50px'
            }}
        >
            <p style={{
                textAlign: 'start'
            }} className={styles.title}>
                <strong>Bem-vindo, </strong>
                insira seu login
                e senha para acessar a plataforma
            </p>
                <Tooltip
                    placement='right'
                    color='var(--red-800)'
                    visible={!_.isEmpty(errors.name)}
                    title={errors.name}
                    id='name'
                >
                    <div className={styles.inputs}>
                        <Input
                            id='name'
                            className={styles.input}
                            placeholder='Seu nome de usuário'
                            prefix={<FaUserAlt size={20} color='var(--blue-100)'/>}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            type='text'
                            bordered={false}
                        />
                        {touched.name &&
                        !_.isEmpty(errors.name) ?
                            <AiOutlineWarning color='var(--red-800)' size={30} /> :
                            <FaCheckCircle color='var(--green-100)' size={30} />
                        }
                        <Tooltip
                            placement='top'
                            title='Nome'
                        >
                            <AiOutlineQuestionCircle size={30} />
                        </Tooltip>
                    </div>
                </Tooltip>

                <Tooltip
                    placement='left'
                    color='var(--red-800)'
                    visible={!_.isEmpty(errors.password)}
                    title={errors.password}
                    id='password'
                >
                    <div className={styles.inputs}>
                        <Input
                            id='password'
                            className={styles.input}
                            placeholder='Senha'
                            prefix={<IoMdKey size={20} color='var(--blue-100)'/>}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            type='password'
                            bordered={false}
                        />
                        {touched.password &&
                        !_.isEmpty(errors.password) ?
                            <AiOutlineWarning color='var(--red-800)' size={30} /> :
                            <FaCheckCircle color='var(--green-100)' size={30} />
                        }
                        <Tooltip
                            placement='right'
                            title='Password'
                        >
                            <AiOutlineQuestionCircle size={30} />
                        </Tooltip>
                    </div>
                </Tooltip>
            <Button
                htmlType='submit'
                loading={isSubmitting}
                className={styles.buttonSubmit}
            >Entrar</Button>
            <Socials />
        </form>
    )
}

export const RegisterForm = () => {

    return (
        <form
            className={styles.container}
            style={{
                padding: '10px 50px 10px 137px'
            }}
        >
        <p className={styles.title} style={{
            textAlign: 'start'
        }}>                                
            <strong>Bem-vindo, </strong>
            insira seu nome de usuário, email e senha para acessar a plataforma
        </p>
        <Input
            className={styles.inputs}
            placeholder='Seu nome de usuário'
            prefix={<FaUserAlt size={20} color='var(--blue-100)'/>}
            type='text'
        />

        <Input
            className={styles.inputs}
            placeholder='Email'
            prefix={<MdEmail size={20} color='var(--blue-100)'/>}
            type='text'
        />
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Input
                className={styles.inputs}
                placeholder='Senha'
                prefix={<IoMdKey size={20} color='var(--blue-100)'/>}
                type='text'
                style={{
                    marginRight: '1rem'
                }}
            />
            <Input
                className={styles.inputs}
                placeholder='Confirmar senha'
                prefix={<IoMdKey size={20} color='var(--blue-100)'/>}
                type='text'
            />
        </div>
        <Input
            className={styles.inputs}
            placeholder='Confirmar senha'
            prefix={<FiUsers size={20} color='var(--blue-100)'/>}
            type='text'
        />
        <button
            type='button'
            className={styles.buttonSubmit}
        >Entrar</button>
        <Socials />
    </form>
    );
}
