<?php
header("content-type:text/html;charset=utf-8");

//获取参数
$strCode = $_POST['code'];

//检查参数
if(empty($strCode)){
	return '输入为空';
}

//过滤输入内容  防注入
//$strCode = escapeshellcmd($strCode);

//把return 转为echo
$strCode = str_replace('return','echo',$strCode);

//运行传入代码
return eval($strCode);

//捕获结果


//返回结果

?>
