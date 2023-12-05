export const LINKEDIN_PAGE_SLUG = "kolo-cybersec-wat";
export const CONTACT_EMAIL = "zarzad@kolocybersecurity.pl";

export const MS_TEAMS_INVITE_URL = "https://teams.microsoft.com/l/team/19%3aaKiBXoSzlVzqW6dzC5718PoKLHxpvCAHHsHGygDkVYg1%40thread.tacv2/conversations?groupId=0add284c-5879-478a-952b-ee91cf9803b6&tenantId=e66af1e9-d714-4a1f-8101-22a504f9622f";

export const WAT_SITE_URL = "https://wat.edu.pl";
export const WCY_SITE_URL = "https://wcy.wat.edu.pl";
export const ITA_SITE_URL = "https://www.ita.wat.edu.pl/";

const getShortCommitHash = (): string => {
  // https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables
  if (!import.meta.env.CF_PAGES) return "";
  return `${import.meta.env.CF_PAGES_COMMIT_SHA}`.slice(0, 7);
};

export const GIT_SHA = getShortCommitHash();
