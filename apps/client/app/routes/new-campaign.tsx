import React from 'react'
import { useSubmit } from '@remix-run/react'
import { LoaderFunction } from '@remix-run/node'
import { CampaignForm, FormValues, LoaderData } from '@ui/components/campaign-form'
import { useLoaderData } from '@ui/hooks'

export const loader: LoaderFunction = async ({ params }) => {
  const campaignId = params.campaignId
  let initialValues: FormValues = {
    name: '',
    budget: 0,
    image: null,
    category: '',
    thematics: '',
    toneOfVoice: '',
    description: '',
    adsText: '',
  }
  if (campaignId) {
    const response = await fetch(`/api/campaigns/${campaignId}`)
    const data = await response.json()
    initialValues = {
      name: data.name,
      budget: data.budget,
      image: null, // handle image if needed
      category: data.category,
      thematics: data.thematics,
      toneOfVoice: data.toneOfVoice,
      description: data.description,
      adsText: data.adsText,
    }
  }
  return { initialValues, isEditing: !!campaignId }
}

export default function Campaign() {
  const { initialValues, isEditing } = useLoaderData<LoaderData>()
  const submit = useSubmit()

  const handleSubmit = (values: FormValues) => {
    const formData = new FormData()
    Object.keys(values).forEach((key) => {
      const value = values[key as keyof FormValues]
      if (value !== null) {
        if (typeof value === 'number') {
          formData.append(key, value.toString())
        } else if (value instanceof File) {
          formData.append(key, value)
        } else {
          formData.append(key, value as string)
        }
      }
    })
    submit(formData, { method: isEditing ? 'put' : 'post', action: '/api/campaigns' })
  }

  return (
    <CampaignForm initialValues={initialValues} onSubmit={handleSubmit} isEditing={isEditing} />
  )
}
