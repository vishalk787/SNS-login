import react from 'react'
import  TextField  from '@mui/material/TextField'

let Input = ({lable}) => {
    return (
        <TextField fullWidth id="outlined-basic" label={lable} variant="outlined" className='container-item'/>
    )
}

export default Input