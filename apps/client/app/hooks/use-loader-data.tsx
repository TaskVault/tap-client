import { useLoaderData as useLoaderDataOriginal } from '@remix-run/react'

interface UseLoaderDataHook {
  <T>(): T
}

export const useLoaderData: UseLoaderDataHook = () => {
  const useLoaderDataRef = useLoaderDataOriginal as UseLoaderDataHook
  return useLoaderDataRef()
}
