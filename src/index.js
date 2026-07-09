/**
 * planetscale-sdk · sovereign wrapper for PlanetScale
 * Database
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://api-docs.planetscale.com/
 * Homepage: https://planetscale.com
 */

export class Planetscale {
  constructor({ apiKey, baseURL = 'https://planetscale.com', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://api-docs.planetscale.com/. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('planetscale ' + res.status);
    return res.json();
  }
}

export default Planetscale;

// Metadata
export const meta = {
  "name": "PlanetScale",
  "category": "Database",
  "homepage": "https://planetscale.com",
  "docs_url": "https://api-docs.planetscale.com/",
  "endpoints_count": 0
};
