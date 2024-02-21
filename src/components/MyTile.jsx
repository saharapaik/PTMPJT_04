import React from 'react';
import MyRightArrow from './MyIncos/MyRightArrow';

function MyTile({ title,isNew=false }) {
    return (
        <button

        >
            <div
            className='TileTxtZone'
            >{title}

{isNew&&<div
className='MyNew'
>N</div>}</div>

<MyRightArrow/>

        </button>
    );
}

export default MyTile;