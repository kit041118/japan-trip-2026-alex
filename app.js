/* 日本之旅 App */
const TRIP_DATA = {"trip":{"title":"日本之旅","subtitle":"香港 ⇄ 東京・箱根・河口湖","start":"2026-11-28","end":"2026-12-05","flights":[{"code":"UO622","from":"香港 T2","to":"羽田 T3","time":"17:55–22:45","date":"2026-11-28"},{"code":"UO647","from":"成田 T2","to":"香港 T1","time":"19:00–23:25","date":"2026-12-05"}]},"passes":{"hakone":{"name":"箱根周遊券","note":"Klook 購買 3 日；由小田原去箱根湯本起可用","url":"https://www.hakonenavi.jp/transportation/ticket/freepass/","image":"assets/箱根pass_0_web.jpg"},"kawaguchiko":{"name":"河口湖周遊券","note":"2 日巴士通票、遊船、富士山全景纜車","url":"https://www.klook.com/zh-HK/activity/132532-mt-fuji-pass/","map_pdf":"https://www.fujikyubus.co.jp/pdf/shuyu/omni_map_202604.pdf","image":"assets/河口pass_0_web.jpg"}},"overview_images":["assets/工作表2_0.png","assets/工作表2_1.jpg","assets/工作表2_2.png"],"weather_regions":[{"date":"2026-11-28","region":"東京・羽田","lat":35.55,"lon":139.78},{"date":"2026-11-29","region":"箱根","lat":35.23,"lon":139.07},{"date":"2026-11-30","region":"箱根","lat":35.23,"lon":139.07},{"date":"2026-12-01","region":"御殿場","lat":35.3,"lon":138.93},{"date":"2026-12-02","region":"河口湖","lat":35.5,"lon":138.76},{"date":"2026-12-03","region":"東京","lat":35.68,"lon":139.76},{"date":"2026-12-04","region":"東京","lat":35.68,"lon":139.76},{"date":"2026-12-05","region":"酒酒井・成田","lat":35.72,"lon":140.27}],"foliage":[{"name":"箱根美術館／強羅","peak":"見頃約 11/16–11/30","note":"行程 11/29 已排箱根美術館與早雲山，紅葉仍有機會漂亮。","tip":"適合 11/29","places":[{"name":"箱根美術館","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%BE%8E%E8%A1%93%E9%A4%A8"},{"name":"早雲山","url":"https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9"}]},{"name":"箱根湯本","peak":"見頃約 11/28–12/12","note":"抵達當日周邊仍可能有紅葉；湯本駅附近散步即可欣賞。","tip":"適合 11/29 上午","places":[{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"}]},{"name":"蘆之湖／元箱根／箱根神社","peak":"偏早；11 月下旬可能已近尾聲","note":"11/30 行程經過桃源台、元箱根與箱根神社，可順道留意殘紅。","tip":"適合 11/30","places":[{"name":"箱根神社","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%A5%9E%E7%A4%BE"},{"name":"元箱根","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9"},{"name":"芦ノ湖","url":"https://www.google.com/maps/search/?api=1&query=%E8%8A%A6%E3%83%8E%E6%B9%96"}]},{"name":"河口湖 もみじ回廊","peak":"見頃約 11/23–12/2","note":"12/2 行程日可能仍可看紅葉；與遊船、纜車同區，方便安排。","tip":"適合 12/2","places":[{"name":"もみじ回廊","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%20%E3%82%82%E3%81%BF%E3%81%98%E5%9B%9E%E5%BB%8A"}]},{"name":"新倉山淺間公園","peak":"紅葉＋富士山經典景","note":"行程 12/2 已排；於下吉田站下車前往。","tip":"適合 12/2","places":[{"name":"新倉山浅間公園","url":"https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%80%89%E5%B1%B1%E6%B5%85%E9%96%93%E5%85%AC%E5%9C%92"},{"name":"下吉田駅","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E9%A7%85"}]},{"name":"明治神宮外苑銀杏並木","peak":"見頃約 11/25–12/4","note":"行程 12/4 上午已排；黃葉大道，適合拍照。","tip":"適合 12/4","places":[{"name":"明治神宮外苑 いちょう並木","url":"https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"}]}],"lights":[{"name":"六本木けやき坂イルミネーション","period":"2026/11/5–12/25","hours":"17:00–22:00","fee":"免費","theme":"SNOW & BLUE","note":"藍色雪景風格燈飾，可晚上前往。","tip":"適合 12/3 或 12/4 晚上（由日比谷／銀座出發約 15–20 分鐘）","places":[{"name":"六本木けやき坂","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%AD%E6%9C%AC%E6%9C%A8%E3%81%91%E3%82%84%E3%81%8D%E5%9D%82%E3%82%A4%E3%83%AB%E3%83%9F%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"}]},{"name":"丸の内イルミネーション／仲通り","period":"2026/11/12–2027/2/14","hours":"日落後至約 23:00（以現場為準）","fee":"免費","theme":"","note":"近東京駅；12/3 銀座／東京駅行程可順路。","tip":"適合 12/3 下午／晚上","places":[{"name":"丸の内仲通り","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%B8%E3%81%AE%E5%86%85%E3%82%A4%E3%83%AB%E3%83%9F%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%20%E4%BB%B2%E9%80%9A%E3%82%8A"}]},{"name":"HIBIYA Magic Time Illumination","period":"2026/11/12–2027/2/28","hours":"16:00–23:00","fee":"免費","theme":"","note":"就在 remm Hibiya 酒店附近，回酒店前最方便。","tip":"最適合每晚回日比谷酒店時順路看","places":[{"name":"日比谷イルミネーション","url":"https://www.google.com/maps/search/?api=1&query=HIBIYA%20Magic%20Time%20Illumination"}]},{"name":"東京ミッドタウン","period":"2026/11/26–12/25","hours":"日落後（以現場為準）","fee":"免費（園區）","theme":"","note":"可選景點；與六本木同區，可合併前往。","tip":"適合 12/3–12/4 晚上（可選）","places":[{"name":"東京ミッドタウン","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E3%83%9F%E3%83%83%E3%83%89%E3%82%BF%E3%82%A6%E3%83%B3%20%E3%82%A4%E3%83%AB%E3%83%9F%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"}]},{"name":"表参道イルミネーション","period":"約 12/1–12/25","hours":"日落後（以現場為準）","fee":"免費","theme":"","note":"12/4 表參道行程晚上可順道欣賞。","tip":"適合 12/4 晚上","places":[{"name":"表参道","url":"https://www.google.com/maps/search/?api=1&query=%E8%A1%A8%E5%8F%82%E9%81%93%E3%82%A4%E3%83%AB%E3%83%9F%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3"}]}],"days":[{"date":"2026-11-28","weekday":"六","region":"東京・羽田","items":[{"time":"1755-2245","title":"UO622 香港T2>羽田T3","notes":[],"links":[],"places":[{"name":"羽田空港第3ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC3%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC3%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]},{"time":null,"title":"拎sim 卡X2","notes":["香港國際機場1號客運大樓第五層（回港層）接機大堂A出口A02櫃檯"],"links":[],"places":[],"maps":[]},{"time":null,"title":"Airbnb: Room 101","notes":["0000尾班車 T3 (京急空港線，兩個站到)>穴守稻荷車站步行3分鐘"],"links":[],"places":[{"name":"穴守稲荷駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85"},{"name":"Airbnb 附近","url":"https://maps.app.goo.gl/nJJUbeA4yhmTQiya6"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85","https://maps.app.goo.gl/nJJUbeA4yhmTQiya6"]},{"time":null,"title":"宵夜便利店KO","notes":[],"links":[],"places":[],"maps":[]}]},{"date":"2026-11-29","weekday":"日","region":"箱根","items":[{"time":"注意","title":"今日可以使用箱根pass (Klook買 3日)","notes":["由小田源去箱根湯本，呢程車可以開始用"],"links":["https://www.hakonenavi.jp/transportation/ticket/freepass/"],"places":[],"maps":[]},{"time":"0800-0930","title":"出發箱根","notes":["穴守稻荷-> 橫濱 (17分)\n橫濱 -> 小田源 (51分)\n小田源 -> 箱根湯本 (11分)\n全程79分鐘)","多車，不用買票"],"links":[],"places":[{"name":"穴守稲荷駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85"},{"name":"小田原駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85"},{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"]},{"time":"0930-1030","title":"食早餐","notes":["炸魚餅 籠屋清次郎 (0930-1800)\nGrande Rivière (1000 - 1800)\nHakone Teramisu (1000 - 1700)"],"links":[],"places":[{"name":"籠屋清次郎","url":"https://www.google.com/maps/search/?api=1&query=%E7%B1%A0%E5%B1%8B%E6%B8%85%E6%AC%A1%E9%83%8E%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC"},{"name":"Grande Rivière","url":"https://www.google.com/maps/search/?api=1&query=Grande%20Rivi%C3%A8re%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC"},{"name":"Hakone Teramisu","url":"https://www.google.com/maps/search/?api=1&query=Hakone%20Teramisu%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%B1%A0%E5%B1%8B%E6%B8%85%E6%AC%A1%E9%83%8E%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC","https://www.google.com/maps/search/?api=1&query=Grande%20Rivi%C3%A8re%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC","https://www.google.com/maps/search/?api=1&query=Hakone%20Teramisu%20%E7%AE%B1%E6%A0%B9"]},{"time":"11:00","title":"箱根湯本去強羅","notes":["箱根湯本 -> 強羅 (36分)","多車，不用買票"],"links":[],"places":[{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"]},{"time":"check in","title":"箱根 Yutowa 飯店","notes":["強羅站步行約5分鐘","私湯要排隊"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]},{"time":null,"title":"Lunch:炸豆腐排老店 田むら銀かつ亭","notes":[],"links":[],"places":[{"name":"田むら銀かつ亭","url":"https://www.google.com/maps/search/?api=1&query=%E7%94%B0%E3%82%80%E3%82%89%E9%8A%80%E3%81%8B%E3%81%A4%E4%BA%AD%20%E5%BC%B7%E7%BE%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%94%B0%E3%82%80%E3%82%89%E9%8A%80%E3%81%8B%E3%81%A4%E4%BA%AD%20%E5%BC%B7%E7%BE%85"]},{"time":null,"title":"箱根美術館 (似有紅葉睇，好多樹)\n早雲山 see see","notes":[],"links":[],"places":[{"name":"箱根美術館","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%BE%8E%E8%A1%93%E9%A4%A8"},{"name":"早雲山","url":"https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%BE%8E%E8%A1%93%E9%A4%A8","https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9"]},{"time":null,"title":"晚餐: 箱根 Yutowa 飯店","notes":["17:30 - 21:00（最後入場時間為 19:30）半自助"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]}]},{"date":"2026-11-30","weekday":"一","region":"箱根","items":[{"time":"08:00","title":"早餐: 箱根 Yutowa 飯店","notes":["0730-0930"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]},{"time":null,"title":"箱根空中纜車（Hakone Ropeway）","notes":[],"links":[],"places":[{"name":"箱根ロープウェイ","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"]},{"time":null,"title":"大涌谷（Owakudani)","notes":["吃蛋"],"links":[],"places":[{"name":"大涌谷","url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B6%8C%E8%B0%B7"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B6%8C%E8%B0%B7"]},{"time":null,"title":"蘆之湖（Lake Ashi）","notes":["桃源台 → 元箱根，坐船 (10:45、11:25、12:00)"],"links":[],"places":[{"name":"芦ノ湖","url":"https://www.google.com/maps/search/?api=1&query=%E8%8A%A6%E3%83%8E%E6%B9%96"},{"name":"桃源台","url":"https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"},{"name":"元箱根","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E8%8A%A6%E3%83%8E%E6%B9%96","https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9"]},{"time":null,"title":"Lunch","notes":["炸蝦.蕎麥麵 絹引の里\nDaimasa Motohakone (魚生飯)"],"links":[],"places":[{"name":"絹引の里","url":"https://www.google.com/maps/search/?api=1&query=%E7%B5%B9%E5%BC%95%E3%81%AE%E9%87%8C%20%E7%AE%B1%E6%A0%B9"},{"name":"Daimasa Motohakone","url":"https://www.google.com/maps/search/?api=1&query=Daimasa%20Motohakone"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%B5%B9%E5%BC%95%E3%81%AE%E9%87%8C%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=Daimasa%20Motohakone"]},{"time":null,"title":"箱根神社 + 九頭龍神社 + 打卡","notes":[],"links":[],"places":[{"name":"箱根神社","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%A5%9E%E7%A4%BE"},{"name":"九頭龍神社","url":"https://www.google.com/maps/search/?api=1&query=%E4%B9%9D%E9%A0%AD%E9%BE%8D%E7%A5%9E%E7%A4%BE%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%A5%9E%E7%A4%BE","https://www.google.com/maps/search/?api=1&query=%E4%B9%9D%E9%A0%AD%E9%BE%8D%E7%A5%9E%E7%A4%BE%20%E7%AE%B1%E6%A0%B9"]},{"time":null,"title":"回程","notes":["元箱根 → 桃源台（回程）\n(15:15、15:55、16:30)"],"links":[],"places":[{"name":"元箱根","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9"},{"name":"桃源台","url":"https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"]},{"time":null,"title":"晚餐: 箱根 Yutowa 飯店","notes":["17:30 - 21:00（最後入場時間為 19:30）半自助"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]}]},{"date":"2026-12-01","weekday":"二","region":"御殿場","items":[{"time":null,"title":"早餐: 箱根 Yutowa 飯店","notes":["0730-0930"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]},{"time":null,"title":"御殿場outlet","notes":["坐強羅M路線- 根據官方資料，M路線（去御殿場 Outlet）是在3番のりば（3號巴士站）。","行李放outlet? -> YES","強羅M路線\n(09:07、09:47、10:17、11:17、12:17)","可以用pass，夾岩時間"],"links":[],"places":[{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"]},{"time":null,"title":"御殿場outlet 食lunch","notes":[],"links":[],"places":[{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"]},{"time":null,"title":"御殿場outlet  -> 酒店","notes":["御殿場outlet到御殿場站乙女口\n每小時：10分、25分、40分、55分"],"links":[],"places":[{"name":"御殿場駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85"]},{"time":null,"title":"Dinner","notes":["mark 左係google\nCharcoal BBQ Omura (有中文單)\n兩間居酒屋"],"links":[],"places":[{"name":"Charcoal BBQ Omura","url":"https://www.google.com/maps/search/?api=1&query=Charcoal%20BBQ%20Omura%20%E5%BE%A1%E6%AE%BF%E5%A0%B4"}],"maps":["https://www.google.com/maps/search/?api=1&query=Charcoal%20BBQ%20Omura%20%E5%BE%A1%E6%AE%BF%E5%A0%B4"]},{"time":null,"title":"東橫INN 御殿場站前","notes":[],"links":[],"places":[{"name":"東橫イン 御殿場駅前","url":"https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"}],"maps":["https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"]}]},{"date":"2026-12-02","weekday":"三","region":"河口湖","items":[{"time":null,"title":"早餐: ???","notes":[],"links":[],"places":[],"maps":[]},{"time":null,"title":"東橫INN 御殿場站前>東橫INN 富士河口湖大橋","notes":["需上網預約8am/10am/11am/2pm","車程: 45MINS"],"links":["https://reserve.toyoko-inn-bus.com/"],"places":[{"name":"東橫イン 御殿場駅前","url":"https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"},{"name":"東橫イン 富士河口湖大橋","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E6%A8%AA%E3%82%A4%E3%83%B3%20%E5%AF%8C%E5%A3%AB%E6%B2%B3%E5%8F%A3%E6%B9%96%E5%A4%A7%E6%A9%8B"}],"maps":["https://maps.app.goo.gl/Hh1jqj12YJCRws4HA","https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E6%A8%AA%E3%82%A4%E3%83%B3%20%E5%AF%8C%E5%A3%AB%E6%B2%B3%E5%8F%A3%E6%B9%96%E5%A4%A7%E6%A9%8B"]},{"time":null,"title":"御殿場站 (富士山口)","notes":["係巴士站1號2號站去河口湖，大約1小時一班","後備"],"links":[],"places":[{"name":"御殿場駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85"]},{"time":null,"title":"河口湖周遊券：2日巴士通票、遊船、富士山全景纜車","notes":["只要交通卷就OK"],"links":["https://www.klook.com/zh-HK/activity/132532-mt-fuji-pass/"],"places":[],"maps":[]},{"time":null,"title":"湖龍酒店 (巴士淺川站落)","notes":["私人浴池收費3300日元，公共浴池免費"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"]},{"time":null,"title":"Mt. Fuji Panoramic Ropeway (纜車)","notes":[],"links":[],"places":[{"name":"富士山パノラマロープウェイ","url":"https://www.google.com/maps/search/?api=1&query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E3%83%91%E3%83%8E%E3%83%A9%E3%83%9E%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E3%83%91%E3%83%8E%E3%83%A9%E3%83%9E%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"]},{"time":null,"title":"Lunch: 遊船河旁食","notes":[],"links":[],"places":[{"name":"河口湖遊覧船周辺","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"]},{"time":null,"title":"Kawaguchiko Lake Cruise (遊船河)","notes":[],"links":[],"places":[{"name":"河口湖遊覧船","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"]},{"time":null,"title":"新倉山淺間公園 (下吉田站落)","notes":[],"links":[],"places":[{"name":"新倉山浅間公園","url":"https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%80%89%E5%B1%B1%E6%B5%85%E9%96%93%E5%85%AC%E5%9C%92"},{"name":"下吉田駅","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%80%89%E5%B1%B1%E6%B5%85%E9%96%93%E5%85%AC%E5%9C%92","https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E9%A7%85"]},{"time":null,"title":"下吉田商業街","notes":[],"links":[],"places":[{"name":"下吉田商店街","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E5%95%86%E5%BA%97%E8%A1%97"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E5%95%86%E5%BA%97%E8%A1%97"]},{"time":null,"title":"晚餐: 湖龍酒店","notes":["最遲7點半"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"]}]},{"date":"2026-12-03","weekday":"四","region":"東京","items":[{"time":null,"title":"男朋友早早起身影相","notes":[],"links":[],"places":[],"maps":[]},{"time":"0800-0900","title":"早餐: 湖龍酒店","notes":["0700-0900"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"]},{"time":"0900","title":"湖龍酒店送河口湖站 / 坐周遊巴士都可以","notes":["提前預約 0800-1000"],"links":[],"places":[{"name":"河口湖駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"]},{"time":"0930-1135","title":"河口湖車站(2號乘車處)>東京車站日本橋口","notes":["3/11 買飛:\nhttps://willer-travel.com/tw/bus_search/tokyo/all/yamanashi/fujikawaguchiko/"],"links":["https://willer-travel.com/tw/bus_search/tokyo/all/yamanashi/fujikawaguchiko/"],"places":[{"name":"河口湖駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"},{"name":"東京駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"]},{"time":"1145","title":"行李放locker>行東京站一番街","notes":["行李放locker:\nhttps://www.klook.com/zh-HK/blog/tokyo-luggage-storage-locker/\nhttps://japantravel.navitime.com/zh-tw/area/jp/guide/NTJhowto0078-zh-tw/"],"links":["https://www.klook.com/zh-HK/blog/tokyo-luggage-storage-locker/","https://japantravel.navitime.com/zh-tw/area/jp/guide/NTJhowto0078-zh-tw/"],"places":[{"name":"東京駅一番街","url":"https://maps.app.goo.gl/fbTe1Nk1vo9hymkV7"},{"name":"東京駅ロッカー","url":"https://maps.app.goo.gl/8U5hw8UCFwo9FjMa9"}],"maps":["https://maps.app.goo.gl/fbTe1Nk1vo9hymkV7","https://maps.app.goo.gl/8U5hw8UCFwo9FjMa9"]},{"time":null,"title":"Lunch: The Front Room Deli Restaurant Marunouchi(0900-2100) / 空之色拉麵 (0900/2230)","notes":[],"links":[],"places":[{"name":"The Front Room","url":"https://maps.app.goo.gl/xyuJdp8spVoUvjfG8"},{"name":"空之色拉麵","url":"https://maps.app.goo.gl/sQ3mfJwWtvx4c7oC8"}],"maps":["https://maps.app.goo.gl/xyuJdp8spVoUvjfG8","https://maps.app.goo.gl/sQ3mfJwWtvx4c7oC8"]},{"time":"1500-1600","title":"去東京日比谷雷姆酒店 (remm Hibiya)放行李","notes":["東京車站>日比谷A6/有樂町/銀座C1"],"links":[],"places":[{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"}],"maps":["https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"]},{"time":"1600-2200","title":"行銀座 (mont-bell 2100 / 伊東屋 2000 / GINZA SIX 2030 / 無印 2100 / Loft 2100 / BicCamera 2200)","notes":[],"links":[],"places":[{"name":"mont-bell 銀座","url":"https://www.google.com/maps/search/?api=1&query=mont-bell%20%E9%8A%80%E5%BA%A7"},{"name":"伊東屋 銀座","url":"https://www.google.com/maps/search/?api=1&query=%E4%BC%8A%E6%9D%B1%E5%B1%8B%20%E9%8A%80%E5%BA%A7"},{"name":"GINZA SIX","url":"https://www.google.com/maps/search/?api=1&query=GINZA%20SIX"},{"name":"無印良品 銀座","url":"https://www.google.com/maps/search/?api=1&query=%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81%20%E9%8A%80%E5%BA%A7"},{"name":"Loft 銀座","url":"https://www.google.com/maps/search/?api=1&query=Loft%20%E9%8A%80%E5%BA%A7"},{"name":"BicCamera 有楽町","url":"https://www.google.com/maps/search/?api=1&query=BicCamera%20%E6%9C%89%E6%A5%BD%E7%94%BA"}],"maps":["https://www.google.com/maps/search/?api=1&query=mont-bell%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=%E4%BC%8A%E6%9D%B1%E5%B1%8B%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=GINZA%20SIX","https://www.google.com/maps/search/?api=1&query=%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=Loft%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=BicCamera%20%E6%9C%89%E6%A5%BD%E7%94%BA"]},{"time":null,"title":"晚餐: 睇google map","notes":[],"links":[],"places":[],"maps":[]}]},{"date":"2026-12-04","weekday":"五","region":"東京","items":[{"time":null,"title":"早餐: 睇google map","notes":[],"links":[],"places":[],"maps":[]},{"time":"0900-1100","title":"明治神宮外苑睇銀杏","notes":["青山一丁目下車4號出口"],"links":[],"places":[{"name":"明治神宮外苑 いちょう並木","url":"https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"}],"maps":["https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"]},{"time":"1100-1200","title":"Lunch: Conveyor Kaiten Sushi Ginza Onodera HONTEN(10點開) / BASO OMOTESANDO(1130開) / Eggs 'n Things Harajuku Store(8點開)","notes":[],"links":[],"places":[{"name":"銀座おのでら","url":"https://maps.app.goo.gl/qGkzdrsYS8AGom89A"},{"name":"BASO OMOTESANDO","url":"https://maps.app.goo.gl/MpiBj3x3xRi92erB6"},{"name":"Eggs 'n Things 原宿","url":"https://maps.app.goo.gl/HGM5nmEh3mCYUiQg9"}],"maps":["https://maps.app.goo.gl/qGkzdrsYS8AGom89A","https://maps.app.goo.gl/MpiBj3x3xRi92erB6","https://maps.app.goo.gl/HGM5nmEh3mCYUiQg9"]},{"time":"1200-1530","title":"表參道>裏原宿>原宿步行道","notes":[],"links":[],"places":[{"name":"表参道","url":"https://www.google.com/maps/search/?api=1&query=%E8%A1%A8%E5%8F%82%E9%81%93"},{"name":"裏原宿","url":"https://www.google.com/maps/search/?api=1&query=%E8%A3%8F%E5%8E%9F%E5%AE%BF"},{"name":"竹下通り","url":"https://www.google.com/maps/search/?api=1&query=%E7%AB%B9%E4%B8%8B%E9%80%9A%E3%82%8A"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E8%A1%A8%E5%8F%82%E9%81%93","https://www.google.com/maps/search/?api=1&query=%E8%A3%8F%E5%8E%9F%E5%AE%BF","https://www.google.com/maps/search/?api=1&query=%E7%AB%B9%E4%B8%8B%E9%80%9A%E3%82%8A"]},{"time":"1545-1800","title":"澀谷 SKY (pending, 未必去)","notes":["1620左右日落,日落前 30 至 45 分鐘 的時段入場較好","19/11買飛4pm （已隱藏）:\nhttps://webket.jp/pc/ticket/itemdetail?fc=00396&ac=8001&igc=0029"],"links":["https://webket.jp/pc/ticket/itemdetail?fc=00396&ac=8001&igc=0029"],"places":[{"name":"Shibuya Sky","url":"https://maps.app.goo.gl/djUvUcaHfPc7uVtk8"}],"maps":["https://maps.app.goo.gl/djUvUcaHfPc7uVtk8"]},{"time":"1800-1900","title":"晚餐:鴨to蔥(0900-0400) / 焼肉ホルモン 新井屋 渋谷 (1700-2300)","notes":[],"links":[],"places":[{"name":"鴨to葱 渋谷","url":"https://maps.app.goo.gl/CVSZCWPW12NruiAt7"},{"name":"新井屋 渋谷","url":"https://maps.app.goo.gl/HRhQ8xjS8MGFaD3q6"}],"maps":["https://maps.app.goo.gl/CVSZCWPW12NruiAt7","https://maps.app.goo.gl/HRhQ8xjS8MGFaD3q6"]},{"time":"1900-2100","title":"Shibuya 109(2100關)>mont-bell 澀谷店(2100關)","notes":["mont-bell 可去其他分店"],"links":[],"places":[{"name":"Shibuya 109","url":"https://maps.app.goo.gl/DVkbeAvW56yLjGUT6"},{"name":"mont-bell 渋谷","url":"https://maps.app.goo.gl/pxsuWnnQ7C8uea8t8"}],"maps":["https://maps.app.goo.gl/DVkbeAvW56yLjGUT6","https://maps.app.goo.gl/pxsuWnnQ7C8uea8t8"]},{"time":null,"title":"返東京日比谷雷姆酒店 (remm Hibiya)","notes":[],"links":[],"places":[{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"}],"maps":["https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"]}]},{"date":"2026-12-05","weekday":"六","region":"酒酒井・成田","items":[{"time":"0730出發","title":"早餐: 睇google map","notes":[],"links":[],"places":[],"maps":[]},{"time":"0930出發","title":"日比谷雷姆飯店>東京車站>東京八重洲巴士總站地下Ａ>A02 號月台 (10:20開車)","notes":["交通:\nhttps://www.premiumoutlets.co.jp/en/shisui/access/bus_schedule_root03.html","早15MINS 等bus(非預約制), IC卡/信用卡比$1300yen下巴士時支付,bus有行李艙"],"links":["https://www.premiumoutlets.co.jp/en/shisui/access/bus_schedule_root03.html"],"places":[{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"},{"name":"東京駅八重洲バスのりば","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85%E5%85%AB%E9%87%8D%E6%B4%B2%E3%83%90%E3%82%B9%E3%81%AE%E3%82%8A%E3%81%B0"}],"maps":["https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6","https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85%E5%85%AB%E9%87%8D%E6%B4%B2%E3%83%90%E3%82%B9%E3%81%AE%E3%82%8A%E3%81%B0"]},{"time":"1120到","title":"酒酒井PREMIUM OUTLETS","notes":[],"links":[],"places":[{"name":"酒々井プレミアムアウトレット","url":"https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"}],"maps":["https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"]},{"time":"1200","title":"Lunch: OUTLETS","notes":[],"links":[],"places":[{"name":"酒々井プレミアムアウトレット","url":"https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"}],"maps":["https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"]},{"time":"1530-1605","title":"15:45開車 Outlets > 成田T2","notes":["https://www.premiumoutlets.co.jp/en/shisui/access/bus_schedule_root02.html#bus01","IC卡/信用卡比$500yen上巴士時支付"],"links":["https://www.premiumoutlets.co.jp/en/shisui/access/bus_schedule_root02.html#bus01"],"places":[{"name":"成田空港第2ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]},{"time":null,"title":"晚餐: 機埸","notes":[],"links":[],"places":[{"name":"成田空港第2ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]},{"time":"1900-2325","title":"UO647 成田T2>香港T1","notes":[],"links":[],"places":[{"name":"成田空港第2ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]}]}]};

const STORAGE_KEY = "japan-trip-last-day";
const WEATHER_CACHE_KEY = "japan-trip-weather-v1";

const CAT = {
  flight: { icon: "✈️", label: "交通" },
  transport: { icon: "🚃", label: "交通" },
  hotel: { icon: "🏨", label: "住宿" },
  food: { icon: "🍽️", label: "用餐" },
  sight: { icon: "🗻", label: "景點" },
  shop: { icon: "🛍️", label: "購物" },
  note: { icon: "⚠️", label: "注意" },
  other: { icon: "📌", label: "行程" },
};

const WMO = {
  0: ["☀️", "晴"],
  1: ["🌤", "大致晴"],
  2: ["⛅", "少雲"],
  3: ["☁️", "陰"],
  45: ["🌫", "霧"],
  48: ["🌫", "霧"],
  51: ["🌦", "毛毛雨"],
  53: ["🌦", "毛毛雨"],
  55: ["🌧", "毛毛雨"],
  61: ["🌧", "小雨"],
  63: ["🌧", "雨"],
  65: ["🌧", "大雨"],
  71: ["🌨", "小雪"],
  73: ["🌨", "雪"],
  75: ["❄️", "大雪"],
  80: ["🌦", "陣雨"],
  81: ["🌧", "陣雨"],
  82: ["⛈", "強陣雨"],
  95: ["⛈", "雷雨"],
};

function categorize(title, time) {
  const t = (title || "") + " " + (time || "");
  const lower = t.toLowerCase();
  if (/注意|pass|周遊券/.test(t) && /注意|今日|可以使用|周遊/.test(t)) return "note";
  if (/uo\d+|飛機|機場|成田|羽田|航班/i.test(lower)) return "flight";
  if (/出發|去|回程|巴士|纜車|ropeway|cruise|遊船|車站|locker|步行|坐|開車|乘車|路線|outlet.*->|->|＞|>/.test(t) &&
      !/lunch|dinner|早餐|晚餐|食|餐廳/i.test(lower)) {
    if (/airbnb|飯店|酒店|inn|hotel|yutowa|湖龍|雷姆|remm|東橫|check\s*in/i.test(lower)) return "hotel";
    return "transport";
  }
  if (/airbnb|飯店|酒店|inn|hotel|yutowa|湖龍|雷姆|remm|東橫|check\s*in|放行李|返.*酒店/i.test(lower)) return "hotel";
  if (/lunch|dinner|早餐|晚餐|宵夜|食|餐廳|sushi|焼肉|炸|豆腐|便利店|deli|onodera|鴨|蔥/i.test(lower)) return "food";
  if (/outlet|購物|mont-bell|伊東屋|ginza|渋谷|109|銀座|一番街|商業街|shopping/i.test(lower)) return "shop";
  if (/美術館|神社|公園|神宮|sky|大涌谷|蘆之湖|河口湖|箱根|原宿|表參道|銀杏|打卡|影相|景|纜車|ropeway|cruise|遊船/i.test(lower)) return "sight";
  if (/注意/.test(t)) return "note";
  return "other";
}

function formatDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${parseInt(m, 10)}月${parseInt(d, 10)}日`;
}

function formatTime(t) {
  if (!t) return null;
  const s = String(t).trim();
  if (/注意/i.test(s)) return { text: s, warn: true };
  const range = s.match(/^(\d{3,4})\s*[-–—]\s*(\d{3,4})$/);
  if (range) {
    const fmt = (x) => {
      const n = x.padStart(4, "0");
      return n.slice(0, 2) + ":" + n.slice(2);
    };
    return { text: fmt(range[1]) + "–" + fmt(range[2]), warn: false };
  }
  const range2 = s.match(/^(\d{1,2}:?\d{0,2})\s*[-–—]\s*(\d{1,2}:?\d{0,2})$/);
  if (range2) {
    const fmt = (x) => {
      if (x.includes(":")) return x;
      const n = x.padStart(4, "0");
      return n.slice(0, 2) + ":" + n.slice(2);
    };
    return { text: fmt(range2[1]) + "–" + fmt(range2[2]), warn: false };
  }
  const single = s.match(/^(\d{3,4})$/);
  if (single) {
    const n = single[1].padStart(4, "0");
    return { text: n.slice(0, 2) + ":" + n.slice(2), warn: false };
  }
  return { text: s, warn: /注意/.test(s) };
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function linkLabel(url) {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");
    if (host.includes("klook")) return "Klook";
    if (host.includes("hakonenavi")) return "箱根周遊券官網";
    if (host.includes("fujikyubus") || url.endsWith(".pdf")) return "路線地圖 PDF";
    if (host.includes("google") || host.includes("goo.gl")) return "Google 地圖";
    if (host.includes("tobu-bus") || host.includes("bus") || host.includes("willer") || host.includes("toyoko-inn-bus")) return "巴士時刻／預約";
    if (host.includes("premiumoutlets") || host.includes("outlet")) return "Outlet 資訊";
    if (host.includes("webket")) return "門票";
    return host;
  } catch {
    return "開啟連結";
  }
}

function itemPlaces(item) {
  if (item.places && item.places.length) return item.places;
  const maps = item.maps || [];
  return maps.map((url, i) => ({ name: maps.length > 1 ? `地圖 ${i + 1}` : "地圖", url }));
}

function placeButtonsHtml(places) {
  if (!places || !places.length) return "";
  return places
    .map(
      (p) =>
        `<a class="btn btn-place" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">📍 ${escapeHtml(p.name)}</a>`
    )
    .join("");
}

/* —— State —— */
let currentDay = 0;
let searchQuery = "";

function init() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved !== null) {
    const n = parseInt(saved, 10);
    if (!isNaN(n) && n >= 0 && n < TRIP_DATA.days.length) currentDay = n;
  }

  bindNav();
  renderHome();
  renderFoliage();
  renderLights();
  renderPasses();
  renderDayPills();
  renderItinerary();
  bindSearch();
  bindLightbox();
  loadWeather();
  showView("home");
}

function bindNav() {
  document.querySelectorAll(".nav-tab").forEach((btn) => {
    btn.addEventListener("click", () => showView(btn.dataset.view));
  });
}

function showView(name) {
  document.querySelectorAll(".view").forEach((v) => v.classList.toggle("active", v.id === "view-" + name));
  document.querySelectorAll(".nav-tab").forEach((t) => t.classList.toggle("active", t.dataset.view === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function weatherEmoji(code) {
  const w = WMO[code] || WMO[Math.floor(code / 10) * 10] || ["🌤", "天氣"];
  return w;
}

async function loadWeather() {
  const slot = document.getElementById("weather-slot");
  if (!slot) return;

  const todayKey = new Date().toISOString().slice(0, 10);
  try {
    const cached = sessionStorage.getItem(WEATHER_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.day === todayKey && parsed.cards) {
        renderWeatherCards(slot, parsed.cards);
        return;
      }
    }
  } catch (_) {}

  slot.innerHTML = `<div class="weather-loading">天氣載入中…</div>`;

  const regions = TRIP_DATA.weather_regions || [];
  // Group unique lat/lon
  const unique = [];
  const keyToIdx = {};
  regions.forEach((r) => {
    const k = `${r.lat},${r.lon}`;
    if (!(k in keyToIdx)) {
      keyToIdx[k] = unique.length;
      unique.push({ lat: r.lat, lon: r.lon });
    }
  });

  try {
    const results = await Promise.all(
      unique.map(({ lat, lon }) =>
        fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo&start_date=2026-11-28&end_date=2026-12-05`
        ).then((res) => {
          if (!res.ok) throw new Error("weather http " + res.status);
          return res.json();
        })
      )
    );

    const cards = regions.map((r) => {
      const idx = keyToIdx[`${r.lat},${r.lon}`];
      const data = results[idx];
      const dates = data.daily.time;
      const di = dates.indexOf(r.date);
      if (di < 0) return null;
      const code = data.daily.weathercode[di];
      const [emoji, label] = weatherEmoji(code);
      return {
        date: r.date,
        region: r.region,
        emoji,
        label,
        tmax: Math.round(data.daily.temperature_2m_max[di]),
        tmin: Math.round(data.daily.temperature_2m_min[di]),
      };
    }).filter(Boolean);

    try {
      sessionStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify({ day: todayKey, cards }));
    } catch (_) {}
    renderWeatherCards(slot, cards);
  } catch (err) {
    slot.innerHTML = `<div class="weather-fallback">☁️ 天氣需連網更新<br><span class="weather-fallback-sub">連上網路後重新整理即可顯示預報</span></div>`;
  }
}

function renderWeatherCards(slot, cards) {
  slot.innerHTML = `
    <h3 class="section-title">天氣小卡 <span class="badge">Open-Meteo</span></h3>
    <div class="weather-grid">
      ${cards
        .map(
          (c) => `
        <div class="weather-card">
          <div class="weather-date">${formatDate(c.date)}</div>
          <div class="weather-region">${escapeHtml(c.region)}</div>
          <div class="weather-emoji">${c.emoji}</div>
          <div class="weather-label">${escapeHtml(c.label)}</div>
          <div class="weather-temp"><span class="tmax">${c.tmax}°</span><span class="tsep">/</span><span class="tmin">${c.tmin}°</span></div>
        </div>`
        )
        .join("")}
    </div>
    <p class="weather-note">預報會隨時間更新；出發前請再確認一次。</p>
  `;
}

function renderHome() {
  const trip = TRIP_DATA.trip;
  const days = TRIP_DATA.days;
  const el = document.getElementById("view-home");

  const flightsHtml = (trip.flights || [])
    .map(
      (f) => `
    <div class="flight">
      <span class="flight-code">${escapeHtml(f.code)}</span>
      <div class="flight-detail">
        <div class="flight-route">${escapeHtml(f.from)} → ${escapeHtml(f.to)}</div>
        <div class="flight-meta">${formatDate(f.date)}　${escapeHtml(f.time)}</div>
      </div>
    </div>`
    )
    .join("");

  const dayChips = days
    .map((d, i) => `
      <button type="button" class="day-chip" data-day="${i}">
        <div class="d-num">第 ${i + 1} 天・${escapeHtml(d.weekday)}</div>
        <div class="d-date">${formatDate(d.date)}</div>
        <div class="d-region">${escapeHtml(d.region || "")}</div>
      </button>`)
    .join("");

  const gallery = (TRIP_DATA.overview_images || [])
    .map(
      (src, i) => `
    <button type="button" class="gallery-thumb" data-src="${escapeHtml(src)}" aria-label="概覽圖片 ${i + 1}">
      <img src="${escapeHtml(src)}" alt="行程概覽圖 ${i + 1}" loading="lazy" />
    </button>`
    )
    .join("");

  el.innerHTML = `
    <div class="hero-card">
      <div class="hero-dates">📅 ${formatDate(trip.start)} ～ ${formatDate(trip.end)}</div>
      <h2>${escapeHtml(trip.title)}</h2>
      <p class="hero-sub">${escapeHtml(trip.subtitle || "")}</p>
      <div class="stat-row">
        <div class="stat"><div class="num">${days.length}</div><div class="label">天行程</div></div>
        <div class="stat"><div class="num">${(trip.flights || []).length}</div><div class="label">航班</div></div>
        <div class="stat"><div class="num">${Object.keys(TRIP_DATA.passes || {}).length}</div><div class="label">周遊券</div></div>
      </div>
      <div class="flight-list">${flightsHtml}</div>
    </div>

    <div id="weather-slot"><div class="weather-loading">天氣載入中…</div></div>

    <h3 class="section-title">按日瀏覽 <span class="badge">${days.length} 天</span></h3>
    <div class="day-grid">${dayChips}</div>

    <h3 class="section-title">行程概覽圖</h3>
    <div class="gallery">${gallery}</div>
  `;

  el.querySelectorAll(".day-chip").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentDay = parseInt(btn.dataset.day, 10);
      persistDay();
      renderDayPills();
      renderItinerary();
      showView("itinerary");
    });
  });

  el.querySelectorAll(".gallery-thumb").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(btn.dataset.src));
  });
}

function renderFoliage() {
  const el = document.getElementById("view-foliage");
  if (!el) return;
  const spots = TRIP_DATA.foliage || [];
  el.innerHTML = `
    <div class="hero-card" style="margin-bottom:16px">
      <h2>🍁 紅葉位置</h2>
      <p class="hero-sub">配合本次行程（11/28–12/05）。見頃會隨天氣變動，出發前請再確認。</p>
    </div>
    <div class="spot-grid">
      ${spots
        .map(
          (s) => `
        <article class="spot-card foliage">
          <div class="spot-badge">🍁 ${escapeHtml(s.peak)}</div>
          <h3>${escapeHtml(s.name)}</h3>
          <p class="spot-note">${escapeHtml(s.note)}</p>
          <div class="spot-tip">💡 ${escapeHtml(s.tip)}</div>
          <div class="spot-actions">${placeButtonsHtml(s.places)}</div>
        </article>`
        )
        .join("")}
    </div>
  `;
}

function renderLights() {
  const el = document.getElementById("view-lights");
  if (!el) return;
  const spots = TRIP_DATA.lights || [];
  el.innerHTML = `
    <div class="hero-card" style="margin-bottom:16px">
      <h2>✨ 東京燈飾</h2>
      <p class="hero-sub">配合 12/3–12/4 東京日程與 remm Hibiya 酒店位置。時段以官方為準。</p>
    </div>
    <div class="spot-grid">
      ${spots
        .map(
          (s) => `
        <article class="spot-card lights">
          <div class="spot-badge">✨ ${escapeHtml(s.period)}</div>
          <h3>${escapeHtml(s.name)}</h3>
          <div class="spot-meta-row">
            ${s.hours ? `<span class="chip">🕒 ${escapeHtml(s.hours)}</span>` : ""}
            ${s.fee ? `<span class="chip">${escapeHtml(s.fee)}</span>` : ""}
            ${s.theme ? `<span class="chip">${escapeHtml(s.theme)}</span>` : ""}
          </div>
          <p class="spot-note">${escapeHtml(s.note)}</p>
          <div class="spot-tip">💡 ${escapeHtml(s.tip)}</div>
          <div class="spot-actions">${placeButtonsHtml(s.places)}</div>
        </article>`
        )
        .join("")}
    </div>
  `;
}

function renderPasses() {
  const el = document.getElementById("view-passes");
  const passes = TRIP_DATA.passes || {};

  const cards = Object.entries(passes)
    .map(([key, p]) => {
      const actions = [];
      if (p.url) {
        actions.push(
          `<a class="btn btn-pass" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">開啟官網／購買</a>`
        );
      }
      if (p.map_pdf) {
        actions.push(
          `<a class="btn btn-link" href="${escapeHtml(p.map_pdf)}" target="_blank" rel="noopener noreferrer">📄 路線地圖 PDF</a>`
        );
      }
      const img = p.image
        ? `<button type="button" class="pass-image-btn" data-src="${escapeHtml(p.image)}" aria-label="放大查看 ${escapeHtml(p.name)}">
            <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.name)}" loading="lazy" />
            <span class="pass-zoom-hint">點擊放大</span>
          </button>`
        : "";
      return `
      <article class="pass-card">
        ${img}
        <div class="pass-body">
          <h3>${escapeHtml(p.name)}</h3>
          <p>${escapeHtml(p.note || "")}</p>
          <div class="pass-actions">${actions.join("")}</div>
        </div>
      </article>`;
    })
    .join("");

  el.innerHTML = `
    <div class="hero-card" style="margin-bottom:16px">
      <h2>周遊券</h2>
      <p class="hero-sub">箱根與河口湖周遊券資訊、購買連結與地圖 · 點圖片可放大</p>
    </div>
    <div class="pass-grid">${cards}</div>
  `;

  el.querySelectorAll(".pass-image-btn").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(btn.dataset.src));
  });
}

