import React from 'react'
import { Avatar, Box, Button, Typography, Container, styled } from '@mui/material'
import { VerifiedOutlined } from '@mui/icons-material'
import { Section, TonBalance, TonInDeals } from '../components'

type LandingPageProps = Partial<{
  campaigns: any // Adjust the type based on your actual data
  channels: any // Adjust the type based on your actual data
}>

const StyledContainer = styled(Container)({
  paddingTop: 20,
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
})

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
})

const Balances = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
})

const UserInfo = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
})

const ConnectButton = styled(Button)({
  borderRadius: 40,
  fontSize: 8,
})

export const LandingPage: React.FC<LandingPageProps> = ({ campaigns, channels }) => {
  return (
    <StyledContainer>
      <Header>
        <UserInfo>
          <Avatar src="/logo.png" alt="User name" />
          <Typography>User name</Typography>
          <VerifiedOutlined />
        </UserInfo>
        <ConnectButton variant="contained">Connect Wallet</ConnectButton>
      </Header>

      <Balances>
        <TonBalance amount={1400} />
        <TonInDeals amount={600} />
      </Balances>

      <Section label="statistics">
        {/* Replace with actual Statistics component */}
        <Typography>Statistics Component</Typography>
      </Section>

      <Section href="/campaigns" label="active campaigns">
        {campaigns ? <Typography>{JSON.stringify(campaigns)}</Typography> : 'Loading...'}
      </Section>

      <Section href="/channels" label="my channels">
        {channels ? <Typography>{JSON.stringify(channels)}</Typography> : 'Loading...'}
      </Section>
    </StyledContainer>
  )
}
