import React from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix';

import Footer from '~/components/Footer';
import Header from '~/components/Header';
import { styled } from '~/stitches.config';
import globalStyles from '~/utils/globalStyles';
import { Container } from '~/utils/layout';

const DocumentBody = styled('body', {
  display: 'grid',
  minHeight: '100vh',

  variants: {
    responsive: {
      mobile: {
        grid: `"header" auto
               "main" 1fr
               "footer" auto / 1fr`
      },
      desktop: {
        grid: `"header footer" auto
               "main footer" 1fr / 704px 320px`,
        justifyContent: 'center'
      }
    }
  }
});

function Document({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  globalStyles();

  return (
    <html lang="zh-Hant-TW">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <DocumentBody responsive={{ '@initial': 'mobile', '@m992': 'desktop' }}>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </DocumentBody>
    </html>
  )
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container as="main" responsive={{ '@initial': 'mobile', '@m768': 'tablet', '@m1200': 'desktop' }} area="main">
        {children}
      </Container>
      <Footer />
    </>
  )
}

// https://remix.run/api/conventions#default-export
// https://remix.run/api/conventions#route-filenames
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error)
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  )
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const caught = useCatch()

  let message
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      )
      break
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      )
      break

    default:
      throw new Error(caught.data || caught.statusText)
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  )
}
