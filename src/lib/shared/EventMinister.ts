export type EventMinister = {
  name: string;
  description?: string;
  url?: string;
  image?: string;
};

export function ministerHasDetailInfo(minister: EventMinister) {
  return !!minister.description || !!minister.image || !!minister.url;
}
