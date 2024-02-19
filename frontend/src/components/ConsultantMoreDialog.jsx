import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Avatar, Chip, Divider, Typography } from '@mui/material';
import { consultantMoreChip } from '../const/const';
// import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

export default function ConsultantMoreDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <button onClick={handleClickOpen}>
        <div>더보기</div>

        <svg
          style={{
            paddingTop: "2px"
          }}
          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.00004 11.3334L9.33337 8.00002L6.00004 4.66669" stroke="#5C5C66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

      </button>
      <Dialog

PaperProps={{
  sx:{borderRadius:"20px"}
}}
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <div
          style={{
            paddingTop: "23px",
            paddingLeft: "19px",
            paddingRight: "19px",
            paddingBottom: "6px"
          }}
        >
          <div
            className='MoreAvatarZone'
          >
            {/* 균형 맞추기 위해서 닫기버튼 넣어서 투명하게 함 */}
            <button
              style={{
                opacity: 0
              }}
              onClick={() => { return; }}
            ><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9M1 9L9 1" stroke="#3D3D45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg></button>
{/* 상담사 이미지 들어가는 아바타 */}
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "grey",
                borderRadius: "50%"
              }}
            />
            {/* 닫기 버튼 */}
            <button
            onClick={handleClose}
            ><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L9 9M1 9L9 1" stroke="#3D3D45" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg></button>


          </div>
          <div
            className='MoreTitleZone'
          >
            <button

              style={{
                opacity: 0
              }}
            ><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 14.2383C9.33109 14.0631 11.3375 12.9675 13.2992 11.2968C15.4101 9.49915 17.2496 7.22068 17.25 4.84576L9 14.2383ZM9 14.2383C8.66891 14.0631 6.66247 12.9675 4.70081 11.2968C2.5898 9.49904 0.750236 7.22042 0.75 4.84535C0.751363 3.76647 1.1925 2.72777 1.98375 1.95832C2.77571 1.18818 3.85378 0.751348 4.98253 0.75C6.43077 0.750109 7.65541 1.3526 8.40636 2.3252L9 3.09407L9.59364 2.3252C10.3446 1.3526 11.5692 0.750109 13.0175 0.75C14.1462 0.751348 15.2243 1.18818 16.0162 1.95832C16.8076 2.72786 17.2487 3.7667 17.25 4.8457L9 14.2383Z" stroke="#4645A9" stroke-width="1.5" />
              </svg></button>
            <div
              className='MoreTitle'
            ><div className='MoreTitleAlias'>해피매직</div><div>나미선</div></div>
            <button><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 14.2383C9.33109 14.0631 11.3375 12.9675 13.2992 11.2968C15.4101 9.49915 17.2496 7.22068 17.25 4.84576L9 14.2383ZM9 14.2383C8.66891 14.0631 6.66247 12.9675 4.70081 11.2968C2.5898 9.49904 0.750236 7.22042 0.75 4.84535C0.751363 3.76647 1.1925 2.72777 1.98375 1.95832C2.77571 1.18818 3.85378 0.751348 4.98253 0.75C6.43077 0.750109 7.65541 1.3526 8.40636 2.3252L9 3.09407L9.59364 2.3252C10.3446 1.3526 11.5692 0.750109 13.0175 0.75C14.1462 0.751348 15.2243 1.18818 16.0162 1.95832C16.8076 2.72786 17.2487 3.7667 17.25 4.8457L9 14.2383Z" stroke="#4645A9" stroke-width="1.5" />
            </svg></button>



          </div>
          <div
            className='MoreContentZone'
          >
            행복의 기적을 찾아갑니다.
            <br/>
            성숙한 조언으로 삶이 평온해지는 행<br/>복을 느끼게 해드리려 합니다.
          </div> <div
            className='MoreChipsZone'
          >
<Chip variant='outlined' sx={{
  color:consultantMoreChip,
  height:"20px"
}}
label="상담심리사 1급"
/>
<Chip variant='outlined' sx={{
  color:consultantMoreChip,
  height:"20px"
}}
label="15년차 베테랑"
/>

          </div>
        </div>
        <div
          style={{
            backgroundColor: "#8A8A8A",
            height: "1px"
          }}
        />
        <div

          style={{
            backgroundColor: "#FCF0F0",
            display: "flex",
            // backgroundColor:"red",
            height: "75px"
          }}
        >

          <Button onClick={()=>{

            
          }}
            sx={{
              width: "98px",
              fontSize: "10px",
              textAlign: "center",
              color: "#686767",
              backgroundColor: "white"
            }}
          >

            리뷰 &<br />상담사 정보</Button>
          <div
            style={{
              width: "1px",
              backgroundColor: "#8A8A8A"
            }}
          ></div>

          <Button
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              fontSize: "10px",
              textAlign: "center",
              color: "#686767",

            }}
            onClick={()=>{}}>
            <Typography
              sx={{
                fontSize: "12px",
                color: "#444444",
                fontWeight: "bold"
              }}
            >상담예약을 신청합니다.</Typography>
            <Typography
              sx={{
                fontSize: "9px",
                color: "#444444",
                // fontWeight:"bold"
              }}
            >무료 상담쿠폰은 Number 창</Typography>
          </Button>
        </div>
      </Dialog>
    </React.Fragment>
  );
}