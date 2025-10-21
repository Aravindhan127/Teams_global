import { Box, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'

const PageHeader = props => {
  // ** Props
  const { title, subtitle, action } = props

  return (
    <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        {typeof title === 'string' ? (
          <Typography
            variant='h5'
            sx={{
              color: '#1976d2', // Common blue color like button color
              fontWeight: 'bold', // Bold font weight
              fontSize: '1.5rem'
            }}
          >
            {title}
          </Typography>
        ) : (
          title
        )}
        {subtitle || null}
      </Box>
      {!!action && <Box>{action}</Box>}
    </Grid>
  )
}

export default PageHeader
