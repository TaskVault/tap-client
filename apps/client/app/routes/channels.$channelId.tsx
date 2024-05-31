import { useParams, Link } from '@remix-run/react'
import { Button } from '@mui/material'

export default function Page() {
  let { channelId } = useParams<'channelId'>()
  return (
    <div>
      <h1>Campaign {channelId}</h1>
      <Button variant="contained" component={Link} to={`/search?campaign=${channelId}`}>
        Search Best Offers
      </Button>
    </div>
  )
}