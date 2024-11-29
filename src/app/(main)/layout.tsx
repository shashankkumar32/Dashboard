import React from 'react'
import LayoutWrapperSideBar from '../global/wrapperSidebar'

type Props = {
    children:React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <LayoutWrapperSideBar>
        <div>layout

        {children}
    </div>
      </LayoutWrapperSideBar>
  )
}

export default layout