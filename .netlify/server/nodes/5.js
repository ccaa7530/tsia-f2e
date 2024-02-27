import * as universal from '../entries/pages/my-books/list/_category_/_...id_/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/my-books/list/_category_/_...id_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/my-books/list/[category]/[...id]/+page.js";
export const imports = ["_app/immutable/nodes/5.iCYqDl7E.js","_app/immutable/chunks/scheduler.BRDj_Jz7.js","_app/immutable/chunks/index.DtOR5sAK.js"];
export const stylesheets = [];
export const fonts = [];
