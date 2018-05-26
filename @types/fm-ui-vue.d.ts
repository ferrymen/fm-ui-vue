// declare module '@ferrymen/fm-vue' {
//   const _default: any
//   export default _default
// }

// declare module 'env' {
//   import env from 'env/dev'
//   export default env
// }

declare module '@ferrymen/fm-vue' {
  export * from 'index'
}

declare module '@ferrymen/fm-vue/mixins' {
  export * from 'mixins'
}