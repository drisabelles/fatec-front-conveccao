import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'

export const RangeSlider = () => {
  const [value, setValue] = useState<number[]>([20, 37])

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[])
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'slider'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </Box>
  )
}
