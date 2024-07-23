import {Optimizer} from '@parcel/plugin';
// @ts-ignore
import {blobToBuffer} from '@parcel/utils';
import SourceMap from '@parcel/source-map';

export const ReactUseClientOptimizer =  new Optimizer({
    async optimize({contents, map, options}) {
        let correctMap;
        if (map != null) {
            correctMap = new SourceMap(options.projectRoot);
            // @ts-ignore
            correctMap.addSourceMap(map, 1); // 1 = offset lines by 1
        }
        let contentString = (await blobToBuffer(contents)).toString()
        if(contentString.includes('"use client";')){
            contentString = contentString.replace('"use client";', '')
            contentString = `"use client";\n${contentString}`
        }

        return {
            contents: contentString,
            map: correctMap,
        };
    },
});
