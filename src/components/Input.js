import  TextField  from '@mui/material/TextField'

const Input = ({lable, id, userFound, value, }) => {
    // console.log(userFound, 'userFound')

    return (
        <TextField
         fullWidth 
         id={id} 
         className='container-item'
         value={value}
         label={lable} 
         variant="outlined" 
         helperText={userFound ? 'User not found' : ''}  
         />
    )
}

export default Input