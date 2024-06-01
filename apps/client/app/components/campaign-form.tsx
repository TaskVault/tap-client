import React from 'react'
import { withFormik, FormikProps, Field } from 'formik'
import * as yup from 'yup'
import { PageHeader } from '@ui/components/page-header.js'
import { BottomCta, PaddedForBottomCta } from '@ui/components/bottom-cta.js'
import { Box, styled } from '@mui/material'
import { TextInput } from './text-input.js'
import { FileInput } from './file-input.js'
import { SelectInput } from './select-input.js'
import { Section } from './section.js'

export interface FormValues {
  name: string
  budget: number
  image: File | null
  category: string
  thematics: string
  toneOfVoice: string
  description: string
  adsText: string
}

export interface LoaderData {
  initialValues: FormValues
  isEditing: boolean
}

const CampaignFormContainer = styled(Box)(({ theme }) => ({
  padding: 0,
  margin: 0,
}))

const categories = ['Beauty', 'Gadgets', 'Fashion', 'Health']

const validationSchema = yup.object({
  name: yup.string().required('Campaign name is required'),
  budget: yup.number().min(0).required('Budget is required'),
  category: yup.string().required('Category is required'),
  thematics: yup.string(),
  toneOfVoice: yup.string(),
  description: yup.string(),
  adsText: yup.string(),
})

interface OtherProps {
  isEditing: boolean
  initialValues: FormValues
  onSubmit: (values: FormValues) => void
}

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
}))

const InnerForm: React.FC<FormikProps<FormValues> & OtherProps> = ({ handleSubmit, isEditing }) => {
  return (
    <PaddedForBottomCta>
      <CampaignFormContainer>
        <PageHeader title="AdsTG" />
        <Form onSubmit={handleSubmit}>
          <Section label="offer info">
            <Field name="name" label="Campaign name" component={TextInput} />
            <Field name="budget" label="Budget" type="number" component={TextInput} />
          </Section>

          <Section label="publiction settings">
            <Field
              name="image"
              label="Upload a picture for your campaign (optional)"
              component={FileInput}
            />
            <Field name="category" label="Category" options={categories} component={SelectInput} />
            <Field name="thematics" label="Campaign Subject" component={TextInput} />
            <Field name="toneOfVoice" label="Tone of Voice" component={TextInput} />
            <Field
              name="description"
              label="Description"
              multiline
              rows={4}
              component={TextInput}
            />
            <Field name="adsText" label="Ads Text" multiline rows={4} component={TextInput} />
          </Section>

          <BottomCta isEditing={isEditing} onClick={handleSubmit} />
        </Form>
      </CampaignFormContainer>
    </PaddedForBottomCta>
  )
}

export const CampaignForm = withFormik<OtherProps, FormValues>({
  mapPropsToValues: (props) => ({
    name: props.initialValues.name || '',
    budget: props.initialValues.budget || 0,
    image: props.initialValues.image || null,
    category: props.initialValues.category || '',
    thematics: props.initialValues.thematics || '',
    toneOfVoice: props.initialValues.toneOfVoice || '',
    description: props.initialValues.description || '',
    adsText: props.initialValues.adsText || '',
  }),
  validationSchema: validationSchema,
  handleSubmit: (values, { props }) => {
    props.onSubmit(values)
  },
})(InnerForm)
