import Icon from '@mdi/react';

import {
  gitHubOutline,
  linkedInOutline,
  twitterOutline,
  mdiInstagram,
  polywork,
} from '@/components/icons';

import { BackToTopLink } from './back-to-top';
import {
  SocialLinksContainer,
  SocialLinkItem,
  GitHubLink,
  LinkedInLink,
  TwitterLink,
  InstagramLink,
  PolyworkLink,
} from './social-links.styles';

interface SocialLinksProps {
  withBackToTop?: boolean;
}

const iconSize = 0.9;
export const SocialLinks = (props: SocialLinksProps) => {
  const { withBackToTop } = props;
  return (
    <SocialLinksContainer aria-label={'Social links'}>
      <SocialLinkItem>
        <GitHubLink title={'GitHub'} href={'https://github.com/jahirfiquitiva'}>
          <Icon path={gitHubOutline} size={iconSize} />
        </GitHubLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <LinkedInLink
          title={'LinkedIn'}
          href={'https://linkedin.com/in/jahirfiquitiva'}
        >
          <Icon path={linkedInOutline} size={iconSize} />
        </LinkedInLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <TwitterLink
          title={'Twitter'}
          href={'https://twitter.com/jahirfiquitiva'}
        >
          <Icon path={twitterOutline} size={iconSize} />
        </TwitterLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <InstagramLink
          title={'Instagram'}
          href={'https://instagram.com/jahirfiquitiva'}
        >
          <Icon path={mdiInstagram} size={iconSize} />
        </InstagramLink>
      </SocialLinkItem>
      <SocialLinkItem>
        <PolyworkLink
          title={'Polywork Timeline'}
          href={'https://timeline.jahir.dev'}
        >
          <Icon path={polywork} size={iconSize} />
        </PolyworkLink>
      </SocialLinkItem>
      {Boolean(withBackToTop) && <BackToTopLink />}
    </SocialLinksContainer>
  );
};