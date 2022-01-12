import { useLoaderData, Link } from 'remix';

// import { styled } from '~/stitches.config';
import * as postSplitbee from './analytics-tool-splitbee.mdx';
import * as postStitches from './css-in-js-stitches.mdx';
import * as postNaming from './naming-conventions.mdx';
import * as postI18next from './react-i18next.mdx';

import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix';

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
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com'
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'true'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;500&family=Overpass:ital,wght@0,300;0,400;0,600;0,800;1,400;1,700;1,800&display=swap'
  }
];

type mdxData = {
  filename: string,
  // demos: Array<{ name: string, to: string }>
  attributes: {
    meta: {
      title: string,
      description: string,
    },
    published: boolean,
    dateModified: string
  }
}

type postData = {
  title: string,
  slug: string,
  description: string,
  published: boolean,
  dateModified: string
}


function postFromModule({ filename, attributes }: mdxData) {
  return {
    title: attributes.meta.title,
    slug: filename.replace(/\.mdx?$/, ""),
    description: attributes.meta.description,
    published: attributes.published,
    dateModified: attributes.dateModified
  };
}

export const loader: LoaderFunction = () =>
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
[
  postFromModule(postNaming),
  postFromModule(postSplitbee),
  postFromModule(postStitches),
  postFromModule(postI18next)
];



// https://remix.run/guides/routing#index-routes
export default function Index() {
  const posts = useLoaderData();

  return (
      <ul>
      {posts.map(({ title, slug, description, published, dateModified }: postData) => (
        published &&
          <li key={slug}>
            <Link to={slug}>
              <h2>{title}</h2>
              {dateModified}
              <p>{description}</p>,
            </Link>
          </li>
      ))}
    </ul>
  )
}
