import React from 'react'
import { useParams } from 'react-router-dom'

const ListDetail = () => {
    const { id } = useParams()
    return <div>ListDetail {id}</div>
}

export default ListDetail
