import React from 'react'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
const Single = () => {

    const {id} = useParams()
    const showPage = id>194?<NotFound/>:<>Single Page Number {id}</>
  return (
    <h1>
        {showPage}
    </h1>
  )
}

export default Single