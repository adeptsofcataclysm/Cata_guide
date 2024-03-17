export default (function() {
  let event = new Event('onRouteUpdated');
  return {
    onRouteUpdate({location}) {
      setTimeout(function() {
          window.$WowheadPower.refreshLinks();
        }, 0);
    },
  }
})();