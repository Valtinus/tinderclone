import React from 'react';
import "./Buttons.css"
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@material-ui/core';



const Buttons = () => {
  return (
    <div className='buttons'>
        <IconButton className='buttons__replay'>
            <ReplayIcon fontSize='large' />
        </IconButton>
        <IconButton className='buttons__left'>
            <CloseIcon fontSize='large' />
        </IconButton>
        <IconButton className='buttons__star'>
            <StarRateIcon fontSize='large' />
        </IconButton>
        <IconButton className='buttons__right'>
            <FavoriteIcon fontSize='large' />
        </IconButton>
        <IconButton className='buttons__lightning'>
            <FlashOnIcon fontSize='large' />
        </IconButton>
    </div>
  )
};

export default Buttons;
