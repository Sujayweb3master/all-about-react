import MuiFormControl from '@mui/material/FormControl'
import MuiInputLabel from '@mui/material/InputLabel'
import MuiMenuItem from '@mui/material/MenuItem'
import MuiSelect from '@mui/material/Select'

const AppSelect = ({ value, handleChange, size = 'small', ...props }) => {
    return (
        <MuiFormControl fullWidth size={size}>
            <MuiInputLabel id="demo-simple-select-label">Age</MuiInputLabel>
            <MuiSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                label="Age"

                onChange={handleChange}
            >
                <MuiMenuItem value={10}>Ten</MuiMenuItem>
                <MuiMenuItem value={20}>Twenty</MuiMenuItem>
                <MuiMenuItem value={30}>Thirty</MuiMenuItem>
            </MuiSelect>
        </MuiFormControl>
    )
}

export default AppSelect