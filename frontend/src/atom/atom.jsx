import { atom } from "recoil";

export const messageListAtom=atom({
    key:"messageList",
    default:[<div>요새 우울하고 외로워.<br/>뛰어난 상담사를 추천해 주실 수 있나요?</div>]
})