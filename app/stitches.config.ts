import { createStitches } from '@stitches/react';

import type * as Stitches from '@stitches/react';

export const { css, styled, globalCss, createTheme, keyframes, getCssText } = createStitches({
  theme: {
    colors: {
      shade150: '210,8%,95%',
      shade130: '210,8%,84%',
      shade20: '210,4%,16%',
      shade10: '210,4%,10%',

      accent: '162,57%,84%',
      decor: '50,50%,84%'
    },
    space: {
      auto: 'auto',
      0: '0',
      2: '2px',
      4: '4px',
      8: '8px',
      12: '12px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
    },
    sizes: {
      12: '12px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      36: '36px',
      48: '48px',
      52: '52px',
      60: '60px',
      80: '80px',
      96: '96px'
    },
    fontSizes: {
      14: '1.4rem',
      16: '1.6rem',
      18: '1.8rem',
      20: '2rem',
      24: '2.4rem',
      32: '3.2rem',
    },
    fonts: {
      default: '\'Overpass\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif',
      slab: '\'Crete Round\', serif',
      mono: '\'Inconsolata\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', monospace'
    }
  },
  media: {
    m768: '(min-width: 768px)',
    m992: '(min-width: 992px)',
    m1200: '(min-width: 1200px)',
    mHover: '(hover: hover) and (pointer: fine)',
    mReduced: '(prefers-reduced-motion)'
  },
  utils: {
    marginX: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    size: (value: Stitches.ScaleValue<'sizes'>) => ({
      width: value,
      height: value
    })
  }
});
