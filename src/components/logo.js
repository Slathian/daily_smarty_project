import React from 'react';

import SmartyLogo from '../images/ds_circle_logo.png';

const Logo = (props) => {
    return (
        <div className='logo-main'>
            <img src={SmartyLogo} alt='Page Logo' style={{height: props.height}}/>            
        </div>
    )
};
export default Logo;