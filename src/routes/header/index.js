import * as React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

// TODO: Remove hardcoded styles
export default function Header(props) {
    const { titleResourceKey = '',sx={} } = props
    return (
        <Stack spacing={1}>
            <Box sx={{ 
                        width: '100%', 
                        height: '4rem',
                        backgroundColor: '#F44545', 
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '2rem',
                        lineHeight: '3.5rem',
                        textTransform: 'uppercase',
                        color: '#FFFFFF',
                        paddingLeft: '1.2rem',
                            ...sx
                    }}>
                 {titleResourceKey}  
            </Box>
        </Stack>
    )
} 