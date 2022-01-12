import { styled } from '~/stitches.config';

export const Container = styled('div', {
  variants: {
    responsive: {
      mobile: {
        paddingX: '$16',
        paddingTop: '$12'
      },
      tablet: {
        paddingTop: '24px'
      },
      desktop: {
        paddingX: '$0'
      }
    },
    area: {
      header: {
        gridArea: 'header'
      },
      main: {
        gridArea: 'main'
      },
      footer: {
        gridArea: 'footer'
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
