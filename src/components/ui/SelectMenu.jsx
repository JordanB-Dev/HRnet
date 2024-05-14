import React from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'

const SelectMenu = ({ label, name, value, options, handleChange }) => {
  return (
    <div className="flex items-center justify-center mb-5">
      <FormControl fullWidth>
        <InputLabel id={label + 'Id'}>{label}</InputLabel>
        <Select
          labelId={label + 'Id'}
          name={name}
          label={label}
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectMenu
