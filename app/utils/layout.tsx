import { styled } from '~/stitches.config';

export const Container = styled('div', {
  marginX: '$auto',

  variants: {
    responsive: {
      mobile: {
        marginBottom: '24px',
        paddingX: '$16',
        paddingTop: '$12'
      },
      tablet: {
        maxWidth: '768px',
        paddingTop: '24px',
        paddingX: '$0'
      },
      desktop: {
        maxWidth: '1024px'
      }
    }
  }
});

export const ListItem = styled('li', {
  fontFamily: '$default',

  variants: {
    nomark: {
      true: {
        listStyleType: 'none'
      }
    },
    square: {
      true: {
        listStyleType: 'square'
      }
    }
  }
});
