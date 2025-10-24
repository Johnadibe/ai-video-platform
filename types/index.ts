export interface NavItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

