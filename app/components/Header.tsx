import {
  Link
} from 'remix';

import LogoDark from '~/elements/LogoDark';
// import { styled } from '~/stitches.config';
import { Container } from '~/utils/layout';

export default function Header() {
  return(
    <Container as="header" responsive={{ '@initial': 'mobile', '@m768': 'tablet', '@m1200': 'desktop' }} area="header">
      <Link to="/">
        <LogoDark />
      </Link>
    </Container>
  )
}
