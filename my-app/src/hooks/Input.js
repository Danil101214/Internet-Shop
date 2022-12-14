import React, { useState } from 'react'

const useInput = (initialState = '') => {
    const [value, setValue] = useState(initialState)
    const onChange = (event) => {
        setValue(event.target.value)
        console.log(value)
    }
    return {
        value,
        onChange
    }
}

export default useInput