interface SearchParams {
  keyword: string;
  north: number;
  east: number;
  south: number;
  west: number;
  lang: string;
  min: number;
  max: number;
  theme?: string;
  org?: string;
  type?: string;
  spatial?: string;
  foundational?: "true";
  sort?: string;
  stac?: string;
  datetime?: string;
  bbox?: string;
}
interface KOSearchParams {
  keyword: string;
  keyword_only: "true" | "false";
  lang: string;
  min: number;
  max: number;
  theme?: string;
  org?: string;
  type?: string;
  foundational?: "true";
  sort?: string;
  spatial?: string;
  stac?: string;
  datetime?: string;
  bbox?: string;
}

interface SearchResult {
  row_num: number;
  id: string;
  coordinates: string;
  title: string;
  description: string;
  published: string;
  keywords: string;
  options: [];
  contact: [];
  created: string;
  spatialRepresentation: string;
  type: string;
  temporalExtent: unknown;
  graphicOverview: [];
  language: string;
  organisation: string;
  total: number;
}
