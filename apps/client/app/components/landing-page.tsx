import React from 'react'
import { Avatar, Box, Button, Typography, Container, styled } from '@mui/material'
import { VerifiedOutlined } from '@mui/icons-material'
import { Section, TonBalance, TonInDeals } from '../components'
import { Search as SearchIcon } from '@mui/icons-material'
import { Add as AddIcon } from '@mui/icons-material'
import { Link } from '@remix-run/react'

type LandingPageProps = Partial<{
  campaigns: any // Adjust the type based on your actual data
  channels: any // Adjust the type based on your actual data
}>

const Row = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

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
export const LandingPage: React.FC<LandingPageProps> = ({ campaigns, channels }) => {
  return (
    <StyledContainer>
      <Header>
        <UserInfo>
          <Avatar src="" alt="User name" />
          <Typography>User name</Typography>
          <VerifiedOutlined />
        </UserInfo>
        <Button variant="contained">Connect Wallet</Button>
      </Header>

      <Balances>
        <TonBalance amount={1400} />
        <TonInDeals amount={600} />
      </Balances>

      <Row>
        <Button
          component={Link}
          to="/channels"
          startIcon={<SearchIcon />}
          variant="outlined"
          color="inherit"
        >
          All channels
        </Button>
        <Button
          component={Link}
          to="/new-campaign"
          startIcon={<AddIcon />}
          variant="contained"
          color="primary"
        >
          New campaign
        </Button>
      </Row>

      <Section label="statistics">
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
