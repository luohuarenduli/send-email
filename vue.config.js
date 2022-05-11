/*
 * @Description: 
 * @version: v1.0
 * @Author: 李腾飞
 * @Date: 2022-05-10 10:48:23
 * @LastEditors: 
 * @LastEditTime: 2022-05-10 10:48:41
 */
module.exports = {

	// 关闭eslint校验.
	 devServer: {
			overlay: {
				warnings: false, //不显示警告
				errors: false	//不显示错误
			}
		},
		lintOnSave:false //关闭eslint检查
}