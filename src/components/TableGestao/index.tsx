import React from 'react';
import { Table, Tag, Space } from 'antd';
import { TableProps } from 'antd/lib/table';
import styles from './index.module.scss';
import { TABLEINFO } from '../../../constants/constants';

interface TableDataSource {
    date: string;
    game: string;
    country: string;
    champion: string;
    category: string;
    type: string;
    market: string;
    odd: string;
    stake: string;
    green: string;
    red: string;
    lucro: string;
}

interface TableGestaoProps extends TableProps<TableDataSource> {}

export const TableGestao = ({ ...rest }: TableGestaoProps) => {

    const columns = [
        {
            title: 'DATA E HORA',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'JOGO/JOGADOR',
            dataIndex: 'game',
            key: 'game',
        },
        {
            title: 'PAÍS',
            dataIndex: 'country',
            key: 'country',
        },
        {
            title: 'CAMPEONATO',
            dataIndex: 'champion',
            key: 'champion',
        },
        {
            title: 'CATEGORIA',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'TIPO DE APOSTA',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'MERCADO',
            dataIndex: 'market',
            key: 'market',
        },
        {
            title: 'ODD',
            dataIndex: 'odd',
            key: 'odd',
        },
        {
            title: 'STAKE',
            dataIndex: 'stake',
            key: 'stake',
        },
        {
            title: 'GREEN',
            dataIndex: 'green',
            key: 'green',
            render: (text: string) => (
                <div style={{
                    background: '#22D27E',
                    padding: '0.3rem',
                    borderRadius: '5px',
                    color: 'var(--white)' ,
                    boxShadow: 'inset 0px 0px 40px rgba(0, 31, 53, 0.5)',
                }}>
                    {text}
                </div>
            )
        },
        {
            title: 'RED',
            dataIndex: 'red',
            key: 'red',
            render: (text: string) => (
                <div style={{
                    background: '#E63027',
                    padding: '0.3rem',
                    borderRadius: '5px',
                    color: 'var(--white)',
                    boxShadow: 'inset 0px 0px 40px rgba(0, 31, 53, 0.5)',
                }}>
                    {text}
                </div>
            )
        },
        {
            title: 'LUCRO +/-',
            dataIndex: 'lucro',
            key: 'lucro',
        },
    ];

    let data = [];

    for (let index = 0; index < 15; index++) {
        data.push(TABLEINFO[0]);
        
    }
    return (
        <div className={styles.container}>
            <Table
                dataSource={data}
                rowClassName={() => 'editable-row'}
                columns={columns}
                rowKey='codigo'
                style={{
                    background: 'red'
                }}
                {...rest}
            />
        </div>
    )
}
