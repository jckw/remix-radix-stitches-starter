import { styled } from '~/stitches.config';

export const Article = styled('article', {
  color: 'hsl($shade150)',
  fontSize: '$16',
  fontFamily: '$default',

  '& h1': {
    margin: '0 0 $24',
    fontSize: '3.2rem',
    lineHeight: '40px'
  },

  '& h2': {
    margin: '0 0 $8',
    paddingTop: '$16'
  },

  '& p': {
    margin: '0 0 $16'
  },

  '& a': {
    color: 'hsl($accent)'
  },

  '& ul': {
    display: 'grid',
    rowGap: '$8',
    margin: '0 0 $16',
    padding: '0 0 0 $16'
  },

  '& li': {
    listStyle: 'square'
  },

  '& img': {
    maxWidth: '100%',
    margin: '$8 0'
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

export const CodeInline = styled('code', {
  display: 'inline-block',
  padding: '0 $4',
  color: 'hsl($decor)',
  border: '1px solid hsl($shade20)',
  borderRadius: '4px'
});
