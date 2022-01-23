import { useLoaderData, Link } from 'remix';

import * as postSplitbee from './analytics-tool-splitbee.mdx';
import * as postStitches from './css-in-js-stitches.mdx';
import * as postNaming from './naming-conventions.mdx';
import * as postI18next from './react-i18next.mdx';

import type { MetaFunction, LoaderFunction, LinksFunction } from 'remix';
import { ArticleHeading, ArticleDescription } from '~/components/article';
import { styled } from '~/stitches.config';
import * as CONSTANT from '~/utils/CONSTANTS';
import { ListItem } from '~/utils/layout';

// https://remix.run/api/conventions#meta
export const meta: MetaFunction = () => ({
  title: CONSTANT.SITENAME,
  description: CONSTANT.SITEDESCRIPTION,
  'og:title': CONSTANT.SITENAME,
  'og:description': CONSTANT.SITEDESCRIPTION,
  'og:url': 'https://build.intersection.tw',
  'og:image': 'https://build.intersection.tw/og/home.jpg'
})

export const links: LinksFunction = () => [
  {
    rel: 'canonical',
    href: 'https://build.intersection.tw'
  }
];

type mdxData = {
  filename: string,
  attributes: {
    meta: {
      title: string,
      description: string,
    },
    published: boolean,
    sticker: string,
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
  postFromModule(postStitches),
  postFromModule(postSplitbee),
  postFromModule(postI18next)
];

const IndexList = styled('ul', {
  display: 'grid',
  rowGap: '48px',
  margin: 0,
  padding: 0
});

const IndexLink = styled(Link, {
  display: 'block',
  textDecoration: 'none'
});

const Sticker = styled('figure', {
  height: '40px',
  margin: '0 0 $8',
  padding: 0
});

const Timestamp = styled('time', {
  display: 'inline-block',
  marginBottom: '$16',
  color: 'hsl($shade100)',
  fontSize: '$14',
  lineHeight: '12px',

  variants: {
    responsive: {
      mobile: {
        marginLeft: '-$16'
      },
      tablet: {
        marginLeft: 0
      }
    }
  },

  '&::before': {
    display: 'inline-block',
    width: '$60',
    height: '$12',
    content: '',
    marginRight: '$8',
    backgroundColor: 'hsl($shade20)'
  }
});

const Action = styled('span', {
  display: 'block',
  width: '100px',
  marginLeft: 'auto',
  paddingRight: '$16',
  color: 'hsl($shade10)',
  fontSize: '1.6rem',
  fontWeight: 600,
  lineHeight: '40px',
  textAlign: 'right',
  backgroundColor: 'hsl($accent)',

  variants: {
    responsive: {
      mobile: {
        marginRight: '-$16'
      },
      tablet: {
        marginRight: 0
      }
    }
  },
});

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const posts = useLoaderData();

  return (
      <IndexList>
      {posts.map(({ title, slug, description, published, dateModified }: postData) => (
        published &&
          <ListItem nomark key={slug}>
            <IndexLink to={slug}>
              <Sticker>
                <img src={`/stickers/${slug}.svg`} alt="" />
              </Sticker>
              <ArticleHeading purpose="index">
                {title}
              </ArticleHeading>
              <Timestamp responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
                {dateModified}
              </Timestamp>
              <ArticleDescription>
                {description}
              </ArticleDescription>
              <Action responsive={{ '@initial': 'mobile', '@m768': 'tablet' }}>
                閱讀
              </Action>
            </IndexLink>
          </ListItem>
      ))}
    </IndexList>
  )
}
