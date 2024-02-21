import React from 'react';

function UserChatBox({msg}) {
    return (
        <div className='box user'>
            {msg}
        </div>
    );
}

export default UserChatBox;