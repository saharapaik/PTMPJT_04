import React, { useState } from 'react';
import FavoriteTab from './FavoriteTab';

function FavoriteTabView(props) {

    return (
        <ul className='FavoriteTabView'>
            <li><FavoriteTab title={"트레이너"} isSelected={true}/></li>
            <li><FavoriteTab title={"프로그램"} /></li>
        </ul>
    );
}

export default FavoriteTabView;