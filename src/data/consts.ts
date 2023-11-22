export const LINKEDIN_PAGE_SLUG = "kolo-cybersec-wat";
export const CONTACT_EMAIL = "zarzad@kolocybersecurity.pl";

export const MS_TEAMS_INVITE_URL = "";

export const WAT_SITE_URL = "https://wat.edu.pl";
export const WCY_SITE_URL = "https://wcy.wat.edu.pl";
export const ITA_SITE_URL = "https://www.ita.wat.edu.pl/";

const getShortCommitHash = (): string => {
  // https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables
  if (!import.meta.env.CF_PAGES) return "";
  return `${import.meta.env.CF_PAGES_COMMIT_SHA}`.slice(0, 7);
};

export const GIT_SHA = getShortCommitHash();
