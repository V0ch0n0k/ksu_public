self.__PRERENDER_MANIFEST="{\"version\":4,\"routes\":{},\"dynamicRoutes\":{\"/[locale]/contacts\":{\"experimentalBypassFor\":[{\"type\":\"header\",\"key\":\"Next-Action\"},{\"type\":\"header\",\"key\":\"content-type\",\"value\":\"multipart/form-data;.*\"}],\"routeRegex\":\"^/([^/]+?)/contacts(?:/)?$\",\"dataRoute\":\"/[locale]/contacts.rsc\",\"fallback\":null,\"dataRouteRegex\":\"^/([^/]+?)/contacts\\\\.rsc$\"},\"/[locale]/about\":{\"experimentalBypassFor\":[{\"type\":\"header\",\"key\":\"Next-Action\"},{\"type\":\"header\",\"key\":\"content-type\",\"value\":\"multipart/form-data;.*\"}],\"routeRegex\":\"^/([^/]+?)/about(?:/)?$\",\"dataRoute\":\"/[locale]/about.rsc\",\"fallback\":null,\"dataRouteRegex\":\"^/([^/]+?)/about\\\\.rsc$\"}},\"notFoundRoutes\":[],\"preview\":{\"previewModeId\":\"process.env.__NEXT_PREVIEW_MODE_ID\",\"previewModeSigningKey\":\"process.env.__NEXT_PREVIEW_MODE_SIGNING_KEY\",\"previewModeEncryptionKey\":\"process.env.__NEXT_PREVIEW_MODE_ENCRYPTION_KEY\"}}"