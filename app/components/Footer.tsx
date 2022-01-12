// import {
//   Link
// } from 'remix';

import { Container } from '~/utils/layout';

export default function Footer() {
  const year = new Date().getFullYear();

  return(
    <Container as="footer" responsive={{ '@initial': 'mobile', '@m768': 'tablet', '@m1200': 'desktop' }} area="footer">
      {year}
    </Container>
  )
}
