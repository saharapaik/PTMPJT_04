import React from 'react';

function CustomAvatar({size}) {
    return (
        <div
style={{
    width:size,
    height:size,
    borderRadius:"50%",
    backgroundColor:"gray"
}}
/>
    );
}

export default CustomAvatar;