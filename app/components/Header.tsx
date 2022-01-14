import {
  Link
} from 'remix';

import LogoDark from '~/elements/LogoDark';
import { styled } from '~/stitches.config';
import { Container } from '~/utils/layout';

const LogoLink = styled(Link, {
  display: 'inline-block'
});

export default function Header() {
  return(
    <Container as="header" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} area="header" header={{ '@m992': 'desktop' }}>
      <LogoLink to="/">
        <LogoDark />
      </LogoLink>
    </Container>
  )
}
