export const OPEN_IN_NEW_TAB_PROPS: Partial<astroHTML.JSX.AnchorHTMLAttributes> =
	{
		rel: 'noreferrer noopedner',
		target: '_blank',
	} as const;

export const getPostPath = (postSlug: string) => `/posts/${postSlug}`;
export const createLinkTargetProps = (openInNewTab?: boolean) =>
	openInNewTab ? OPEN_IN_NEW_TAB_PROPS : {};

export const createLinkedInCompanyProfileUrl = (slug: string) =>
	`https://linkedin.com/company/${slug}`;
