// @ts-check
import dxhuii from '@dxhuii/eslint-config'
import antfu from '@antfu/eslint-config'

export default antfu({ unocss: true, formatters: true, typescript: true, vue: true, markdown: true, stylistic: true }, dxhuii())
