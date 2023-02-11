import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';

export default {
    input:'src/main.ts',
    output:{
        format:'cjs',
        file:'dist/EasyCommander.js'
    },
    plugins:[
        typescript({
            outDir:'./dist',
            declaration:true,
            declarationDir:'./'
        }),
        nodeResolve(),
        commonjs()
    ]
}