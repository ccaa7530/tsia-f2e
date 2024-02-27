import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.3WVTVDZf.js","_app/immutable/chunks/scheduler.BRDj_Jz7.js","_app/immutable/chunks/index.DtOR5sAK.js","_app/immutable/chunks/stores.D7qsov2u.js","_app/immutable/chunks/entry.DIG8Mnu-.js","_app/immutable/chunks/control.CYgJF_JY.js"];
export const stylesheets = [];
export const fonts = [];
