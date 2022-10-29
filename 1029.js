/*******************************
⚠️🛝此捷径仅适用于本地重写⚠️🛝
  🧚🏻‍♂️作者：🍡魔法师🍡
  🎈交流群：993539991
🫧脚本名称:羊了个羊 自用源码上榜全皮
🫧建议配合working copy一起食用
✈️下载地址https://apps.apple.com/app/id896694807✈️
*******************************/
var body=$response.body;
body = body.replace(/win_count\":\d+/g,'win_count": 1.7976931348623158e+308');
body = body.replace(/today_time\":\d+/g,'today_time":321');
body = body.replace(/challenge\":\d+/g,'challenge": 1.7976931348623158e+308');
body = body.replace(/dressing\":\w+/g,'dressing":true');
body = body.replace(/unlock\":\w+/g,'unlock":true');
body = body.replace(/"topic_count\":\d+/g,'"topic_count":99999');
body = body.replace(/"046ef1bab26e5b9bfe2473ded237b572"
(.+)"],'"046ef1bab26e5b9bfe2473ded237b572","046ef1bab26e5b9bfe2473ded237b572"],');
body = body.replace(/today_state\":\d+/g,'today_state":1');
body = body.replace(/type\":\d/g,'type":2');
body = body.replace(/"rotated\":\d/g,'"rotated":99');
body = body.replace(/"state\":\d+/g,'"state":1');
body = body.replace(/"a92ee0f5f116b13b7b594e67a53defad"
(.+)"],'"a92ee0f5f116b13b7b594e67a53defad","a92ee0f5f116b13b7b594e67a53defad"],');
body = body.replace(/"your_index\":0/g,'"your_index":1');
body = body.replace(/"f35bb0aff5ff7fef951795a377cf0749"
(.+)"],'"f35bb0aff5ff7fef951795a377cf0749","f35bb0aff5ff7fef951795a377cf0749"],');
$done(body);
