import { getMDXComponent, getMDXExport } from 'mdx-bundler/client';
import { useMemo } from 'react';
import {
  type MetaFunction,
  type LinksFunction,
  type LoaderFunction,
  type RouteHandle,
  json,
  useLoaderData,
} from 'remix';

import { readFile } from '~/utils.server';
import {
  bundleMDX,
  getContentPath,
  getFilePath,
} from '~/utils/compile-mdx.server';
import { rootUrl, SITENAME, SITEDESCRIPTION, TWITTERHANDLE } from '~/utils/CONSTANTS';
import { NotFoundError } from '~/utils/error-responses';
import { Frontmatter } from '~/utils/mdx.server';

const isProd = process.env.NODE_ENV === 'production';

export const meta: MetaFunction = ({ data }) => {
  const {
    title: _title,
    description: _description,
    slug,
    cover,
    meta
  } = data?.frontmatter ?? {};

  const title = `${_title || 'Missing Title'} - ${SITENAME}`;
  const url = `${rootUrl}/${slug}`;
  const description = _description || SITEDESCRIPTION;
  const image = cover
    ? `${rootUrl}${cover}`
    : `${rootUrl}/ogimage/${slug}.jpg`;

  return {
    title,
    description,
    'og:url': url,
    'og:title': title,
    'og:description': description,
    ...(image && { 'og:image': image }),
    'og:site_name': SITENAME,
    'twitter:card': image ? 'summary_large_image' : 'summary',
    'twitter:creator': TWITTERHANDLE,
    'twitter:site': TWITTERHANDLE,
    'twitter:alt': title,
    ...(Array.isArray(meta) &&
      meta.reduce((prev, cur) => {
        prev[cur.name] = cur.content;
        return prev;
      }, {})),
  };
};

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: '/prism/dracula.css'
  }
];

type LoaderData = {
  frontmatter: Frontmatter;
  code: string;
  canonical: string;
};

export const handle: RouteHandle = {
  hydrate: ({ frontmatter }: LoaderData) => frontmatter?.hydrate
};

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug || "index";
  const filename = `${slug}.mdx`;
  const contentPath = getContentPath();
  const filePath = getFilePath(contentPath, filename);
  const source = await readFile(filePath, { encoding: "utf-8" });
  const bundleMdxPromise = bundleMDX({ cwd: contentPath, source }).catch(
    (e) => {
      console.error(e);
      console.error("error in $slug for", slug);
      throw NotFoundError();
    },
  );

  const [
    {
      frontmatter, // : { jsonld, ...frontmatter },
      code,
    }
  ] = await Promise.all([
    bundleMdxPromise
  ]);

  if (isProd && frontmatter.status !== "published") {
    throw NotFoundError();
  }

  // todo: wait for [kentcdodds/mdx-bundler#70](https://github.com/kentcdodds/mdx-bundler/issues/70)
  const { jsonld } = getMDXExport(code);

  const canonical =
    frontmatter.canonical ||
    `${rootUrl}/${frontmatter?.slug}`;

  return json({ frontmatter, code, jsonld, canonical });
};

export default function Post() {
  const { code } = useLoaderData<LoaderData>();
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <Component />
  );
}
