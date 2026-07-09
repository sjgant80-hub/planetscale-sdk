/**
 * planetscale-sdk TypeScript declarations
 */
export interface PlanetscaleOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Planetscale {
  constructor(options?: PlanetscaleOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Planetscale;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
