<?php
if($_POST){
  $url="http://127.0.0.1/screenshot/screenshot.php?url=$_POST[url]";
  $file=file_get_contents($url);

}

 ?>
<form method="post" action="">
  <input name="url" type="text" placeholder="input link website here">
  <input type="submit">


</form>
