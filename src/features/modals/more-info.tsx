import React from 'react';
import {Modal} from 'react-bootstrap';
import {System} from '../../interfaces'

interface Props {
   system: (System | null);
   show: boolean;
   handleClose: any;
}

export const MoreInfo: React.FC<Props> = (props) => {
   const {system, show, handleClose} = props
    return (
      <Modal show={show} onHide={handleClose}>
         <Modal.Header closeButton>
            <Modal.Title>{system && system.type}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {system && system.moreInfo}
         </Modal.Body>
      </Modal>
    );
}