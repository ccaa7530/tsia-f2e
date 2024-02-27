

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BMdFkA-R.js","_app/immutable/chunks/scheduler.BRDj_Jz7.js","_app/immutable/chunks/index.DtOR5sAK.js"];
export const stylesheets = [];
export const fonts = [];
