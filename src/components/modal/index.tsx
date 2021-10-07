import React from "react";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const DtwoModal: React.FC = () => {
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1>
            Text in a modal
          </h1>
          <p id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    );
  };
  
  export default DtwoModal;