import { Fab } from '@mui/material';
import React from 'react';
import { fabColor } from '../const/const';
import { useNavigate } from 'react-router-dom';
import NavFab from './NavFab';

function CurvedNavBar({isChat}) {
    const navigate=useNavigate()
    const handleTab=(e)=>{
const tabId=e.target.id
console.log(`${tabId}로 이동`)
navigate(`/${tabId}`)

    }
    return (
        <div className='nav'>
            {/* <div className='menuToggle'></div> */}
            <div
                className={isChat?'menuToggle':"noChatMenuToggle"}
                style={{
                    position: "relative",
                    width: "64px",
                    height: "64px",
                    backgroundColor: isChat?"#ffffff":"#F8F2F5",
                    // border: "5px solid var(--clr)",
                    borderRadius: "50%",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                    transform: "translateY(-30px)",
                }}
            > 
            
            {/* <Fab

                sx={{
                    boxShadow: "none",
                    position: "absolute",
                    top: "32px",
                    width: "56px",
                    height: "56px",
                    backgroundColor: fabColor,
                    "::hover": {
                        backgroundColor: fabColor,

                    },
                    color: "#ffffff",
                    fontSize: "16px",
                    // lineHeight:16,
                    // border: "5px solid var(--clr)",
                    borderRadius: "50%",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                    transform: "translateY(-30px)",
                    "::before": {
                        position: "absolute"
                    }
                }}

            >now</Fab> */}
            <NavFab/>
                <i></i>
                </div>



            <ul
                className='menu'
            >
                <li>
                    <button

             
                    ><svg 
                    id=''
                    onClick={handleTab}
                    width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 22.3782C34.899 22.8402 34.8076 23.3071 34.697 23.7691C34.4276 24.8603 33.8022 25.7499 33.1528 26.6297C33.0326 26.7968 32.9412 27.0327 32.9412 27.2342C32.9268 29.6426 32.9316 32.0559 32.9316 34.4643C32.9316 34.5871 32.9316 34.7149 32.9316 34.8919C32.8402 34.8034 32.7776 34.7542 32.7247 34.6953C32.1667 34.0612 31.6183 33.4174 31.0555 32.7882C30.2666 31.8986 29.4633 31.0188 28.6744 30.1292C28.5493 29.9867 28.4483 29.967 28.28 30.0309C26.7695 30.5765 25.2158 30.8665 23.6091 30.8419C21.8004 30.8173 20.0687 30.4438 18.3947 29.7262C17.2451 29.2297 16.2301 28.5416 15.2824 27.7159C13.7095 26.3495 12.8388 24.6145 12.5261 22.5158C12.0307 22.4617 11.5208 22.4372 11.0205 22.3389C10.2364 22.1865 9.45713 21.9997 8.68748 21.7933C8.4662 21.7343 8.34113 21.7884 8.19682 21.9407C7.5811 22.5797 6.96057 23.2186 6.33523 23.8478C5.62811 24.5506 4.91137 25.2436 4.14652 25.9907V25.5828C4.14652 23.661 4.1369 21.7392 4.15614 19.8174C4.15614 19.4832 4.05032 19.2817 3.81461 19.0704C2.25125 17.6991 1.04386 16.0722 0.476239 14.0128C-0.442535 10.705 0.177998 7.68221 2.25606 5.01334C3.13154 3.8878 4.20425 2.92445 5.43569 2.19211C7.46084 0.992838 9.64473 0.245752 11.997 0.0638955C12.0932 0.0540654 12.1894 0.0245752 12.2904 0C13.0023 0 13.7143 0 14.4262 0C14.532 0.0245752 14.6427 0.0589805 14.7485 0.0638955C16.5716 0.221177 18.2985 0.712681 19.9629 1.48434C21.8341 2.3543 23.4071 3.61747 24.653 5.25909C26.226 7.32832 26.8609 9.71212 26.5771 12.3269C26.5482 12.5972 26.5915 12.7201 26.8898 12.784C28.0827 13.0347 29.1891 13.5164 30.2618 14.1111C31.8733 14.9958 33.0951 16.2934 34.0235 17.8662C34.3891 18.4855 34.5575 19.2276 34.7932 19.9207C34.8894 20.2057 34.923 20.5105 34.9856 20.8054V22.3733L35 22.3782ZM6.21016 21.0609C6.75853 20.5006 7.24438 20.0091 7.72541 19.5078C7.85048 19.3751 7.95631 19.3309 8.12948 19.4046C8.41329 19.5275 8.71153 19.6208 9.00496 19.7241C12.199 20.8201 15.3594 20.6874 18.4909 19.4537C19.5685 19.031 20.5353 18.397 21.4301 17.6696C23.0608 16.3474 24.0613 14.5928 24.5183 12.5284C24.7925 11.2948 24.6145 10.0906 24.2104 8.89622C23.5033 6.80733 22.1853 5.25418 20.3862 4.07457C18.5679 2.88513 16.5716 2.27566 14.4358 2.09381C12.2327 1.90704 10.1017 2.23143 8.08619 3.1358C7.18184 3.54374 6.30636 4.06965 5.50304 4.66437C3.88677 5.86364 2.84773 7.52493 2.30417 9.46637C1.90491 10.8819 1.9963 12.3171 2.54949 13.7228C3.22775 15.4578 4.22349 16.9176 5.74355 17.9694C6.08509 18.2053 6.25826 18.456 6.2294 18.9082C6.18129 19.5864 6.21497 20.2696 6.21497 21.0511L6.21016 21.0609ZM30.8343 29.505C30.8631 29.4853 30.8968 29.4657 30.9257 29.4411C30.9257 28.576 30.9593 27.711 30.916 26.8509C30.8872 26.3102 31.0507 25.9268 31.4019 25.5238C32.4505 24.3147 33.0326 22.8943 32.9075 21.2526C32.768 19.4537 31.9551 18.0185 30.5937 16.8635C29.3382 15.8019 27.924 15.1334 26.351 14.7599C26.1249 14.7058 26.0191 14.75 25.9229 14.9761C25.5236 15.9542 25.0138 16.8537 24.3114 17.6499C23.3542 18.741 22.3103 19.6995 21.0597 20.4367C19.4386 21.3903 17.7165 22.0046 15.8837 22.3094C15.4508 22.3831 15.0179 22.4322 14.4743 22.506C14.71 23.081 14.8976 23.6168 15.1429 24.123C15.8453 25.5877 16.9516 26.6493 18.3514 27.4259C19.9725 28.3254 21.6994 28.7432 23.5225 28.7874C25.3553 28.8316 27.0918 28.3991 28.7418 27.598C28.9582 27.4947 29.0929 27.4898 29.2468 27.6963C29.4393 27.9567 29.6702 28.1927 29.8866 28.4384C30.2041 28.7972 30.5216 29.1511 30.8391 29.5099L30.8343 29.505Z" fill="white" />
                        <path d="M8.19682 12.263H6.23901V10.2577H8.19682V12.263Z" fill="white" />
                        <path d="M12.3722 12.2581V10.2577H14.33V12.2581H12.3722Z" fill="white" />
                        <path d="M20.4872 10.2577V12.2581H18.5294V10.2577H20.4872Z" fill="white" />
                    </svg>
                        <div>A.I.안내</div></button>


                </li>
                <li><button
                //  id='favorite'
                //  onClick={handleTab}
                > <svg 
                id='favorite'
                onClick={handleTab}
                width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_499_302)">
                        <path d="M12.708 14.4H1.8L10.692 21.474L7.308 32.4L16.2 25.65L25.092 32.4L21.708 21.474L30.6 14.4H19.692L16.2 3.59998L12.708 14.4ZM20.448 7.99198L21.654 11.7H24.498L21.87 3.59998L20.448 7.99198ZM30.42 18L24.84 22.446L27.054 29.592L30.744 32.4L27.954 23.4L34.74 18H30.42Z" fill="#B9B9FF" />
                    </g>
                    <defs>
                        <clipPath id="clip0_499_302">
                            <rect width="36" height="36" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                    <div>즐겨찾기</div></button>

                </li>
                <li></li>
                <li>
                    <button><svg width="36" height="36" viewBox="0 0 36 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.517045 18V0.545454H7.40341C8.72727 0.545454 9.85511 0.798295 10.7869 1.30398C11.7188 1.80398 12.429 2.5 12.9176 3.39204C13.4119 4.27841 13.6591 5.30114 13.6591 6.46023C13.6591 7.61932 13.4091 8.64205 12.9091 9.52841C12.4091 10.4148 11.6847 11.1051 10.7358 11.5994C9.79261 12.0937 8.65057 12.3409 7.30966 12.3409H2.92045V9.38352H6.71307C7.4233 9.38352 8.00852 9.26136 8.46875 9.01705C8.93466 8.76705 9.28125 8.4233 9.50852 7.9858C9.74148 7.54261 9.85795 7.03409 9.85795 6.46023C9.85795 5.88068 9.74148 5.375 9.50852 4.94318C9.28125 4.50568 8.93466 4.16761 8.46875 3.92898C8.00284 3.68466 7.41193 3.5625 6.69602 3.5625H4.20739V18H0.517045ZM17.2898 18.2216C16.7273 18.2216 16.2443 18.0227 15.8409 17.625C15.4432 17.2216 15.2443 16.7386 15.2443 16.1761C15.2443 15.6193 15.4432 15.142 15.8409 14.7443C16.2443 14.3466 16.7273 14.1477 17.2898 14.1477C17.8352 14.1477 18.3125 14.3466 18.7216 14.7443C19.1307 15.142 19.3352 15.6193 19.3352 16.1761C19.3352 16.5511 19.2386 16.8949 19.0455 17.2074C18.858 17.5142 18.6108 17.7614 18.304 17.9489C17.9972 18.1307 17.6591 18.2216 17.2898 18.2216ZM20.8991 3.58807V0.545454H35.2344V3.58807H29.8906V18H26.2429V3.58807H20.8991Z" fill="#B9B9FF" />
                    </svg>
                        <div>트레이닝</div></button>


                </li>
                <li>
                    <button><svg 
                    id='my'
                    onClick={handleTab}
                    width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_499_499)">
                            <path d="M18 18C21.315 18 24 15.315 24 12C24 8.685 21.315 6 18 6C14.685 6 12 8.685 12 12C12 15.315 14.685 18 18 18ZM18 21C13.995 21 6 23.01 6 27V30H30V27C30 23.01 22.005 21 18 21Z" fill="#B9B9FF" />
                        </g>
                        <defs>
                            <clipPath id="clip0_499_499">
                                <rect width="36" height="36" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                        <div>My</div></button>


                </li>
            </ul>

        </div>
    );
}

export default CurvedNavBar;