import React, { useState } from 'react';
import { Table, Form, Popconfirm, Typography, InputNumber, Input } from 'antd';
import { TableProps } from 'antd/lib/table';
import styles from './index.module.scss';
import { TABLEINFO } from '../../../constants/constants';

// Props das colunas da tabela
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

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: TableDataSource;
    index: number;
    children: React.ReactNode[];
  }

interface TableGestaoProps extends TableProps<TableDataSource> {}

// Customizar para colocar inputs para poder editar o que quiser
export const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...props
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
      <td {...props}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            initialValue={children[1]}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
}

// TableGestão é a table da página de gestao de bancas
export const TableGestao = ({ ...rest }: TableGestaoProps) => {

    // Estado que vai gerenciar se vai ser editado ou não
    const [editingKey, setEditingKey] = useState('');

    // Todas as colunas existentes na tabela
    const columns = [
        {
            title: 'DATA E HORA',
            dataIndex: 'date',
            key: 'date',
            editable: true,
        },
        {
            title: 'JOGO/JOGADOR',
            dataIndex: 'game',
            key: 'game',
            editable: true,
        },
        {
            title: 'PAÍS',
            dataIndex: 'country',
            key: 'country',
            editable: true,
        },
        {
            title: 'CAMPEONATO',
            dataIndex: 'champion',
            key: 'champion',
            editable: true,
        },
        {
            title: 'CATEGORIA',
            dataIndex: 'category',
            key: 'category',
            editable: true,
        },
        {
            title: 'TIPO DE APOSTA',
            dataIndex: 'type',
            key: 'type',
            editable: true,
        },
        {
            title: 'MERCADO',
            dataIndex: 'market',
            key: 'market',
            editable: true,
        },
        {
            title: 'ODD',
            dataIndex: 'odd',
            key: 'odd',
            editable: true,
        },
        {
            title: 'STAKE',
            dataIndex: 'stake',
            key: 'stake',
            editable: true,
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
            editable: true,
        },
        {
            title: 'OPERATION',
            dataIndex: 'operation',
            key: 'operation',
            render: (_: any, record: any) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                      <a href="javascript:;" onClick={() => console.log(record.key)} style={{ marginRight: 8 }}>
                        Save
                      </a>
                      <Popconfirm title="Sure to cancel?" onConfirm={() => setEditingKey('')}>
                        <a>Cancel</a>
                      </Popconfirm>
                    </span>
                  ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => setEditingKey(record.key)}>
                      Edit
                    </Typography.Link>
                  );
            } 
        }
    ];

    // Função para pegar o row correta para ser editada
    const isEditing = (record: any) => record.key === editingKey;
    const [form] = Form.useForm();

    // Multiplicando a coluna por 15
    let data = [];
    for (let index = 0; index < 15; index++) {
        data.push({...TABLEINFO[0], key: index.toString()});
    }

    // Colunas customizáveis
    const mergedColumns = columns.map(col => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: (record: any) => ({
            record,
            inputType: col.dataIndex === 'age' ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
          }),
        };
      });
    return (
        <div className={styles.container}>
            <Form form={form} component={false}>
                <Table
                    className={styles.colorTableImpar}
                    dataSource={data}
                    components={{body: {cell: EditableCell}}}
                    rowClassName="editable-row"
                    columns={mergedColumns}
                    rowKey='codigo'
                    {...rest}
                />
            </Form>
        </div>
    )
}
