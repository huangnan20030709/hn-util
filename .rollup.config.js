import resolve from 'rollup-plugin-node-resolve'; // 支持导入node的包
import commonjs from 'rollup-plugin-commonjs'; // 支持导入commonjs
import babel from 'rollup-plugin-babel'; // 编译代码
import { terser } from 'rollup-plugin-terser'; // 代码压缩，去除注释
import { eslint } from 'rollup-plugin-eslint'; 

export default [
  {
    input: './index.js',
    output: {
      name: '',
      file: 'bundle.js',
      format: 'umd',
      sourcemap: true,
      // 这里需要注意，设置打包压缩后的文件开头，会被 terser 插件去除
      banner: '/*eslint-disable*/',
    },
    plugins: [
      resolve({
        browser: true,
      }), // 这样 Rollup 能找到 `ms`
      commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
      eslint({
        throwOnError: true,
        throwOnWarning: true,
        include: ['main.js'],
        exclude: ['node_modules/**'],
      }),
      babel({
        exclude: 'node_modules/**', // 防止打包node_modules下的文件
        runtimeHelpers: true, // 使plugin-transform-runtime生效
      }),
      terser()
    ],
  },
];

