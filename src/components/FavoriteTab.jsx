import React from 'react';
import { tabNoSelected, tabSelected } from '../const/const';
import { Button, Divider } from '@mui/material';

function FavoriteTab({title,isSelected}) {

    return (
        <Button  className="FavoriteTab">
            <div
            className={isSelected?"isSelected":"noSelected"}
            
            style={{
                borderBottom:`1px solid ${isSelected?tabSelected:"#F8F2F5"}`
            }}
            >{title}</div>
          
          <Divider/>
        </Button>
    );
}

export default FavoriteTab;