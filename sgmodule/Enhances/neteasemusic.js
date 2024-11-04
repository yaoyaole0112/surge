#!name=解锁｜网易云音乐
#!desc=解锁会员音频、音质\n作者：Yuheng0101
#!category=🍿 解锁增强
#!system=ios
#!icon=https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/d3/77/da/d377dac9-b69e-5b7c-e7cb-b761f96decec/AppIcon-1x_U007emarketing-0-6-0-0-85-220-0.png/144x144.png
#!date=2024-06-12 22:03:00

[Map Local]
^https?:\/\/interface\d?\.music\.163\.com\/e?api\/vip\/cashier\/tspopup\/get data-type=text data=" " status-code=200

[Script]
网易云重写 = type=http-response, pattern=^https?:\/\/interface\d?\.music\.163\.com\/e?api\/(v\d\/user\/detail\/\d+|vipnewcenter\/app\/resource\/newaccountpage|music-vip-membership\/client\/vip\/info|batch|playlist\/privilege|search\/complex\/page|v\d\/(discovery\/recommend\/songs|playlist\/detail)), script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/NeteaseCloudMusic/netease.js, requires-body=true, binary-body-mode=1, max-size=-1, timeout=60

网易云转发 = type=http-request, pattern=^https?:\/\/interface\d?\.music\.163\.com\/e?api\/(song\/enhance\/player\/url\/v\d|vipauth\/app\/auth\/query), script-path=https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/NeteaseCloudMusic/netease.js, requires-body=true, max-size=-1, timeout=60

[MITM]
hostname = %APPEND% interface*.music.163.com
