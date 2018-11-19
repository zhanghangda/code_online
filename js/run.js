/**
 * 运行代码
 * @author zhang.hangda
 * @date 2018-11-19
 */

$(document).ready(function() {
	//运行按钮
	$("#run").click(function(){
		//获取输入内容
		var codeVal = $('#code-area').val();

		//准备提交
		postCode(codeVal);

	})


	//post方法
	function postCode(strCode){
		$.post('index.php',{
			code:strCode
		},function(e){
			console.log(e);
		})
	}
})
