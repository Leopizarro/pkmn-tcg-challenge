'use client'
 
import { Grid2, Typography } from '@mui/material'
import { useEffect } from 'react'
 
export default function Error({
  error,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <Grid2
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <Grid2 size={8}>
        <Typography 
          align='center' 
          variant='h3'
        >
          ¡Ha ocurrido un error inesperado!
        </Typography>
      </Grid2>
    </Grid2>
  )
}