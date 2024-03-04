import React from 'react';
import ProfileImg from"./ppp.jpg"
function CustomAvatar({size}) {
    return (
        <div
        src={ProfileImg}
style={{
    width:size,
    height:size,
    borderRadius:"50%",
    backgroundColor:"gray",
    overflow:"clip"
}}
><img src={ProfileImg}
style={{
    width:"90px"
}}
/></div>
    );
}

export default CustomAvatar;