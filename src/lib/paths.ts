export const local = (path = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
export const resolveLink = (url: string) => /^https?:\/\//.test(url) ? url : local(url);