function renderDayPills() {
  const scroller = document.getElementById("day-scroller");
  if (!scroller) return;
  scroller.innerHTML = TRIP_DATA.days
    .map((d, i) => {
      const active = i === currentDay ? "active" : "";
      return `<button type="button" class="day-pill ${active}" data-day="${i}">D${i + 1}・${escapeHtml(d.weekday)} ${escapeHtml(d.region || "")}</button>`;
    })
    .join("");

  scroller.querySelectorAll(".day-pill").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentDay = parseInt(btn.dataset.day, 10);
      persistDay();
      renderDayPills();
      renderItinerary();
      btn.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    });
  });
}

function persistDay() {
  try {
    localStorage.setItem(STORAGE_KEY, String(currentDay));
  } catch (_) {}
}

function bindSearch() {
  const input = document.getElementById("search-input");
  if (input) {
    input.addEventListener("input", () => {
      searchQuery = input.value.trim().toLowerCase();
      applyFilters();
    });
  }
}

function renderItinerary() {
  const day = TRIP_DATA.days[currentDay];
  if (!day) return;

  const header = document.getElementById("day-header");
  header.innerHTML = `
    <div class="day-header-left">
      <h2>第 ${currentDay + 1} 天・星期${escapeHtml(day.weekday)}</h2>
      <div class="meta">${formatDate(day.date)}　·　${escapeHtml(day.region || "")}　·　${day.items.length} 項行程</div>
    </div>
    <span class="progress-pill">第 ${currentDay + 1} / ${TRIP_DATA.days.length} 天</span>
  `;

  const timeline = document.getElementById("timeline");
  timeline.innerHTML = day.items
    .map((item, idx) => {
      const cat = CAT[categorize(item.title, item.time)] || CAT.other;
      const timeInfo = formatTime(item.time);
      const notes = (item.notes || []).filter((n) => n && String(n).trim()).join("\n");
      const places = itemPlaces(item);
      const links = item.links || [];

      const timeHtml = timeInfo
        ? `<span class="tl-time${timeInfo.warn ? " warn" : ""}">${escapeHtml(timeInfo.text)}</span>`
        : "";

      const placeBtns = placeButtonsHtml(places);
      const linkBtns = links
        .map(
          (url) =>
            `<a class="btn btn-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">🔗 ${escapeHtml(linkLabel(url))}</a>`
        )
        .join("");

      const actions =
        placeBtns || linkBtns
          ? `<div class="tl-actions">${placeBtns}${linkBtns}</div>`
          : "";

      const titleHtml =
        places.length === 1
          ? `<a class="tl-title tl-title-link" href="${escapeHtml(places[0].url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.title || "（未命名）")} <span class="map-chip">地圖</span></a>`
          : `<div class="tl-title">${escapeHtml(item.title || "（未命名）")}</div>`;

      const searchBlob = [item.title, notes, item.time, ...places.map((p) => p.name)]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return `
      <article class="tl-item" data-idx="${idx}" data-search="${escapeHtml(searchBlob)}">
        <div class="tl-dot" title="${escapeHtml(cat.label)}">${cat.icon}</div>
        <div class="tl-card">
          ${timeHtml}
          ${titleHtml}
          ${notes ? `<div class="tl-notes">${escapeHtml(notes)}</div>` : ""}
          ${actions}
        </div>
      </article>`;
    })
    .join("");

  timeline.querySelectorAll(".tl-item").forEach((el, i) => {
    el.style.animationDelay = `${Math.min(i * 0.04, 0.4)}s`;
  });

  applyFilters();
}

function applyFilters() {
  const items = document.querySelectorAll("#timeline .tl-item");
  let visible = 0;
  items.forEach((el) => {
    const blob = el.dataset.search || "";
    const matchSearch = !searchQuery || blob.includes(searchQuery);
    el.classList.toggle("hidden", !matchSearch);
    if (matchSearch) visible++;
  });

  let empty = document.getElementById("filter-empty");
  if (visible === 0) {
    if (!empty) {
      empty = document.createElement("div");
      empty.id = "filter-empty";
      empty.className = "empty-state";
      empty.innerHTML = `<div class="icon">🔍</div><p>沒有符合條件的行程項目</p>`;
      document.getElementById("timeline").after(empty);
    }
  } else if (empty) {
    empty.remove();
  }
}

function bindLightbox() {
  const lb = document.getElementById("lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  closeBtn.addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(src) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = src;
  img.style.transform = "";
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
  lb.scrollTop = 0;
}

function closeLightbox() {
  const lb = document.getElementById("lightbox");
  lb.classList.remove("open");
  document.getElementById("lightbox-img").src = "";
  document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", init);
