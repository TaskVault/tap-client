import React from 'react'
// we can use that if we wanna reset some default styles
// import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './utils'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import { ThemeProvider } from '@mui/material'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body
        style={{
          padding: 0,
          margin: '0 auto',
          height: '100vh',
          width: '100%',
          maxWidth: 400,
        }}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* outlets render the nested child routes
          that match the URL deeper than this route,
          allowing each layout to co-locate the UI and
          controller code in the same file */}
      <Outlet />
    </ThemeProvider>
  )
}
