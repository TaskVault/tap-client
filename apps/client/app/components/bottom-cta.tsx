import React from 'react'
import { Button, styled } from '@mui/material'

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  width: '90%',
  maxWidth: '400px',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}))

type MainButtonProps = {
  isEditing: boolean
  onClick: () => void
}

export const BottomCta: React.FC<MainButtonProps> = ({ isEditing, onClick }) => {
  return (
    <StyledButton key="q" variant="contained" onClick={onClick}>
      {isEditing ? 'Catch best offers' : 'Create the campaign'}
    </StyledButton>
  )
}

export const PaddedForBottomCta = styled('div')(({ theme }) => ({
  paddingBottom: theme.spacing(10),
}))
