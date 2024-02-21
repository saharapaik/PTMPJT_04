import { Avatar, Chip } from '@mui/material';
import React from 'react';
import { consultantInfoChip } from '../const/const';
import ConsultantMoreDialog from './ConsultantMoreDialog';

function RecommendationBox(props) {
    return (
        <div className='RecommendationBox'>
            <Avatar  />
            <div
                className='ConsultantInfo'
            >
                <div className='ConsultantTitle'><div className='ConsultantAlias'>소울힐러</div> 박진주</div>
                <div className='ConsultantContent'>마음의 H.P를 꽉꽉 채워드립니다.</div>
                <ul className='ConsultantChips'>

                    <li><Chip variant='outlined' sx={{
                        color: consultantInfoChip,
                        fontSize:"10px",
                        height:"21px"
                    }}

                        label="상담심리사 2급"
                    /></li>
                    <li><Chip variant='outlined' sx={{
                        color: consultantInfoChip,
                        fontSize:"10px",
                        height:"21px"
                    }}
                        label="3년차 상담사"
                    /></li>

                </ul>
                <div className='ConsultantMore'>
                  <ConsultantMoreDialog/>

                </div>
            </div>
        </div>
    );
}

export default RecommendationBox;