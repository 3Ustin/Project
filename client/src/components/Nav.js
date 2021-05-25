import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Nav = (props) => {
    const [test, setTest] = useState([]);




    return(
        <div>
            <div className = 'navBarBackground'>
            <div className='navBarBackHeavy'>
                <div className='navBarBackLight'/>
            </div>
            </div>
            <div className='divImageHolder'>
                <div className='buldingImageHolder'/>
                <div className='buldingImageHolderInner'/>
                <div className='resourceImageHolder'/>
                <div className='resourceImageHolderInner'/>
            </div>
        </div>
    );
}
export default Nav