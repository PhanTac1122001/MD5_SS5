import { CloseOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Pagination, Table } from 'antd'
import React from 'react'

export default function ProductManager() {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];
      
      
  return (
    <>
        <main>
            
            <div className='flex justify-between items-center mb-4'>
                <h3>Product</h3>
                <Button type='primary'>Add</Button>
            </div>
            <div className='flex justify-end gap-4 mb-4'>
                <Input.Search className='w-[300px]'/>
                <ReloadOutlined/>
            </div>
            <div>
            <Table dataSource={dataSource} columns={columns} pagination={false}/>
            </div>
            <div className='flex justify-end'>
            <Pagination 
      total={85}
      showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
      defaultPageSize={20}
      defaultCurrent={1}
    />
            </div>
            <div>
            
            </div>
        </main>
    </>
  )
}
