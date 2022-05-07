import * as useragent from 'express-useragent';
import * as semver from 'semver';

const browserMinVersions: Record<string, string> = {
  Chrome: '81.0.4044',
  Safari: '13.0.0',
  Edge: '83.0.478',
  Edg: '83.0.478'
};
const supportedBrowserList = Object.keys(browserMinVersions);
const inAppUserAgentKeywordList = [
  'Daum',
  'NAVER',
  'Whale',
  'Firefox',
  'Edg',
  'OPR',
  'KAKAO',
  'FB',
  'Line'
];

type ParseUserAgentReturnValue = {
  isMobile: boolean;
  isSupportedBrowser: boolean;
  isSupportedVersion: boolean;
};
export const parseUserAgent = (reqUserAgent: string): ParseUserAgentReturnValue => {
  const {
    isMobile: _isMobile,
    isTablet,
    isChrome,
    isSafari,
    isSamsung,
    browser,
    version
  } = useragent.parse(reqUserAgent);

  // @note: pad에선 pc web을 노출시키도록 변경
  const isMobile = _isMobile && !isTablet;

  const browserMinVersion = browserMinVersions[browser];
  const userBrowserVersion = semver.coerce(version)?.version;

  const isInAppBrowser = inAppUserAgentKeywordList.some((keyword) =>
    reqUserAgent.includes(keyword)
  );
  const isSupportedBrowser = isMobile
    ? (isChrome || isSafari || isSamsung) && !isInAppBrowser
    : supportedBrowserList.includes(browser);

  const isSupportedVersion =
    isSupportedBrowser && !!userBrowserVersion && semver.lt(browserMinVersion, userBrowserVersion);

  return { isMobile, isSupportedBrowser, isSupportedVersion };
};
