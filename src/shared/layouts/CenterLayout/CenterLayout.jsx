import React from 'react'

import "./CentralLayout.css"

const CenterLayout = ({children}) => {
    return (
        <div className="center-layout-wrapper-block">
            <div className='central-layout-center'>
                {children}
            </div>
        </div>
    )
}

export default CenterLayout;