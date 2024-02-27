import * as universal from '../entries/pages/comments/_page.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/comments/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/comments/+page.js";
export const imports = ["_app/immutable/nodes/4.1Q1atyPp.js","_app/immutable/chunks/scheduler.BRDj_Jz7.js","_app/immutable/chunks/index.DtOR5sAK.js"];
export const stylesheets = [];
export const fonts = [];
