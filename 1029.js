{"\/*******************************\n  公众号:木木IOS分享\n关注了解更多新科技！！！\n羊了个羊 自用源码上榜全皮\n脚本名称:羊了个羊 自用源码上榜全皮\n使用声明：️此脚本仅供学习与交流，\n        请勿转载与贩卖！️️️\n群1077223830\n*******************************\n[rewrite_local]\n^http[s]?:\\\/\\\/*.easygame2021.com.+$ url script-response-body easygame2021.js\n[mitm] \nhostname ":" *.easygame2021.*\n*******************************\nSurge\n\n[Script]\n^http[s]?:\\\/\\\/*.easygame2021.com.+$ requires-body=1,max-size=0,script-path=easygame2021.js\n\n[MITM]\nhostname = *.easygame2021.*\n\n*******************************\/\nvar obj = JSON.parse($response.body);\n    obj.data.win_count=  1.7976931348623158e+308;\nobj.data.today_time= 321;\nobj.data.challenge=  1.7976931348623158e+308;\nobj.data.dressing= true;\nobj.data.unlock= true;\nobj.data.topic_count= 99999;\nobj.data.80001= 80001;\nobj.data.046ef1bab26e5b9bfe2473ded237b572,046ef1bab26e5b9bfe2473ded237b572],= \"046ef1bab26e5b9bfe2473ded237b572\",\"046ef1bab26e5b9bfe2473ded237b572\"],;\nobj.data.today_state= 1;\nobj.data.type= 2;\nobj.data.rotated= 99;\nobj.data.state= 1;\nobj.data.a92ee0f5f116b13b7b594e67a53defad,a92ee0f5f116b13b7b594e67a53defad],= \"a92ee0f5f116b13b7b594e67a53defad\",\"a92ee0f5f116b13b7b594e67a53defad\"],;\nobj.data.your_index= 1;\nobj.data.f35bb0aff5ff7fef951795a377cf0749,f35bb0aff5ff7fef951795a377cf0749],= \"f35bb0aff5ff7fef951795a377cf0749\",\"f35bb0aff5ff7fef951795a377cf0749\"],;\n    $done({body: JSON.stringify(obj)});\n"}