module.exports = function pluginWowhead() {
  return {
    name: 'plugin-wowhead',
    injectHtmlTags() {
       return {
         headTags: [
           // https://www.wowhead.com/tooltips
           {
             tagName: 'script',
             innerHTML: `
               const whTooltips = {colorLinks: false, iconizeLinks: true, renameLinks: false};

               document.addEventListener('readystatechange', event => {
                 if (event.target.readyState === "complete") {
                   window.$WowheadPower.refreshLinks();
                 }
                });
             `,
           },
           {
             tagName: 'script',
             attributes: {
               defer: true,
               src: 'https://wow.zamimg.com/widgets/power.js',
             },
           },
         ],
       };
     },
    getClientModules() {
          return ['./client'];
        },
  }
}