var network = $network;
console.log(network);

var dns = "dns：" + network.dns;
var v4_primaryAddress = "v4_primaryAddress：" + network.v4.primaryAddress;
var v4_primaryInterface = "\nv4_primaryInterface：" + network.v4.primaryInterface;
var v4_primaryRouter = "\nv4_primaryRouter：" + network.v4.primaryRouter;
var v6_primaryAddress = "\nv6_primaryAddress：" + network.v6.primaryAddress;
var v6_primaryInterface = "\nv6_primaryInterface：" + network.v6.primaryInterface;
var wifi_bssid = "\nwifi_bssid：" + network.wifi.bssid;
var wifi_ssid = "\nwifi_ssid：" + network.wifi.ssid;

var notice = v4_primaryAddress + v4_primaryInterface + v4_primaryRouter + v6_primaryAddress + v6_primaryInterface + wifi_bssid + wifi_ssid;

$notification.post("Network Changed", dns, notice);
$done();