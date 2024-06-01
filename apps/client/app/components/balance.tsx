import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { Architecture, AcUnit } from '@mui/icons-material'

type WithAmount<T = {}> = T & {
  amount?: number
}

type BalanceProps = React.PropsWithChildren<
  WithAmount<{
    icon: React.ReactNode
    textColor?: string
  }>
>

const BalanceContainer = styled(Box)({
  textAlign: 'center',
})

const BalanceRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const BalanceAmount = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}))

export const Balance = ({ children, amount = 0, textColor, icon }: BalanceProps) => {
  return (
    <BalanceContainer>
      <BalanceRow>
        {icon}
        {children}
      </BalanceRow>
      <BalanceAmount variant="h2" gutterBottom color={textColor || 'textPrimary'}>
        {amount}
      </BalanceAmount>
    </BalanceContainer>
  )
}

export const TonBalance = ({ amount }: Required<WithAmount>) => {
  return (
    <Balance amount={amount} icon={<Architecture />}>
      <Typography color="textSecondary" gutterBottom={false}>
        Ton Balance
      </Typography>
    </Balance>
  )
}

export const TonInDeals = ({ amount }: Required<WithAmount>) => {
  return (
    <Balance amount={amount} textColor="primary" icon={<AcUnit />}>
      <Typography color="textSecondary" gutterBottom={false}>
        Ton In Deals
      </Typography>
    </Balance>
  )
}
