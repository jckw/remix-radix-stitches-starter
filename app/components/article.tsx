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
