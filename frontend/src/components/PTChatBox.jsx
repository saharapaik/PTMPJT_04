import React from 'react';
import Profile from "./Profile"
import RecommendationBox from './RecommendationBox';
function PTChatBox({isRecommendation}) {
    //추천 하는 상태인지 받아서 추천 상담사  가져오기
    return (
        <div className='ChatBox'>
            <Profile />
            <div className='box chatbot'>
                안녕하세요 userName님,<br/>
            오늘 비가 오고 있지 않나요?<br/>
            userName님 마음은 어떠세요?
            <RecommendationBox/>
            <RecommendationBox/>
            <RecommendationBox/>

            </div>
        </div>
    );
}

export default PTChatBox;