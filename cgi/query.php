<?php
$start  = $_GET['start'];
$count = $_GET['count'];
$name = urlencode($_GET['name']);
$url = "http://f150e27440.iask.in:14635/solr/solr_kaifang/select?q=keyword:" . $name . "&start=".$start ."&rows=".$count ."&wt=json&indent=true";
//$url  = "http://f150e27440.iask.in:14635/solr/solr_kaifang/select?q=keyword%3Atest&start=2&rows=4&wt=json";
$result = file_get_contents($url);
//$result = " url: " . $url;
echo $result;
?>
