import { styled } from '~/stitches.config';

export const Article = styled('article', {
  color: 'hsl($shade150)',
  fontSize: '$16',
  fontFamily: '$default',

  '& p': {
    margin: '0 0 $16'
  },

  '& img': {
    maxWidth: '100%'
  },

  '& pre': {
    margin: '0 0 $16',
    padding: '$16 0',
    overflowX: 'auto'
  }
});

export const ArticleHeading = styled('h2', {
  variants: {
    purpose: {
      index: {
        margin: '0 0 $12',
        color: 'hsl($shade150)',
        fontSize: '2.4rem',
        lineHeight: '32px'
      }
    }
  }
});

export const ArticleDescription = styled('p', {
  margin: '0 0 $16',
  color: 'hsl($shade130)',
  fontSize: '$16',
  lineHeight: '24px'
});
