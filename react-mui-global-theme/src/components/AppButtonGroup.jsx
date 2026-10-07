import MuiButton from '@mui/material/Button'
import MuiButtonGroup from '@mui/material/ButtonGroup'
import { styled } from '@mui/material/styles'

const StyledButton = styled(MuiButton)(({ theme }) => ({
    borderRadius: 20,
    padding: theme.spacing(1, 3),
    color: theme.palette.getContrastText(theme.palette.primary.light),
    backgroundColor: theme.palette.primary.light
}))

const AppButtonGroup = () => {

    return (
        <>
            <MuiButtonGroup>
                <StyledButton>Option 1</StyledButton>
                <StyledButton>Option 2</StyledButton>
                <StyledButton>Option 3</StyledButton>
            </MuiButtonGroup>
        </>
    )
}

export default AppButtonGroup