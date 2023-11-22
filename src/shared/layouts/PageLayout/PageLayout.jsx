import React from 'react'

import NavBar from '../../../feauters/SearchTestPanel/components/NavBar/NavBar'

const PageLayout = ({children}) => {
    return (
        <>
        <NavBar />
        {children}
        </>
    )
}

export default PageLayout;