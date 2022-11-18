const path = require("path");
module.exports = ({ file }) => {
  const designWidth = file.includes(path.join('node_modules', 'vant')) ? 375 : 750;
  console.log(designWidth, 'designWidthdesignWidth')
  return {
    plugins: {
      'postcss-px-to-viewport': {
        unitToConvert: 'px', // 要转换的单位
        viewportWidth: designWidth, // UI设计稿的宽度
        unitPrecision: 5, // 转换后的精度，即小数点的位置 
        propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
        fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
        selectorBlackList: ['ignore-'],
        minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
        mediaQuery: false, // 是否在媒体查询的css代码中也进行转换，默认false
        replace: true, // 是否转换后直接更换属性值
        // exclude: [ // 忽略某些文件夹下的文件或特定文件
        //   /node_modules/
        // ],
        // include: undefined,
        // landscape: false, // 是否处理横屏情况
        // landscapeUnit: 'vw',
        // landscapeWidth: 568
      }
    }
  }
}