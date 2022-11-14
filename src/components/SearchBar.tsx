import React, { useState, useEffect } from 'react'
import InputBase from '@mui/material/InputBase'
import Divider from 'material-ui/Divider'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        width: 600,
        height: 'fit-content',
        marginTop: '10px'
      }}
    >
      <InputBase
        sx={{ ml: 1 }}
        placeholder="Search"
        inputProps={{ 'aria-label': 'search' }}
      />
      <Button disabled sx={{ marginLeft: '100px' }}>
        Clear
      </Button>
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
