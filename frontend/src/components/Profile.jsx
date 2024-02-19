import { Avatar } from '@mui/material';
import React from 'react';
import {chatbotProfileColor} from "../const/const"
function Profile(props) {
    return (
        <Avatar sx={{ bgcolor: chatbotProfileColor }}>P.T</Avatar>
    );
}

export default Profile;