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


// Esse é o formulário de login
export const LoginForm = () => {

    // Aqui é verifcado quais campos são obrigatorios e enviar uma mensagem e outros filtros
    const validationSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatorio'),
        password: yup.string().required('Senha obrigatoria').min(6).max(10),
    });

    // Pegando funções e valores do formulário
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

// Esse é o formulario do registro
export const RegisterForm = () => {

    // Aqui é verifcado quais campos são obrigatorios e enviar uma mensagem e outros filtros
    const validationSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatorio').min(3),
        email: yup.string().required('Email obrigatoria').email(),
        password: yup.string().required('Senha obrigatoria').min(6).max(10),
        passwordConfirm: yup.string().required('Confirme a senha').min(6).max(10),
        code: yup.string(),
    });

    // Pegando funções e valores do formulário
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
            email: '',
            passwordConfirm: '',
            code: '',
        }
    });

    return (
        <form
            onSubmit={handleSubmit}
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
            <Tooltip
                placement='left'
                color='var(--red-800)'
                visible={!_.isEmpty(errors.name)}
                title={errors.name}
                id='name'
            >
                <div className={styles.inputs}>
                    <Input
                        className={styles.input}
                        placeholder='Seu nome de usuário'
                        prefix={<FaUserAlt size={20} color='var(--blue-100)'/>}
                        type='text'
                        id='name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        bordered={false}
                    />
                    {touched.name &&
                    !_.isEmpty(errors.name) ?
                        <AiOutlineWarning
                            style={{
                                marginRight: '1rem'
                            }}
                            color='var(--red-800)'
                            size={30} 
                        /> :
                        <FaCheckCircle
                            style={{
                                marginRight: '1rem'
                            }}
                            color='var(--green-100)'
                            size={30}
                        />
                    }
                    <Tooltip
                        placement='right'
                        title='Insira um nome válido: Usuário33'
                    >
                        <AiOutlineQuestionCircle size={30} />
                    </Tooltip>
                </div>
            </Tooltip>

            <Tooltip
                placement='left'
                color='var(--red-800)'
                visible={!_.isEmpty(errors.email)}
                title={errors.email}
                id='email'
            >            
            <div className={styles.inputs}>
                <Input
                    className={styles.input}
                    placeholder='Email'
                    prefix={<MdEmail size={20} color='var(--blue-100)'/>}
                    type='text'
                    id='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    bordered={false}
                />
                {touched.email &&
                !_.isEmpty(errors.email) ?
                    <AiOutlineWarning
                        style={{
                            marginRight: '1rem'
                        }}
                        color='var(--red-800)'
                        size={30} 
                    /> :
                    <FaCheckCircle
                        style={{
                            marginRight: '1rem'
                        }}
                        color='var(--green-100)'
                        size={30}
                    />
                }
                <Tooltip
                    placement='right'
                    title='Insíra um email válido: email@email.com'
                >
                    <AiOutlineQuestionCircle size={30} />
                </Tooltip>       
            </div>
            </Tooltip>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Tooltip
                placement='left'
                color='var(--red-800)'
                visible={!_.isEmpty(errors.password)}
                title={errors.password}
                id='password'
            >             
            <div className={styles.inputs}>
                <Input
                    className={styles.input}
                    placeholder='Senha'
                    prefix={<IoMdKey size={20} color='var(--blue-100)'/>}
                    type='text'
                    id='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    style={{
                        marginRight: '1rem'
                    }}
                    bordered={false}
                />
                {touched.password &&
                !_.isEmpty(errors.password) ?
                    <AiOutlineWarning
                        style={{
                            marginRight: '1rem'
                        }}
                        color='var(--red-800)'
                        size={30} 
                    /> :
                    <FaCheckCircle
                        style={{
                            marginRight: '1rem'
                        }}
                        color='var(--green-100)'
                        size={30}
                    />
                }
                <Tooltip
                    placement='right'
                    title='Insira uma combinação de pelo menos seis numeros, letras, sinais de pontuação e simbolos (como: (1 ! a &)'
                >
                    <AiOutlineQuestionCircle size={30} />
                </Tooltip>
            </div>
            </Tooltip>
                <Tooltip
                    placement='right'
                    color='var(--red-800)'
                    visible={!_.isEmpty(errors.passwordConfirm)}
                    title={errors.passwordConfirm}
                    id='passwordConfirm'
                >                
                <div className={styles.inputs} style={{
                        marginLeft: '1rem'
                    }}>
                    <Input
                        className={styles.input}
                        placeholder='Confirmar senha'
                        prefix={<IoMdKey size={20} color='var(--blue-100)'/>}
                        type='text'
                        id='passwordConfirm'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirm}
                        bordered={false}
                    />
                    {touched.passwordConfirm &&
                    !_.isEmpty(errors.passwordConfirm) ?
                        <AiOutlineWarning
                            style={{
                                marginRight: '1rem'
                            }}
                            color='var(--red-800)'
                            size={30} 
                        /> :
                        <FaCheckCircle
                            style={{
                                marginRight: '1rem'
                            }}
                            color='var(--green-100)'
                            size={30}
                        />
                    }
                    <Tooltip
                        placement='bottom'
                        title='Confirmar senha'
                    >
                        <AiOutlineQuestionCircle size={30} />
                    </Tooltip>
                </div>
                </Tooltip>
        </div>
        <Tooltip
            placement='left'
            color='var(--red-800)'
            title={errors.code}
            id='code'
        >           
            <div className={styles.inputs}>
                <Input
                    className={styles.input}
                    placeholder='Código'
                    prefix={<FiUsers size={20} color='var(--blue-100)'/>}
                    type='text'
                    id='code'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.code}
                    bordered={false}
                />
                {touched.code &&
                !_.isEmpty(errors.code) ?
                    <AiOutlineWarning
                        style={{
                            marginRight: '1rem'
                        }}
                        color='var(--red-800)'
                        size={30} 
                    /> :
                    <FaCheckCircle
                        style={{
                            marginRight: '1rem'
                        }}
                        color='var(--green-100)'
                        size={30}
                    />
                }
                <Tooltip
                    placement='right'
                    title='Insira um código válido (Opcional)'
                >
                    <AiOutlineQuestionCircle size={30} />
                </Tooltip>
            </div>
        </Tooltip>
        <Button
            htmlType='button'
            loading={isSubmitting}
            className={styles.buttonSubmit}
        >Cadastrar</Button>
        <Socials />
    </form>
    );
}
