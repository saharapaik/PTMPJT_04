import { Avatar, Card, Chip } from '@mui/material';
import React from 'react';
import CustomAvatar from './CustomAvatar';
import { IoMdMore } from "react-icons/io";
import { tabSelected } from '../const/const';
function TrainerCard(props) {
    return (
        <Card
            variant='elevation'
            sx={{
                width: "100%",
                borderRadius: "20px"
            }}
        >
            <div
                className='TrainerCardContent'
            >
                <div><CustomAvatar
                
                    size={"60px"}
                /></div>
                <ul
                >
                    <li>
                        <div
                            style={{
                                color: tabSelected,
                                fontWeight: "bold"
                            }}
                        >소울힐러</div>박진주



                    </li>
                    <li>행복의 기적을 찾아갑니다.</li>
                    <li><Chip
                        variant='outlined'
                        sx={{
                            height: "14px",
                            color: "#696767",
                            fontSize: "9px"
                        }}
                        label="상담심리사 1급"
                    />
                        <Chip
                            variant='outlined'
                            sx={{
                                height: "14px",
                                color: "#696767",
                                fontSize: "9px"
                            }}
                            label="15년차 베테랑"
                        />
                    </li>

                </ul>
                <div
                    style={{
                        flex: 1
                    }}
                />
                <button><IoMdMore size={20} color='#878787' /></button>

            </div>

        </Card>
    );
}

export default TrainerCard;