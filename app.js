/* 日本之旅 App */
const TRIP_DATA = {"trip":{"title":"日本之旅","subtitle":"香港 ⇄ 東京・箱根・河口湖","start":"2026-11-28","end":"2026-12-05","flights":[{"code":"UO622","from":"香港 T2","to":"羽田 T3","time":"17:55–22:45","date":"2026-11-28"},{"code":"UO647","from":"成田 T2","to":"香港 T1","time":"19:00–23:25","date":"2026-12-05"}]},"passes":{"hakone":{"name":"箱根周遊券","note":"Klook 購買 3 日；建議 11/29–12/1；小田原→箱根湯本起可用；強羅M線去御殿場 Outlet 亦含","url":"https://www.hakonenavi.jp/transportation/ticket/freepass/","image":"assets/箱根pass_0_web.jpg"},"kawaguchiko":{"name":"河口湖周遊券","note":"2 日巴士通票、遊船、富士山全景纜車；不含東橫接駁、WILLER／高速巴士回東京、酒々井巴士","url":"https://www.klook.com/zh-HK/activity/132532-mt-fuji-pass/","map_pdf":"https://www.fujikyubus.co.jp/pdf/shuyu/omni_map_202604.pdf","image":"assets/河口pass_0_web.jpg"}},"overview_images":["assets/工作表2_0.png","assets/工作表2_1.jpg","assets/工作表2_2.png"],"weather_regions":[{"date":"2026-11-28","region":"東京・羽田","lat":35.55,"lon":139.78},{"date":"2026-11-29","region":"箱根","lat":35.23,"lon":139.07},{"date":"2026-11-30","region":"箱根","lat":35.23,"lon":139.07},{"date":"2026-12-01","region":"御殿場","lat":35.3,"lon":138.93},{"date":"2026-12-02","region":"河口湖","lat":35.5,"lon":138.76},{"date":"2026-12-03","region":"東京","lat":35.68,"lon":139.76},{"date":"2026-12-04","region":"東京","lat":35.68,"lon":139.76},{"date":"2026-12-05","region":"酒酒井・成田","lat":35.72,"lon":140.27}],"foliage":[{"name":"箱根美術館（強羅）","peak":"例年見頃：11月中旬～11月下旬（箱根町觀光協會）","note":"官方寫明庭園有逾200本紅葉；你行程 11/29 到強羅。見頃會隨天氣變動，出發前請再看官方紅葉情報。","tip":"配合行程：11/29","places":[{"name":"箱根美術館","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%BE%8E%E8%A1%93%E9%A4%A8"},{"name":"早雲山","url":"https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9"}],"sources":[{"label":"箱根町觀光協會・紅葉情報","url":"https://www.hakone.or.jp/1804"},{"label":"箱根美術館官方","url":"https://www.moaart.or.jp/hakone/"}]},{"name":"箱根湯本","peak":"例年：箱根較低處，紅葉較遲結束（觀光協會）","note":"箱根町觀光協會指湯本標高較低，是箱根最後仍可看紅葉的地區之一。11/29 上午到達可順便留意。","tip":"配合行程：11/29 上午","places":[{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"}],"sources":[{"label":"箱根町觀光協會・紅葉情報（湯本）","url":"https://www.hakone.or.jp/1804"}]},{"name":"元箱根／蘆之湖","peak":"例年色づき：11月上旬～中旬（觀光協會）","note":"官方寫元箱根約 11 月上旬至中旬開始轉色。你 11/30 會到元箱根／箱根神社；屆時可能已過高峰，仍可顺道看殘葉與湖景。","tip":"配合行程：11/30（可能偏尾聲）","places":[{"name":"箱根神社","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%A5%9E%E7%A4%BE"},{"name":"元箱根港","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9%E6%B8%AF"},{"name":"芦ノ湖","url":"https://www.google.com/maps/search/?api=1&query=%E8%8A%A6%E3%83%8E%E6%B9%96"}],"sources":[{"label":"箱根町觀光協會・紅葉情報（元箱根）","url":"https://www.hakone.or.jp/1804"}]},{"name":"河口湖・もみじ回廊（富士河口湖紅葉まつり）","peak":"2026 紅葉まつり：11/7–11/29；ライトアップ 日没～21:00","note":"富士河口湖町官方活動頁寫明 2026 年活動至 11/29。你 12/2 到訪時活動已結束；紅葉高峰多在 11 月上中旬，12 月初未必仍好看，請以出發前現地／官方更新為準。","tip":"行程日 12/2：可能已過盛期（如實標示）","places":[{"name":"もみじ回廊","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%20%E3%82%82%E3%81%BF%E3%81%98%E5%9B%9E%E5%BB%8A"}],"sources":[{"label":"富士河口湖町・紅葉まつり官方","url":"https://fujisan.ne.jp/news/6065/"},{"label":"山梨縣官方觀光・もみじ回廊","url":"https://www.yamanashi-kankou.jp/kankou/spot/p1_4534.html"}]},{"name":"新倉山淺間公園（忠霊塔）","peak":"例年紅葉：約 10 月下旬～11 月中旬（山梨縣觀光資訊）","note":"山梨縣官方景點頁有紅葉說明。你 12/2 到訪偏晚，重點多是塔與富士山取景；紅葉未必仍在盛期。","tip":"配合行程：12/2（紅葉或已偏晚）","places":[{"name":"新倉山浅間公園","url":"https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%80%89%E5%B1%B1%E6%B5%85%E9%96%93%E5%85%AC%E5%9C%92"},{"name":"下吉田駅","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E9%A7%85"}],"sources":[{"label":"山梨縣官方觀光・新倉山淺間公園","url":"https://www.yamanashi-kankou.jp/kankou/spot/p1_4919.html"},{"label":"富士吉田市官方景點頁","url":"https://www.fujiyoshida.net/spot/index.php?p=12"}]},{"name":"明治神宮外苑・銀杏並木","peak":"2026 見頃預期：11 月下旬～12 月上旬（日本氣象協會 tenki.jp）","note":"外苑官方有銀杏並木介紹；tenki.jp 2026 頁寫見頃預期為 11 月下旬至 12 月上旬。你 12/4 上午已排此處，時間吻合。","tip":"配合行程：12/4 上午","places":[{"name":"明治神宮外苑 いちょう並木","url":"https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"}],"sources":[{"label":"明治神宮外苑・銀杏並木官方","url":"https://www.meijijingugaien.jp/walk/sight/season.html"},{"label":"tenki.jp 2026 見頃資訊","url":"https://tenki.jp/kouyou/3/16/30688.html"}]}],"lights":[{"name":"六本木けやき坂イルミネーション","period":"2026/11/5–12/25","hours":"17:00–22:00（官方；初日／混雜時或會調整）","fee":"沿路觀賞免費","theme":"SNOW＆BLUE／約97萬燈","note":"森ビル官方新聞稿與 CHRISTMAS HILLS 特設站確認。約 400m けやき坂。","tip":"適合 12/3 或 12/4 晚上","places":[{"name":"六本木けやき坂","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%AD%E6%9C%AC%E6%9C%A8%E3%81%91%E3%82%84%E3%81%8D%E5%9D%82"}],"sources":[{"label":"森ビル官方新聞稿","url":"https://www.mori.co.jp/press/release/260930_1/"},{"label":"CHRISTMAS HILLS 2026 特設站","url":"https://www.christmas.hills-site.com/"}]},{"name":"丸の内イルミネーション（MARUNOUCHI BRIGHT HOLIDAY）","period":"仲通りイルミ：2026/11/12–2027/2/14","hours":"以官方當日公布為準","fee":"沿路觀賞免費","theme":"シャンパンゴールド（官方）","note":"Marunouchi.com 活動頁確認。近東京駅，12/3 銀座／東京駅行程可顺路。","tip":"適合 12/3 下午／晚上","places":[{"name":"丸の内仲通り","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%B8%E3%81%AE%E5%86%85%E4%BB%B2%E9%80%9A%E3%82%8A"}],"sources":[{"label":"Marunouchi.com 活動頁","url":"https://www.marunouchi.com/pickup/event/10727/"}]},{"name":"HIBIYA Magic Time Illumination 2026","period":"2026/11/12–2027/2/28","hours":"16:00–23:00","fee":"沿路／廣場觀賞（官方未列入場費）","theme":"日比谷ステップ広場等","note":"東京ミッドタウン日比谷官方活動頁確認。酒店 remm Hibiya 附近，回酒店最方便。","tip":"最適合每晚回日比谷酒店時顺路","places":[{"name":"東京ミッドタウン日比谷","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E3%83%9F%E3%83%83%E3%83%89%E3%82%BF%E3%82%A6%E3%83%B3%E6%97%A5%E6%AF%94%E8%B0%B7"}],"sources":[{"label":"東京ミッドタウン日比谷官方活動頁","url":"https://www.hibiya.tokyo-midtown.com/jp/event/7587/"}]},{"name":"MIDTOWN CHRISTMAS 2026（東京ミッドタウン）","period":"2026/11/26–12/25","hours":"以官方當日公布為準","fee":"園區觀賞為主（部分設施另計）","theme":"Midwinter Night’s Dream","note":"東京ミッドタウン官方新聞確認。可與六本木同晚合併。","tip":"適合 12/3–12/4 晚上（可選）","places":[{"name":"東京ミッドタウン","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E3%83%9F%E3%83%83%E3%83%89%E3%82%BF%E3%82%A6%E3%83%B3"}],"sources":[{"label":"東京ミッドタウン官方新聞","url":"https://www.tokyo-midtown.com/jp/news/8186/"}]}],"days":[{"date":"2026-11-28","weekday":"六","region":"東京・羽田","items":[{"time":"1755-2245","title":"UO622 香港T2 → 羽田T3","notes":["出發：香港國際機場 T2 17:55\n到達：羽田空港第3ターミナル 約22:45\n車程：約4小時50分（航班）\n車費：機票已含"],"links":[],"places":[{"name":"羽田空港第3ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC3%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC3%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]},{"time":"2230前","title":"出發前／機場領取 SIM（如已安排）","notes":["出發前於香港機場領取：1號客運大樓五層接機大堂 A 出口 A02 櫃檯（行程本原註）\n若改為羽田領取，以供應商確認為準"],"links":[],"places":[],"maps":[]},{"time":"2300-2325","title":"羽田T3 → 穴守稻荷 → Airbnb","notes":["出發：約23:00 羽田空港第3ターミナル（京急）\n到達：穴守稲荷駅 約23:05–23:10\n車程：約3分（京急空港線，約2站）\n上車地點：京急「羽田空港第3ターミナル」站\n車費：約 ¥200（IC／現金）\n之後步行約3分鐘到 Airbnb（Room 101）\n參考：駅探 穴守稲荷↔羽田第3ターミナル"],"links":[],"places":[{"name":"羽田空港第3ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC3%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"},{"name":"穴守稲荷駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85"},{"name":"Airbnb 附近","url":"https://maps.app.goo.gl/nJJUbeA4yhmTQiya6"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC3%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB","https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85","https://maps.app.goo.gl/nJJUbeA4yhmTQiya6"]},{"time":"2330後","title":"宵夜・便利店","notes":["建議抵達後附近便利店簡單解決\n建議離開便利店／回房：午夜前"],"links":[],"places":[],"maps":[]}]},{"date":"2026-11-29","weekday":"日","region":"箱根","items":[{"time":"注意","title":"今日起可用箱根周遊券（Klook 3日）","notes":["有效日建議：11/29・11/30・12/1\n由「小田原 → 箱根湯本」起，箱根區內指定交通寫「周遊券已含」\n京急穴守↔橫濱、JR／私鐵橫濱↔小田原 不在周遊券內，要付現金／IC","官方：https://www.hakonenavi.jp/transportation/ticket/freepass/"],"links":["https://www.hakonenavi.jp/transportation/ticket/freepass/"],"places":[],"maps":[]},{"time":"0730-0745","title":"Airbnb 出發 → 穴守稻荷駅","notes":["出發：約07:30 酒店／Airbnb\n到達：穴守稲荷駅 約07:40–07:45\n車程：步行約3–8分\n車費：免費（步行）"],"links":[],"places":[{"name":"Airbnb 附近","url":"https://maps.app.goo.gl/nJJUbeA4yhmTQiya6"},{"name":"穴守稲荷駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85"}],"maps":["https://maps.app.goo.gl/nJJUbeA4yhmTQiya6","https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85"]},{"time":"0745-0805","title":"穴守稻荷 → 橫濱（京急）","notes":["出發：約07:45 穴守稲荷駅\n到達：横浜駅 約08:05–08:10\n車程：約18–21分（經京急蒲田，多可直通／1次轉乘）\n上車地點：穴守稲荷駅（京急空港線）\n車費：約 ¥313–¥320（IC／票；駅探參考）\n※箱根周遊券不含此段"],"links":["https://ekitan.com/transit/fare/sf-3260/st-1510"],"places":[{"name":"穴守稲荷駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85"},{"name":"横浜駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%A8%AA%E6%B5%9C%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E6%A8%AA%E6%B5%9C%E9%A7%85"]},{"time":"0815-0910","title":"橫濱 → 小田原（JR 東海道線）","notes":["出發：約08:15 横浜駅（預留轉乘緩衝）\n到達：小田原駅 約09:05–09:15\n車程：約50–56分（普通／快速）\n上車地點：横浜駅 JR 東海道線／湘南新宿ライン月台（當日看板）\n車費：約 ¥1,034（IC）／¥1,040（票）\n※箱根周遊券不含此段\n參考：駅探 横浜↔小田原"],"links":["https://ekitan.com/transit/fare/sf-3260/st-1759"],"places":[{"name":"横浜駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%A8%AA%E6%B5%9C%E9%A7%85"},{"name":"小田原駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%A8%AA%E6%B5%9C%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85"]},{"time":"0920-0935","title":"小田原 → 箱根湯本（登山電車）","notes":["出發：約09:20 小田原駅\n到達：箱根湯本駅 約09:30–09:35\n車程：約14分\n上車地點：小田原駅 箱根登山電車月台\n車費：周遊券已含（一般票約 ¥360，今日不用付）\n參考：箱根ナビ／駅探"],"links":["https://www.hakonenavi.jp/hakone-tozan/"],"places":[{"name":"小田原駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85"},{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"]},{"time":"0935-1045","title":"箱根湯本 早餐","notes":["建議抵達：約09:35\n建議離開：約10:45\n選項：籠屋清次郎（炸魚餅，約09:30–18:00）／Grande Rivière（約10:00–18:00）／Hakone Teramisu（約10:00–17:00）\n地點：箱根湯本駅附近步行"],"links":[],"places":[{"name":"籠屋清次郎","url":"https://www.google.com/maps/search/?api=1&query=%E7%B1%A0%E5%B1%8B%E6%B8%85%E6%AC%A1%E9%83%8E%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC"},{"name":"Grande Rivière","url":"https://www.google.com/maps/search/?api=1&query=Grande%20Rivi%C3%A8re%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC"},{"name":"Hakone Teramisu","url":"https://www.google.com/maps/search/?api=1&query=Hakone%20Teramisu%20%E7%AE%B1%E6%A0%B9"},{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%B1%A0%E5%B1%8B%E6%B8%85%E6%AC%A1%E9%83%8E%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC","https://www.google.com/maps/search/?api=1&query=Grande%20Rivi%C3%A8re%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC","https://www.google.com/maps/search/?api=1&query=Hakone%20Teramisu%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"]},{"time":"1100-1140","title":"箱根湯本 → 強羅（登山電車）","notes":["出發：約11:00 箱根湯本駅\n到達：強羅駅 約11:35–11:40\n車程：約35–40分\n上車地點：箱根湯本駅 登山電車\n車費：周遊券已含"],"links":[],"places":[{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"]},{"time":"1145-1230","title":"Yutowa 飯店 check-in","notes":["出發：強羅駅 約11:45\n到達：酒店 約11:50–12:00\n車程：步行約5分\n車費：免費（步行）\n注意：私湯要排隊；行李可先寄放若未到入住時間"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"]},{"time":"1230-1345","title":"午餐：田むら銀かつ亭","notes":["建議抵達：約12:30\n建議離開：約13:45\n強羅附近；炸豆腐排老店"],"links":[],"places":[{"name":"田むら銀かつ亭","url":"https://www.google.com/maps/search/?api=1&query=%E7%94%B0%E3%82%80%E3%82%89%E9%8A%80%E3%81%8B%E3%81%A4%E4%BA%AD%20%E5%BC%B7%E7%BE%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%94%B0%E3%82%80%E3%82%89%E9%8A%80%E3%81%8B%E3%81%A4%E4%BA%AD%20%E5%BC%B7%E7%BE%85"]},{"time":"1400-1630","title":"箱根美術館／早雲山","notes":["建議抵達美術館：約14:00\n建議離開早雲山：約16:30\n強羅 → 早雲山：箱根登山纜車約10分\n上車地點：強羅駅 纜車のりば\n車費：周遊券已含\n可看紅葉庭園；日落前預留回酒店時間"],"links":[],"places":[{"name":"箱根美術館","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%BE%8E%E8%A1%93%E9%A4%A8"},{"name":"早雲山","url":"https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%BE%8E%E8%A1%93%E9%A4%A8","https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"]},{"time":"1730-1930","title":"晚餐：Yutowa 飯店","notes":["建議抵達餐廳：17:30 起\n建議離開／最遲入場：19:30（餐廳至21:00）\n半自助；在酒店內，無需交通費"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]}]},{"date":"2026-11-30","weekday":"一","region":"箱根","items":[{"time":"0730-0830","title":"早餐：Yutowa","notes":["建議抵達：07:30–08:00\n建議離開：約08:30\n酒店早餐時段約 07:30–09:30"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]},{"time":"0845-0915","title":"酒店 → 早雲山 → 空中纜車","notes":["出發：約08:45 酒店／強羅\n到達早雲山：約09:00–09:10\n車程：步行至強羅站約5分 + 纜車約10分\n上車地點：強羅駅 纜車 → 早雲山駅 轉箱根ロープウェイ\n車費：周遊券已含"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"},{"name":"早雲山","url":"https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9"},{"name":"箱根ロープウェイ","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6","https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"]},{"time":"0915-1030","title":"大涌谷","notes":["出發：早雲山 約09:15\n到達大涌谷：約09:25（纜車約8分）\n建議離開：約10:30\n車費：周遊券已含\n吃黑玉子；視火山氣體狀況可能限制步行區"],"links":[],"places":[{"name":"大涌谷","url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B6%8C%E8%B0%B7"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B6%8C%E8%B0%B7"]},{"time":"1030-1100","title":"大涌谷 → 桃源台（纜車）","notes":["出發：大涌谷 約10:30–10:40\n到達桃源台：約10:50–11:00\n車程：約15–20分（大涌谷→姥子→桃源台）\n上車地點：大涌谷駅 ロープウェイ\n車費：周遊券已含"],"links":[],"places":[{"name":"大涌谷","url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B6%8C%E8%B0%B7"},{"name":"桃源台","url":"https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B6%8C%E8%B0%B7","https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"]},{"time":"1125-1200","title":"蘆之湖遊船：桃源台 → 元箱根","notes":["建議乘船：11:25 或 12:00（行程本已知班次；實際以當日時刻表為準）\n出發：桃源台港\n到達：元箱根港 約30–40分後\n車程：約30–40分\n上車地點：桃源台 海賊船／觀光船碼頭\n車費：周遊券已含"],"links":["https://www.hakonenavi.jp/"],"places":[{"name":"芦ノ湖","url":"https://www.google.com/maps/search/?api=1&query=%E8%8A%A6%E3%83%8E%E6%B9%96"},{"name":"桃源台","url":"https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"},{"name":"元箱根","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E8%8A%A6%E3%83%8E%E6%B9%96","https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9"]},{"time":"1215-1330","title":"午餐（元箱根）","notes":["建議抵達：約12:15\n建議離開：約13:30\n選項：絹引の里（炸蝦・蕎麥）／Daimasa Motohakone（魚生飯）"],"links":[],"places":[{"name":"絹引の里","url":"https://www.google.com/maps/search/?api=1&query=%E7%B5%B9%E5%BC%95%E3%81%AE%E9%87%8C%20%E7%AE%B1%E6%A0%B9"},{"name":"Daimasa Motohakone","url":"https://www.google.com/maps/search/?api=1&query=Daimasa%20Motohakone"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%B5%B9%E5%BC%95%E3%81%AE%E9%87%8C%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=Daimasa%20Motohakone"]},{"time":"1330-1510","title":"箱根神社／九頭龍神社","notes":["建議抵達：約13:30\n建議離開：約15:10（配合回程船）\n元箱根港步行可到；打卡鳥居與湖景"],"links":[],"places":[{"name":"箱根神社","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%A5%9E%E7%A4%BE"},{"name":"九頭龍神社","url":"https://www.google.com/maps/search/?api=1&query=%E4%B9%9D%E9%A0%AD%E9%BE%8D%E7%A5%9E%E7%A4%BE%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%A5%9E%E7%A4%BE","https://www.google.com/maps/search/?api=1&query=%E4%B9%9D%E9%A0%AD%E9%BE%8D%E7%A5%9E%E7%A4%BE%20%E7%AE%B1%E6%A0%B9"]},{"time":"1515-1600","title":"遊船回程：元箱根 → 桃源台","notes":["建議乘船：15:15／15:55／16:30（行程本；以當日為準）\n出發：元箱根港\n到達：桃源台 約30–40分後\n上車地點：元箱根港\n車費：周遊券已含"],"links":[],"places":[{"name":"元箱根","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9"},{"name":"桃源台","url":"https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"]},{"time":"1600-1730","title":"桃源台 → 強羅／酒店","notes":["出發：桃源台 約16:00–16:30\n路線：纜車回早雲山 → 纜車／登山鐵道回強羅 → 步行回 Yutowa\n車程：合計約45–70分（含等候）\n車費：周遊券已含\n預留時間趕 17:30 酒店晚餐"],"links":[],"places":[{"name":"桃源台","url":"https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"},{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85","https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]},{"time":"1730-1930","title":"晚餐：Yutowa","notes":["建議抵達：17:30\n最遲入場：19:30\n酒店內；車費無需"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]}]},{"date":"2026-12-01","weekday":"二","region":"御殿場","items":[{"time":"0730-0845","title":"早餐＋退房：Yutowa","notes":["建議早餐：07:30–08:30\n建議退房離開酒店：約08:45\n步行至強羅駅約5分"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"]},{"time":"0900-0950","title":"強羅 → 御殿場 Outlet（M 路線巴士）","notes":["出發：強羅駅 建議乘 約09:00–09:10 班（行程本例：09:07／09:47 等；以箱根ナビ當日為準）\n到達：御殿場プレミアム・アウトレット 約35–45分後\n車程：約35–45分\n上車地點：強羅駅【3番のりば】M路線（經宮城野・仙石・乙女峠）\n車費：周遊券已含（箱根フリーパス指定區間；一般票約 ¥1,120）\n行李：Outlet 可寄物（行程本：YES）\n參考：https://odakyu-highway.jp/tenyu/ ・japan-guide Hakone Freepass"],"links":["https://www.hakonenavi.jp/transportation/station/gora/","https://odakyu-highway.jp/tenyu/"],"places":[{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"},{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"]},{"time":"1000-1200","title":"御殿場 Outlet 逛街（上午）","notes":["建議抵達：約10:00\n建議離開去午餐：約12:00\n箱根周遊券今日仍可用至區內巴士"],"links":[],"places":[{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"]},{"time":"1200-1330","title":"Outlet 午餐","notes":["建議抵達餐廳：約12:00\n建議離開：約13:30\n場內各餐廳"],"links":[],"places":[{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"]},{"time":"1330-1600","title":"Outlet 繼續逛街","notes":["建議離開 Outlet 去酒店：約16:00（視購物調整）"],"links":[],"places":[{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"]},{"time":"1600-1645","title":"Outlet → 御殿場駅 → 東橫 INN","notes":["出發：Outlet 約16:00\n① Outlet → 御殿場駅（箱根乙女口）：免費接駁／共用巴士（約每15分：:10/:25/:40/:55 等，以當場為準）\n車程：約10–15分\n車費：免費（Outlet 接駁）\n② 御殿場駅 → 東橫INN 御殿場駅前：步行約數分鐘\n車費：免費（步行）\n※若仍坐箱根區 M／天悠線回程相關段，周遊券已含；Outlet↔駅免費接駁本身也不另收"],"links":[],"places":[{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"},{"name":"御殿場駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85"},{"name":"東橫イン 御殿場駅前","url":"https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88","https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85","https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"]},{"time":"1700-1830","title":"Check-in 東橫 INN 御殿場駅前","notes":["建議抵達：約16:45–17:15\n建議離開去晚餐：約18:00"],"links":[],"places":[{"name":"東橫イン 御殿場駅前","url":"https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"}],"maps":["https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"]},{"time":"1800-2000","title":"晚餐（御殿場駅附近）","notes":["建議抵達：約18:00\n建議離開：約20:00\n選項：Charcoal BBQ Omura（有中文單）／附近居酒屋（行程本已 mark Google）"],"links":[],"places":[{"name":"Charcoal BBQ Omura","url":"https://www.google.com/maps/search/?api=1&query=Charcoal%20BBQ%20Omura%20%E5%BE%A1%E6%AE%BF%E5%A0%B4"}],"maps":["https://www.google.com/maps/search/?api=1&query=Charcoal%20BBQ%20Omura%20%E5%BE%A1%E6%AE%BF%E5%A0%B4"]}]},{"date":"2026-12-02","weekday":"三","region":"河口湖","items":[{"time":"0700-0800","title":"早餐（酒店／附近）","notes":["建議：07:00–08:00\n東橫 INN 或附近便利店／早餐店"],"links":[],"places":[],"maps":[]},{"time":"0800-0845","title":"東橫巴士：御殿場駅前 → 富士河口湖大橋（優先）","notes":["出發：建議預約 08:00 便（亦有約10:00／11:00／14:00 等；以預約站為準）\n到達：東橫INN 富士河口湖大橋 約08:45\n車程：約45分\n上車地點：東橫INN 御殿場駅前\n車費：東橫INN 住宿者接駁／Express Bus，預約制；一般對住客為免費（以預約頁確認）\n預約：https://reserve.toyoko-inn-bus.com/\n※不含於河口湖／箱根周遊券"],"links":["https://reserve.toyoko-inn-bus.com/","https://reserve.toyoko-inn-bus.com/pdf/timetable.pdf"],"places":[{"name":"東橫イン 御殿場駅前","url":"https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"},{"name":"東橫イン 富士河口湖大橋","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E6%A8%AA%E3%82%A4%E3%83%B3%20%E5%AF%8C%E5%A3%AB%E6%B2%B3%E5%8F%A3%E6%B9%96%E5%A4%A7%E6%A9%8B"}],"maps":["https://maps.app.goo.gl/Hh1jqj12YJCRws4HA","https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E6%A8%AA%E3%82%A4%E3%83%B3%20%E5%AF%8C%E5%A3%AB%E6%B2%B3%E5%8F%A3%E6%B9%96%E5%A4%A7%E6%A9%8B"]},{"time":"後備","title":"後備：御殿場駅 → 河口湖（富士急巴士）","notes":["若東橫巴士訂不到：\n上車地點：御殿場駅 富士山口 約1・2番巴士站\n車程：約70–100分（路線巴士）／特急約50分\n車費：路線巴士約 ¥1,750；特急御殿場ライナー約 ¥2,300（網上或較平）\n班次：約每小時有車（以富士急當日為準）\n參考：https://bus.fujikyu.co.jp/rosen/gotemba/"],"links":["https://bus.fujikyu.co.jp/rosen/gotemba/"],"places":[{"name":"御殿場駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85"},{"name":"河口湖駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"]},{"time":"0900","title":"啟用河口湖周遊券（Klook Mt Fuji Pass）","notes":["內容：2日巴士通票、遊船、富士山全景纜車等（以 Klook／官方說明為準）\n今日起巴士／纜車／遊船涵蓋段寫「周遊券已含」\n地圖 PDF：https://www.fujikyubus.co.jp/pdf/shuyu/omni_map_202604.pdf"],"links":["https://www.klook.com/zh-HK/activity/132532-mt-fuji-pass/","https://www.fujikyubus.co.jp/pdf/shuyu/omni_map_202604.pdf"],"places":[],"maps":[]},{"time":"0900-1000","title":"前往湖龍酒店（淺川巴士站）","notes":["出發：河口湖大橋／車站一帶 約09:00\n到達：湖龍ホテル（巴士「淺川」站下車）約09:30–10:00\n車程：周遊巴士約15–30分（視路線）\n上車地點：周遊巴士站（見 pass 地圖）\n車費：周遊券已含\n私人浴池約 ¥3,300；公共浴池免費"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"]},{"time":"1000-1130","title":"富士山全景纜車","notes":["建議抵達：約10:00–10:30\n建議離開：約11:30\n上車地點：富士山パノラマロープウェイ 山麓站\n車費：周遊券已含"],"links":[],"places":[{"name":"富士山パノラマロープウェイ","url":"https://www.google.com/maps/search/?api=1&query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E3%83%91%E3%83%8E%E3%83%A9%E3%83%9E%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E3%83%91%E3%83%8E%E3%83%A9%E3%83%9E%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"]},{"time":"1130-1300","title":"午餐：遊船碼頭附近","notes":["建議抵達：約11:30–12:00\n建議離開：約13:00\n河口湖遊覧船周邊餐廳"],"links":[],"places":[{"name":"河口湖遊覧船","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"]},{"time":"1300-1415","title":"河口湖遊覧船","notes":["建議乘船：約13:00–13:30\n車程：遊覧約20–30分（視航線）\n上車地點：河口湖遊覧船碼頭\n車費：周遊券已含"],"links":[],"places":[{"name":"河口湖遊覧船","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"]},{"time":"1430-1630","title":"新倉山淺間公園（下吉田）","notes":["出發：河口湖一帶 約14:30\n到達：下吉田駅／公園登山口 約15:00 前後\n車程：周遊巴士約20–40分\n上車地點：周遊巴士（往下吉田／富士山駅方向）\n下車：下吉田駅 → 步行上山約15–30分\n車費：周遊券已含（巴士段）\n※12月初紅葉或已偏晚，仍可拍塔與富士山"],"links":[],"places":[{"name":"新倉山浅間公園","url":"https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%80%89%E5%B1%B1%E6%B5%85%E9%96%93%E5%85%AC%E5%9C%92"},{"name":"下吉田駅","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%80%89%E5%B1%B1%E6%B5%85%E9%96%93%E5%85%AC%E5%9C%92","https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E9%A7%85"]},{"time":"1630-1730","title":"下吉田商業街","notes":["建議抵達：約16:30\n建議離開回酒店：約17:30\n下山後商店街散步"],"links":[],"places":[{"name":"下吉田商店街","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E5%95%86%E5%BA%97%E8%A1%97"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E5%95%86%E5%BA%97%E8%A1%97"]},{"time":"1800-1930","title":"晚餐：湖龍酒店","notes":["建議抵達：約18:00\n最遲：約19:30（行程本）\n回程巴士周遊券已含"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"]}]},{"date":"2026-12-03","weekday":"四","region":"東京","items":[{"time":"0600-0730","title":"早起影相（可選）","notes":["男朋友可早起影湖／富士山\n建議最遲07:30 回酒店吃早餐"],"links":[],"places":[],"maps":[]},{"time":"0800-0900","title":"早餐：湖龍酒店","notes":["建議：08:00–09:00（酒店約07:00–09:00）\n之後退房"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"]},{"time":"0900-0920","title":"湖龍 → 河口湖駅","notes":["出發：約09:00（可預約酒店送站 08:00–10:00，或以周遊巴士）\n到達：河口湖駅 約09:15–09:25\n車程：約10–20分\n上車地點：酒店／淺川巴士站\n車費：酒店接送依酒店規定；周遊巴士則周遊券已含"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"},{"name":"河口湖駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9","https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"]},{"time":"0930-1135","title":"高速巴士：河口湖駅 → 東京駅日本橋口","notes":["出發：河口湖駅【2號乘車處】約09:30（以已購票班次為準）\n到達：東京駅日本橋口 約11:35\n車程：約2小時–2小時10分\n上車地點：河口湖駅 2番のりば\n車費：約 ¥2,300（大人；富士急／WILLER 等；兒童約半價）\n※不含於河口湖周遊券\n購票：https://willer-travel.com/tw/bus_search/tokyo/all/yamanashi/fujikawaguchiko/\n參考：https://bus.fujikyu.co.jp/highway/fujisan/tokyo/"],"links":["https://willer-travel.com/tw/bus_search/tokyo/all/yamanashi/fujikawaguchiko/","https://bus.fujikyu.co.jp/highway/fujisan/tokyo/"],"places":[{"name":"河口湖駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"},{"name":"東京駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"]},{"time":"1145-1300","title":"行李 locker → 東京駅一番街","notes":["出發：日本橋口下車後約11:45\n先放 locker，再逛一番街\n建議離開一番街去午餐：約13:00\nlocker 費用另計（視尺寸約數百円）"],"links":["https://www.klook.com/zh-HK/blog/tokyo-luggage-storage-locker/","https://japantravel.navitime.com/zh-tw/area/jp/guide/NTJhowto0078-zh-tw/"],"places":[{"name":"東京駅ロッカー","url":"https://maps.app.goo.gl/8U5hw8UCFwo9FjMa9"},{"name":"東京駅一番街","url":"https://maps.app.goo.gl/fbTe1Nk1vo9hymkV7"}],"maps":["https://maps.app.goo.gl/8U5hw8UCFwo9FjMa9","https://maps.app.goo.gl/fbTe1Nk1vo9hymkV7"]},{"time":"1300-1430","title":"午餐（丸之内／一番街）","notes":["建議抵達：約13:00\n建議離開：約14:30\n選項：The Front Room Deli（約09:00–21:00）／空之色拉麵（約09:00–22:30）"],"links":[],"places":[{"name":"The Front Room","url":"https://maps.app.goo.gl/xyuJdp8spVoUvjfG8"},{"name":"空之色拉麵","url":"https://maps.app.goo.gl/sQ3mfJwWtvx4c7oC8"}],"maps":["https://maps.app.goo.gl/xyuJdp8spVoUvjfG8","https://maps.app.goo.gl/sQ3mfJwWtvx4c7oC8"]},{"time":"1500-1600","title":"東京駅 → remm Hibiya 放行李","notes":["出發：東京駅一帶 約15:00（先取 locker 行李）\n到達：remm Hibiya 約15:20–15:40\n車程：地鐵約10–15分\n上車地點：東京駅／有樂町／日比谷線等（可到日比谷 A6／有樂町／銀座 C1）\n車費：約 ¥178（IC；東京 Metro 短程）\n步行＋計程車亦可，車費另計"],"links":[],"places":[{"name":"東京駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"},{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85","https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"]},{"time":"1600-2100","title":"銀座逛街","notes":["建議抵達銀座：約16:00\n建議離開／晚餐：約19:00–21:00\n參考關門：mont-bell 21:00／伊東屋 20:00／GINZA SIX 20:30／無印・Loft 21:00／BicCamera 有樂町 22:00\n酒店步行可到銀座，車費可免"],"links":[],"places":[{"name":"mont-bell 銀座","url":"https://www.google.com/maps/search/?api=1&query=mont-bell%20%E9%8A%80%E5%BA%A7"},{"name":"伊東屋 銀座","url":"https://www.google.com/maps/search/?api=1&query=%E4%BC%8A%E6%9D%B1%E5%B1%8B%20%E9%8A%80%E5%BA%A7"},{"name":"GINZA SIX","url":"https://www.google.com/maps/search/?api=1&query=GINZA%20SIX"},{"name":"無印良品 銀座","url":"https://www.google.com/maps/search/?api=1&query=%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81%20%E9%8A%80%E5%BA%A7"},{"name":"Loft 銀座","url":"https://www.google.com/maps/search/?api=1&query=Loft%20%E9%8A%80%E5%BA%A7"},{"name":"BicCamera 有楽町","url":"https://www.google.com/maps/search/?api=1&query=BicCamera%20%E6%9C%89%E6%A5%BD%E7%94%BA"}],"maps":["https://www.google.com/maps/search/?api=1&query=mont-bell%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=%E4%BC%8A%E6%9D%B1%E5%B1%8B%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=GINZA%20SIX","https://www.google.com/maps/search/?api=1&query=%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=Loft%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=BicCamera%20%E6%9C%89%E6%A5%BD%E7%94%BA"]},{"time":"1900-2100","title":"晚餐（銀座／有樂町）","notes":["建議：約19:00–21:00\n以 Google Map 當日評價／排隊為準"],"links":[],"places":[],"maps":[]}]},{"date":"2026-12-04","weekday":"五","region":"東京","items":[{"time":"0800-0900","title":"早餐（酒店附近）","notes":["建議：08:00–09:00\n日比谷／有樂町一帶"],"links":[],"places":[],"maps":[]},{"time":"0900-0930","title":"remm → 明治神宮外苑（青山一丁目）","notes":["出發：約09:00 remm Hibiya\n到達：青山一丁目駅 4號出口 約09:20–09:30\n車程：地鐵約15–20分\n上車地點：日比谷／霞關等轉 銀座線或半藏門線至青山一丁目\n車費：約 ¥178（IC）"],"links":[],"places":[{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"},{"name":"明治神宮外苑 いちょう並木","url":"https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"}],"maps":["https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6","https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"]},{"time":"0930-1100","title":"明治神宮外苑 銀杏並木","notes":["建議抵達：約09:30\n建議離開：約11:00\n青山一丁目 4號出口出\n步行賞銀杏；12月上旬見頃預期吻合"],"links":[],"places":[{"name":"明治神宮外苑 いちょう並木","url":"https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"}],"maps":["https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"]},{"time":"1100-1230","title":"午餐（表參道／原宿方向）","notes":["建議抵達：約11:00–11:30\n建議離開：約12:30\n選項：銀座おのでら（10:00開）／BASO OMOTESANDO（11:30開）／Eggs 'n Things 原宿（08:00開）\n外苑 → 表參道：步行約15–25分或地鐵1站\n車費：步行免費；地鐵約 ¥178"],"links":[],"places":[{"name":"銀座おのでら","url":"https://maps.app.goo.gl/qGkzdrsYS8AGom89A"},{"name":"BASO OMOTESANDO","url":"https://maps.app.goo.gl/MpiBj3x3xRi92erB6"},{"name":"Eggs 'n Things 原宿","url":"https://maps.app.goo.gl/HGM5nmEh3mCYUiQg9"}],"maps":["https://maps.app.goo.gl/qGkzdrsYS8AGom89A","https://maps.app.goo.gl/MpiBj3x3xRi92erB6","https://maps.app.goo.gl/HGM5nmEh3mCYUiQg9"]},{"time":"1230-1545","title":"表參道 → 裏原宿 → 竹下通","notes":["建議開始：約12:30\n建議離開往澀谷：約15:45\n幾乎全程步行；無需車費"],"links":[],"places":[{"name":"表参道","url":"https://www.google.com/maps/search/?api=1&query=%E8%A1%A8%E5%8F%82%E9%81%93"},{"name":"裏原宿","url":"https://www.google.com/maps/search/?api=1&query=%E8%A3%8F%E5%8E%9F%E5%AE%BF"},{"name":"竹下通り","url":"https://www.google.com/maps/search/?api=1&query=%E7%AB%B9%E4%B8%8B%E9%80%9A%E3%82%8A"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E8%A1%A8%E5%8F%82%E9%81%93","https://www.google.com/maps/search/?api=1&query=%E8%A3%8F%E5%8E%9F%E5%AE%BF","https://www.google.com/maps/search/?api=1&query=%E7%AB%B9%E4%B8%8B%E9%80%9A%E3%82%8A"]},{"time":"1545-1800","title":"澀谷 SKY（pending，未必去）","notes":["原宿／表參道 → 澀谷：步行約15–25分或電車1站\n上車地點（若坐電車）：明治神宮前／表參道 → 渋谷\n車費：約 ¥178 或步行免費\n建議入場：日落前30–45分（約16:20左右日落）\n購票連結見行程；不去則提早晚餐／逛街"],"links":["https://webket.jp/pc/ticket/itemdetail?fc=00396&ac=8001&igc=0029"],"places":[{"name":"Shibuya Sky","url":"https://maps.app.goo.gl/djUvUcaHfPc7uVtk8"}],"maps":["https://maps.app.goo.gl/djUvUcaHfPc7uVtk8"]},{"time":"1800-1930","title":"晚餐（澀谷）","notes":["建議抵達：約18:00\n建議離開：約19:30\n選項：鴨to葱（09:00–04:00）／焼肉ホルモン 新井屋（17:00–23:00）"],"links":[],"places":[{"name":"鴨to葱 渋谷","url":"https://maps.app.goo.gl/CVSZCWPW12NruiAt7"},{"name":"新井屋 渋谷","url":"https://maps.app.goo.gl/HRhQ8xjS8MGFaD3q6"}],"maps":["https://maps.app.goo.gl/CVSZCWPW12NruiAt7","https://maps.app.goo.gl/HRhQ8xjS8MGFaD3q6"]},{"time":"1930-2100","title":"Shibuya 109／mont-bell 澀谷","notes":["建議：19:30–21:00（兩店約21:00關）\n步行於澀谷駅周邊"],"links":[],"places":[{"name":"Shibuya 109","url":"https://maps.app.goo.gl/DVkbeAvW56yLjGUT6"},{"name":"mont-bell 渋谷","url":"https://maps.app.goo.gl/pxsuWnnQ7C8uea8t8"}],"maps":["https://maps.app.goo.gl/DVkbeAvW56yLjGUT6","https://maps.app.goo.gl/pxsuWnnQ7C8uea8t8"]},{"time":"2100-2145","title":"澀谷 → remm Hibiya","notes":["出發：約21:00 渋谷駅\n到達：日比谷／酒店 約21:20–21:40\n車程：約15–25分\n上車地點：渋谷駅（銀座線直達淺草橋方向可到銀座再步行，或銀座線→日比谷線等）\n車費：約 ¥178（IC）"],"links":[],"places":[{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"}],"maps":["https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"]}]},{"date":"2026-12-05","weekday":"六","region":"酒酒井・成田","items":[{"time":"0700-0800","title":"早餐＋退房","notes":["建議早餐：07:00–08:00\n退房後帶齊行李去巴士站"],"links":[],"places":[],"maps":[]},{"time":"0900-1010","title":"remm → 東京八重洲巴士總站","notes":["出發：約09:00 remm Hibiya（預留塞車／找路）\n到達：バスターミナル東京八重洲 地下A 約09:30–09:50\n車程：地鐵約10–15分＋步行找地下A\n上車地點：日比谷／有樂町 → 東京駅八重洲口方向\n車費：約 ¥178（IC）\n之後在 A02 月台排隊（建議開車前15分到）"],"links":[],"places":[{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"},{"name":"バスターミナル東京八重洲","url":"https://www.google.com/maps/search/?api=1&query=%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E6%9D%B1%E4%BA%AC%E5%85%AB%E9%87%8D%E6%B4%B2"},{"name":"東京駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"}],"maps":["https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6","https://www.google.com/maps/search/?api=1&query=%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E6%9D%B1%E4%BA%AC%E5%85%AB%E9%87%8D%E6%B4%B2","https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"]},{"time":"1020-1115","title":"高速巴士：八重洲 → 酒々井 Outlet","notes":["出發：10:20 バスターミナル東京八重洲 地下A【A02番のりば】（官方時刻例；亦有08:40／09:20 等）\n到達：酒々井プレミアム・アウトレット 約11:15（約50–55分）\n車程：約50–55分\n上車地點：地下A A02\n車費：大人 ¥1,300（小兒 ¥650）；下車時付；IC／信用卡觸控可\n預約：不可（先到先得）；有行李艙\n官方：https://www.premiumoutlets.co.jp/shisui/access/bus.html"],"links":["https://www.premiumoutlets.co.jp/shisui/access/bus.html"],"places":[{"name":"バスターミナル東京八重洲","url":"https://www.google.com/maps/search/?api=1&query=%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E6%9D%B1%E4%BA%AC%E5%85%AB%E9%87%8D%E6%B4%B2"},{"name":"酒々井プレミアムアウトレット","url":"https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E6%9D%B1%E4%BA%AC%E5%85%AB%E9%87%8D%E6%B4%B2","https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"]},{"time":"1115-1500","title":"酒々井 PREMIUM OUTLETS 逛街＋午餐","notes":["建議抵達：約11:15\n午餐：約12:00–13:00（場內）\n建議離開去巴士：約15:20（趕 15:45 往成田）"],"links":[],"places":[{"name":"酒々井プレミアムアウトレット","url":"https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"}],"maps":["https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"]},{"time":"1545-1605","title":"Outlet → 成田空港 T2","notes":["出發：15:45 酒々井プレミアム・アウトレット（官方例；亦有15:15／16:15 等）\n到達：成田空港第2ターミナル 約16:03–16:05\n車程：約15–18分\n上車地點：Outlet 高速巴士站\n車費：大人 ¥500（小兒 ¥250）；上車時付；IC／信用卡可\n※去 T2（UO647）；官方亦停 T1\n官方：https://www.premiumoutlets.co.jp/shisui/access/bus.html"],"links":["https://www.premiumoutlets.co.jp/shisui/access/bus.html","https://www.keiseibus.co.jp/express-bus/90103-2/"],"places":[{"name":"酒々井プレミアムアウトレット","url":"https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"},{"name":"成田空港第2ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://maps.app.goo.gl/9eWK1mixDk2v9jvB8","https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]},{"time":"1610-1845","title":"成田 T2 報到＋晚餐","notes":["建議抵達機場後立刻辦理登機\nUO647 19:00 起飛 → 建議 17:00 前完成報到／安檢緩衝\n晚餐：航廈內"],"links":[],"places":[{"name":"成田空港第2ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]},{"time":"1900-2325","title":"UO647 成田T2 → 香港T1","notes":["出發：成田 T2 19:00\n到達：香港 T1 約23:25\n車程：約4小時25分（航班）\n車費：機票已含"],"links":[],"places":[{"name":"成田空港第2ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]}]}],"fuji_visibility":{"title":"富士山能見度","tip":"配合行程：12/2–12/3 河口湖；可選 11/30 箱根蘆之湖側（南側視角）","note":"本卡是查詢入口，不會顯示當日分數或「今天看得見」。出發前請點下方連結看預報／直播。實用提示（來源：中央高速巴士頁）：朝（約 6–9 時）較易見；冬季整體較易見；當日以直播／預報為準。","disclaimer":"第三個連結為非官方第三方預報站，出發前請再對照官方預報／直播。","sources":[{"label":"中央高速巴士・富士山見え方予報","url":"https://fuji.highwaybus.com/condition/"},{"label":"河口湖觀光情報館・富士山ライブカメラ","url":"https://www.kawaguchiko.gr.jp/fujilive.php"},{"label":"富士山視界・天氣預報（河口湖／箱根）","url":"https://isfujivisible.com/ja"}]},"beauty":[{"name":"ヘッドコンシェルジュ 表参道店","places":[{"name":"ヘッドコンシェルジュ 表参道店","url":"https://www.google.com/maps/search/?api=1&query=%E3%83%98%E3%83%83%E3%83%89%E3%82%B3%E3%83%B3%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B8%E3%83%A5%20%E8%A1%A8%E5%8F%82%E9%81%93%E5%BA%97"}],"rating":"4.9","category":"Beauty salon","note":"京喚羽"},{"name":"ヘッドコンシェルジュ 銀座店","places":[{"name":"ヘッドコンシェルジュ 銀座店","url":"https://www.google.com/maps/search/?api=1&query=%E3%83%98%E3%83%83%E3%83%89%E3%82%B3%E3%83%B3%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B8%E3%83%A5%20%E9%8A%80%E5%BA%A7%E5%BA%97"}],"rating":"4.3","category":"Beauty salon","note":"京喚羽"},{"name":"ヘッドコンシェルジュ 神宮前店","places":[{"name":"ヘッドコンシェルジュ 神宮前店","url":"https://www.google.com/maps/search/?api=1&query=%E3%83%98%E3%83%83%E3%83%89%E3%82%B3%E3%83%B3%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B8%E3%83%A5%20%E7%A5%9E%E5%AE%AE%E5%89%8D%E5%BA%97"}],"rating":"4.9","category":"Beauty salon","note":"買到京喚羽"}],"restaurants":[{"name":"AFURI Minami-Aoyama","places":[{"name":"AFURI Minami-Aoyama","url":"https://www.google.com/maps/search/?api=1&query=AFURI%20Minami-Aoyama"}],"rating":"4.8","price":"¥1,000–2,000","category":"Ramen","note":"柚子拉麵出名 原宿有樂叮都有分店"},{"name":"AFURI Harajuku","places":[{"name":"AFURI Harajuku","url":"https://www.google.com/maps/search/?api=1&query=AFURI%20Harajuku"}],"rating":"4.5","price":"¥1,000–2,000","category":"Ramen","note":"柚子拉麵 有樂叮都有"},{"name":"AFURI Yurakucho","places":[{"name":"AFURI Yurakucho","url":"https://www.google.com/maps/search/?api=1&query=AFURI%20Yurakucho"}],"rating":"4.7","price":"¥1,000–2,000","category":"Ramen","note":"柚子拉麵出名 原宿都有"},{"name":"Sushi Kuni","places":[{"name":"Sushi Kuni","url":"https://www.google.com/maps/search/?api=1&query=Sushi%20Kuni"}],"rating":"4.3","price":"¥4,000–9,000","category":"Sushi","note":"觀光客多海鮮丼飯"},{"name":"Hamburg : Kiwamiya Tokyo Station","places":[{"name":"Hamburg : Kiwamiya Tokyo Station","url":"https://www.google.com/maps/search/?api=1&query=Hamburg%20%3A%20Kiwamiya%20Tokyo%20Station"}],"rating":"4.1","price":"¥2,000–3,000","category":"Steak","note":"出名漢堡，多人排隊"},{"name":"Koganeya Shibuya","places":[{"name":"Koganeya Shibuya","url":"https://www.google.com/maps/search/?api=1&query=Koganeya%20Shibuya"}],"rating":"4.3","price":"¥2,000–5,000","category":"Izakaya","note":"有火鍋串燒"},{"name":"Sushi Koharu","places":[{"name":"Sushi Koharu","url":"https://www.google.com/maps/search/?api=1&query=Sushi%20Koharu"}],"rating":"4.8","price":"¥1,000–2,000","category":"Sushi","note":"平價好食，丼飯"},{"name":"TRUNK KITCHEN","places":[{"name":"TRUNK KITCHEN","url":"https://www.google.com/maps/search/?api=1&query=TRUNK%20KITCHEN"}],"rating":"4.1","category":"Western","note":"乜都有"},{"name":"ROOF TOP RESTAURANT & MUSIC BAR SOAK","places":[{"name":"ROOF TOP RESTAURANT & MUSIC BAR SOAK","url":"https://www.google.com/maps/search/?api=1&query=ROOF%20TOP%20RESTAURANT%20%26%20MUSIC%20BAR%20SOAK"}],"rating":"4.6","category":"Restaurant","note":"夜景好"},{"name":"Maguro & Sakana Kaisenmeshi Nakamata","places":[{"name":"Maguro & Sakana Kaisenmeshi Nakamata","url":"https://www.google.com/maps/search/?api=1&query=Maguro%20%26%20Sakana%20Kaisenmeshi%20Nakamata"}],"rating":"4.7","price":"¥2,000–3,000","category":"Seafood donburi restaurant","note":"海鮮丼飯"},{"name":"MATCHAMON GINZA SIX","places":[{"name":"MATCHAMON GINZA SIX","url":"https://www.google.com/maps/search/?api=1&query=MATCHAMON%20GINZA%20SIX"}],"rating":"4.9","price":"¥1–1,000","category":"Cafe","note":"嘢飲好飲"},{"name":"Sushi Yoshikawa Akari Ginza","places":[{"name":"Sushi Yoshikawa Akari Ginza","url":"https://www.google.com/maps/search/?api=1&query=Sushi%20Yoshikawa%20Akari%20Ginza"}],"rating":"5.0","price":"¥10,000+","category":"Sushi"},{"name":"Tricolore","places":[{"name":"Tricolore","url":"https://www.google.com/maps/search/?api=1&query=Tricolore"}],"rating":"4.3","price":"¥1,000–2,000","category":"Cafe"},{"name":"Charcoal BBQ Omura","places":[{"name":"Charcoal BBQ Omura","url":"https://www.google.com/maps/search/?api=1&query=Charcoal%20BBQ%20Omura"}],"rating":"4.2","price":"¥4,000–10,000","category":"Yakiniku"},{"name":"Nabesuke","places":[{"name":"Nabesuke","url":"https://www.google.com/maps/search/?api=1&query=Nabesuke"}],"rating":"4.7","price":"¥3,000–6,000","category":"Izakaya"},{"name":"Goten Sakaba","places":[{"name":"Goten Sakaba","url":"https://www.google.com/maps/search/?api=1&query=Goten%20Sakaba"}],"rating":"4.0","price":"¥4,000–5,000","category":"Izakaya"},{"name":"Daimasa Motohakone","places":[{"name":"Daimasa Motohakone","url":"https://www.google.com/maps/search/?api=1&query=Daimasa%20Motohakone"}],"rating":"4.6","price":"¥2,000–3,000","category":"Seafood donburi restaurant"},{"name":"絹引の里","places":[{"name":"絹引の里","url":"https://www.google.com/maps/search/?api=1&query=%E7%B5%B9%E5%BC%95%E3%81%AE%E9%87%8C"}],"rating":"4.0","price":"¥1,000–2,000","category":"Soba noodle shop"},{"name":"Tamura Ginkatsu-tei","places":[{"name":"Tamura Ginkatsu-tei","url":"https://www.google.com/maps/search/?api=1&query=Tamura%20Ginkatsu-tei"}],"rating":"4.1","price":"¥1,000–2,000","category":"Tonkatsu restaurant"},{"name":"Ramen Kamo to Negi Shibuya Miyamasuzaka Branch","places":[{"name":"Ramen Kamo to Negi Shibuya Miyamasuzaka Branch","url":"https://www.google.com/maps/search/?api=1&query=Ramen%20Kamo%20to%20Negi%20Shibuya%20Miyamasuzaka%20Branch"}],"rating":"4.7","price":"¥1,000–2,000","category":"Ramen"},{"name":"Ramen Kamo to Negi Shinjuku","places":[{"name":"Ramen Kamo to Negi Shinjuku","url":"https://www.google.com/maps/search/?api=1&query=Ramen%20Kamo%20to%20Negi%20Shinjuku"}],"rating":"4.2","price":"¥1,000–2,000","category":"Ramen"},{"name":"Gyutan Ara","places":[{"name":"Gyutan Ara","url":"https://www.google.com/maps/search/?api=1&query=Gyutan%20Ara"}],"rating":"4.2","price":"¥2,000–3,000","category":"Tongue restaurant"},{"name":"海の幸 翔","places":[{"name":"海の幸 翔","url":"https://www.google.com/maps/search/?api=1&query=%E6%B5%B7%E3%81%AE%E5%B9%B8%20%E7%BF%94"}],"rating":"4.4","price":"¥4,000–6,000","category":"Seafood donburi restaurant"},{"name":"Soranoiro - Nippon","places":[{"name":"Soranoiro - Nippon","url":"https://www.google.com/maps/search/?api=1&query=Soranoiro%20-%20Nippon"}],"rating":"3.9","price":"¥1,000–2,000","category":"Ramen","note":"拉麵好食"},{"name":"L'ibisco Ginza","places":[{"name":"L'ibisco Ginza","url":"https://www.google.com/maps/search/?api=1&query=L'ibisco%20Ginza"}],"rating":"4.3","category":"Ice Cream","note":"Ice cream 芝麻味好食 可以坐低休息"},{"name":"bills Omotesando","places":[{"name":"bills Omotesando","url":"https://www.google.com/maps/search/?api=1&query=bills%20Omotesando"}],"rating":"4.0","price":"¥2,000–4,000","category":"Restaurant","note":"Pancake"},{"name":"Eggs 'n Things Harajuku Store","places":[{"name":"Eggs 'n Things Harajuku Store","url":"https://www.google.com/maps/search/?api=1&query=Eggs%20'n%20Things%20Harajuku%20Store"}],"rating":"4.0","price":"¥1,000–3,000","category":"Hawaiian","note":"邪惡早午餐"},{"name":"Eggs 'n Things","places":[{"name":"Eggs 'n Things","url":"https://www.google.com/maps/search/?api=1&query=Eggs%20'n%20Things"}],"rating":"3.9","price":"¥2,000–3,000","category":"Hawaiian","note":"邪惡早午餐"},{"name":"bills Ginza","places":[{"name":"bills Ginza","url":"https://www.google.com/maps/search/?api=1&query=bills%20Ginza"}],"rating":"4.1","price":"¥2,000–6,000","category":"Restaurant","note":"Pancake"},{"name":"Fish Market Tsukiji Outer Market","places":[{"name":"Fish Market Tsukiji Outer Market","url":"https://www.google.com/maps/search/?api=1&query=Fish%20Market%20Tsukiji%20Outer%20Market"}],"rating":"4.2","category":"Wholesale market"},{"name":"Iroha Seafood Buffet","places":[{"name":"Iroha Seafood Buffet","url":"https://www.google.com/maps/search/?api=1&query=Iroha%20Seafood%20Buffet"}],"rating":"4.2","price":"¥10,000+","category":"Buffet","note":"拖羅buffer lunch 第食d"},{"name":"Ramen Afro Beats Shinjuku","places":[{"name":"Ramen Afro Beats Shinjuku","url":"https://www.google.com/maps/search/?api=1&query=Ramen%20Afro%20Beats%20Shinjuku"}],"rating":"4.4","price":"¥1,000–2,000","category":"Ramen","note":"凍拉麵&雞白湯出名"},{"name":"Cafe Aaliya","places":[{"name":"Cafe Aaliya","url":"https://www.google.com/maps/search/?api=1&query=Cafe%20Aaliya"}],"rating":"4.3","price":"¥1,000–2,000","category":"Cafe","note":"甜品"},{"name":"Toyosu Market","places":[{"name":"Toyosu Market","url":"https://www.google.com/maps/search/?api=1&query=Toyosu%20Market"}],"rating":"3.6","category":"Seafood","note":"築地親子版"},{"name":"Tempura and wine OSHIO Hibiya","places":[{"name":"Tempura and wine OSHIO Hibiya","url":"https://www.google.com/maps/search/?api=1&query=Tempura%20and%20wine%20OSHIO%20Hibiya"}],"rating":"3.9","price":"¥1,000–6,000","category":"Tempura"},{"name":"Ramen Jazzy Beats","places":[{"name":"Ramen Jazzy Beats","url":"https://www.google.com/maps/search/?api=1&query=Ramen%20Jazzy%20Beats"}],"rating":"4.3","price":"¥1,000–2,000","category":"Ramen"},{"name":"BASO OMOTESANDO","places":[{"name":"BASO OMOTESANDO","url":"https://www.google.com/maps/search/?api=1&query=BASO%20OMOTESANDO"}],"rating":"4.1","price":"¥1,000–2,000","category":"Soba noodle shop"},{"name":"Fujiki Ningyocho","places":[{"name":"Fujiki Ningyocho","url":"https://www.google.com/maps/search/?api=1&query=Fujiki%20Ningyocho"}],"rating":"4.2","price":"¥2,000–3,000","category":"Tonkatsu restaurant","note":"冇得預約"},{"name":"Yakiniku Hormone Arai-ya Shibuya","places":[{"name":"Yakiniku Hormone Arai-ya Shibuya","url":"https://www.google.com/maps/search/?api=1&query=Yakiniku%20Hormone%20Arai-ya%20Shibuya"}],"rating":"4.2","price":"¥10,000+","category":"Yakiniku"},{"name":"焼肉 ホルモン 新井屋 にかい｜渋谷 神泉 個室 和牛焼肉","places":[{"name":"焼肉 ホルモン 新井屋 にかい｜渋谷 神泉 個室 和牛焼肉","url":"https://www.google.com/maps/search/?api=1&query=%E7%84%BC%E8%82%89%20%E3%83%9B%E3%83%AB%E3%83%A2%E3%83%B3%20%E6%96%B0%E4%BA%95%E5%B1%8B%20%E3%81%AB%E3%81%8B%E3%81%84%EF%BD%9C%E6%B8%8B%E8%B0%B7%20%E7%A5%9E%E6%B3%89%20%E5%80%8B%E5%AE%A4%20%E5%92%8C%E7%89%9B%E7%84%BC%E8%82%89"}],"rating":"4.7","price":"¥10,000+","category":"Yakiniku","note":"有好多分店的"},{"name":"Ganso Mentainikomi Tsukemen","places":[{"name":"Ganso Mentainikomi Tsukemen","url":"https://www.google.com/maps/search/?api=1&query=Ganso%20Mentainikomi%20Tsukemen"}],"rating":"3.8","price":"¥1,000–2,000","category":"Ramen"},{"name":"Kagawa Ippuku Kanda","places":[{"name":"Kagawa Ippuku Kanda","url":"https://www.google.com/maps/search/?api=1&query=Kagawa%20Ippuku%20Kanda"}],"rating":"4.2","price":"¥1,000–2,000","category":"udon noodles"},{"name":"The Front Room Deli Restaurant Marunouchi","places":[{"name":"The Front Room Deli Restaurant Marunouchi","url":"https://www.google.com/maps/search/?api=1&query=The%20Front%20Room%20Deli%20Restaurant%20Marunouchi"}],"rating":"3.9","price":"¥2,000–3,000","category":"Cafe"},{"name":"Gyu Tongue Lemon Shinjuku","places":[{"name":"Gyu Tongue Lemon Shinjuku","url":"https://www.google.com/maps/search/?api=1&query=Gyu%20Tongue%20Lemon%20Shinjuku"}],"rating":"4.7","price":"¥3,000–5,000","category":"Tongue restaurant","note":"需要預約"},{"name":"Conveyor Kaiten Sushi Ginza Onodera HONTEN","places":[{"name":"Conveyor Kaiten Sushi Ginza Onodera HONTEN","url":"https://www.google.com/maps/search/?api=1&query=Conveyor%20Kaiten%20Sushi%20Ginza%20Onodera%20HONTEN"}],"rating":"4.3","price":"¥4,000–10,000","category":"Sushi"},{"name":"Kamaboko Yokocho Kagosei","places":[{"name":"Kamaboko Yokocho Kagosei","url":"https://www.google.com/maps/search/?api=1&query=Kamaboko%20Yokocho%20Kagosei"}],"rating":"4.3","price":"¥1–1,000","category":"Japanese delicatessen","note":"魚餅 有人話普通"},{"name":"Grande Rivière Hakone Yumoto Store","places":[{"name":"Grande Rivière Hakone Yumoto Store","url":"https://www.google.com/maps/search/?api=1&query=Grande%20Rivi%C3%A8re%20Hakone%20Yumoto%20Store"}],"rating":"4.4","category":"Pastries","note":"蜜糖芝士撻好食"},{"name":"Hakone Teramisu","places":[{"name":"Hakone Teramisu","url":"https://www.google.com/maps/search/?api=1&query=Hakone%20Teramisu"}],"rating":"4.3","price":"¥1–1,000","category":"Dessert","note":"食甜品"}],"shopping":[{"name":"ココシュニック 新丸ビル","places":[{"name":"ココシュニック 新丸ビル","url":"https://www.google.com/maps/search/?api=1&query=%E3%82%B3%E3%82%B3%E3%82%B7%E3%83%A5%E3%83%8B%E3%83%83%E3%82%AF%20%E6%96%B0%E4%B8%B8%E3%83%93%E3%83%AB"}],"rating":"4.0","category":"Fashion accessories store","note":"Watch 18k gold"},{"name":"COCOSHNIK ONKITSCH","places":[{"name":"COCOSHNIK ONKITSCH","url":"https://www.google.com/maps/search/?api=1&query=COCOSHNIK%20ONKITSCH"}],"rating":"2.0","category":"Fashion accessories store","note":"Watch 18k gold"},{"name":"Shisui Premium Outlets","places":[{"name":"Shisui Premium Outlets","url":"https://www.google.com/maps/search/?api=1&query=Shisui%20Premium%20Outlets"}],"rating":"3.9","category":"Outlet mall"},{"name":"Snow Peak Store Alpen Outdoors Flagship Store Shinjuku","places":[{"name":"Snow Peak Store Alpen Outdoors Flagship Store Shinjuku","url":"https://www.google.com/maps/search/?api=1&query=Snow%20Peak%20Store%20Alpen%20Outdoors%20Flagship%20Store%20Shinjuku"}],"rating":"4.0","category":"Camping store","note":"運動用品"},{"name":"ALPEN RUN MEIJI PARK","places":[{"name":"ALPEN RUN MEIJI PARK","url":"https://www.google.com/maps/search/?api=1&query=ALPEN%20RUN%20MEIJI%20PARK"}],"rating":"3.9","category":"Running store","note":"運動用品"},{"name":"mont-bell Tokyo Kyobashi","places":[{"name":"mont-bell Tokyo Kyobashi","url":"https://www.google.com/maps/search/?api=1&query=mont-bell%20Tokyo%20Kyobashi"}],"rating":"4.1","category":"Outdoor sports store"},{"name":"mont-bell Shinjuku minami-guchi","places":[{"name":"mont-bell Shinjuku minami-guchi","url":"https://www.google.com/maps/search/?api=1&query=mont-bell%20Shinjuku%20minami-guchi"}],"rating":"4.2","category":"Outdoor sports store"},{"name":"mont-bell Shibuya","places":[{"name":"mont-bell Shibuya","url":"https://www.google.com/maps/search/?api=1&query=mont-bell%20Shibuya"}],"rating":"4.1","category":"Outdoor sports store"},{"name":"Swen Gotemba","places":[{"name":"Swen Gotemba","url":"https://www.google.com/maps/search/?api=1&query=Swen%20Gotemba"}],"rating":"4.0","category":"Outdoor sports store","note":"有montbell"},{"name":"RAGTAG","places":[{"name":"RAGTAG","url":"https://www.google.com/maps/search/?api=1&query=RAGTAG"}],"rating":"4.0","category":"Used clothing store","note":"平二手名牌"},{"name":"#FR2 HARAJUKU","places":[{"name":"#FR2 HARAJUKU","url":"https://www.google.com/maps/search/?api=1&query=%23FR2%20HARAJUKU"}],"rating":"4.5","category":"Clothing store"},{"name":"#FR2MAY","places":[{"name":"#FR2MAY","url":"https://www.google.com/maps/search/?api=1&query=%23FR2MAY"}],"rating":"4.7","category":"Clothing store"},{"name":"LUMINE EST Shinjuku","places":[{"name":"LUMINE EST Shinjuku","url":"https://www.google.com/maps/search/?api=1&query=LUMINE%20EST%20Shinjuku"}],"rating":"3.8","category":"Shopping mall","note":"年輕一點"},{"name":"Shibuya 109","places":[{"name":"Shibuya 109","url":"https://www.google.com/maps/search/?api=1&query=Shibuya%20109"}],"rating":"4.0","category":"Shopping mall","note":"平年輕衫"},{"name":"niko and ... TOKYO","places":[{"name":"niko and ... TOKYO","url":"https://www.google.com/maps/search/?api=1&query=niko%20and%20...%20TOKYO"}],"rating":"4.3","category":"Clothing store"},{"name":"Matsuya Ginza","places":[{"name":"Matsuya Ginza","url":"https://www.google.com/maps/search/?api=1&query=Matsuya%20Ginza"}],"rating":"4.0","category":"Department store","note":"牌子多元"},{"name":"Mitsukoshi Ginza","places":[{"name":"Mitsukoshi Ginza","url":"https://www.google.com/maps/search/?api=1&query=Mitsukoshi%20Ginza"}],"rating":"4.1","category":"Department store","note":"傳統百貨 地下有手信甜品買"},{"name":"GINZA SIX","places":[{"name":"GINZA SIX","url":"https://www.google.com/maps/search/?api=1&query=GINZA%20SIX"}],"rating":"4.0","category":"Shopping mall","note":"藝術感百貨公司"},{"name":"Ginza Itoya","places":[{"name":"Ginza Itoya","url":"https://www.google.com/maps/search/?api=1&query=Ginza%20Itoya"}],"rating":"4.4","category":"Stationery store","note":"文具"},{"name":"Don Quijote Ginza Honkan","places":[{"name":"Don Quijote Ginza Honkan","url":"https://www.google.com/maps/search/?api=1&query=Don%20Quijote%20Ginza%20Honkan"}],"rating":"3.7","category":"Discount store"},{"name":"Bic Camera Yurakucho Store","places":[{"name":"Bic Camera Yurakucho Store","url":"https://www.google.com/maps/search/?api=1&query=Bic%20Camera%20Yurakucho%20Store"}],"rating":"3.9","category":"Electronics store"},{"name":"Ginza Loft","places":[{"name":"Ginza Loft","url":"https://www.google.com/maps/search/?api=1&query=Ginza%20Loft"}],"rating":"4.1","category":"Variety store"},{"name":"HAKUHINKAN TOY PARK","places":[{"name":"HAKUHINKAN TOY PARK","url":"https://www.google.com/maps/search/?api=1&query=HAKUHINKAN%20TOY%20PARK"}],"rating":"4.2","category":"Toy store"},{"name":"MUJI Ginza","places":[{"name":"MUJI Ginza","url":"https://www.google.com/maps/search/?api=1&query=MUJI%20Ginza"}],"rating":"4.3","category":"General store"},{"name":"First Avenue Tokyo Station","places":[{"name":"First Avenue Tokyo Station","url":"https://www.google.com/maps/search/?api=1&query=First%20Avenue%20Tokyo%20Station"}],"rating":"4.0","category":"Shopping mall"},{"name":"Gotemba Premium Outlets","places":[{"name":"Gotemba Premium Outlets","url":"https://www.google.com/maps/search/?api=1&query=Gotemba%20Premium%20Outlets"}],"rating":"4.2","category":"Outlet mall"},{"name":"Grandberry Park","places":[{"name":"Grandberry Park","url":"https://www.google.com/maps/search/?api=1&query=Grandberry%20Park"}],"rating":"4.0","category":"Shopping mall"},{"name":"Mitsui Outlet Park Kisarazu","places":[{"name":"Mitsui Outlet Park Kisarazu","url":"https://www.google.com/maps/search/?api=1&query=Mitsui%20Outlet%20Park%20Kisarazu"}],"rating":"4.0","category":"Outlet mall"},{"name":"Lawson Fujikawaguchiko Town hall","places":[{"name":"Lawson Fujikawaguchiko Town hall","url":"https://www.google.com/maps/search/?api=1&query=Lawson%20Fujikawaguchiko%20Town%20hall"}],"rating":"4.1","category":"Convenience store"},{"name":"LAWSON Kawaguchiko Station","places":[{"name":"LAWSON Kawaguchiko Station","url":"https://www.google.com/maps/search/?api=1&query=LAWSON%20Kawaguchiko%20Station"}],"rating":"3.8","category":"Convenience store"}]};

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
  renderBeauty();
  renderRestaurants();
  renderShopping();
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

async function fetchWeatherJson(url) {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok || data.error) throw new Error(data.reason || ("weather http " + res.status));
  return data;
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
        renderWeatherCards(slot, parsed.cards, parsed.mode || "forecast");
        return;
      }
    }
  } catch (_) {}

  slot.innerHTML = `<div class="weather-loading">天氣載入中…</div>`;

  const regions = TRIP_DATA.weather_regions || [];
  const unique = [];
  const keyToIdx = {};
  regions.forEach((r) => {
    const k = `${r.lat},${r.lon}`;
    if (!(k in keyToIdx)) {
      keyToIdx[k] = unique.length;
      unique.push({ lat: r.lat, lon: r.lon });
    }
  });

  const dailyParams = "daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo";

  async function loadFrom(base, start, end, dateMapFn) {
    const results = await Promise.all(
      unique.map(({ lat, lon }) =>
        fetchWeatherJson(
          `${base}?latitude=${lat}&longitude=${lon}&${dailyParams}&start_date=${start}&end_date=${end}`
        )
      )
    );
    return regions
      .map((r) => {
        const idx = keyToIdx[`${r.lat},${r.lon}`];
        const data = results[idx];
        const lookDate = dateMapFn(r.date);
        const di = data.daily.time.indexOf(lookDate);
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
      })
      .filter(Boolean);
  }

  try {
    let cards = null;
    let mode = "forecast";
    try {
      cards = await loadFrom(
        "https://api.open-meteo.com/v1/forecast",
        "2026-11-28",
        "2026-12-05",
        (d) => d
      );
      if (!cards.length) throw new Error("empty forecast");
    } catch (_) {
      // 出發前超過約 16 日時，預報尚不可用 → 改用往年同期
      cards = await loadFrom(
        "https://archive-api.open-meteo.com/v1/archive",
        "2025-11-28",
        "2025-12-05",
        (d) => d.replace("2026-", "2025-")
      );
      mode = "archive";
      if (!cards.length) throw new Error("empty archive");
    }

    try {
      sessionStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify({ day: todayKey, cards, mode }));
    } catch (_) {}
    renderWeatherCards(slot, cards, mode);
  } catch (err) {
    slot.innerHTML = `<div class="weather-fallback">☁️ 天氣需連網更新<br><span class="weather-fallback-sub">連上網路後重新整理即可顯示</span></div>`;
  }
}

