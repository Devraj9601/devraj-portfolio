import shim from '/@fs/E:/portfolio-source/node_modules/use-sync-external-store/shim/with-selector.js';
const named = shim && (shim.useSyncExternalStoreWithSelector || shim.default && shim.default.useSyncExternalStoreWithSelector);
export const useSyncExternalStoreWithSelector = named || (() => { throw new Error('useSyncExternalStoreWithSelector not found in shim'); });
export default { useSyncExternalStoreWithSelector };