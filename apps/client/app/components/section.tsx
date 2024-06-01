import React from 'react'
import { Box, Typography, Container, styled, Button } from '@mui/material'
import { ChevronRight } from '@mui/icons-material'
import { Link as RemixLink } from '@remix-run/react'

type WithLabel<T = {}> = T & {
  label?: string
}

type SectionProps = React.PropsWithChildren<
  WithLabel<{
    href?: string
  }>
>

const SectionTopBar = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})

const SectionWrapper = styled(Container)(({ theme }) => ({
  background: theme.palette.background.default,
  width: '100%',
  padding: 10,
  borderRadius: 20,
  marginTop: 10,
}))

const SeeAllIcon = styled(ChevronRight)({
  marginBottom: 2,
})

export const Section = ({ label = '', children, href }: SectionProps) => {
  const upperLabel = label.toUpperCase()

  return (
    <Box>
      <SectionTopBar>
        <Typography variant="overline" color="textSecondary">
          {upperLabel}
        </Typography>
        {href && (
          <Button component={RemixLink} to={href}>
            See all
            <SeeAllIcon />
          </Button>
        )}
      </SectionTopBar>
      <SectionWrapper>{children}</SectionWrapper>
    </Box>
  )
}
