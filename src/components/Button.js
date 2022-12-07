import React from 'react'
import { Button } from '@mui/material'

let FormButton = ( {buttonText} ) => {
    return (
        <Button variant="contained" size='large' > {buttonText} </Button>
    )
}

export default FormButton