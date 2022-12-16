import React, {useState} from 'react';
import { Button, Modal } from 'antd';

const ModalHelper = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <>
    <Button type="primary" onClick={showModal}>
      Pomoc
    </Button>
    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Proszę skontaktować się pod adres</p>
      <p>Sports-RentalSerwis@gmail.com</p>
    </Modal>
  </>
  )
}

export default ModalHelper