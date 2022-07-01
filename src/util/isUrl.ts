const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;

const localhostDomainRE = /^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/;
const nonLocalhostDomainRE = /^[^\s\.]+\.\S{2,}$/;

const isUrl = (url: string) => {
  if (typeof url !== "string") return false;

  const match = url.match(protocolAndDomainRE);

  if (!match) return false;

  const everythingAfterProtocol = match[1];

  if (!everythingAfterProtocol) return false;

  if (
    localhostDomainRE.test(everythingAfterProtocol) ||
    nonLocalhostDomainRE.test(everythingAfterProtocol)
  ) {
    return true;
  }

  return false;
};

export default isUrl;
