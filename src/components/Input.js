import  TextField  from '@mui/material/TextField'

let Input = ({lable, userFound}) => {
    // console.log(userFound, 'userFound')

    return (
        <TextField fullWidth helperText={userFound ? 'User not found' : ''}  id="outlined-basic" label={lable} variant="outlined" className='container-item'/>
    )
}

export default Input