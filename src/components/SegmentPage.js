
import React, { useState } from 'react';
import { Button } from '@mui/material';
import SegmentTable from "./SegmentTable"
import ModalSegment from './Modal';


const Segment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className='container'>
      <div className="button-wrapper " style={{"marginTop": "10px"}}>
        <Button onClick={handleOpenModal} variant="outlined">Save Segment</Button>
      </div>
      <div className="segment-table-wrapper">
        <h3 style={{ "textAlign": "center" }}>Segment Table</h3>
        <SegmentTable />
      </div>
      <ModalSegment setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />

    </div >
  );
};

export default Segment;



