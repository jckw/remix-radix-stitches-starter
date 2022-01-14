import { useLoaderData, Link } from 'remix';

// import { styled } from '~/stitches.config';
import * as postSplitbee from './analytics-tool-splitbee.mdx';
import * as postStitches from './css-in-js-stitches.mdx';
import * as postNaming from './naming-conventions.mdx';
import * as postI18next from './react-i18next.mdx';

import type { MetaFunction, LoaderFunction } from 'remix';

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => ({
  title: '喜歡的 UI 就要親手做出來',
  description: 'Welcome to remix!',
})

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
