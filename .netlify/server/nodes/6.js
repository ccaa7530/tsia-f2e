import * as universal from '../entries/pages/todo/_slug_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/todo/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/todo/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/6.B4xif2kW.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/scheduler.BRDj_Jz7.js","_app/immutable/chunks/index.DtOR5sAK.js"];
export const stylesheets = [];
export const fonts = [];
