import { Button, Image, Modal } from 'antd'
import React, { useContext, useState } from 'react'
import { IoTrashOutline } from 'react-icons/io5'
import { CartContext } from '../providers/GlobalState';


export default function CartItem({cart}) {
  const {handleRemoveCart, handleUpdateQuantity}=useContext(CartContext);
  const [id, setId] = useState(null);
  const [isShowModal,setIsShowModal]=useState(false);
  const handleShowModal=(id)=>{
    setIsShowModal(true);
    setId(id);
  }
  const handleCloseModal=()=>{
    setIsShowModal(false)
  }
  const handleConfirmDelete=()=>{
    handleRemoveCart(id);
    handleCloseModal();
  }
  return (
    <>
    <Modal onCancel={handleCloseModal}
    onOk={handleConfirmDelete}
    title="Xác nhận"
    open={isShowModal}
    okText="Xóa"
    cancelText="Hủy">
      Bạn muốn xóa sản phẩm này không ?
    </Modal>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
                <Image className='rounded-full'
                 height={50} width={50} src={cart?.image}/>
                 <p>{cart?.productName}</p>
            </div>
            <div className='flex items-center gap-3'>
                <Button size='small' onClick={()=>handleUpdateQuantity("down",cart.id)}>-</Button>
                <span>{cart?.quantity}</span>
                <Button size='small' onClick={()=>handleUpdateQuantity("up",cart.id)}>+</Button>
                <IoTrashOutline onClick={()=>handleShowModal(cart.id)}  size={20}/>

            </div>
        </div>
        
    </>
  )
}
