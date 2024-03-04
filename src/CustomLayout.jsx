import logo from './logo.svg';
import './App.css';
import ChatContents from './contents/ChatContents';
import { Box, Button, InputBase, TextField, TextareaAutosize } from '@mui/material';
import { ReactComponents as Arrow } from './img/Entertainment.svg'
import { highlightColor } from './const/const';
import CurvedNavBar from './components/CurvedNavBar';
import LogoHeader from './components/LogoHeader';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { chatbotMessageListAtom, messageListAtom } from './atom/atom';
import { Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';

export default function CustomLayout() {
  const [messageList, setMessageList] = useRecoilState(messageListAtom);
  const [chatbotMessageList, setchatbotMessageList] = useRecoilState(chatbotMessageListAtom);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const isChat = location.pathname === "/";

  const onChangeMessage = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  }

  const addMsg = async () => {
    // 사용자가 입력한 메시지를 가져옵니다.
    const userMessage = message;
    setMessageList(prevMessages => [...prevMessages, userMessage]);


    await axios.get("http://127.0.0.1:8000/chat", {
      params: {user_message: userMessage}
      // data를 받으려면 then 절 필요합니다.
    }).then(response => {
      console.log(response.data);
      const outText = response.data.response_message.answer.out_text;
      console.log(response.data);
      setchatbotMessageList(prevMessages => [...prevMessages, outText]);
    }).catch(error => {
      console.error('Error fetching data:', error);
    }).finally(() => {
      setMessage("");
    })
  }

  return (
    <div className='App'>
      <div className='ptLogo'>
        <svg width="68" height="30" viewBox="0 0 68 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 로고 SVG 코드 */}
        </svg>
      </div>

      <LogoHeader/>

      {/* outlet부분만 다른화면으로 교체되는 것 */}
      <Outlet/>

      {/* 채팅창 */}
      {isChat && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            backgroundColor: "#ffffff"
          }}
        >
          <InputBase
            multiline={true}
            variant='standard'
            placeholder='메시지를 입력하세요'
            value={message}
            onChange={onChangeMessage}
            sx={{
              textDecoration: "none",
              margin: 0,
              padding: 0,
              width: "calc(100% - 20px - 40px - 8px)",
              border: "none"
            }}
            inputProps={{
              style: {
                paddingTop: "16px",
                paddingLeft: "20px",
                height: "calc(76px - 16px)",
                border: "none",
                backgroundColor: "#ffffff",
              }
            }}
          />
          <button
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              backgroundColor: highlightColor,
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginTop: "16px",
              right: "20px"
            }}
            onClick={addMsg}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* 버튼 SVG 코드 */}
            </svg>
          </button>
        </Box>
      )}

      <CurvedNavBar isChat={isChat} />
    </div>
  );
}
