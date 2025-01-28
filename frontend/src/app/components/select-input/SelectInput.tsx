import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import classes from './select-input.module.css'

const SelectInput: React.FC<{
    value: string,
    handleOnChange: (event: SelectChangeEvent) => void,
    options: string[] | null,
    label: string
    nullOptionLabel: string,
}> = (props) => {
    const {value, options, label, nullOptionLabel, handleOnChange} = props
    return (
        <FormControl className={classes.formControl}>
            <InputLabel className={classes.input}>{label}</InputLabel>
            <Select
                size="medium"
                className={classes.whiteBackground}
                labelId="demo"
                id="demo"
                value={value}
                label={label}
                onChange={handleOnChange}
            >
                <MenuItem key='none-type-menu-item' value=''>{nullOptionLabel}</MenuItem>
                {options?.map((option, index) => (<MenuItem key={index} value={option}>{option}</MenuItem>))}
            </Select>
        </FormControl>
    );
}

export default SelectInput;