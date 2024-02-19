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
import { messageListAtom } from './atom/atom';
import { Outlet, useLocation } from 'react-router-dom';
export default  function CustomLayout() {
  const [messageList, setMessageList] = useRecoilState(messageListAtom)
  const [messsage,setMessage]=useState("")
  const location=useLocation()
  const isChat=location.pathname==="/"
  console.log('isChat',isChat)
  const onChangeMessage=(e)=>{
const newMessage=e.target.value
setMessage(newMessage)

  }
  const addMsg=()=>{
    setMessageList(p=>[...p,messsage])
    setMessage("")
  }
  return (
    <div className='App'>
     <div
     className='ptLogo'
     >   <svg 
   
    width="68" height="30" viewBox="0 0 68 30" fill="none" xmlns="http://www.w3.org/2000/svg"
       
       >
<path d="M52.5347 0.907042L54.2412 6.02038L59.2101 8.0655L54.895 11.2755L54.4937 16.6533L50.1203 13.5239L44.9034 14.8024L46.5156 9.65833L43.6927 5.0707L49.0625 5.0209L52.5347 0.907042Z" fill="#E9A8CB"/>
<path d="M63.1723 7.34156L64.0161 8.84492L65.7006 9.18624L64.5376 10.4567L64.7349 12.171L63.1723 11.4528L61.6098 12.171L61.8071 10.4567L60.6441 9.18624L62.3286 8.84492L63.1723 7.34156Z" fill="#E9A8CB"/>
<path d="M39.912 0L40.9667 1.87921L43.0723 2.30586L41.6186 3.89393L41.8652 6.03682L39.912 5.13909L37.9589 6.03682L38.2055 3.89393L36.7518 2.30586L38.8573 1.87921L39.912 0Z" fill="#E9A8CB"/>
<path d="M40.5766 12.0135L41.2094 13.141L42.4728 13.397L41.6005 14.3498L41.7485 15.6355L40.5766 15.0969L39.4047 15.6355L39.5527 14.3498L38.6805 13.397L39.9438 13.141L40.5766 12.0135Z" fill="#E9A8CB"/>
<path d="M16.3194 23.3595L17.4796 25.4266L19.7957 25.8959L18.1966 27.6428L18.4679 30L16.3194 29.0125L14.171 30L14.4422 27.6428L12.8431 25.8959L15.1593 25.4266L16.3194 23.3595Z" fill="white"/>
<path d="M7.89521 23.1246H4.92853V28.843H0V13.2976C0 10.5345 0.861296 9.50131 3.73228 9.50131H7.89521C12.0342 9.50131 15.0727 11.5676 15.0727 16.1087V16.5172C15.0727 21.0583 12.0342 23.1246 7.89521 23.1246ZM4.92853 14.3788V18.9439H7.65596C9.25893 18.9439 10.1681 17.7425 10.1681 16.397V16.2288C10.1681 14.8833 9.25893 13.682 7.65596 13.682H5.62235C5.07208 13.682 4.92853 13.8021 4.92853 14.3788Z" fill="white"/>
<path d="M28.5557 28.843H23.5793V13.7541H19.9188C18.5312 13.7541 17.9809 12.6008 17.9809 11.6157C17.9809 10.6306 18.5072 9.54936 19.9188 9.54936H32.2162C33.6278 9.54936 34.1541 10.6306 34.1541 11.6157C34.1541 12.6008 33.6038 13.7541 32.2162 13.7541H28.5557V28.843Z" fill="white"/>
<path d="M36.629 29.4463H33.9308V22.4385C33.9308 21.5575 34.5688 21.1036 35.2733 21.1036C35.7916 21.1036 36.2834 21.3573 36.4961 21.8378C37.0012 21.3573 37.6525 21.1036 38.3569 21.1036C39.1677 21.1036 39.9519 21.3706 40.5102 22.038C41.0551 21.464 41.826 21.1036 42.9026 21.1036C44.5907 21.1036 46.066 21.9713 46.066 24.7611V29.4463H43.328V24.6009C43.328 23.6932 42.7564 23.3862 42.3178 23.3862C41.8792 23.3862 41.2944 23.6932 41.2944 24.6009V29.4463H38.6626V24.6009C38.6626 23.6932 38.0911 23.3862 37.6525 23.3862C37.2271 23.3862 36.6556 23.6799 36.629 24.5341V29.4463Z" fill="white"/>
<path d="M47.4187 29.4463V22.5319C47.4187 21.6109 48.0434 21.1971 48.7877 21.1971C49.532 21.1971 50.1567 21.6109 50.1567 22.5319V29.4463H47.4187ZM47.4054 19.3951C47.4054 18.5141 48.0434 18.167 48.7877 18.167C49.532 18.167 50.17 18.5141 50.17 19.3951C50.17 20.276 49.532 20.6231 48.7877 20.6231C48.0434 20.6231 47.4054 20.276 47.4054 19.3951Z" fill="white"/>
<path d="M54.256 29.4463H51.5578V22.4385C51.5578 21.5575 52.1958 21.1036 52.9002 21.1036C53.4186 21.1036 53.9104 21.3573 54.1363 21.8378C54.6547 21.3573 55.3725 21.1036 56.0769 21.1036C57.7649 21.1036 59.1074 21.9446 59.1074 24.7611V29.4463H56.3693V24.6009C56.3693 23.6932 55.7712 23.3862 55.3193 23.3862C54.8674 23.3862 54.256 23.6932 54.256 24.6009V29.4463Z" fill="white"/>
<path d="M68 29.4463H65.8866L65.7404 28.5787C65.2353 29.2594 64.4644 29.6732 63.5074 29.6732C61.7529 29.6732 60.2643 28.8056 60.2643 25.9891V24.7878C60.2643 21.9713 61.7529 21.1036 63.5074 21.1036C64.2385 21.1036 64.8366 21.3439 65.3018 21.731V19.5018C65.3018 18.6209 65.9531 18.167 66.6575 18.167C67.362 18.167 68 18.6209 68 19.5018V29.4463ZM63.0023 24.6009V26.176C63.0023 27.0837 63.6802 27.3907 64.1454 27.3907C64.5973 27.3907 65.2619 27.097 65.3018 26.2427V24.5341C65.2619 23.6799 64.5973 23.3862 64.1454 23.3862C63.6802 23.3862 63.0023 23.6932 63.0023 24.6009Z" fill="white"/>
</svg>  </div>
          
      <LogoHeader/>

      {/* outlet부분만 다른화면으로 교체되는 것 */}
      <Outlet/>
      {/* 채팅창 */}
      {isChat&&<Box
        sx={{
          width: "100%",
          display: "flex",
          backgroundColor: "#ffffff"
        }}

      ><InputBase
          multiline={true}
          variant='standard'
          placeholder='메시지를 입력하세요'
          value={messsage}
          onChange={onChangeMessage}
          sx={{
            textDecoration:"none",
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
            <path d="M18.2816 7.49161L18.2758 7.49226L2.99329 9.49686C2.86452 9.51333 2.74184 9.56146 2.63623 9.63694C2.53062 9.71243 2.44536 9.81292 2.38809 9.92942C2.32674 10.0511 2.29659 10.186 2.30036 10.3222C2.30413 10.4584 2.34169 10.5915 2.40967 10.7095L4.29802 13.9802C4.39119 14.1415 4.53769 14.2652 4.71228 14.33C4.88687 14.3948 5.0786 14.3967 5.25443 14.3354L12.6971 11.6963C12.7264 11.686 12.7584 11.6863 12.7875 11.6971C12.8166 11.7079 12.841 11.7286 12.8565 11.7555C12.8721 11.7824 12.8777 11.8138 12.8725 11.8445C12.8673 11.8751 12.8516 11.9029 12.8281 11.9232L6.82153 17.049C6.68047 17.1705 6.58618 17.3373 6.55491 17.5209C6.52364 17.7044 6.55735 17.8931 6.65024 18.0544L8.53891 21.3257C8.60388 21.4384 8.69581 21.5332 8.80645 21.6016C8.91709 21.67 9.04299 21.7099 9.17284 21.7176C9.32935 21.7275 9.48528 21.691 9.62118 21.6128C9.71555 21.5582 9.79805 21.4853 9.86386 21.3984L19.2577 9.19495L19.2617 9.18918C19.3865 9.02204 19.4595 8.82197 19.4718 8.61375C19.484 8.40552 19.435 8.19826 19.3307 8.01762C19.2264 7.83697 19.0714 7.69087 18.885 7.59738C18.6985 7.50389 18.4887 7.46712 18.2816 7.49161Z" fill="#FCFBFE" />
          </svg>
        </button>
      </Box>}
      <CurvedNavBar isChat={isChat} />
    </div>
  );
}


