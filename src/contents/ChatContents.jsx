import React from 'react';
import PTChatBot from "../components/PTChatBox"
import PTChatBox from '../components/PTChatBox';
import UserChatBox from '../components/UserChatBox';
import { TextareaAutosize } from '@mui/material';
import { useRecoilState } from 'recoil';
import { messageListAtom } from '../atom/atom';
function ChatContents(props) {
    const [messageList, setMessageList] = useRecoilState(messageListAtom)
    return (
        <div className='ChatContents'>
            <PTChatBox />
            <PTChatBox />
            {/* 유저가 채팅 치면 나오는 구간 */}
            {
                messageList.map(msg => <div
                    className='userWrap'
                >
                    <UserChatBox msg={msg} />

                </div>)
            }
            <PTChatBox />
            <div
                className='flexBox'
            />
        </div>
    );
}

export default ChatContents;