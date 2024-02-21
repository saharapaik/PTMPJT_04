import React from 'react';
import MyGradeStatus from '../components/MyGradeStatus';
import Calm from "../components/MyIncos/Calm"
import Society from '../components/MyIncos/Society';
import Judge from '../components/MyIncos/Judge';
import Confidence from '../components/MyIncos/Confidence';
import Date from '../components/MyIncos/Date';
import Heart from '../components/MyIncos/Heart';
import Facebook from '../components/MyIncos/Facebook';
import Insta from '../components/MyIncos/Insta';
import MyTile from '../components/MyTile';
import MyDivider from '../components/MyDivider';
function MyContent(props) {
    return (
        <div
            className='MyContent'
        >
            <div
                className='MyInfoZone'
            ><MyGradeStatus />
                <div
                    className='MyInfo'
                >
                    <div className='MyInfoAlias'>행복마스터</div>
                    <br />
                    <div className='MyInfoName'>앨리스</div>
                    <div className='MyInfoEmail'>nasnaz@kakao.com</div>

                </div>

            </div>
            <div
                style={{

                    height: "35px"
                }}
            ></div>
            <ul
                className='MyGrid'
            >
                <li><Calm /><div>명상</div></li>
                <li><Society /><div>사회성</div></li>
                <li><Judge /><div>판단력</div></li>
                <li><Confidence /><div>자신감</div></li>
                <li><Date /><div>연애감정</div></li>
                <li><Heart /><div>마음치유</div></li>


            </ul>
            <div style={{
                height: "77px"
            }} />
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    gap: "8px"
                }}
            >

                <Facebook />
                <div
                    style={{ 
                        height: "content-fit",
              
                         display:"flex",
                         alignItems:"flex-end",
                         justifyContent:"flex-end"
                         }}
                ><Insta /></div>

            </div>
 {/* 메뉴들 */}
 <div
 className='MyMenus'
 > <MyDivider/>
 <MyTile title={"정보변경"}/>
 <MyDivider/>
 <MyTile title={"공지사항"} isNew={true}/>
 <MyDivider/>
 <MyTile title={"고객센터"}/>
 <MyDivider/>
 <MyTile title={"환경설정"}/>
 <MyDivider/></div>


        </div>
    );
}

export default MyContent;