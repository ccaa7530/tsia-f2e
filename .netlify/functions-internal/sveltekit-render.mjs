import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DAYBaqYj.js","app":"_app/immutable/entry/app.BxE21sHq.js","imports":["_app/immutable/entry/start.DAYBaqYj.js","_app/immutable/chunks/entry.DIG8Mnu-.js","_app/immutable/chunks/scheduler.BRDj_Jz7.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.BxE21sHq.js","_app/immutable/chunks/scheduler.BRDj_Jz7.js","_app/immutable/chunks/index.DtOR5sAK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/comments",
				pattern: /^\/comments\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/my-books/list/[category]/[...id]",
				pattern: /^\/my-books\/list\/([^/]+?)(?:\/(.*))?\/?$/,
				params: [{"name":"category","optional":false,"rest":false,"chained":false},{"name":"id","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/todo/[slug]",
				pattern: /^\/todo\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
