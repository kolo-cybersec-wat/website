import {
  ITA_SITE_URL,
  LINKEDIN_PAGE_SLUG,
  MS_TEAMS_INVITE_URL,
  WAT_SITE_URL,
  WCY_SITE_URL,
} from "./consts";
import { LinkItem, SocialLinkItem } from "../types";
import { createLinkedInCompanyProfileUrl } from "../lib/linkUtils";
import type { Props as FooterSectionProps } from "../components/FooterSection";

export const OPEN_IN_NEW_TAB_PROPS: Partial<astroHTML.JSX.AnchorHTMLAttributes> =
  {
    rel: "noreferrer noopedner",
    target: "_blank",
  } as const;

export const LINKS = {
  LANDING: "/",
  POSTS: "/posts",
  TEAM: "/team",
  CYBER_CHASE: "cyber-chase",
  CALENDAR: "/calendar",
} as const;
export const createLinkTargetProps = (openInNewTab?: boolean) =>
  openInNewTab ? OPEN_IN_NEW_TAB_PROPS : {};

export const navbarLinkItems: LinkItem[] = [
  {
    href: "/",
    label: "O Kole",
  },
  {
    href: "/posts",
    label: "Aktualności",
  },
  {
    href: "/team",
    label: "Członkowie",
  },
  // see _cyber-chase.astro file
  // {
  //     href: '/cyber-chase',
  //     label: 'Cyber chase'
  // },
  {
    href: "/calendar",
    label: "Terminarz",
  },
];

export const footerSocialLinkItems: SocialLinkItem[] = [
  {
    label: LINKEDIN_PAGE_SLUG,
    href: createLinkedInCompanyProfileUrl(LINKEDIN_PAGE_SLUG),
    iconName: "ps:linkedin",
  },
];

export const footerSections: FooterSectionProps[] = [
  {
    sectionTitle: "Linki",
    linkItems: [
      {
        href: "#",
        label: "Wakacyjny Hacking",
        openInNewTab: true,
      },
      {
        href: MS_TEAMS_INVITE_URL,
        label: "Zespół na platormie MS Teams",
        openInNewTab: true,
      },
    ],
  },
  {
    sectionTitle: "Uczelnia",
    linkItems: [
      {
        href: WAT_SITE_URL,
        label: "WAT",
        openInNewTab: true,
      },
      {
        href: WCY_SITE_URL,
        label: "Wydział Cybernetyki",
        openInNewTab: true,
      },
      {
        href: ITA_SITE_URL,
        label: "Instytut Teleinformatyki i Cyberbezpieczeństwa",
        openInNewTab: true,
      },
    ],
  },
];
