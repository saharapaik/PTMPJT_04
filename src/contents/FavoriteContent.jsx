import React from 'react';
import FavoriteTab from '../components/FavoriteTab';
import FavoriteTabView from '../components/FavoriteTabView';
import { Card } from '@mui/material';
import TrainerCard from '../components/TrainerCard';

function FavoriteContent(props) {
    return (
        <div
        className='FavoriteContent'
        >
            <FavoriteTabView/>
            <TrainerCard/>
            <TrainerCard/>
            <TrainerCard/>
        </div>
    );
}

export default FavoriteContent;