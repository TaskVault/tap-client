import React from 'react'
import { Box, IconButton, styled, Typography } from '@mui/material'
import { ChevronLeft, MoreVert } from '@mui/icons-material'
import { useNavigate } from '@remix-run/react'

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
}))

type PageHeaderProps = {
  title?: string
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <IconButton onClick={() => navigate(-1)}>
        <ChevronLeft />
      </IconButton>
      {title && <Typography variant="h6">{title}</Typography>}
      <IconButton>
        <MoreVert />
      </IconButton>
    </HeaderContainer>
  )
}
