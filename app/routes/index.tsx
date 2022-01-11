import { useLoaderData, json, Link } from 'remix';

import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix';
import { styled } from '~/stitches.config';

type IndexData = {
  resources: Array<{ name: string; url: string }>
  demos: Array<{ name: string; to: string }>
}

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader: LoaderFunction = () => {
  const data: IndexData = {
    resources: [
      {
        name: 'Remix Docs',
        url: 'https://remix.run/docs',
      },
      {
        name: 'React Router Docs',
        url: 'https://reactrouter.com/docs',
      },
      {
        name: 'Remix Discord',
        url: 'https://discord.gg/VBePs6d',
      },
    ],
    demos: [
      {
        to: 'demos/actions',
        name: 'Actions',
      },
      {
        to: 'demos/about',
        name: 'Nested Routes, CSS loading/unloading',
      },
      {
        to: 'demos/params',
        name: 'URL Params and Error Boundaries',
      },
    ],
  }

  // https://remix.run/api/remix#json
  return json(data)
}

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => ({
  title: '喜歡的 UI 就要親手做出來',
  description: 'Welcome to remix!',
})

export const links: LinksFunction = () => [
  {
    rel: 'apple-touch-icon',
    href: '/favicons/apple-touch-icon.png',
    sizes: '180x180'
  },
  {
    rel: 'icon',
    href: '/favicons/favicon-32x32.png',
    sizes: '32x32',
    type: 'image/png'
  },
  {
    rel: 'icon',
    href: '/favicons/favicon-16x16.png',
    sizes: '16x16',
    type: 'image/png'
  },
  {
    rel: 'manifest',
    href: '/favicons/site.webmanifest'
  },
  {
    rel: 'mask-icon',
    href: '/favicons/safari-pinned-tab.svg',
    color: '#5bbad5'
  },
  {
    rel: 'shortcut icon',
    href: '/favicons/favicon.ico',
    type: 'image/png'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&family=Overpass:ital,wght@0,300;0,400;0,600;0,800;1,400;1,700;1,800&display=swap'
  }
];

const Hero = styled('h2', {
  fontSize: '$24'
});

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const data = useLoaderData<IndexData>()

  return (
    <>
      <Hero>Welcome to Remix!</Hero>
      <p>We're stoked that you're here. 🥳</p>
      <p>
        Feel free to take a look around the code to see how Remix does things,
        it might be a bit different than what you’re used to. When you're
        ready to dive deeper, we've got plenty of resources to get you
        up-and-running quickly.
      </p>
      <p>
        Check out all the demos in this starter, and then just delete the{' '}
        <code>app/routes/demos</code> and <code>app/styles/demos</code>{' '}
        folders when you're ready to turn this into your next project.
      </p>
      <aside>
        <h2>Demos In This App</h2>
        <ul>
          {data.demos.map((demo) => (
            <li key={demo.to} className="remix__page__resource">
              <Link to={demo.to} prefetch="intent">
                {demo.name}
              </Link>
            </li>
          ))}
        </ul>
        <h2>Resources</h2>
        <ul>
          {data.resources.map((resource) => (
            <li key={resource.url} className="remix__page__resource">
              <a href={resource.url}>{resource.name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
