
var wifiName = $network.wifi.ssid;
var proxyWifiName = 'ZHUANGZHUANG';

if (wifiName == proxyWifiName){
	$surge.setOutboundMode("direct");
	$notification.post("Surge Network Changed","网络已经切换", "Surge 已自动变为直连模式");
} else {
	$surge.setOutboundMode("rule");
	$notification.post("Surge Network Changed","网络已经切换", "Surge 已自动变为规则模式");
}

$done();
