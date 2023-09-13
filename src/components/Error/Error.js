import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

const Error = () => {

  return (
   <>
      <Card sx={{ backgroundColor: '#F5F5F5', mr:'20px',ml:'20px', mt:'20px'}}>
        <CardContent sx={{color:'red', textAlign:'center'}}>
            <Typography variant='h4'>Error</Typography>
            <Typography variant='p'>You entered a wrong input...</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default Error;
