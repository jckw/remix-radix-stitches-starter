import {
  Link
} from 'remix';

import { styled } from '~/stitches.config';
import { Container, ListItem } from '~/utils/layout';

const Section = styled('section', {
  fontFamily: '$default',

  variants: {
    responsive: {
      tablet: {
        marginX: '$16'
      }
    }
  }
});

const LinkList = styled('ul', {
  display: 'grid',
  grid: 'auto / repeat(auto-fill, minmax(120px, 1fr))',
  justifyContent: 'center',
  justifyItems: 'center',
  margin: '0 0 $24',
  padding: 0,

  variants: {
    responsive: {
      desktop: {
        grid: 'none',
        justifyContent: 'normal',
        justifyItems: 'normal',
        rowGap: '$16'
      }
    }
  }
});

const FooterLink = styled(Link, {
  display: 'inline-block',
  padding: '$8 0 $16',
  color: 'hsl($shade150)',
  fontSize: '$16',
  lineHeight: '16px',
  textDecoration: 'none'
});

const Intersection = styled('figure', {
  display: 'grid',
  grid: '24px / 24px max-content',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '$8',
  margin: '0 0 $16',
  padding: 0
});

const IntersectionLogo = styled('img', {
  size: '$24',
  borderRadius: '4px'
});

const IntersectionName = styled('figcaption', {
  paddingTop: '$2',
  color: 'hsl($shade150)',
  fontSize: '$14',
  fontWeight: 700,
  fontStyle: 'italic',
  letterSpacing: '6px',
  lineHeight: '16px',
  textTransform: 'uppercase'
});

const Message = styled('p', {
  margin: 0,
  color: 'hsl($shade130)',
  fontSize: '$14',
  lineHeight: '20px'
});

export default function Footer() {

  return(
    <Container as="footer" responsive={{ '@initial': 'mobile', '@m768': 'tablet' }} area="footer" footer={{ '@m992': 'desktop' }} floor="ground">
      <Section as="nav" responsive={{ '@m768': 'tablet' }}>
        <LinkList responsive={{ '@m992': 'desktop' }}>
          <ListItem nomark>
            <FooterLink to="/translations" prefetch="intent">
              技術文件翻譯
            </FooterLink>
          </ListItem>
          <ListItem nomark>
            <FooterLink to="https://intersection.tw">
              設計文章翻譯
            </FooterLink>
          </ListItem>
        </LinkList>
      </Section>
      <Section responsive={{ '@m768': 'tablet' }}>
        <Intersection>
          <IntersectionLogo src="/intersection.svg" alt="" />
          <IntersectionName>Intersection</IntersectionName>
        </Intersection>
        <Message>
          優化、插件、反饋、交互設計、高清、視頻：已經看膩這些中國用語。
        </Message>
      </Section>
    </Container>
  )
}
