import { Button } from '@mui/material'
import { useParams, Link } from '@remix-run/react'

export default function Page() {
  let { campaignId } = useParams<'campaignId'>()
  return (
    <div>
      <h1>Campaign {campaignId}</h1>
      <Button variant="contained" component={Link} to={`/search?campaign=${campaignId}`}>
        Search Best Offers
      </Button>
    </div>
  )
}