function renderWeatherCards(slot, cards, mode) {
  const badge = mode === "archive" ? "往年同期參考" : "預報";
  const note =
    mode === "archive"
      ? "距離出發尚遠，暫顯示 2025 年同期實況作參考；出發前約兩週內會自動改為正式預報。"
      : "預報會隨時間更新；出發前請再確認一次。";
  slot.innerHTML = `
    <h3 class="section-title">天氣小卡 <span class="badge">${badge}</span></h3>
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
    <p class="weather-note">${note}</p>
  `;
}


function fujiCardHtml() {
  const f = TRIP_DATA.fuji_visibility;
  if (!f) return "";
  return `
    <h3 class="section-title">富士山能見度 <span class="badge">參考來源</span></h3>
    <article class="fuji-card spot-card">
      <div class="spot-badge">🗻 查詢入口・非即時分數</div>
      <h3>${escapeHtml(f.title || "富士山能見度")}</h3>
      <p class="spot-note">${escapeHtml(f.note || "")}</p>
      <div class="spot-tip">💡 ${escapeHtml(f.tip || "")}</div>
      ${f.disclaimer ? `<p class="fuji-disclaimer">${escapeHtml(f.disclaimer)}</p>` : ""}
      <div class="source-block">
        <div class="source-label">參考來源（請點開即時查）</div>
        <div class="spot-actions sources">${sourceButtonsHtml(f.sources)}</div>
      </div>
    </article>`;
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

    ${fujiCardHtml()}

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

function sourceButtonsHtml(sources) {
  if (!sources || !sources.length) return "";
  return sources
    .map(
      (s) =>
        `<a class="btn btn-source" href="${escapeHtml(s.url)}" target="_blank" rel="noopener noreferrer">🔗 ${escapeHtml(s.label)}</a>`
    )
    .join("");
}

function renderFoliage() {
  const el = document.getElementById("view-foliage");
  if (!el) return;
  const spots = TRIP_DATA.foliage || [];
  el.innerHTML = `
    <div class="hero-card" style="margin-bottom:16px">
      <h2>🍁 紅葉位置</h2>
      <p class="hero-sub">以下內容均附官方／觀光協會網頁連結，可自行核對。見頃會隨天氣變動。</p>
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
          <div class="source-block">
            <div class="source-label">參考來源（請點開核對）</div>
            <div class="spot-actions sources">${sourceButtonsHtml(s.sources)}</div>
          </div>
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
      <p class="hero-sub">只列出 2026 年有官方網頁／新聞稿可核對的項目；時段以官方為準。</p>
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
          <div class="source-block">
            <div class="source-label">參考來源（請點開核對）</div>
            <div class="spot-actions sources">${sourceButtonsHtml(s.sources)}</div>
          </div>
        </article>`
        )
        .join("")}
    </div>
  `;
}


function renderSpotList(viewId, listKey, cardClass, heroTitle, defaultBadge) {
  const el = document.getElementById(viewId);
  if (!el) return;
  const spots = TRIP_DATA[listKey] || [];
  const subtitle = "資料來自你 Google 地圖「東京」收藏清單；評分／價錢為地圖顯示，出發前請再核對。";
  el.innerHTML = `
    <div class="hero-card" style="margin-bottom:16px">
      <h2>${heroTitle}</h2>
      <p class="hero-sub">${subtitle}</p>
    </div>
    <div class="spot-grid">
      ${spots
        .map((s) => {
          const badge = s.category || defaultBadge;
          const meta = [];
          if (s.rating) meta.push(`<span class="chip">★ ${escapeHtml(s.rating)}</span>`);
          if (s.price) meta.push(`<span class="chip">${escapeHtml(s.price)}</span>`);
          return `
        <article class="spot-card ${cardClass}">
          <div class="spot-badge">${escapeHtml(badge)}</div>
          <h3>${escapeHtml(s.name)}</h3>
          ${meta.length ? `<div class="spot-meta-row">${meta.join("")}</div>` : ""}
          ${s.note ? `<p class="spot-note">${escapeHtml(s.note)}</p>` : ""}
          <div class="spot-actions">${placeButtonsHtml(s.places)}</div>
        </article>`;
        })
        .join("")}
    </div>
  `;
}

function renderBeauty() {
  renderSpotList("view-beauty", "beauty", "beauty", "💅 美容", "美容");
}

function renderRestaurants() {
  renderSpotList("view-restaurants", "restaurants", "food", "🍽️ 餐廳", "餐廳");
}

function renderShopping() {
  renderSpotList("view-shopping", "shopping", "shop", "🛍️ 購物", "購物");
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


function parseNotes(notesArr) {
  const FACT_LABELS = [
    "上車地點",
    "建議抵達",
    "建議離開",
    "建議乘船",
    "建議入場",
    "建議早餐",
    "建議開始",
    "最遲入場",
    "出發",
    "到達",
    "車程",
    "車費",
    "最遲",
  ];
  const facts = [];
  const rest = [];
  const lines = [];
  (notesArr || []).forEach((n) => {
    String(n)
      .split(/\n/)
      .forEach((line) => {
        const t = line.trim();
        if (t) lines.push(t);
      });
  });

  for (const line of lines) {
    let matched = false;
    for (const prefix of FACT_LABELS) {
      if (!line.startsWith(prefix)) continue;
      const colonIdx = line.search(/[：:]/);
      if (colonIdx < prefix.length) continue;
      const label = line.slice(0, colonIdx).trim();
      const value = line.slice(colonIdx + 1).trim();
      if (!value) continue;
      let kind = "default";
      if (prefix === "車費") {
        if (/周遊券已含/.test(value)) kind = "pass";
        else if (/[¥￥]\s*[\d,]+|[\d,]+\s*円|約\s*[¥￥]?\s*[\d,]+/.test(value)) kind = "fare";
      }
      facts.push({ label, value, kind });
      matched = true;
      break;
    }
    if (!matched) rest.push(line);
  }
  return { facts, rest };
}

function renderNotesHtml(notesArr) {
  const { facts, rest } = parseNotes(notesArr);
  let html = "";
  if (facts.length) {
    html += `<div class="tl-facts">${facts
      .map((f) => {
        const kindClass =
          f.kind === "pass" ? " is-pass" : f.kind === "fare" ? " is-fare" : "";
        const valueHtml =
          f.kind === "pass"
            ? `<span class="tl-fact-badge">${escapeHtml(f.value)}</span>`
            : escapeHtml(f.value);
        return `<div class="tl-fact${kindClass}"><span class="tl-fact-label">${escapeHtml(
          f.label
        )}</span><span class="tl-fact-value">${valueHtml}</span></div>`;
      })
      .join("")}</div>`;
  }
  if (rest.length) {
    html += `<div class="tl-notes">${rest
      .map((line) => `<div class="tl-note-line">${escapeHtml(line)}</div>`)
      .join("")}</div>`;
  }
  return html;
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
      const notesRaw = (item.notes || []).filter((n) => n && String(n).trim());
      const notesText = notesRaw.join("\n");
      const notesHtml = renderNotesHtml(notesRaw);
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

      const searchBlob = [item.title, notesText, item.time, ...places.map((p) => p.name)]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return `
      <article class="tl-item" data-idx="${idx}" data-search="${escapeHtml(searchBlob)}">
        <div class="tl-dot" title="${escapeHtml(cat.label)}">${cat.icon}</div>
        <div class="tl-card">
          ${timeHtml}
          ${titleHtml}
          ${notesHtml}
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
