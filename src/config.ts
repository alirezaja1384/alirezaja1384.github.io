const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
const defaultSlug = process.env.REACT_APP_DEFAULT_SLUG;

if (!apiBaseUrl) {
    throw new Error("REACT_APP_API_BASE_URL is required");
}

if (!defaultSlug) {
    throw new Error("REACT_APP_DEFAULT_SLUG is required");
}

export const API_BASE_URL = apiBaseUrl.replace(/\/+$/, "");
export const DEFAULT_SLUG = defaultSlug;

export const getPublicProfileUrl = (slug = DEFAULT_SLUG) =>
    `${API_BASE_URL}/v2/resume/public-profiles/${encodeURIComponent(slug)}/`;
