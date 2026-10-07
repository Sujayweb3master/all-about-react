import MuiButton from '@mui/material/Button'

const AppButtonsList = () => {
    return (
        <>

            <MuiButton variant='outlined' sx={{
                backgroundColor: '#ffff00'
            }} >Outline Button</MuiButton>
            <MuiButton variant='contained' sx={{
                color: '#000000',
                bgcolor: 'secondary.main'
            }}>Contained Button</MuiButton>
        </>
    )
}

export default AppButtonsList