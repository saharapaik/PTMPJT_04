import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './CustomLayout';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CustomLayout from './CustomLayout';
import ChatContents from './contents/ChatContents';
import FavoriteContent from './contents/FavoriteContent';
import MyContent from './contents/MyContent';
//1.라우터를 생성한다.
const router = createBrowserRouter([

{
  element:<CustomLayout />,
  //내부 화면만 교체
  children:[
    //채팅창
    {
      path: "/",
      element: <ChatContents />,
    },
    //즐겨찾기
    {
      path: "/favorite",
      element: <FavoriteContent />,
    },
     //마이페이지
     {
      path: "/my",
      element: <MyContent/>,
    },
]
}

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RecoilRoot>
      {/* <App /> */}
      <RouterProvider router={router} />
    </RecoilRoot>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();