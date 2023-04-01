import React from 'react'
import { CircularProgress } from '@chakra-ui/react'

const Loading = () => {
    return (
        <div>
            <CircularProgress value={30} size='120px' />
        </div>
    )
}

export default Loading