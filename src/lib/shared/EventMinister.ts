export type EventMinisterUrl = { path: string; label?: string };
export type EventMinister = {
  name: string;
  description?: string;
  link?: EventMinisterUrl;
  email?: string;
};

export function ministerHasDetailInfo(minister: EventMinister) {
  return !!minister.description || !!minister.email || !!minister.link;
}
