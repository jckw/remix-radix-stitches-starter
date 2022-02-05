import { styled } from '~/stitches.config';

export const Container = styled('div', {
  variants: {
    responsive: {
      mobile: {
        paddingX: '$16',
        paddingTop: '$12'
      },
      tablet: {
        paddingTop: '24px',
        paddingX: '$0'
      }
    },
    area: {
      header: {
        gridArea: 'header',
        position: 'sticky',
        top: 0,
        backgroundColor: 'hsla($shade10, 0.8)',
        backdropFilter: 'blur(4px)'
      },
      main: {
        gridArea: 'main',
        minWidth: 0,
        paddingBottom: ''
      },
      footer: {
        gridArea: 'footer',
        backgroundColor: 'hsl($shade20)'
      }
    },
    header: {
      desktop: {
        margin: '0 -$16'
      }
    },
    footer: {
      desktop: {
        display: 'grid',
        alignContent: 'space-between',
        paddingTop: '144px'
      }
    },
    floor: {
      ground: {
        paddingBottom: 'calc(32px + env(safe-area-inset-bottom))'
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
