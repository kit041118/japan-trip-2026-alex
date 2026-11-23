/* 日本之旅 App */
const TRIP_DATA = {"trip":{"title":"日本之旅","subtitle":"香港 ⇄ 東京・箱根・河口湖","start":"2026-11-28","end":"2026-12-05","flights":[{"code":"UO622","from":"香港 T2","to":"羽田 T3","time":"17:55–22:45","date":"2026-11-28"},{"code":"UO647","from":"成田 T2","to":"香港 T1","time":"19:00–23:25","date":"2026-12-05"}]},"passes":{"hakone":{"name":"箱根周遊券","note":"Klook 購買 3 日；建議 11/29–12/1；小田原→箱根湯本起可用；強羅M線去御殿場 Outlet 亦含","url":"https://www.hakonenavi.jp/transportation/ticket/freepass/","image":"assets/箱根pass_0_web.jpg"},"kawaguchiko":{"name":"河口湖周遊券","note":"2 日巴士通票、遊船、富士山全景纜車；不含東橫接駁、WILLER／高速巴士回東京、酒々井巴士","url":"https://www.klook.com/zh-HK/activity/132532-mt-fuji-pass/","map_pdf":"https://www.fujikyubus.co.jp/pdf/shuyu/omni_map_202604.pdf","image":"assets/河口pass_0_web.jpg"},"toyoko_bus":{"name":"東橫Inn巴士（御殿場→富士河口湖大橋）","note":"已預訂 · 12/2 08:00 · 2人 · 預訂編號 70057","url":"https://reserve.toyoko-inn-bus.com/","booking_id":"70057","route":"Ver.3_東横INN御殿場駅前（Toyoko Inn Gotemba ekimae）→東横INN富士河口湖大橋（Toyoko Inn Fuji Kawaguchiko Ohashi）","trip_code":"R000146-02","date":"2026-12-02","time":"08:00","from":"東横INN御殿場駅前（Toyoko Inn Gotemba ekimae）","passengers":[{"name":"TsoiManwai","phone":"+852 6855 2514"},{"name":"HungYingkit","phone":"+852 9783 7379"}],"line_color":"グリーンライン (GREEN LINE)"},"willer_bus":{"name":"高速巴士：河口湖→東京駅（WILLER）","note":"已預訂 · 12/3 09:30 · 2人 · 預約編號 44670868 · 座位 1D／1C","url":"https://willer-travel.com/","url_label":"WILLER 官網","booking_id":"44670868","route":"富士五湖⇒東京駅（八重洲南口/鉄鋼ビル）／8　通常プラン（基本方案）","trip_code":"8班次","plan":"通常プラン（基本方案）","date":"2026-12-03","time":"09:30","arrive_time":"11:35","from":"河口湖駅（2番のりば）","to":"東京駅日本橋口（降車）","representative":"tsoi manwai","pax_label":"2人（大人：男性1、女性1）","fare":"4,600日圓（事先付款／信用卡）","operator":"富士急行／富士急巴士／JR巴士關東","boarding_note":"沒有乘車券；上車時向司機出示本確認郵件（或列印件）並報姓名","confirm_pdf":"assets/tickets/willer-44670868.pdf","passengers":[{"name":"大人男性","seat":"1号車 1D"},{"name":"tsoi manwai","seat":"1号車 1C"}]}},"overview_images":["assets/工作表2_0.png","assets/工作表2_1.jpg","assets/工作表2_2.png"],"weather_regions":[{"date":"2026-11-28","region":"東京・羽田","lat":35.55,"lon":139.78},{"date":"2026-11-29","region":"箱根","lat":35.23,"lon":139.07},{"date":"2026-11-30","region":"箱根","lat":35.23,"lon":139.07},{"date":"2026-12-01","region":"御殿場","lat":35.3,"lon":138.93},{"date":"2026-12-02","region":"河口湖","lat":35.5,"lon":138.76},{"date":"2026-12-03","region":"東京","lat":35.68,"lon":139.76},{"date":"2026-12-04","region":"東京","lat":35.68,"lon":139.76},{"date":"2026-12-05","region":"酒酒井・成田","lat":35.72,"lon":140.27}],"foliage":[{"name":"箱根美術館（強羅）","peak":"例年見頃：11月中旬～11月下旬（箱根町觀光協會）","note":"官方寫明庭園有逾200本紅葉；你行程 11/29 到強羅。見頃會隨天氣變動，出發前請再看官方紅葉情報。","tip":"配合行程：11/29","places":[{"name":"箱根美術館","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%BE%8E%E8%A1%93%E9%A4%A8"},{"name":"早雲山","url":"https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9"}],"sources":[{"label":"箱根町觀光協會・紅葉情報","url":"https://www.hakone.or.jp/1804"},{"label":"箱根美術館官方","url":"https://www.moaart.or.jp/hakone/"}]},{"name":"箱根湯本","peak":"例年：箱根較低處，紅葉較遲結束（觀光協會）","note":"箱根町觀光協會指湯本標高較低，是箱根最後仍可看紅葉的地區之一。11/29 上午到達可順便留意。","tip":"配合行程：11/29 上午","places":[{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"}],"sources":[{"label":"箱根町觀光協會・紅葉情報（湯本）","url":"https://www.hakone.or.jp/1804"}]},{"name":"元箱根／蘆之湖","peak":"例年色づき：11月上旬～中旬（觀光協會）","note":"官方寫元箱根約 11 月上旬至中旬開始轉色。你 11/30 會到元箱根／箱根神社；屆時可能已過高峰，仍可顺道看殘葉與湖景。","tip":"配合行程：11/30（可能偏尾聲）","places":[{"name":"箱根神社","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%A5%9E%E7%A4%BE"},{"name":"元箱根港","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9%E6%B8%AF"},{"name":"芦ノ湖","url":"https://www.google.com/maps/search/?api=1&query=%E8%8A%A6%E3%83%8E%E6%B9%96"}],"sources":[{"label":"箱根町觀光協會・紅葉情報（元箱根）","url":"https://www.hakone.or.jp/1804"}]},{"name":"河口湖・もみじ回廊（富士河口湖紅葉まつり）","peak":"2026 紅葉まつり：11/7–11/29；ライトアップ 日没～21:00","note":"富士河口湖町官方活動頁寫明 2026 年活動至 11/29。你 12/2 到訪時活動已結束；紅葉高峰多在 11 月上中旬，12 月初未必仍好看，請以出發前現地／官方更新為準。","tip":"行程日 12/2：可能已過盛期（如實標示）","places":[{"name":"もみじ回廊","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%20%E3%82%82%E3%81%BF%E3%81%98%E5%9B%9E%E5%BB%8A"}],"sources":[{"label":"富士河口湖町・紅葉まつり官方","url":"https://fujisan.ne.jp/news/6065/"},{"label":"山梨縣官方觀光・もみじ回廊","url":"https://www.yamanashi-kankou.jp/kankou/spot/p1_4534.html"}]},{"name":"新倉山淺間公園（忠霊塔）","peak":"例年紅葉：約 10 月下旬～11 月中旬（山梨縣觀光資訊）","note":"山梨縣官方景點頁有紅葉說明。你 12/2 到訪偏晚，重點多是塔與富士山取景；紅葉未必仍在盛期。","tip":"配合行程：12/2（紅葉或已偏晚）","places":[{"name":"新倉山浅間公園","url":"https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%80%89%E5%B1%B1%E6%B5%85%E9%96%93%E5%85%AC%E5%9C%92"},{"name":"下吉田駅","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E9%A7%85"}],"sources":[{"label":"山梨縣官方觀光・新倉山淺間公園","url":"https://www.yamanashi-kankou.jp/kankou/spot/p1_4919.html"},{"label":"富士吉田市官方景點頁","url":"https://www.fujiyoshida.net/spot/index.php?p=12"}]},{"name":"明治神宮外苑・銀杏並木","peak":"2026 見頃預期：11 月下旬～12 月上旬（日本氣象協會 tenki.jp）","note":"外苑官方有銀杏並木介紹；tenki.jp 2026 頁寫見頃預期為 11 月下旬至 12 月上旬。你 12/4 上午已排此處，時間吻合。","tip":"配合行程：12/4 上午","places":[{"name":"明治神宮外苑 いちょう並木","url":"https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"}],"sources":[{"label":"明治神宮外苑・銀杏並木官方","url":"https://www.meijijingugaien.jp/walk/sight/season.html"},{"label":"tenki.jp 2026 見頃資訊","url":"https://tenki.jp/kouyou/3/16/30688.html"}]}],"lights":[{"name":"六本木けやき坂イルミネーション","period":"2026/11/5–12/25","hours":"17:00–22:00（官方；初日／混雜時或會調整）","fee":"沿路觀賞免費","theme":"SNOW＆BLUE／約97萬燈","note":"森ビル官方新聞稿與 CHRISTMAS HILLS 特設站確認。約 400m けやき坂。","tip":"適合 12/3 或 12/4 晚上","places":[{"name":"六本木けやき坂","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%AD%E6%9C%AC%E6%9C%A8%E3%81%91%E3%82%84%E3%81%8D%E5%9D%82"}],"sources":[{"label":"森ビル官方新聞稿","url":"https://www.mori.co.jp/press/release/260930_1/"},{"label":"CHRISTMAS HILLS 2026 特設站","url":"https://www.christmas.hills-site.com/"}]},{"name":"丸の内イルミネーション（MARUNOUCHI BRIGHT HOLIDAY）","period":"仲通りイルミ：2026/11/12–2027/2/14","hours":"以官方當日公布為準","fee":"沿路觀賞免費","theme":"シャンパンゴールド（官方）","note":"Marunouchi.com 活動頁確認。近東京駅，12/3 銀座／東京駅行程可顺路。","tip":"適合 12/3 下午／晚上","places":[{"name":"丸の内仲通り","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%B8%E3%81%AE%E5%86%85%E4%BB%B2%E9%80%9A%E3%82%8A"}],"sources":[{"label":"Marunouchi.com 活動頁","url":"https://www.marunouchi.com/pickup/event/10727/"}]},{"name":"HIBIYA Magic Time Illumination 2026","period":"2026/11/12–2027/2/28","hours":"16:00–23:00","fee":"沿路／廣場觀賞（官方未列入場費）","theme":"日比谷ステップ広場等","note":"東京ミッドタウン日比谷官方活動頁確認。酒店 remm Hibiya 附近，回酒店最方便。","tip":"最適合每晚回日比谷酒店時顺路","places":[{"name":"東京ミッドタウン日比谷","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E3%83%9F%E3%83%83%E3%83%89%E3%82%BF%E3%82%A6%E3%83%B3%E6%97%A5%E6%AF%94%E8%B0%B7"}],"sources":[{"label":"東京ミッドタウン日比谷官方活動頁","url":"https://www.hibiya.tokyo-midtown.com/jp/event/7587/"}]},{"name":"MIDTOWN CHRISTMAS 2026（東京ミッドタウン）","period":"2026/11/26–12/25","hours":"以官方當日公布為準","fee":"園區觀賞為主（部分設施另計）","theme":"Midwinter Night’s Dream","note":"東京ミッドタウン官方新聞確認。可與六本木同晚合併。","tip":"適合 12/3–12/4 晚上（可選）","places":[{"name":"東京ミッドタウン","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E3%83%9F%E3%83%83%E3%83%89%E3%82%BF%E3%82%A6%E3%83%B3"}],"sources":[{"label":"東京ミッドタウン官方新聞","url":"https://www.tokyo-midtown.com/jp/news/8186/"}]}],"days":[{"date":"2026-11-28","weekday":"六","region":"東京・羽田","items":[{"time":"1755-2245","title":"UO622 香港T2 → 羽田T3","notes":["出發：香港國際機場 T2 17:55\n到達：羽田空港第3ターミナル 約22:45\n車程：約4小時50分（航班）\n車費：機票已含"],"links":[],"places":[{"name":"羽田空港第3ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC3%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC3%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]},{"time":"2230前","title":"出發前／機場領取 SIM（如已安排）","notes":["出發前於香港機場領取：1號客運大樓五層接機大堂 A 出口 A02 櫃檯（行程本原註）\n若改為羽田領取，以供應商確認為準"],"links":[],"places":[],"maps":[]},{"time":"2300-2325","title":"羽田T3 → 穴守稻荷 → Airbnb","notes":["出發：約23:00 羽田空港第3ターミナル（京急）\n到達：穴守稲荷駅 約23:05–23:10\n車程：約3分（京急空港線，約2站）\n上車地點：京急「羽田空港第3ターミナル」站\n車費：約 ¥200（IC／現金）\n之後步行約3分鐘到 Airbnb（Room 101）\n參考：駅探 穴守稲荷↔羽田第3ターミナル"],"links":[],"places":[{"name":"羽田空港第3ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC3%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"},{"name":"穴守稲荷駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85"},{"name":"Airbnb 附近","url":"https://maps.app.goo.gl/nJJUbeA4yhmTQiya6"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%BE%BD%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC3%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB","https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85","https://maps.app.goo.gl/nJJUbeA4yhmTQiya6"]},{"time":"2330後","title":"宵夜・便利店","notes":["建議抵達後附近便利店簡單解決\n建議離開便利店／回房：午夜前"],"links":[],"places":[],"maps":[]}]},{"date":"2026-11-29","weekday":"日","region":"箱根","items":[{"time":"注意","title":"今日起可用箱根周遊券（Klook 3日）","notes":["有效日建議：11/29・11/30・12/1\n由「小田原 → 箱根湯本」起，箱根區內指定交通寫「周遊券已含」\n京急穴守↔橫濱、JR／私鐵橫濱↔小田原 不在周遊券內，要付現金／IC","官方：https://www.hakonenavi.jp/transportation/ticket/freepass/"],"links":["https://www.hakonenavi.jp/transportation/ticket/freepass/"],"places":[],"maps":[]},{"time":"0730-0745","title":"Airbnb 出發 → 穴守稻荷駅","notes":["出發：約07:30 酒店／Airbnb\n到達：穴守稲荷駅 約07:40–07:45\n車程：步行約3–8分\n車費：免費（步行）"],"links":[],"places":[{"name":"Airbnb 附近","url":"https://maps.app.goo.gl/nJJUbeA4yhmTQiya6"},{"name":"穴守稲荷駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85"}],"maps":["https://maps.app.goo.gl/nJJUbeA4yhmTQiya6","https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85"]},{"time":"0745-0805","title":"穴守稻荷 → 橫濱（京急）","notes":["出發：約07:45 穴守稲荷駅\n到達：横浜駅 約08:05–08:10\n車程：約18–21分（經京急蒲田，多可直通／1次轉乘）\n上車地點：穴守稲荷駅（京急空港線）\n車費：約 ¥313–¥320（IC／票；駅探參考）\n※箱根周遊券不含此段"],"links":["https://ekitan.com/transit/fare/sf-3260/st-1510"],"places":[{"name":"穴守稲荷駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85"},{"name":"横浜駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%A8%AA%E6%B5%9C%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%A9%B4%E5%AE%88%E7%A8%B2%E8%8D%B7%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E6%A8%AA%E6%B5%9C%E9%A7%85"]},{"time":"0815-0910","title":"橫濱 → 小田原（JR 東海道線）","notes":["出發：約08:15 横浜駅（預留轉乘緩衝）\n到達：小田原駅 約09:05–09:15\n車程：約50–56分（普通／快速）\n上車地點：横浜駅 JR 東海道線／湘南新宿ライン月台（當日看板）\n車費：約 ¥1,034（IC）／¥1,040（票）\n※箱根周遊券不含此段\n參考：駅探 横浜↔小田原"],"links":["https://ekitan.com/transit/fare/sf-3260/st-1759"],"places":[{"name":"横浜駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%A8%AA%E6%B5%9C%E9%A7%85"},{"name":"小田原駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%A8%AA%E6%B5%9C%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85"]},{"time":"0920-0935","title":"小田原 → 箱根湯本（登山電車）","notes":["出發：約09:20 小田原駅\n到達：箱根湯本駅 約09:30–09:35\n車程：約14分\n上車地點：小田原駅 箱根登山電車月台\n車費：周遊券已含（一般票約 ¥360，今日不用付）\n參考：箱根ナビ／駅探"],"links":["https://www.hakonenavi.jp/hakone-tozan/"],"places":[{"name":"小田原駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85"},{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"]},{"time":"0935-1045","title":"箱根湯本 小食","notes":["建議抵達：約09:35\n建議離開：約10:45\n小食選項：籠屋清次郎（炸魚餅，約09:30–18:00）／Grande Rivière（約10:00–18:00）／Hakone Teramisu（約10:00–17:00）\n地點：箱根湯本駅附近步行"],"links":[],"places":[{"name":"籠屋清次郎","url":"https://www.google.com/maps/search/?api=1&query=%E7%B1%A0%E5%B1%8B%E6%B8%85%E6%AC%A1%E9%83%8E%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC"},{"name":"Grande Rivière","url":"https://www.google.com/maps/search/?api=1&query=Grande%20Rivi%C3%A8re%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC"},{"name":"Hakone Teramisu","url":"https://www.google.com/maps/search/?api=1&query=Hakone%20Teramisu%20%E7%AE%B1%E6%A0%B9"},{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%B1%A0%E5%B1%8B%E6%B8%85%E6%AC%A1%E9%83%8E%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC","https://www.google.com/maps/search/?api=1&query=Grande%20Rivi%C3%A8re%20%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC","https://www.google.com/maps/search/?api=1&query=Hakone%20Teramisu%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"]},{"time":"1100-1140","title":"箱根湯本 → 強羅（登山電車）","notes":["出發：約11:00 箱根湯本駅\n到達：強羅駅 約11:35–11:40\n車程：約35–40分\n上車地點：箱根湯本駅 登山電車\n車費：周遊券已含"],"links":[],"places":[{"name":"箱根湯本駅","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E6%B9%AF%E6%9C%AC%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"]},{"time":"1145-1230","title":"Yutowa 飯店 check-in","notes":["出發：強羅駅 約11:45\n到達：酒店 約11:50–12:00\n車程：步行約5分\n車費：免費（步行）\n注意：私湯要排隊；行李可先寄放若未到入住時間"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"]},{"time":"1230-1345","title":"午餐：田むら銀かつ亭","notes":["建議抵達：約12:30\n建議離開：約13:45\n強羅附近；炸豆腐排老店"],"links":[],"places":[{"name":"田むら銀かつ亭","url":"https://www.google.com/maps/search/?api=1&query=%E7%94%B0%E3%82%80%E3%82%89%E9%8A%80%E3%81%8B%E3%81%A4%E4%BA%AD%20%E5%BC%B7%E7%BE%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%94%B0%E3%82%80%E3%82%89%E9%8A%80%E3%81%8B%E3%81%A4%E4%BA%AD%20%E5%BC%B7%E7%BE%85"]},{"time":"1400-1630","title":"箱根美術館／早雲山","notes":["建議抵達美術館：約14:00\n建議離開早雲山：約16:30\n強羅 → 早雲山：箱根登山纜車約10分\n上車地點：強羅駅 纜車のりば\n車費：周遊券已含\n可看紅葉庭園；日落前預留回酒店時間"],"links":[],"places":[{"name":"箱根美術館","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%BE%8E%E8%A1%93%E9%A4%A8"},{"name":"早雲山","url":"https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%BE%8E%E8%A1%93%E9%A4%A8","https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"]},{"time":"1730-1930","title":"晚餐：Yutowa 飯店","notes":["建議抵達餐廳：17:30 起\n建議離開／最遲入場：19:30（餐廳至21:00）\n半自助；在酒店內，無需交通費"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]}]},{"date":"2026-11-30","weekday":"一","region":"箱根","items":[{"time":"0730-0830","title":"早餐：Yutowa","notes":["建議抵達：07:30–08:00\n建議離開：約08:30\n酒店早餐時段約 07:30–09:30"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]},{"time":"0845-0915","title":"酒店 → 早雲山 → 空中纜車","notes":["出發：約08:45 酒店／強羅\n到達早雲山：約09:00–09:10\n車程：步行至強羅站約5分 + 纜車約10分\n上車地點：強羅駅 纜車 → 早雲山駅 轉箱根ロープウェイ\n車費：周遊券已含"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"},{"name":"早雲山","url":"https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9"},{"name":"箱根ロープウェイ","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6","https://www.google.com/maps/search/?api=1&query=%E6%97%A9%E9%9B%B2%E5%B1%B1%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"]},{"time":"0915-1030","title":"大涌谷","notes":["出發：早雲山 約09:15\n到達大涌谷：約09:25（纜車約8分）\n建議離開：約10:30\n車費：周遊券已含\n吃黑玉子；視火山氣體狀況可能限制步行區"],"links":[],"places":[{"name":"大涌谷","url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B6%8C%E8%B0%B7"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B6%8C%E8%B0%B7"]},{"time":"1030-1100","title":"大涌谷 → 桃源台（纜車）","notes":["出發：大涌谷 約10:30–10:40\n到達桃源台：約10:50–11:00\n車程：約15–20分（大涌谷→姥子→桃源台）\n上車地點：大涌谷駅 ロープウェイ\n車費：周遊券已含"],"links":[],"places":[{"name":"大涌谷","url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B6%8C%E8%B0%B7"},{"name":"桃源台","url":"https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B6%8C%E8%B0%B7","https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"]},{"time":"1125-1200","title":"蘆之湖遊船：桃源台 → 元箱根","notes":["建議乘船：11:25 或 12:00（行程本已知班次；實際以當日時刻表為準）\n出發：桃源台港\n到達：元箱根港 約30–40分後\n車程：約30–40分\n上車地點：桃源台 海賊船／觀光船碼頭\n車費：周遊券已含"],"links":["https://www.hakonenavi.jp/"],"places":[{"name":"芦ノ湖","url":"https://www.google.com/maps/search/?api=1&query=%E8%8A%A6%E3%83%8E%E6%B9%96"},{"name":"桃源台","url":"https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"},{"name":"元箱根","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E8%8A%A6%E3%83%8E%E6%B9%96","https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9"]},{"time":"1215-1330","title":"午餐（元箱根）","notes":["建議抵達：約12:15\n建議離開：約13:30\n選項：絹引の里（炸蝦・蕎麥）／Daimasa Motohakone（魚生飯）"],"links":[],"places":[{"name":"絹引の里","url":"https://www.google.com/maps/search/?api=1&query=%E7%B5%B9%E5%BC%95%E3%81%AE%E9%87%8C%20%E7%AE%B1%E6%A0%B9"},{"name":"Daimasa Motohakone","url":"https://www.google.com/maps/search/?api=1&query=Daimasa%20Motohakone"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%B5%B9%E5%BC%95%E3%81%AE%E9%87%8C%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=Daimasa%20Motohakone"]},{"time":"1330-1420","title":"箱根蘆之湖 成川美術館","notes":["建議抵達：約13:30（午餐後自元箱根港步行約3分）\n建議離開：約14:20（之後步行到箱根神社，仍可趕15:15回程船）\n開館：9:00–17:00（無休，臨時休館除外）\n入館：一般 ¥1,500（稅込）\n周遊券：出示箱根周遊券可減 ¥200（一般 ¥1,300），並非免費；高校生・大學生亦減 ¥200，小學生・中學生減 ¥100"],"links":["http://www.narukawamuseum.co.jp/about/guide.html","https://www.hakonenavi.jp/transportation/ticket/freepass/"],"places":[{"name":"成川美術館","url":"https://www.google.com/maps/search/?api=1&query=%E6%88%90%E5%B7%9D%E7%BE%8E%E8%A1%93%E9%A4%A8%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%88%90%E5%B7%9D%E7%BE%8E%E8%A1%93%E9%A4%A8%20%E7%AE%B1%E6%A0%B9"]},{"time":"1425-1510","title":"箱根神社／九頭龍神社","notes":["建議抵達：約14:25（成川美術館之後步行過來）\n建議離開：約15:10（配合回程船）\n元箱根港步行可到；打卡鳥居與湖景"],"links":[],"places":[{"name":"箱根神社","url":"https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%A5%9E%E7%A4%BE"},{"name":"九頭龍神社","url":"https://www.google.com/maps/search/?api=1&query=%E4%B9%9D%E9%A0%AD%E9%BE%8D%E7%A5%9E%E7%A4%BE%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E7%AE%B1%E6%A0%B9%E7%A5%9E%E7%A4%BE","https://www.google.com/maps/search/?api=1&query=%E4%B9%9D%E9%A0%AD%E9%BE%8D%E7%A5%9E%E7%A4%BE%20%E7%AE%B1%E6%A0%B9"]},{"time":"1515-1600","title":"遊船回程：元箱根 → 桃源台","notes":["建議乘船：15:15／15:55／16:30（行程本；以當日為準）\n出發：元箱根港\n到達：桃源台 約30–40分後\n上車地點：元箱根港\n車費：周遊券已含"],"links":[],"places":[{"name":"元箱根","url":"https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9"},{"name":"桃源台","url":"https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%85%83%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"]},{"time":"1600-1730","title":"桃源台 → 強羅／酒店","notes":["出發：桃源台 約16:00–16:30\n路線：纜車回早雲山 → 纜車／登山鐵道回強羅 → 步行回 Yutowa\n車程：合計約45–70分（含等候）\n車費：周遊券已含\n預留時間趕 17:30 酒店晚餐"],"links":[],"places":[{"name":"桃源台","url":"https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"},{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%A1%83%E6%BA%90%E5%8F%B0%20%E7%AE%B1%E6%A0%B9","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85","https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]},{"time":"1730-1930","title":"晚餐：Yutowa","notes":["建議抵達：17:30\n最遲入場：19:30\n酒店內；車費無需"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"]}]},{"date":"2026-12-01","weekday":"二","region":"御殿場","items":[{"time":"0730-0845","title":"早餐＋退房：Yutowa","notes":["建議早餐：07:30–08:30\n建議退房離開酒店：約08:45\n步行至強羅駅約5分"],"links":[],"places":[{"name":"箱根 ゆとわ","url":"https://maps.app.goo.gl/NvZK2snJgUcEMvLh6"},{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"}],"maps":["https://maps.app.goo.gl/NvZK2snJgUcEMvLh6","https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"]},{"time":"0900-0950","title":"強羅 → 御殿場 Outlet（M 路線巴士）","notes":["出發：強羅駅 建議乘 約09:00–09:10 班（行程本例：09:07／09:47 等；以箱根ナビ當日為準）\n到達：御殿場プレミアム・アウトレット 約35–45分後\n車程：約35–45分\n上車地點：強羅駅【3番のりば】M路線（經宮城野・仙石・乙女峠）\n車費：周遊券已含（箱根フリーパス指定區間；一般票約 ¥1,120）\n行李：Outlet 可寄物（行程本：YES）\n參考：https://odakyu-highway.jp/tenyu/ ・japan-guide Hakone Freepass"],"links":["https://www.hakonenavi.jp/transportation/station/gora/","https://odakyu-highway.jp/tenyu/"],"places":[{"name":"強羅駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85"},{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BC%B7%E7%BE%85%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"]},{"time":"1000-1200","title":"御殿場 Outlet 逛街（上午）","notes":["建議抵達：約10:00\n建議離開去午餐：約12:00\n箱根周遊券今日仍可用至區內巴士"],"links":[],"places":[{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"]},{"time":"1200-1330","title":"Outlet 午餐","notes":["建議抵達餐廳：約12:00\n建議離開：約13:30\n場內各餐廳"],"links":[],"places":[{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"]},{"time":"1330-1600","title":"Outlet 繼續逛街","notes":["建議離開 Outlet 去酒店：約16:00（視購物調整）"],"links":[],"places":[{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"]},{"time":"1600-1645","title":"Outlet → 御殿場駅 → 東橫 INN","notes":["出發：Outlet 約16:00\n① Outlet → 御殿場駅（箱根乙女口）：免費接駁／共用巴士（約每15分：:10/:25/:40/:55 等，以當場為準）\n車程：約10–15分\n車費：免費（Outlet 接駁）\n② 御殿場駅 → 東橫INN 御殿場駅前：步行約數分鐘\n車費：免費（步行）\n※若仍坐箱根區 M／天悠線回程相關段，周遊券已含；Outlet↔駅免費接駁本身也不另收"],"links":[],"places":[{"name":"御殿場プレミアム・アウトレット","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88"},{"name":"御殿場駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85"},{"name":"東橫イン 御殿場駅前","url":"https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E3%83%97%E3%83%AC%E3%83%9F%E3%82%A2%E3%83%A0%E3%83%BB%E3%82%A2%E3%82%A6%E3%83%88%E3%83%AC%E3%83%83%E3%83%88","https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85","https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"]},{"time":"1700-1830","title":"Check-in 東橫 INN 御殿場駅前","notes":["建議抵達：約16:45–17:15\n建議離開去晚餐：約18:00"],"links":[],"places":[{"name":"東橫イン 御殿場駅前","url":"https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"}],"maps":["https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"]},{"time":"1800-2000","title":"晚餐（御殿場駅附近）","notes":["建議抵達：約18:00\n建議離開：約20:00\n選項：Charcoal BBQ Omura（有中文單）／附近居酒屋（行程本已 mark Google）"],"links":[],"places":[{"name":"Charcoal BBQ Omura","url":"https://www.google.com/maps/search/?api=1&query=Charcoal%20BBQ%20Omura%20%E5%BE%A1%E6%AE%BF%E5%A0%B4"}],"maps":["https://www.google.com/maps/search/?api=1&query=Charcoal%20BBQ%20Omura%20%E5%BE%A1%E6%AE%BF%E5%A0%B4"]}]},{"date":"2026-12-02","weekday":"三","region":"河口湖","items":[{"time":"0700-0800","title":"早餐（酒店／附近）","notes":["建議：07:00–08:00\n東橫 INN 或附近便利店／早餐店"],"links":[],"places":[],"maps":[]},{"time":"0800-0845","title":"東橫巴士：御殿場駅前 → 富士河口湖大橋（優先）","notes":["出發：08:00（已確認 · 預訂編號 70057 · 2人，詳見付費票券）\n到達：東橫INN 富士河口湖大橋 約08:45\n車程：約45分\n上車地點：東橫INN 御殿場駅前\n車費：東橫INN 住宿者接駁／Express Bus，預約制；一般對住客為免費（以預約頁確認）\n預約：https://reserve.toyoko-inn-bus.com/\n※不含於河口湖／箱根周遊券"],"links":["https://reserve.toyoko-inn-bus.com/","https://reserve.toyoko-inn-bus.com/pdf/timetable.pdf"],"places":[{"name":"東橫イン 御殿場駅前","url":"https://maps.app.goo.gl/Hh1jqj12YJCRws4HA"},{"name":"東橫イン 富士河口湖大橋","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E6%A8%AA%E3%82%A4%E3%83%B3%20%E5%AF%8C%E5%A3%AB%E6%B2%B3%E5%8F%A3%E6%B9%96%E5%A4%A7%E6%A9%8B"}],"maps":["https://maps.app.goo.gl/Hh1jqj12YJCRws4HA","https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E6%A8%AA%E3%82%A4%E3%83%B3%20%E5%AF%8C%E5%A3%AB%E6%B2%B3%E5%8F%A3%E6%B9%96%E5%A4%A7%E6%A9%8B"]},{"time":"後備","title":"後備：御殿場駅 → 河口湖（富士急巴士）","notes":["若東橫巴士訂不到：\n上車地點：御殿場駅 富士山口 約1・2番巴士站\n車程：約70–100分（路線巴士）／特急約50分\n車費：路線巴士約 ¥1,750；特急御殿場ライナー約 ¥2,300（網上或較平）\n班次：約每小時有車（以富士急當日為準）\n參考：https://bus.fujikyu.co.jp/rosen/gotemba/"],"links":["https://bus.fujikyu.co.jp/rosen/gotemba/"],"places":[{"name":"御殿場駅","url":"https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85"},{"name":"河口湖駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E6%AE%BF%E5%A0%B4%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"]},{"time":"0900","title":"啟用河口湖周遊券（Klook Mt Fuji Pass）","notes":["內容：2日巴士通票、遊船、富士山全景纜車等（以 Klook／官方說明為準）\n今日起巴士／纜車／遊船涵蓋段寫「周遊券已含」\n地圖 PDF：https://www.fujikyubus.co.jp/pdf/shuyu/omni_map_202604.pdf"],"links":["https://www.klook.com/zh-HK/activity/132532-mt-fuji-pass/","https://www.fujikyubus.co.jp/pdf/shuyu/omni_map_202604.pdf"],"places":[],"maps":[]},{"time":"0900-1000","title":"前往湖龍酒店（淺川巴士站）","notes":["出發：河口湖大橋／車站一帶 約09:00\n到達：湖龍ホテル（巴士「淺川」站下車）約09:30–10:00\n車程：周遊巴士約15–30分（視路線）\n上車地點：周遊巴士站（見 pass 地圖）\n車費：周遊券已含\n私人浴池約 ¥3,300；公共浴池免費"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"]},{"time":"1000-1130","title":"富士山全景纜車","notes":["建議抵達：約10:00–10:30\n建議離開：約11:30\n上車地點：富士山パノラマロープウェイ 山麓站\n車費：周遊券已含"],"links":[],"places":[{"name":"富士山パノラマロープウェイ","url":"https://www.google.com/maps/search/?api=1&query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E3%83%91%E3%83%8E%E3%83%A9%E3%83%9E%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%AF%8C%E5%A3%AB%E5%B1%B1%E3%83%91%E3%83%8E%E3%83%A9%E3%83%9E%E3%83%AD%E3%83%BC%E3%83%97%E3%82%A6%E3%82%A7%E3%82%A4"]},{"time":"1130-1300","title":"午餐：遊船碼頭附近","notes":["建議抵達：約11:30–12:00\n建議離開：約13:00\n河口湖遊覧船周邊餐廳"],"links":[],"places":[{"name":"河口湖遊覧船","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"]},{"time":"1300-1415","title":"河口湖遊覧船","notes":["建議乘船：約13:00–13:30\n車程：遊覧約20–30分（視航線）\n上車地點：河口湖遊覧船碼頭\n車費：周遊券已含"],"links":[],"places":[{"name":"河口湖遊覧船","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"]},{"time":"1430-1600","title":"大石公園","notes":["出發：遊船碼頭／河口湖一帶 約14:30\n若要去吉田商業街，建議約 16:00 離開大石公園。若不去，可留至約 17:30 再回酒店，趕 18:00 晚餐。\n上車地點：周遊巴士紅線（河口湖駅・遊船碼頭一帶，往大石／大石公園）\n下車：大石公園\n車程：視當日班次\n車費：周遊券已含（富士急周遊巴士紅線；官方列出大石公園為主要停留所）\n回程回湖龍方向同乘周遊巴士，車費周遊券已含\n參考：https://bus.fujikyu.co.jp/fujitour/kawaguchiko/"],"links":["https://bus.fujikyu.co.jp/fujitour/kawaguchiko/"],"places":[{"name":"大石公園","url":"https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E7%9F%B3%E5%85%AC%E5%9C%92%20%E6%B2%B3%E5%8F%A3%E6%B9%96"},{"name":"河口湖遊覧船","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E7%9F%B3%E5%85%AC%E5%9C%92%20%E6%B2%B3%E5%8F%A3%E6%B9%96","https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%81%8A%E8%A6%A7%E8%88%B9"]},{"time":"1600-1730","title":"吉田商業街（可選）","notes":["可選。不去則可繼續留在大石公園至約 17:30，再回湖龍趕 18:00 晚餐。\n若去：由大石公園前往下吉田商店街。\n建議離開回酒店：約 17:30，趕 18:00 湖龍晚餐。\n交通：乘周遊巴士前往下吉田一帶（往下吉田／富士山駅方向）；班次及路線以官方為準。\n車費：周遊券已含（巴士段）"],"links":[],"places":[{"name":"下吉田商店街","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E5%95%86%E5%BA%97%E8%A1%97"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E4%B8%8B%E5%90%89%E7%94%B0%E5%95%86%E5%BA%97%E8%A1%97"]},{"time":"1800-1930","title":"晚餐：湖龍酒店","notes":["建議抵達：約18:00\n最遲：約19:30（行程本）\n回程巴士周遊券已含"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"]}]},{"date":"2026-12-03","weekday":"四","region":"東京","items":[{"time":"0600-0730","title":"早起影相（可選）","notes":["男朋友可早起影湖／富士山\n建議最遲07:30 回酒店吃早餐"],"links":[],"places":[],"maps":[]},{"time":"0800-0900","title":"早餐：湖龍酒店","notes":["建議：08:00–09:00（酒店約07:00–09:00）\n之後退房"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"]},{"time":"0900-0920","title":"湖龍 → 河口湖駅","notes":["出發：約09:00（可預約酒店送站 08:00–10:00，或以周遊巴士）\n到達：河口湖駅 約09:15–09:25\n車程：約10–20分\n上車地點：酒店／淺川巴士站\n車費：酒店接送依酒店規定；周遊巴士則周遊券已含"],"links":[],"places":[{"name":"湖龍ホテル","url":"https://maps.app.goo.gl/5vme4zzuyXGPQDaw9"},{"name":"河口湖駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"}],"maps":["https://maps.app.goo.gl/5vme4zzuyXGPQDaw9","https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"]},{"time":"0930-1135","title":"高速巴士：河口湖駅 → 東京駅日本橋口","notes":["出發：09:30（已確認 · 預約 44670868 · 座位 1D／1C · 2人，詳見付費票券）\n到達：東京駅日本橋口 約11:35\n車程：約2小時–2小時10分\n上車地點：河口湖駅 2番のりば\n車費：約 ¥2,300（大人；富士急／WILLER 等；兒童約半價）\n※不含於河口湖周遊券\n購票：https://willer-travel.com/tw/bus_search/tokyo/all/yamanashi/fujikawaguchiko/\n參考：https://bus.fujikyu.co.jp/highway/fujisan/tokyo/"],"links":["https://willer-travel.com/tw/bus_search/tokyo/all/yamanashi/fujikawaguchiko/","https://bus.fujikyu.co.jp/highway/fujisan/tokyo/"],"places":[{"name":"河口湖駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85"},{"name":"東京駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%B2%B3%E5%8F%A3%E6%B9%96%E9%A7%85","https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"]},{"time":"1145-1230","title":"東京駅 → remm Hibiya 放行李","notes":["高速巴士約11:35 抵達東京駅日本橋口後，直接去酒店放行李\n出發：約11:45 東京駅\n到達：remm Hibiya 約12:00–12:15\n車程：地鐵約10–15分\n上車地點：東京駅／有樂町／日比谷線等（可到日比谷 A6／有樂町／銀座 C1）\n車費：約 ¥178（IC；東京 Metro 短程）"],"links":[],"places":[{"name":"東京駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"},{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85","https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"]},{"time":"1230-1400","title":"銀座逛街","notes":["建議抵達銀座：約12:30\n建議離開去午餐：約14:00\n酒店步行可到銀座，車費可免\n參考關門：mont-bell 21:00／伊東屋 20:00／GINZA SIX 20:30／無印・Loft 21:00／BicCamera 有樂町 22:00"],"links":[],"places":[{"name":"mont-bell 銀座","url":"https://www.google.com/maps/search/?api=1&query=mont-bell%20%E9%8A%80%E5%BA%A7"},{"name":"伊東屋 銀座","url":"https://www.google.com/maps/search/?api=1&query=%E4%BC%8A%E6%9D%B1%E5%B1%8B%20%E9%8A%80%E5%BA%A7"},{"name":"GINZA SIX","url":"https://www.google.com/maps/search/?api=1&query=GINZA%20SIX"},{"name":"無印良品 銀座","url":"https://www.google.com/maps/search/?api=1&query=%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81%20%E9%8A%80%E5%BA%A7"},{"name":"Loft 銀座","url":"https://www.google.com/maps/search/?api=1&query=Loft%20%E9%8A%80%E5%BA%A7"},{"name":"BicCamera 有楽町","url":"https://www.google.com/maps/search/?api=1&query=BicCamera%20%E6%9C%89%E6%A5%BD%E7%94%BA"}],"maps":["https://www.google.com/maps/search/?api=1&query=mont-bell%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=%E4%BC%8A%E6%9D%B1%E5%B1%8B%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=GINZA%20SIX","https://www.google.com/maps/search/?api=1&query=%E7%84%A1%E5%8D%B0%E8%89%AF%E5%93%81%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=Loft%20%E9%8A%80%E5%BA%A7","https://www.google.com/maps/search/?api=1&query=BicCamera%20%E6%9C%89%E6%A5%BD%E7%94%BA"]},{"time":"1400-1530","title":"午餐（銀座）","notes":["建議抵達：約14:00\n建議離開：約15:30\n在銀座用餐；不指定餐廳，以當日為準"],"links":[],"places":[{"name":"銀座","url":"https://www.google.com/maps/search/?api=1&query=%E9%8A%80%E5%BA%A7"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E9%8A%80%E5%BA%A7"]},{"time":"1530-1700","title":"東京駅一番街","notes":["建議抵達：約15:30\n建議離開：約17:00\n由銀座返回東京駅（步行或地鐵短程）\n車費：步行可免；地鐵以當日 IC 為準"],"links":[],"places":[{"name":"東京駅一番街","url":"https://maps.app.goo.gl/fbTe1Nk1vo9hymkV7"}],"maps":["https://maps.app.goo.gl/fbTe1Nk1vo9hymkV7"]},{"time":"1700-1900","title":"丸の内イルミネーション（MARUNOUCHI BRIGHT HOLIDAY）","notes":["建議抵達：約17:00（一番街之後，近東京駅）\n建議離開：約19:00\n期間：仲通りイルミ：2026/11/12–2027/2/14\n時間：以官方當日公布為準\n沿路觀賞免費\n步行可到，車費可免"],"links":["https://www.marunouchi.com/pickup/event/10727/"],"places":[{"name":"丸の内仲通り","url":"https://www.google.com/maps/search/?api=1&query=%E4%B8%B8%E3%81%AE%E5%86%85%E4%BB%B2%E9%80%9A%E3%82%8A"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E4%B8%B8%E3%81%AE%E5%86%85%E4%BB%B2%E9%80%9A%E3%82%8A"]},{"time":"1900-2100","title":"晚餐（東京駅／丸之內／銀座一帶）","notes":["建議：約19:00–21:00\n燈飾之後在東京駅／丸之內／銀座一帶用餐；不指定餐廳"],"links":[],"places":[],"maps":[]}]},{"date":"2026-12-04","weekday":"五","region":"東京","items":[{"time":"0800-0900","title":"早餐（酒店附近）","notes":["建議：08:00–09:00\n日比谷／有樂町一帶"],"links":[],"places":[],"maps":[]},{"time":"0900-0930","title":"remm → 明治神宮外苑（青山一丁目）","notes":["出發：約09:00 remm Hibiya\n到達：青山一丁目駅 4號出口 約09:20–09:30\n車程：地鐵約15–20分\n上車地點：日比谷／霞關等轉 銀座線或半藏門線至青山一丁目\n車費：約 ¥178（IC）"],"links":[],"places":[{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"},{"name":"明治神宮外苑 いちょう並木","url":"https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"}],"maps":["https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6","https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"]},{"time":"0930-1100","title":"明治神宮外苑 銀杏並木","notes":["建議抵達：約09:30\n建議離開：約11:00\n青山一丁目 4號出口出\n步行賞銀杏；12月上旬見頃預期吻合"],"links":[],"places":[{"name":"明治神宮外苑 いちょう並木","url":"https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"}],"maps":["https://maps.app.goo.gl/5rkS4qy7uKdsf7j98"]},{"time":"1100-1230","title":"午餐（表參道／原宿方向）","notes":["建議抵達：約11:00–11:30\n建議離開：約12:30\n選項：銀座おのでら（10:00開）／BASO OMOTESANDO（11:30開）／Eggs 'n Things 原宿（08:00開）\n外苑 → 表參道：步行約15–25分或地鐵1站\n車費：步行免費；地鐵約 ¥178"],"links":[],"places":[{"name":"銀座おのでら","url":"https://maps.app.goo.gl/qGkzdrsYS8AGom89A"},{"name":"BASO OMOTESANDO","url":"https://maps.app.goo.gl/MpiBj3x3xRi92erB6"},{"name":"Eggs 'n Things 原宿","url":"https://maps.app.goo.gl/HGM5nmEh3mCYUiQg9"}],"maps":["https://maps.app.goo.gl/qGkzdrsYS8AGom89A","https://maps.app.goo.gl/MpiBj3x3xRi92erB6","https://maps.app.goo.gl/HGM5nmEh3mCYUiQg9"]},{"time":"1230-1715","title":"表參道 → 裏原宿 → 竹下通","notes":["建議開始：約12:30\n建議離開往澀谷：約17:15\n幾乎全程步行；無需車費"],"links":[],"places":[{"name":"表参道","url":"https://www.google.com/maps/search/?api=1&query=%E8%A1%A8%E5%8F%82%E9%81%93"},{"name":"裏原宿","url":"https://www.google.com/maps/search/?api=1&query=%E8%A3%8F%E5%8E%9F%E5%AE%BF"},{"name":"竹下通り","url":"https://www.google.com/maps/search/?api=1&query=%E7%AB%B9%E4%B8%8B%E9%80%9A%E3%82%8A"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E8%A1%A8%E5%8F%82%E9%81%93","https://www.google.com/maps/search/?api=1&query=%E8%A3%8F%E5%8E%9F%E5%AE%BF","https://www.google.com/maps/search/?api=1&query=%E7%AB%B9%E4%B8%8B%E9%80%9A%E3%82%8A"]},{"time":"1715-1800","title":"原宿／表參道 → 澀谷","notes":["出發：約17:15 原宿／表參道\n到達：澀谷 約18:00（銜接晚餐）\n車程：步行約15–25分或電車1站\n上車地點（若坐電車）：明治神宮前／表參道 → 渋谷\n車費：約 ¥178 或步行免費"],"links":[],"places":[{"name":"表参道","url":"https://www.google.com/maps/search/?api=1&query=%E8%A1%A8%E5%8F%82%E9%81%93"},{"name":"竹下通り","url":"https://www.google.com/maps/search/?api=1&query=%E7%AB%B9%E4%B8%8B%E9%80%9A%E3%82%8A"},{"name":"鴨to葱 渋谷","url":"https://maps.app.goo.gl/CVSZCWPW12NruiAt7"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E8%A1%A8%E5%8F%82%E9%81%93","https://www.google.com/maps/search/?api=1&query=%E7%AB%B9%E4%B8%8B%E9%80%9A%E3%82%8A","https://maps.app.goo.gl/CVSZCWPW12NruiAt7"]},{"time":"1800-1930","title":"晚餐（澀谷）","notes":["建議抵達：約18:00\n建議離開：約19:30\n選項：鴨to葱（09:00–04:00）／焼肉ホルモン 新井屋（17:00–23:00）"],"links":[],"places":[{"name":"鴨to葱 渋谷","url":"https://maps.app.goo.gl/CVSZCWPW12NruiAt7"},{"name":"新井屋 渋谷","url":"https://maps.app.goo.gl/HRhQ8xjS8MGFaD3q6"}],"maps":["https://maps.app.goo.gl/CVSZCWPW12NruiAt7","https://maps.app.goo.gl/HRhQ8xjS8MGFaD3q6"]},{"time":"1930-2100","title":"Shibuya 109／mont-bell 澀谷","notes":["建議：19:30–21:00（兩店約21:00關）\n步行於澀谷駅周邊"],"links":[],"places":[{"name":"Shibuya 109","url":"https://maps.app.goo.gl/DVkbeAvW56yLjGUT6"},{"name":"mont-bell 渋谷","url":"https://maps.app.goo.gl/pxsuWnnQ7C8uea8t8"}],"maps":["https://maps.app.goo.gl/DVkbeAvW56yLjGUT6","https://maps.app.goo.gl/pxsuWnnQ7C8uea8t8"]},{"time":"2100-2145","title":"澀谷 → remm Hibiya","notes":["出發：約21:00 渋谷駅\n到達：日比谷／酒店 約21:20–21:40\n車程：約15–25分\n上車地點：渋谷駅（銀座線直達淺草橋方向可到銀座再步行，或銀座線→日比谷線等）\n車費：約 ¥178（IC）"],"links":[],"places":[{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"}],"maps":["https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"]}]},{"date":"2026-12-05","weekday":"六","region":"酒酒井・成田","items":[{"time":"0700-0800","title":"早餐＋退房","notes":["建議早餐：07:00–08:00\n退房後帶齊行李去巴士站"],"links":[],"places":[],"maps":[]},{"time":"0900-1010","title":"remm → 東京八重洲巴士總站","notes":["出發：約09:00 remm Hibiya（預留塞車／找路）\n到達：バスターミナル東京八重洲 地下A 約09:30–09:50\n車程：地鐵約10–15分＋步行找地下A\n上車地點：日比谷／有樂町 → 東京駅八重洲口方向\n車費：約 ¥178（IC）\n之後在 A02 月台排隊（建議開車前15分到）"],"links":[],"places":[{"name":"remm Hibiya","url":"https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6"},{"name":"バスターミナル東京八重洲","url":"https://www.google.com/maps/search/?api=1&query=%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E6%9D%B1%E4%BA%AC%E5%85%AB%E9%87%8D%E6%B4%B2"},{"name":"東京駅","url":"https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"}],"maps":["https://maps.app.goo.gl/gSc8yfPCXjt1XkHj6","https://www.google.com/maps/search/?api=1&query=%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E6%9D%B1%E4%BA%AC%E5%85%AB%E9%87%8D%E6%B4%B2","https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E4%BA%AC%E9%A7%85"]},{"time":"1020-1115","title":"高速巴士：八重洲 → 酒々井 Outlet","notes":["出發：10:20 バスターミナル東京八重洲 地下A【A02番のりば】（官方時刻例；亦有08:40／09:20 等）\n到達：酒々井プレミアム・アウトレット 約11:15（約50–55分）\n車程：約50–55分\n上車地點：地下A A02\n車費：大人 ¥1,300（小兒 ¥650）；下車時付；IC／信用卡觸控可\n預約：不可（先到先得）；有行李艙\n官方：https://www.premiumoutlets.co.jp/shisui/access/bus.html"],"links":["https://www.premiumoutlets.co.jp/shisui/access/bus.html"],"places":[{"name":"バスターミナル東京八重洲","url":"https://www.google.com/maps/search/?api=1&query=%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E6%9D%B1%E4%BA%AC%E5%85%AB%E9%87%8D%E6%B4%B2"},{"name":"酒々井プレミアムアウトレット","url":"https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E3%83%90%E3%82%B9%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB%E6%9D%B1%E4%BA%AC%E5%85%AB%E9%87%8D%E6%B4%B2","https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"]},{"time":"1115-1500","title":"酒々井 PREMIUM OUTLETS 逛街＋午餐","notes":["建議抵達：約11:15\n午餐：約12:00–13:00（場內）\n建議離開去巴士：約15:20（趕 15:45 往成田）"],"links":[],"places":[{"name":"酒々井プレミアムアウトレット","url":"https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"}],"maps":["https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"]},{"time":"1545-1605","title":"Outlet → 成田空港 T2","notes":["出發：15:45 酒々井プレミアム・アウトレット（官方例；亦有15:15／16:15 等）\n到達：成田空港第2ターミナル 約16:03–16:05\n車程：約15–18分\n上車地點：Outlet 高速巴士站\n車費：大人 ¥500（小兒 ¥250）；上車時付；IC／信用卡可\n※去 T2（UO647）；官方亦停 T1\n官方：https://www.premiumoutlets.co.jp/shisui/access/bus.html"],"links":["https://www.premiumoutlets.co.jp/shisui/access/bus.html","https://www.keiseibus.co.jp/express-bus/90103-2/"],"places":[{"name":"酒々井プレミアムアウトレット","url":"https://maps.app.goo.gl/9eWK1mixDk2v9jvB8"},{"name":"成田空港第2ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://maps.app.goo.gl/9eWK1mixDk2v9jvB8","https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]},{"time":"1610-1845","title":"成田 T2 報到＋晚餐","notes":["建議抵達機場後立刻辦理登機\nUO647 19:00 起飛 → 建議 17:00 前完成報到／安檢緩衝\n晚餐：航廈內"],"links":[],"places":[{"name":"成田空港第2ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]},{"time":"1900-2325","title":"UO647 成田T2 → 香港T1","notes":["出發：成田 T2 19:00\n到達：香港 T1 約23:25\n車程：約4小時25分（航班）\n車費：機票已含"],"links":[],"places":[{"name":"成田空港第2ターミナル","url":"https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"}],"maps":["https://www.google.com/maps/search/?api=1&query=%E6%88%90%E7%94%B0%E7%A9%BA%E6%B8%AF%E7%AC%AC2%E3%82%BF%E3%83%BC%E3%83%9F%E3%83%8A%E3%83%AB"]}]}],"fuji_visibility":{"title":"富士山能見度","tip":"配合行程：12/2–12/3 河口湖；可選 11/30 箱根蘆之湖側（南側視角）","note":"本卡是查詢入口，不會顯示當日分數或「今天看得見」。出發前請點下方連結看預報／直播。實用提示（來源：中央高速巴士頁）：朝（約 6–9 時）較易見；冬季整體較易見；當日以直播／預報為準。","disclaimer":"第三個連結為非官方第三方預報站，出發前請再對照官方預報／直播。","sources":[{"label":"中央高速巴士・富士山見え方予報","url":"https://fuji.highwaybus.com/condition/"},{"label":"河口湖觀光情報館・富士山ライブカメラ","url":"https://www.kawaguchiko.gr.jp/fujilive.php"},{"label":"富士山視界・天氣預報（河口湖／箱根）","url":"https://isfujivisible.com/ja"}]},"beauty":[{"name":"ヘッドコンシェルジュ 表参道店","places":[{"name":"ヘッドコンシェルジュ 表参道店","url":"https://www.google.com/maps/search/?api=1&query=%E3%83%98%E3%83%83%E3%83%89%E3%82%B3%E3%83%B3%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B8%E3%83%A5%20%E8%A1%A8%E5%8F%82%E9%81%93%E5%BA%97"}],"rating":"4.9","category":"美容院","note":"京喚羽","image":"assets/places/head-concierge-omotesando.webp","image_credit":"示意圖","region":"表參道・原宿・青山","station":"表参道駅","hours":"10:00–23:00","hours_source":"https://headconcierge.jp/shop/omotesando/","lat":35.669204,"lng":139.707285},{"name":"ヘッドコンシェルジュ 銀座店","places":[{"name":"ヘッドコンシェルジュ 銀座店","url":"https://www.google.com/maps/search/?api=1&query=%E3%83%98%E3%83%83%E3%83%89%E3%82%B3%E3%83%B3%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B8%E3%83%A5%20%E9%8A%80%E5%BA%A7%E5%BA%97"}],"rating":"4.3","category":"美容院","note":"京喚羽","image":"assets/places/head-concierge-ginza.webp","image_credit":"品牌共用","region":"銀座・有樂町・日比谷","station":"銀座駅","hours":"10:00–23:00","hours_source":"https://headconcierge.jp/shop/ginza/","lat":35.669261,"lng":139.764429},{"name":"ヘッドコンシェルジュ 神宮前店","places":[{"name":"ヘッドコンシェルジュ 神宮前店","url":"https://www.google.com/maps/search/?api=1&query=%E3%83%98%E3%83%83%E3%83%89%E3%82%B3%E3%83%B3%E3%82%B7%E3%82%A7%E3%83%AB%E3%82%B8%E3%83%A5%20%E7%A5%9E%E5%AE%AE%E5%89%8D%E5%BA%97"}],"rating":"4.9","category":"美容院","note":"買到京喚羽","image":"assets/places/head-concierge-jingumae.webp","image_credit":"品牌共用","region":"表參道・原宿・青山","station":"明治神宮前駅","hours":"10:00–23:00","hours_source":"https://headconcierge.jp/shop/jingumae/","lat":35.666107,"lng":139.70412},{"name":"雅-miyavi-","places":[{"name":"雅-miyavi-","url":"https://www.google.com/maps/place/%E9%9B%85-miyavi-/@35.2955006,138.924479,17z/data=!3m1!4b1!4m6!3m5!1s0x6019773f15a93c21:0xabd0b717f336f7e3!8m2!3d35.2955006!4d138.924479!16s%2Fg%2F11lym188gv?hl=zh-TW"}],"rating":"5.0","category":"髮型屋","note":"Salon","region":"御殿場","hours":"09:00–19:00（定休日未見官方固定說明；Google 地圖顯示逢星期二、星期五休息）","hours_source":"https://www.google.com/maps/place/%E9%9B%85-miyavi-/@35.2955006,138.924479,17z/data=!3m1!4b1!4m6!3m5!1s0x6019773f15a93c21:0xabd0b717f336f7e3!8m2!3d35.2955006!4d138.924479!16s%2Fg%2F11lym188gv?hl=zh-TW","lat":35.2955006,"lng":138.924479},{"name":"hair＆make CheRu（御殿場）","places":[{"name":"hair＆make CheRu（御殿場）","url":"https://www.google.com/maps/place/hair%EF%BC%86make%20CheRu%20%E3%80%90%E3%83%98%E3%82%A2%E3%83%BC%E3%83%A1%E3%82%A4%E3%82%AF%E3%83%81%E3%82%A7%E3%83%AB%E3%80%91%E5%BE%A1%E6%AE%BF%E5%A0%B4/@35.2916605,138.9444158,17z/data=!3m1!4b1!4m6!3m5!1s0x60197616c1079e39:0xa26ebe41e5afeb0a!8m2!3d35.2916605!4d138.9444158!16s%2Fg%2F11cn0th3mx?hl=zh-TW"}],"rating":"4.8","category":"髮型屋","note":"Salon","region":"御殿場","hours":"09:00–18:00（逢星期一休息；平日或另有不定休）","hours_source":"https://beauty.hotpepper.jp/slnH000348545/","lat":35.2916605,"lng":138.9444158}],"restaurants":[{"name":"AFURI Minami-Aoyama","places":[{"name":"AFURI Minami-Aoyama","url":"https://www.google.com/maps/search/?api=1&query=AFURI%20Minami-Aoyama"}],"rating":"4.8","price":"¥1,000–2,000","category":"拉麵","note":"柚子拉麵出名 原宿有樂叮都有分店","image":"assets/places/afuri-minami-aoyama.webp","food_image":"assets/places/afuri-minami-aoyama-food.webp","image_credit":"Wikimedia","region":"表參道・原宿・青山","cuisine":"拉麵","station":"表参道駅","hours":"11:00–23:00","hours_source":"https://afuri.com/findus/","lat":35.663738,"lng":139.712288},{"name":"AFURI Harajuku","places":[{"name":"AFURI Harajuku","url":"https://www.google.com/maps/search/?api=1&query=AFURI%20Harajuku"}],"rating":"4.5","price":"¥1,000–2,000","category":"拉麵","note":"柚子拉麵 有樂叮都有","image":"assets/places/afuri-harajuku.webp","food_image":"assets/places/afuri-harajuku-food.webp","image_credit":"Wikimedia","region":"表參道・原宿・青山","cuisine":"拉麵","station":"明治神宮前駅","hours":"10:00–23:00","hours_source":"https://afuri.com/findus/","lat":35.672992,"lng":139.703812},{"name":"AFURI Yurakucho","places":[{"name":"AFURI Yurakucho","url":"https://www.google.com/maps/search/?api=1&query=AFURI%20Yurakucho"}],"rating":"4.7","price":"¥1,000–2,000","category":"拉麵","note":"柚子拉麵出名 原宿都有","image":"assets/places/afuri-yurakucho.webp","food_image":"assets/places/afuri-yurakucho-food.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","cuisine":"拉麵","station":"有楽町駅","hours":"11:00–23:00","hours_source":"https://afuri.com/findus/","lat":35.673682,"lng":139.761185},{"name":"Sushi Kuni","places":[{"name":"Sushi Kuni","url":"https://www.google.com/maps/search/?api=1&query=Sushi%20Kuni"}],"rating":"4.3","price":"¥4,000–9,000","category":"壽司","note":"觀光客多海鮮丼飯","image":"assets/places/sushi-kuni.webp","food_image":"assets/places/sushi-kuni-food.webp","image_credit":"Wikimedia","region":"築地・豐洲","cuisine":"壽司","station":"築地駅","hours":"9:00–13:30／17:00–20:30（水曜定休；日祝僅午市）","hours_source":"tabelog","lat":35.665145,"lng":139.770129},{"name":"Hamburg : Kiwamiya Tokyo Station","places":[{"name":"Hamburg : Kiwamiya Tokyo Station","url":"https://www.google.com/maps/search/?api=1&query=Hamburg%20%3A%20Kiwamiya%20Tokyo%20Station"}],"rating":"4.1","price":"¥2,000–3,000","category":"牛排","note":"出名漢堡，多人排隊","food_image":"assets/places/kiwamiya-hamburg-food.webp","image_credit":"Wikimedia","region":"東京駅・丸之內・日本橋","cuisine":"牛排漢堡","busy_queue":true,"station":"東京駅","hours":"11:00–23:00","hours_source":"https://www.gransta.jp/mall/gransta_yaekita/kiwamiya/","lat":35.710968,"lng":139.774984},{"name":"Koganeya Shibuya","places":[{"name":"Koganeya Shibuya","url":"https://www.google.com/maps/search/?api=1&query=Koganeya%20Shibuya"}],"rating":"4.3","price":"¥2,000–5,000","category":"居酒屋","note":"有火鍋串燒","food_image":"assets/places/koganeya-shibuya-food.webp","image_credit":"Wikimedia","region":"澀谷","cuisine":"居酒屋","station":"渋谷駅","lat":35.658543,"lng":139.70151,"hours":"月〜木 17:00–23:00／金 17:00–翌4:00／土 12:00–翌4:00／日・祝 11:30–23:00","hours_source":"https://motsunabe-koganeya.com/"},{"name":"Sushi Koharu","places":[{"name":"Sushi Koharu","url":"https://www.google.com/maps/search/?api=1&query=Sushi%20Koharu"}],"rating":"4.8","price":"¥1,000–2,000","category":"壽司","note":"平價好食，丼飯","food_image":"assets/places/sushi-koharu-food.webp","image_credit":"Wikimedia","region":"築地・豐洲","cuisine":"壽司","station":"築地駅","lat":35.706264,"lng":139.753447},{"name":"TRUNK KITCHEN","places":[{"name":"TRUNK KITCHEN","url":"https://www.google.com/maps/search/?api=1&query=TRUNK%20KITCHEN"}],"rating":"4.1","category":"西餐","note":"乜都有","image":"assets/places/trunk-kitchen.webp","food_image":"assets/places/trunk-kitchen-food.webp","image_credit":"Wikimedia","region":"表參道・原宿・青山","cuisine":"其他","station":"表参道駅","hours":"7:00–11:00／11:00–16:00／Dinner 平日17:30–23:00","hours_source":"https://catstreet.trunk-hotel.com/topics/article.html?id=584","lat":35.664397,"lng":139.704066},{"name":"ROOF TOP RESTAURANT & MUSIC BAR SOAK","places":[{"name":"ROOF TOP RESTAURANT & MUSIC BAR SOAK","url":"https://www.google.com/maps/search/?api=1&query=ROOF%20TOP%20RESTAURANT%20%26%20MUSIC%20BAR%20SOAK"}],"rating":"4.6","category":"餐廳","note":"夜景好","food_image":"assets/places/soak-rooftop-food.webp","image_credit":"Wikimedia","region":"表參道・原宿・青山","cuisine":"其他","station":"表参道駅","hours":"17:00–翌1:00","hours_source":"https://soaks.tokyo/","lat":35.667405,"lng":139.706914},{"name":"Maguro & Sakana Kaisenmeshi Nakamata","places":[{"name":"Maguro & Sakana Kaisenmeshi Nakamata","url":"https://www.google.com/maps/search/?api=1&query=Maguro%20%26%20Sakana%20Kaisenmeshi%20Nakamata"}],"rating":"4.7","price":"¥2,000–3,000","category":"海鮮丼","note":"海鮮丼飯","food_image":"assets/places/nakamata-kaisenmeshi-food.webp","image_credit":"Wikimedia","region":"築地・豐洲","cuisine":"海鮮丼","station":"築地駅","lat":35.663594,"lng":139.771633,"hours":"11:00–21:00","hours_source":"https://nakamata-nodoguro.com/kaisenmeshi/"},{"name":"MATCHAMON GINZA SIX","places":[{"name":"MATCHAMON GINZA SIX","url":"https://www.google.com/maps/search/?api=1&query=MATCHAMON%20GINZA%20SIX"}],"rating":"4.9","price":"¥1–1,000","category":"咖啡店","note":"嘢飲好飲","image":"assets/places/matchamon-ginza-six.webp","food_image":"assets/places/matchamon-ginza-six-food.webp","image_credit":"品牌官網","region":"銀座・有樂町・日比谷","cuisine":"甜品咖啡","station":"銀座駅","hours":"10:30–20:30","hours_source":"https://ginza6.tokyo/shops/detail/8208150","lat":35.669533,"lng":139.764049},{"name":"Sushi Yoshikawa Akari Ginza","places":[{"name":"Sushi Yoshikawa Akari Ginza","url":"https://www.google.com/maps/search/?api=1&query=Sushi%20Yoshikawa%20Akari%20Ginza"}],"rating":"5.0","price":"¥10,000+","category":"壽司","food_image":"assets/places/sushi-yoshikawa-akari-food.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","cuisine":"壽司","station":"銀座駅","note":"銀座高級壽司","lat":35.672013,"lng":139.76472,"hours":"完全預約制 17:00–19:00／19:30–21:30（11月起）","hours_source":"https://sushi-yoshikawa.jp/akari_ginza/"},{"name":"Tricolore","places":[{"name":"Tricolore","url":"https://www.google.com/maps/search/?api=1&query=Tricolore"}],"rating":"4.3","price":"¥1,000–2,000","category":"咖啡店","image":"assets/places/tricolore.webp","food_image":"assets/places/tricolore-food.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","cuisine":"甜品咖啡","note":"銀座咖啡店","lat":35.670259,"lng":139.76502,"hours":"8:00–19:00（火曜定休）","hours_source":"http://www.tricolore.co.jp/ginza_trico/info/info.html"},{"name":"Charcoal BBQ Omura","places":[{"name":"Charcoal BBQ Omura","url":"https://www.google.com/maps/search/?api=1&query=Charcoal%20BBQ%20Omura"}],"rating":"4.2","price":"¥4,000–10,000","category":"燒肉","food_image":"assets/places/charcoal-bbq-omura-food.webp","image_credit":"Wikimedia","region":"御殿場","cuisine":"燒肉","station":"御殿場駅","note":"燒肉；行程註有中文單","lat":35.300135,"lng":138.933831,"hours":"月火木日祝 16:00–23:00／金土祝前 16:00–24:00（水曜定休）","hours_source":"https://yaki2929.gorp.jp/"},{"name":"Nabesuke","places":[{"name":"Nabesuke","url":"https://www.google.com/maps/search/?api=1&query=Nabesuke"}],"rating":"4.7","price":"¥3,000–6,000","category":"居酒屋","image":"assets/places/nabesuke.webp","food_image":"assets/places/nabesuke-food.webp","image_credit":"Wikimedia","region":"其他東京","cuisine":"居酒屋","note":"居酒屋","lat":35.681256,"lng":139.773091},{"name":"Goten Sakaba","places":[{"name":"Goten Sakaba","url":"https://www.google.com/maps/search/?api=1&query=Goten%20Sakaba"}],"rating":"4.0","price":"¥4,000–5,000","category":"居酒屋","food_image":"assets/places/goten-sakaba-food.webp","image_credit":"Wikimedia","region":"御殿場","cuisine":"居酒屋","station":"御殿場駅","note":"御殿場居酒屋","lat":35.295342,"lng":138.938629,"hours":"火～日 15:00–24:00（月曜定休；祝日營業時翌火曜休）","hours_source":"https://gotensakaba.gorp.jp/"},{"name":"Daimasa Motohakone","places":[{"name":"Daimasa Motohakone","url":"https://www.google.com/maps/search/?api=1&query=Daimasa%20Motohakone"}],"rating":"4.6","price":"¥2,000–3,000","category":"海鮮丼","region":"箱根","cuisine":"海鮮丼","hours":"11:00–15:00","station":"元箱根港","image":"assets/places/daimasa-motohakone.webp","food_image":"assets/places/daimasa-motohakone-food.webp","image_credit":"箱根ナビ／HACOODA","note":"魚屋直營海鮮丼；名物龍神丼","lat":35.204049,"lng":139.030942},{"name":"絹引の里","places":[{"name":"絹引の里","url":"https://www.google.com/maps/search/?api=1&query=%E7%B5%B9%E5%BC%95%E3%81%AE%E9%87%8C"}],"rating":"4.0","price":"¥1,000–2,000","category":"蕎麥麵","food_image":"assets/places/kinubiki-no-sato-food.webp","image_credit":"Wikimedia","region":"箱根","cuisine":"烏冬蕎麥","station":"元箱根港","note":"炸蝦・蕎麥（元箱根）","hours":"11:00–18:00","hours_source":"https://www.hakonenavi.jp/spot/1114","lat":35.204049,"lng":139.030942},{"name":"Tamura Ginkatsu-tei","places":[{"name":"Tamura Ginkatsu-tei","url":"https://www.google.com/maps/search/?api=1&query=Tamura%20Ginkatsu-tei"}],"rating":"4.1","price":"¥1,000–2,000","category":"炸豬排","food_image":"assets/places/tamura-ginkatsutei-food.webp","image_credit":"Wikimedia","region":"箱根","cuisine":"其他","station":"強羅駅","note":"強羅炸豆腐排老店","hours":"11:00–14:30／17:00–19:00（火夜・水定休）","hours_source":"https://www.hakonenavi.jp/spot/1253","lat":35.250655,"lng":139.049268},{"name":"Ramen Kamo to Negi Shibuya Miyamasuzaka Branch","places":[{"name":"Ramen Kamo to Negi Shibuya Miyamasuzaka Branch","url":"https://www.google.com/maps/search/?api=1&query=Ramen%20Kamo%20to%20Negi%20Shibuya%20Miyamasuzaka%20Branch"}],"rating":"4.7","price":"¥1,000–2,000","category":"拉麵","region":"澀谷","cuisine":"拉麵","need_reserve":false,"hours":"09:00–翌4:00","station":"渋谷駅","food_image":"assets/places/kamo-to-negi-shibuya-food.webp","image_credit":"品牌官網","note":"鴨・葱・水出汁拉麵；官方寫預約不可","hours_source":"https://www.kamotonegi.com/shoprisuto/shibuya/","lat":35.690854,"lng":139.700377},{"name":"Ramen Kamo to Negi Shinjuku","places":[{"name":"Ramen Kamo to Negi Shinjuku","url":"https://www.google.com/maps/search/?api=1&query=Ramen%20Kamo%20to%20Negi%20Shinjuku"}],"rating":"4.2","price":"¥1,000–2,000","category":"拉麵","region":"新宿","cuisine":"拉麵","station":"新宿駅","food_image":"assets/places/kamo-to-negi-shinjuku-food.webp","image_credit":"品牌官網","note":"鴨・葱・水出汁拉麵","hours":"10:00–翌4:00","hours_source":"https://www.kamotonegi.com/shoprisuto/shinjunkunishi/","lat":35.690719,"lng":139.694153},{"name":"Gyutan Ara","places":[{"name":"Gyutan Ara","url":"https://www.google.com/maps/search/?api=1&query=Gyutan%20Ara"}],"rating":"4.2","price":"¥2,000–3,000","category":"牛舌","food_image":"assets/places/gyutan-ara-food.webp","image_credit":"Wikimedia","region":"其他東京","cuisine":"牛舌","note":"牛舌專門","lat":35.711722,"lng":139.776143,"hours":"11:30–14:00／17:00–23:00（土日祝晚宴至22:00）","hours_source":"https://tabelog.com/tokyo/A1304/A130401/13118210/"},{"name":"海の幸 翔","places":[{"name":"海の幸 翔","url":"https://www.google.com/maps/search/?api=1&query=%E6%B5%B7%E3%81%AE%E5%B9%B8%20%E7%BF%94"}],"rating":"4.4","price":"¥4,000–6,000","category":"海鮮丼","image":"assets/places/uminosachi-sho.webp","food_image":"assets/places/uminosachi-sho-food.webp","image_credit":"Wikimedia","region":"築地・豐洲","cuisine":"海鮮丼","station":"築地駅","note":"築地海鮮丼","lat":35.665201,"lng":139.772303,"hours":"平日 11:45–14:00／18:00–23:00（土日祝定休）","hours_source":"https://tabelog.com/tokyo/A1310/A131002/13283440/"},{"name":"Soranoiro - Nippon","places":[{"name":"Soranoiro - Nippon","url":"https://www.google.com/maps/search/?api=1&query=Soranoiro%20-%20Nippon"}],"rating":"3.9","price":"¥1,000–2,000","category":"拉麵","note":"拉麵好食","image":"assets/places/soranoiro-nippon.webp","food_image":"assets/places/soranoiro-nippon-food.webp","image_credit":"Wikimedia","region":"東京駅・丸之內・日本橋","cuisine":"拉麵","station":"東京駅","hours":"09:00–23:00","hours_source":"https://soranoiro-vege.com/store-menu/soranoiro-nippon/","lat":35.682286,"lng":139.766102},{"name":"L'ibisco Ginza","places":[{"name":"L'ibisco Ginza","url":"https://www.google.com/maps/search/?api=1&query=L'ibisco%20Ginza"}],"rating":"4.3","category":"雪糕","note":"Ice cream 芝麻味好食 可以坐低休息","food_image":"assets/places/libisco-ginza-food.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","cuisine":"甜品咖啡","station":"銀座駅","hours":"平日 12:00–19:00／週末祝 11:00–19:00","hours_source":"tabelog","lat":35.671446,"lng":139.766946},{"name":"bills Omotesando","places":[{"name":"bills Omotesando","url":"https://www.google.com/maps/search/?api=1&query=bills%20Omotesando"}],"rating":"4.0","price":"¥2,000–4,000","category":"餐廳","note":"Pancake","food_image":"assets/places/bills-omotesando-food.webp","image_credit":"Wikimedia","region":"表參道・原宿・青山","cuisine":"早午餐","station":"表参道駅","hours":"08:30–22:00","hours_source":"https://www.billsjapan.com/jp/locations/omotesando","lat":35.668203,"lng":139.70984},{"name":"Eggs 'n Things Harajuku Store","places":[{"name":"Eggs 'n Things Harajuku Store","url":"https://www.google.com/maps/search/?api=1&query=Eggs%20'n%20Things%20Harajuku%20Store"}],"rating":"4.0","price":"¥1,000–3,000","category":"夏威夷料理","note":"邪惡早午餐","region":"表參道・原宿・青山","cuisine":"早午餐","hours":"08:00–21:00","station":"明治神宮前駅","image":"assets/places/eggs-n-things-harajuku.webp","food_image":"assets/places/eggs-n-things-harajuku-food.webp","image_credit":"品牌官網","hours_source":"https://www.eggsnthingsjapan.com/harajuku/","lat":35.668594,"lng":139.706239},{"name":"Eggs 'n Things","places":[{"name":"Eggs 'n Things","url":"https://www.google.com/maps/search/?api=1&query=Eggs%20'n%20Things"}],"rating":"3.9","price":"¥2,000–3,000","category":"夏威夷料理","note":"邪惡早午餐","region":"表參道・原宿・青山","cuisine":"早午餐","station":"表参道駅","image":"assets/places/eggs-n-things.webp","food_image":"assets/places/eggs-n-things-food.webp","image_credit":"品牌官網","lat":35.668594,"lng":139.706239},{"name":"bills Ginza","places":[{"name":"bills Ginza","url":"https://www.google.com/maps/search/?api=1&query=bills%20Ginza"}],"rating":"4.1","price":"¥2,000–6,000","category":"餐廳","note":"Pancake","image":"assets/places/bills-ginza.webp","food_image":"assets/places/bills-ginza-food.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","cuisine":"早午餐","station":"銀座駅","hours":"08:30–23:00","hours_source":"https://www.billsjapan.com/jp/locations/ginza","lat":35.673282,"lng":139.766576},{"name":"Fish Market Tsukiji Outer Market","places":[{"name":"Fish Market Tsukiji Outer Market","url":"https://www.google.com/maps/search/?api=1&query=Fish%20Market%20Tsukiji%20Outer%20Market"}],"rating":"4.2","category":"批發市場","image":"assets/places/tsukiji-outer-market.webp","food_image":"assets/places/tsukiji-outer-market-food.webp","image_credit":"Wikimedia","region":"築地・豐洲","cuisine":"市場","station":"築地駅","note":"築地場外市場","hours":"店舖多約 9:00–14:00（各異）","hours_source":"https://www.tsukiji.or.jp/calendar/","lat":35.665388,"lng":139.770473},{"name":"Iroha Seafood Buffet","places":[{"name":"Iroha Seafood Buffet","url":"https://www.google.com/maps/search/?api=1&query=Iroha%20Seafood%20Buffet"}],"rating":"4.2","price":"¥10,000+","category":"自助餐","note":"拖羅buffer lunch 第食d","food_image":"assets/places/iroha-seafood-buffet-food.webp","image_credit":"Wikimedia","region":"築地・豐洲","cuisine":"自助餐","station":"築地駅","lat":35.665091,"lng":139.770828,"hours":"10:00–16:00（最終入店15:00）","hours_source":"https://restaurant-iroha.com/toyosu/"},{"name":"Ramen Afro Beats Shinjuku","places":[{"name":"Ramen Afro Beats Shinjuku","url":"https://www.google.com/maps/search/?api=1&query=Ramen%20Afro%20Beats%20Shinjuku"}],"rating":"4.4","price":"¥1,000–2,000","category":"拉麵","note":"凍拉麵&雞白湯出名","food_image":"assets/places/afro-beats-shinjuku-food.webp","image_credit":"Wikimedia","region":"新宿","cuisine":"拉麵","station":"新宿駅","hours":"平日 11:00–14:30／17:30–20:00；日 11:00–16:00（月曜定休）","hours_source":"tokyoramenoftheyear","lat":35.694543,"lng":139.70271},{"name":"Cafe Aaliya","places":[{"name":"Cafe Aaliya","url":"https://www.google.com/maps/search/?api=1&query=Cafe%20Aaliya"}],"rating":"4.3","price":"¥1,000–2,000","category":"咖啡店","note":"甜品","food_image":"assets/places/cafe-aaliya-food.webp","image_credit":"Wikimedia","region":"其他東京","cuisine":"甜品咖啡","hours":"平日 9:00–20:30／週末 9:00–21:00","hours_source":"tabelog","lat":35.692014,"lng":139.701387},{"name":"Toyosu Market","places":[{"name":"Toyosu Market","url":"https://www.google.com/maps/search/?api=1&query=Toyosu%20Market"}],"rating":"3.6","category":"海鮮","note":"築地親子版","image":"assets/places/toyosu-market.webp","food_image":"assets/places/toyosu-market-food.webp","image_credit":"Wikimedia","region":"築地・豐洲","cuisine":"市場","station":"豊洲駅","hours":"參觀 5:00–17:00（開市日）","hours_source":"https://www.toyosu-market.or.jp/access/","lat":35.644126,"lng":139.781277},{"name":"Tempura and wine OSHIO Hibiya","places":[{"name":"Tempura and wine OSHIO Hibiya","url":"https://www.google.com/maps/search/?api=1&query=Tempura%20and%20wine%20OSHIO%20Hibiya"}],"rating":"3.9","price":"¥1,000–6,000","category":"天婦羅","food_image":"assets/places/oshio-hibiya-food.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","cuisine":"天婦羅","station":"日比谷駅","note":"天婦羅搭配葡萄酒","hours":"平日 11:30–22:00／週末祝 12:00–22:00","hours_source":"https://tempura-oshio.com/shoplist/","lat":35.673682,"lng":139.761185},{"name":"Ramen Jazzy Beats","places":[{"name":"Ramen Jazzy Beats","url":"https://www.google.com/maps/search/?api=1&query=Ramen%20Jazzy%20Beats"}],"rating":"4.3","price":"¥1,000–2,000","category":"拉麵","food_image":"assets/places/jazzy-beats-food.webp","image_credit":"Wikimedia","region":"新宿","cuisine":"拉麵","station":"新宿駅","note":"新宿拉麵","lat":35.642797,"lng":139.69717,"hours":"11:30–14:30／17:30–22:00","hours_source":"https://tabelog.com/tokyo/A1317/A131701/13299883/"},{"name":"BASO OMOTESANDO","places":[{"name":"BASO OMOTESANDO","url":"https://www.google.com/maps/search/?api=1&query=BASO%20OMOTESANDO"}],"rating":"4.1","price":"¥1,000–2,000","category":"蕎麥麵","food_image":"assets/places/baso-omotesando-food.webp","image_credit":"Wikimedia","region":"表參道・原宿・青山","cuisine":"烏冬蕎麥","station":"表参道駅","note":"表參道蕎麥","hours":"平日 11:30–21:00／週末祝 11:00–21:00","hours_source":"https://baso-omotesando.com/","lat":35.665161,"lng":139.712543},{"name":"Fujiki Ningyocho","places":[{"name":"Fujiki Ningyocho","url":"https://www.google.com/maps/search/?api=1&query=Fujiki%20Ningyocho"}],"rating":"4.2","price":"¥2,000–3,000","category":"炸豬排","note":"冇得預約","food_image":"assets/places/fujiki-ningyocho-food.webp","image_credit":"Wikimedia","region":"神田・人形町","cuisine":"其他","need_reserve":false,"station":"人形町駅","lat":35.685401,"lng":139.782053,"hours":"平日 11:30–15:30／17:00–22:00；土日祝 11:30–15:30／17:00–21:30（水曜定休）","hours_source":"https://kiwa-group.co.jp/fujiki_ningyocho/"},{"name":"Yakiniku Hormone Arai-ya Shibuya","places":[{"name":"Yakiniku Hormone Arai-ya Shibuya","url":"https://www.google.com/maps/search/?api=1&query=Yakiniku%20Hormone%20Arai-ya%20Shibuya"}],"rating":"4.2","price":"¥10,000+","category":"燒肉","food_image":"assets/places/araiya-shibuya-food.webp","image_credit":"Wikimedia","region":"澀谷","cuisine":"燒肉","station":"渋谷駅","note":"和牛燒肉・ホルモン","hours":"平日 17:00–23:00／週末祝 12:00–23:00","hours_source":"https://araiya-group.com/shibuya/","lat":35.640662,"lng":139.666796},{"name":"焼肉 ホルモン 新井屋 にかい｜渋谷 神泉 個室 和牛焼肉","places":[{"name":"焼肉 ホルモン 新井屋 にかい｜渋谷 神泉 個室 和牛焼肉","url":"https://www.google.com/maps/search/?api=1&query=%E7%84%BC%E8%82%89%20%E3%83%9B%E3%83%AB%E3%83%A2%E3%83%B3%20%E6%96%B0%E4%BA%95%E5%B1%8B%20%E3%81%AB%E3%81%8B%E3%81%84%EF%BD%9C%E6%B8%8B%E8%B0%B7%20%E7%A5%9E%E6%B3%89%20%E5%80%8B%E5%AE%A4%20%E5%92%8C%E7%89%9B%E7%84%BC%E8%82%89"}],"rating":"4.7","price":"¥10,000+","category":"燒肉","note":"有好多分店的","food_image":"assets/places/araiya-nikai-food.webp","image_credit":"品牌共用","region":"澀谷","cuisine":"燒肉","station":"神泉駅","hours":"平日 17:00–23:00／週末祝 12:00–23:00","hours_source":"https://araiya-group.com/shibuya/","lat":35.65696,"lng":139.695561},{"name":"Ganso Mentainikomi Tsukemen","places":[{"name":"Ganso Mentainikomi Tsukemen","url":"https://www.google.com/maps/search/?api=1&query=Ganso%20Mentainikomi%20Tsukemen"}],"rating":"3.8","price":"¥1,000–2,000","category":"拉麵","food_image":"assets/places/mentainikomi-tsukemen-food.webp","image_credit":"Wikimedia","region":"其他東京","cuisine":"拉麵","note":"明太子沾麵","lat":35.672841,"lng":139.763103,"hours":"平日 11:00–23:00／週末祝 10:30–23:00","hours_source":"https://mentaitsukemen.com/information/"},{"name":"Kagawa Ippuku Kanda","places":[{"name":"Kagawa Ippuku Kanda","url":"https://www.google.com/maps/search/?api=1&query=Kagawa%20Ippuku%20Kanda"}],"rating":"4.2","price":"¥1,000–2,000","category":"烏冬","image":"assets/places/kagawa-ippuku.webp","food_image":"assets/places/kagawa-ippuku-food.webp","image_credit":"Wikimedia","region":"神田・人形町","cuisine":"烏冬蕎麥","station":"神田駅","note":"香川烏冬","hours":"11:00–20:00","hours_source":"https://kagawa-ippuku.jp/store/","lat":35.69372,"lng":139.770704},{"name":"The Front Room Deli Restaurant Marunouchi","places":[{"name":"The Front Room Deli Restaurant Marunouchi","url":"https://www.google.com/maps/search/?api=1&query=The%20Front%20Room%20Deli%20Restaurant%20Marunouchi"}],"rating":"3.9","price":"¥2,000–3,000","category":"咖啡店","image":"assets/places/front-room-deli.webp","image_credit":"Wikimedia","region":"東京駅・丸之內・日本橋","cuisine":"甜品咖啡","station":"東京駅","note":"丸之內 Deli／咖啡","hours":"平日 8:00–22:00／金 8:00–23:00／週末祝 9:00–21:00","hours_source":"https://www.huge.co.jp/service/restaurant/cafe/front_room/","lat":35.676234,"lng":139.76565},{"name":"Gyu Tongue Lemon Shinjuku","places":[{"name":"Gyu Tongue Lemon Shinjuku","url":"https://www.google.com/maps/search/?api=1&query=Gyu%20Tongue%20Lemon%20Shinjuku"}],"rating":"4.7","price":"¥3,000–5,000","category":"牛舌","note":"需要預約","food_image":"assets/places/gyu-tongue-lemon-food.webp","image_credit":"Wikimedia","region":"新宿","cuisine":"牛舌","need_reserve":true,"station":"新宿駅","hours":"11:30–15:00／17:00–22:00（金土至22:30）","hours_source":"tabelog","lat":35.690356,"lng":139.701363},{"name":"Conveyor Kaiten Sushi Ginza Onodera HONTEN","places":[{"name":"Conveyor Kaiten Sushi Ginza Onodera HONTEN","url":"https://www.google.com/maps/search/?api=1&query=Conveyor%20Kaiten%20Sushi%20Ginza%20Onodera%20HONTEN"}],"rating":"4.3","price":"¥4,000–10,000","category":"壽司","image":"assets/places/onodera-ginza.webp","food_image":"assets/places/onodera-ginza-food.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","cuisine":"壽司","station":"銀座駅","note":"銀座迴轉壽司","hours":"10:30–22:30","hours_source":"https://onodera-group.com/kaitensushi-ginza/","lat":35.668632,"lng":139.766948},{"name":"Kamaboko Yokocho Kagosei","places":[{"name":"Kamaboko Yokocho Kagosei","url":"https://www.google.com/maps/search/?api=1&query=Kamaboko%20Yokocho%20Kagosei"}],"rating":"4.3","price":"¥1–1,000","category":"日式熟食","note":"魚餅 有人話普通","food_image":"assets/places/kagosei-kamaboko-food.webp","image_credit":"Wikimedia","region":"箱根","cuisine":"其他","station":"箱根湯本駅","hours":"平日 9:30–18:00／週末祝 9:30–19:00（水曜定休）","hours_source":"tabelog/hotpepper 籠屋清次郎","lat":35.233411,"lng":139.104477},{"name":"Grande Rivière Hakone Yumoto Store","places":[{"name":"Grande Rivière Hakone Yumoto Store","url":"https://www.google.com/maps/search/?api=1&query=Grande%20Rivi%C3%A8re%20Hakone%20Yumoto%20Store"}],"rating":"4.4","category":"糕點","note":"蜜糖芝士撻好食","image":"assets/places/grande-riviere-hakone.webp","image_credit":"Wikimedia","region":"箱根","cuisine":"甜品咖啡","station":"箱根湯本駅","hours":"10:00–18:00","hours_source":"https://hakonerusk.com/pages/shopinfo3","lat":35.233195,"lng":139.103465},{"name":"Hakone Teramisu","places":[{"name":"Hakone Teramisu","url":"https://www.google.com/maps/search/?api=1&query=Hakone%20Teramisu"}],"rating":"4.3","price":"¥1–1,000","category":"甜品","note":"食甜品","food_image":"assets/places/hakone-teramisu-food.webp","image_credit":"Wikimedia","region":"箱根","cuisine":"甜品咖啡","station":"箱根湯本駅","hours":"10:00–17:00（水曜定休）","hours_source":"https://www.hakone-teramisu.com/","lat":35.233411,"lng":139.104477},{"name":"Eggs 'n Things Coffee（御殿場プレミアム・アウトレット）","places":[{"name":"Eggs 'n Things Coffee（御殿場プレミアム・アウトレット）","url":"https://www.google.com/maps/place/Eggs+'n+Things+Coffee/@35.3054341,138.9651545,17z/data=!3m1!4b1!4m6!3m5!1s0x6019759580b054fd:0x5a1941124151ce8!8m2!3d35.3054341!4d138.9651545!16s%2Fg%2F11ft_7dl9f?hl=zh-TW"}],"rating":"3.8","price":"¥1,000–2,000","category":"夏威夷料理","note":"甜品","region":"御殿場","cuisine":"甜品","station":"御殿場駅","hours":"10:00–20:00（最後點餐 19:30；設施時間或隨季節調整）","hours_source":"https://www.eggsnthingsjapan.com/gotemba/","lat":35.3054341,"lng":138.9651545},{"name":"沼津魚がし鮨 御殿場アウトレット店","places":[{"name":"沼津魚がし鮨 御殿場アウトレット店","url":"https://www.google.com/maps/place/Numazu+Uogashizushi/@35.305199,138.965469,17z/data=!3m1!4b1!4m6!3m5!1s0x601975df174819d7:0x8bd5066d7a6c4de8!8m2!3d35.305199!4d138.965469!16s%2Fg%2F1tdd9xc6?hl=zh-TW"}],"rating":"3.9","price":"¥2,000–5,000","category":"壽司","note":"壽司","region":"御殿場","cuisine":"壽司","station":"御殿場駅","hours":"平日 10:30–20:00／週末及假日 10:00–20:00（最後點餐 19:30）；年休 1 日（2 月第 4 個星期四）","hours_source":"https://www.uogashizushi.co.jp/shop/e-shop/gotenba_outlets/","lat":35.305199,"lng":138.965469,"image":"assets/places/numazu-uogashi-gotemba.webp","image_credit":"品牌官網"},{"name":"D's Sweet Marche（御殿場プレミアム・アウトレット）","places":[{"name":"D's Sweet Marche（御殿場プレミアム・アウトレット）","url":"https://www.google.com/maps/place/D's+Sweet+Marche/@35.3075226,138.9655237,17z/data=!3m1!4b1!4m6!3m5!1s0x601975516ce3011d:0x8a6479df6c7916d4!8m2!3d35.3075226!4d138.9655237!16s%2Fg%2F11h1m3t8pm?hl=zh-TW"}],"rating":"3.7","price":"¥1–1,000","category":"甜品","note":"甜品嘢飲","region":"御殿場","cuisine":"甜品","station":"御殿場駅","hours":"10:00–20:00（最後點餐 19:30）；定休日為 2 月第 3 個星期四（亦隨設施）","hours_source":"https://dessert-oukoku.com/1068/","lat":35.3075226,"lng":138.9655237,"food_image":"assets/places/ds-sweet-marche-food.webp","image_credit":"品牌官網"},{"name":"熱海おさかな食堂（御殿場プレミアム・アウトレット）","places":[{"name":"熱海おさかな食堂（御殿場プレミアム・アウトレット）","url":"https://www.google.com/maps/place/Atami+Osakana+Syokudo/@35.3078585,138.9678605,17z/data=!3m1!4b1!4m6!3m5!1s0x6019754f8f2bf941:0xf8a0b031cf71650d!8m2!3d35.3078585!4d138.9678605!16s%2Fg%2F11q2hsn6wl?hl=zh-TW"}],"rating":"3.6","price":"¥2,000–3,000","category":"海鮮丼","note":"刺身","region":"御殿場","cuisine":"海鮮丼","station":"御殿場駅","hours":"3月至11月 11:00–20:00（最後點餐 19:00）；12月至2月 11:00–19:00（最後點餐 18:00）","hours_source":"https://www.osakana-gpo.com/","lat":35.3078585,"lng":138.9678605,"food_image":"assets/places/atami-osakana-shokudo-food.webp","image_credit":"品牌官網"},{"name":"牛かつもと村 御殿場プレミアム・アウトレット店","places":[{"name":"牛かつもと村 御殿場プレミアム・アウトレット店","url":"https://www.google.com/maps/place/%E7%82%B8%E7%89%9B+%E5%85%83%E6%9D%91+%E5%BE%A1%E6%AE%BF%E5%A0%B4Premium+Outlets%E5%BA%97/@35.3077743,138.967884,17z/data=!3m1!4b1!4m6!3m5!1s0x6019750071cce76f:0x2b59de22685964be!8m2!3d35.3077743!4d138.967884!16s%2Fg%2F11w8k9jl42?hl=zh-TW"}],"rating":"4.9","price":"¥2,000–3,000","category":"炸豬排","note":"牛","region":"御殿場","cuisine":"炸豬排","station":"御殿場駅","hours":"平日 11:00–20:00／週末及假日 10:00–20:00（最後點餐 19:30）","hours_source":"https://www.gyukatsu-motomura.com/store","lat":35.3077743,"lng":138.967884},{"name":"COFFEE CAMP","places":[{"name":"COFFEE CAMP","url":"https://www.google.com/maps/place/COFFEE%20CAMP/@35.2515744,139.0475832,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a13b2f332e03:0x661d6b695f344047!8m2!3d35.2515744!4d139.0475832!16s%2Fg%2F11jlwghkbs?hl=zh-TW"}],"rating":"4.4","price":"¥1,000–2,000","category":"咖啡店","note":"見有人推介","region":"箱根","cuisine":"咖啡店","station":"強羅駅","hours":"08:00–16:30（最後點餐 16:00；無定期定休日，臨時休業會在 Instagram 公布）","hours_source":"https://coffeecamp-hakone.com/","lat":35.2515744,"lng":139.0475832,"image":"assets/places/coffee-camp-hakone.webp","food_image":"assets/places/coffee-camp-hakone-food.webp","image_credit":"品牌官網"},{"name":"nukafuku（ぬかふく）","places":[{"name":"nukafuku（ぬかふく）","url":"https://www.google.com/maps/place/nukafuku%20%28%E3%81%AC%E3%81%8B%E3%81%B5%E3%81%8F%29/@35.250503,139.0480113,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a17d72494129:0xaf7b833d4def5974!8m2!3d35.250503!4d139.0480113!16s%2Fg%2F11khsn95ck?hl=zh-TW"}],"rating":"5.0","price":"¥1–1,000","category":"甜品","note":"甜品！","region":"箱根","cuisine":"甜品","station":"強羅駅","hours":"11:00–16:00（逢星期三、星期四休息）","hours_source":"https://www.google.com/maps/place/nukafuku%20%28%E3%81%AC%E3%81%8B%E3%81%B5%E3%81%8F%29/@35.250503,139.0480113,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a17d72494129:0xaf7b833d4def5974!8m2!3d35.250503!4d139.0480113!16s%2Fg%2F11khsn95ck?hl=zh-TW","lat":35.250503,"lng":139.0480113},{"name":"Hakone Dolce studio STELLA","places":[{"name":"Hakone Dolce studio STELLA","url":"https://www.google.com/maps/place/Hakone%20Dolce%20studio%20STELLA/@35.2319186,139.102463,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a36d9b3ff0c1:0x29a8bb926f9b1e2f!8m2!3d35.2319186!4d139.102463!16s%2Fg%2F11q1jd49d9?hl=zh-TW"}],"rating":"4.5","category":"雪糕","note":"雪糕好食","region":"箱根","cuisine":"雪糕","station":"箱根湯本駅","hours":"10:00–20:00（官方寫無定休日，或不定期時短；Google 地圖顯示逢星期三休息，出發前請再確認）","hours_source":"https://hakonestella.com/","lat":35.2319186,"lng":139.102463,"image":"assets/places/hakone-stella.webp","food_image":"assets/places/hakone-stella-food.webp","image_credit":"品牌官網"},{"name":"カフェ&ラウンジphoton","places":[{"name":"カフェ&ラウンジphoton","url":"https://www.google.com/maps/place/%E3%82%AB%E3%83%95%E3%82%A7%26%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8photon/@35.2572417,139.1583029,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a5fcf6c83497:0xc91302a29881f4ce!8m2!3d35.2572417!4d139.1583029!16s%2Fg%2F11lypdjxbc?hl=zh-TW"}],"rating":"4.6","price":"¥1,000–2,000","category":"咖啡店","note":"0830開","region":"小田原","cuisine":"咖啡店","station":"小田原駅","hours":"火、三 13:00–17:00；四 13:00–22:00；五 08:30–10:00、13:00–22:00；六 13:00–22:00；日 08:30–10:00、13:00–17:00；一 13:00–17:00（店方每月公布，出發前請再確認）","hours_source":"https://www.google.com/maps/place/%E3%82%AB%E3%83%95%E3%82%A7%26%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8photon/@35.2572417,139.1583029,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a5fcf6c83497:0xc91302a29881f4ce!8m2!3d35.2572417!4d139.1583029!16s%2Fg%2F11lypdjxbc?hl=zh-TW","lat":35.2572417,"lng":139.1583029},{"name":"さかな酒場 魚星 小田原駅前店","places":[{"name":"さかな酒場 魚星 小田原駅前店","url":"https://www.google.com/maps/place/%E5%80%8B%E5%AE%A4%E5%AE%8C%E5%82%99%20%E8%B1%8A%E6%B4%B2%E5%B8%82%E5%A0%B4%20%E3%81%95%E3%81%8B%E3%81%AA%E9%85%92%E5%A0%B4%20%E9%AD%9A%E6%98%9F%20%E5%B0%8F%E7%94%B0%E5%8E%9F%E9%A7%85%E5%89%8D%E5%BA%97/@35.2554848,139.1571413,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a4f8b1abda5b:0x18bbd821bd4a6048!8m2!3d35.2554848!4d139.1571413!16s%2Fg%2F11b88g1glm?hl=zh-TW"}],"rating":"3.5","price":"¥2,000–4,000","category":"居酒屋","note":"1130開，食刺身，性價比高","region":"小田原","cuisine":"居酒屋","station":"小田原駅","hours":"11:30–23:00（料理最後點餐 22:00、飲品 22:30）","hours_source":"https://sakana-uosei.com/odawaraekimae/access/","lat":35.2554848,"lng":139.1571413},{"name":"元祖油堂 油そば 小田原店","places":[{"name":"元祖油堂 油そば 小田原店","url":"https://www.google.com/maps/place/%E5%85%83%E7%A5%96%E6%B2%B9%E5%A0%82%20%E6%B2%B9%E3%81%9D%E3%81%B0%20%E5%B0%8F%E7%94%B0%E5%8E%9F%E5%BA%97/@35.256119,139.1568104,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a50526f24545:0xffa986f6b0f18448!8m2!3d35.256119!4d139.1568104!16s%2Fg%2F11y8c82tpm?hl=zh-TW"}],"rating":"4.3","price":"¥1,000–2,000","category":"拉麵","note":"11點開，如果肚餓都可以食，呢間有人話好食","region":"小田原","cuisine":"拉麵","station":"小田原駅","hours":"11:00–23:00","hours_source":"https://shop.ganso-aburado.com/japan/detail/112506/","lat":35.256119,"lng":139.1568104,"image":"assets/places/ganso-aburado-odawara.webp","food_image":"assets/places/ganso-aburado-food.webp","image_credit":"品牌官網"},{"name":"BUTTER 美瑛放牧酪農場","places":[{"name":"BUTTER 美瑛放牧酪農場","url":"https://www.google.com/maps/place/BUTTER%20-%20Biei%20Pasture%20Diary%20Farm%20-%20Shop%20%26%20Cafe/@35.6807194,139.7636391,17z/data=!3m1!4b1!4m6!3m5!1s0x60188bff311035d1:0x9f6595d0bc00c919!8m2!3d35.6807194!4d139.7636391!16s%2Fg%2F11kqs7_rb1?hl=zh-TW"}],"rating":"4.0","price":"¥2,000–3,000","category":"甜品","note":"好食牛油鬆餅","region":"東京駅・丸之內・日本橋","cuisine":"甜品","station":"東京駅","hours":"咖啡室 11:00–20:00（最後點餐 19:00）；商店 10:00–21:00／星期日及假日 10:00–20:00","hours_source":"https://biei-farm.co.jp/butter/","lat":35.6807194,"lng":139.7636391,"image":"assets/places/butter-biei-marunouchi.webp","image_credit":"品牌官網"}],"shopping":[{"name":"ココシュニック 新丸ビル","places":[{"name":"ココシュニック 新丸ビル","url":"https://www.google.com/maps/search/?api=1&query=%E3%82%B3%E3%82%B3%E3%82%B7%E3%83%A5%E3%83%8B%E3%83%83%E3%82%AF%20%E6%96%B0%E4%B8%B8%E3%83%93%E3%83%AB"}],"rating":"4.0","category":"飾品店","note":"Watch 18k gold","image":"assets/places/cocoshnik-shinmaru.webp","image_credit":"Wikimedia","region":"東京駅・丸之內・日本橋","type_tag":"雜貨","station":"東京駅","hours":"11:00–21:00／日祝 11:00–20:00","hours_source":"https://www.marunouchi.com/tenants/4307/","lat":35.68248,"lng":139.764445},{"name":"COCOSHNIK ONKITSCH","places":[{"name":"COCOSHNIK ONKITSCH","url":"https://www.google.com/maps/search/?api=1&query=COCOSHNIK%20ONKITSCH"}],"rating":"2.0","category":"飾品店","note":"Watch 18k gold","image":"assets/places/cocoshnik-onkitsch.webp","image_credit":"品牌共用","region":"東京駅・丸之內・日本橋","type_tag":"雜貨","station":"東京駅","lat":35.67907,"lng":139.765299,"hours":"11:00–21:00／日祝 10:30–20:30","hours_source":"https://fashion-collect.jp/shop/cocoshnik_yurakucho_marui/"},{"name":"Shisui Premium Outlets","places":[{"name":"Shisui Premium Outlets","url":"https://www.google.com/maps/search/?api=1&query=Shisui%20Premium%20Outlets"}],"rating":"3.9","category":"Outlet","image":"assets/places/shisui-premium-outlets.webp","image_credit":"Wikimedia","region":"酒々井・木更津・其他 Outlet","type_tag":"Outlet","station":"酒々井","hours":"10:00–20:00","hours_source":"https://www.premiumoutlets.co.jp/shisui/","lat":35.71394,"lng":140.294881},{"name":"Snow Peak Store Alpen Outdoors Flagship Store Shinjuku","places":[{"name":"Snow Peak Store Alpen Outdoors Flagship Store Shinjuku","url":"https://www.google.com/maps/search/?api=1&query=Snow%20Peak%20Store%20Alpen%20Outdoors%20Flagship%20Store%20Shinjuku"}],"rating":"4.0","category":"露營用品店","note":"運動用品","image":"assets/places/snow-peak-shinjuku.webp","image_credit":"Wikimedia","region":"新宿","type_tag":"戶外","station":"新宿駅","hours":"10:00–21:00","hours_source":"http://sbs.snowpeak.co.jp/shop/","lat":35.693456,"lng":139.700827},{"name":"ALPEN RUN MEIJI PARK","places":[{"name":"ALPEN RUN MEIJI PARK","url":"https://www.google.com/maps/search/?api=1&query=ALPEN%20RUN%20MEIJI%20PARK"}],"rating":"3.9","category":"跑步用品店","note":"運動用品","image":"assets/places/alpen-run-meiji.webp","image_credit":"Wikimedia","region":"表參道・原宿・青山","type_tag":"戶外","station":"神宮外苑","hours":"11:00–20:00","hours_source":"https://www.meiji-park.tokyo/facility_list/alpen-run-meiji-park/","lat":35.677167,"lng":139.716439},{"name":"mont-bell Tokyo Kyobashi","places":[{"name":"mont-bell Tokyo Kyobashi","url":"https://www.google.com/maps/search/?api=1&query=mont-bell%20Tokyo%20Kyobashi"}],"rating":"4.1","category":"戶外用品店","image":"assets/places/montbell-kyobashi.webp","image_credit":"Wikimedia","region":"東京駅・丸之內・日本橋","type_tag":"戶外","station":"京橋駅","hours":"11:00–21:00","hours_source":"https://store.montbell.jp/search/shopinfo/?shop_no=678502","lat":35.675846,"lng":139.768891},{"name":"mont-bell Shinjuku minami-guchi","places":[{"name":"mont-bell Shinjuku minami-guchi","url":"https://www.google.com/maps/search/?api=1&query=mont-bell%20Shinjuku%20minami-guchi"}],"rating":"4.2","category":"戶外用品店","image":"assets/places/montbell-shinjuku.webp","image_credit":"品牌共用","region":"新宿","type_tag":"戶外","station":"新宿駅","hours":"10:00–21:00","hours_source":"https://store.montbell.jp/search/shopinfo/?shop_no=618937","lat":35.687449,"lng":139.699088},{"name":"mont-bell Shibuya","places":[{"name":"mont-bell Shibuya","url":"https://www.google.com/maps/search/?api=1&query=mont-bell%20Shibuya"}],"rating":"4.1","category":"戶外用品店","image":"assets/places/montbell-shibuya.webp","image_credit":"品牌共用","region":"澀谷","type_tag":"戶外","station":"渋谷駅","hours":"10:30–21:00","hours_source":"https://store.montbell.jp/search/?pref=13","lat":35.687449,"lng":139.699088},{"name":"Swen Gotemba","places":[{"name":"Swen Gotemba","url":"https://www.google.com/maps/search/?api=1&query=Swen%20Gotemba"}],"rating":"4.0","category":"戶外用品店","note":"有montbell","image":"assets/places/swen-gotemba.webp","image_credit":"Wikimedia","region":"御殿場","type_tag":"戶外","station":"御殿場駅","hours":"平日 10:00–19:00／週末祝 9:30–19:00（水曜定休）","hours_source":"https://www.dcm-hc.co.jp/shop/detail/01_2017.html","lat":35.295342,"lng":138.938629},{"name":"RAGTAG","places":[{"name":"RAGTAG","url":"https://www.google.com/maps/search/?api=1&query=RAGTAG"}],"rating":"4.0","category":"二手服飾","note":"平二手名牌","region":"表參道・原宿・青山","type_tag":"服飾","station":"明治神宮前駅","hours":"11:00–20:00","image":"assets/places/ragtag.webp","image_credit":"品牌官網","hours_source":"https://www.ragtag.jp/real-store/0000000001","lat":35.666376,"lng":139.705684},{"name":"#FR2 HARAJUKU","places":[{"name":"#FR2 HARAJUKU","url":"https://www.google.com/maps/search/?api=1&query=%23FR2%20HARAJUKU"}],"rating":"4.5","category":"服飾","image":"assets/places/fr2-harajuku.webp","image_credit":"Wikimedia","region":"表參道・原宿・青山","type_tag":"服飾","station":"明治神宮前駅","hours":"11:00–21:00","hours_source":"https://fr2.tokyo/pages/store","lat":35.669204,"lng":139.707285},{"name":"#FR2MAY","places":[{"name":"#FR2MAY","url":"https://www.google.com/maps/search/?api=1&query=%23FR2MAY"}],"rating":"4.7","category":"服飾","image":"assets/places/fr2-may.webp","image_credit":"品牌共用","region":"表參道・原宿・青山","type_tag":"服飾","station":"明治神宮前駅","hours":"11:00–21:00","hours_source":"https://fr2.tokyo/pages/store (#FR2梅 原宿)","lat":35.668867,"lng":139.705432},{"name":"LUMINE EST Shinjuku","places":[{"name":"LUMINE EST Shinjuku","url":"https://www.google.com/maps/search/?api=1&query=LUMINE%20EST%20Shinjuku"}],"rating":"3.8","category":"商場","note":"年輕一點","image":"assets/places/lumine-est-shinjuku.webp","image_credit":"Wikimedia","region":"新宿","type_tag":"百貨","station":"新宿駅","hours":"平日 11:00–21:00／週末祝 10:30–21:00","hours_source":"https://www.lumine.ne.jp/est/information/hours/","lat":35.692014,"lng":139.701387},{"name":"Shibuya 109","places":[{"name":"Shibuya 109","url":"https://www.google.com/maps/search/?api=1&query=Shibuya%20109"}],"rating":"4.0","category":"商場","note":"平年輕衫","image":"assets/places/shibuya-109.webp","image_credit":"Wikimedia","region":"澀谷","type_tag":"百貨","station":"渋谷駅","hours":"10:00–21:00","hours_source":"https://shibuya109.jp/qa/","lat":35.6596,"lng":139.69868},{"name":"niko and ... TOKYO","places":[{"name":"niko and ... TOKYO","url":"https://www.google.com/maps/search/?api=1&query=niko%20and%20...%20TOKYO"}],"rating":"4.3","category":"服飾","image":"assets/places/niko-and-tokyo.webp","image_credit":"Wikimedia","region":"表參道・原宿・青山","type_tag":"服飾","station":"表参道駅","hours":"11:00–21:00","hours_source":"https://www.dot-st.com/nikoand/info/store/?store=20570","lat":35.666643,"lng":139.704344},{"name":"Matsuya Ginza","places":[{"name":"Matsuya Ginza","url":"https://www.google.com/maps/search/?api=1&query=Matsuya%20Ginza"}],"rating":"4.0","category":"百貨","note":"牌子多元","image":"assets/places/matsuya-ginza.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","type_tag":"百貨","station":"銀座駅","hours":"11:00–20:00（日／連休最終日 至19:30）","hours_source":"https://www.ginza.jp/landmark/117","lat":35.672404,"lng":139.766779},{"name":"Mitsukoshi Ginza","places":[{"name":"Mitsukoshi Ginza","url":"https://www.google.com/maps/search/?api=1&query=Mitsukoshi%20Ginza"}],"rating":"4.1","category":"百貨","note":"傳統百貨 地下有手信甜品買","image":"assets/places/mitsukoshi-ginza.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","type_tag":"百貨","station":"銀座駅","hours":"10:00–20:00","hours_source":"https://www.ginza.jp/landmark/119","lat":35.67138,"lng":139.765708},{"name":"GINZA SIX","places":[{"name":"GINZA SIX","url":"https://www.google.com/maps/search/?api=1&query=GINZA%20SIX"}],"rating":"4.0","category":"商場","note":"藝術感百貨公司","image":"assets/places/ginza-six.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","type_tag":"百貨","station":"銀座駅","hours":"10:30–20:30","hours_source":"https://ginza6.tokyo/hours/","lat":35.669533,"lng":139.764049},{"name":"Ginza Itoya","places":[{"name":"Ginza Itoya","url":"https://www.google.com/maps/search/?api=1&query=Ginza%20Itoya"}],"rating":"4.4","category":"文具店","note":"文具","image":"assets/places/ginza-itoya.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","type_tag":"雜貨","station":"銀座駅","hours":"平日 10:00–20:00／日祝 10:00–19:00","hours_source":"https://www.ito-ya.co.jp/ginza","lat":35.672957,"lng":139.767425},{"name":"Don Quijote Ginza Honkan","places":[{"name":"Don Quijote Ginza Honkan","url":"https://www.google.com/maps/search/?api=1&query=Don%20Quijote%20Ginza%20Honkan"}],"rating":"3.7","category":"折扣店","image":"assets/places/donki-ginza.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","type_tag":"雜貨","station":"銀座駅","hours":"24小時","hours_source":"https://www.donki.com/store/shop_detail.php?shop_id=92","lat":35.666928,"lng":139.760911},{"name":"Bic Camera Yurakucho Store","places":[{"name":"Bic Camera Yurakucho Store","url":"https://www.google.com/maps/search/?api=1&query=Bic%20Camera%20Yurakucho%20Store"}],"rating":"3.9","category":"電器店","image":"assets/places/bic-camera-yurakucho.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","type_tag":"雜貨","station":"有楽町駅","hours":"10:00–22:00","hours_source":"https://www.biccamera.co.jp/shoplist/yurakucho.html","lat":35.675355,"lng":139.762868},{"name":"Ginza Loft","places":[{"name":"Ginza Loft","url":"https://www.google.com/maps/search/?api=1&query=Ginza%20Loft"}],"rating":"4.1","category":"雜貨店","image":"assets/places/ginza-loft.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","type_tag":"雜貨","station":"銀座駅","hours":"平日・土祝 11:00–21:00／日 11:00–20:00","hours_source":"https://www.loft.co.jp/ginzaloft/","lat":35.674097,"lng":139.766231},{"name":"HAKUHINKAN TOY PARK","places":[{"name":"HAKUHINKAN TOY PARK","url":"https://www.google.com/maps/search/?api=1&query=HAKUHINKAN%20TOY%20PARK"}],"rating":"4.2","category":"玩具店","image":"assets/places/hakuhinkan-toy-park.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","type_tag":"雜貨","station":"銀座駅","hours":"11:00–20:00","hours_source":"https://www.hakuhinkan.co.jp/toypark/","lat":35.667752,"lng":139.761142},{"name":"MUJI Ginza","places":[{"name":"MUJI Ginza","url":"https://www.google.com/maps/search/?api=1&query=MUJI%20Ginza"}],"rating":"4.3","category":"生活雜貨","image":"assets/places/muji-ginza.webp","image_credit":"Wikimedia","region":"銀座・有樂町・日比谷","type_tag":"雜貨","station":"銀座駅","hours":"11:00–21:00","hours_source":"https://www.muji.com/jp/ja/shop/detail/046604","lat":35.673382,"lng":139.765521},{"name":"First Avenue Tokyo Station","places":[{"name":"First Avenue Tokyo Station","url":"https://www.google.com/maps/search/?api=1&query=First%20Avenue%20Tokyo%20Station"}],"rating":"4.0","category":"商場","image":"assets/places/first-avenue-tokyo-station.webp","image_credit":"Wikimedia","region":"東京駅・丸之內・日本橋","type_tag":"百貨","station":"東京駅","hours":"店舖約 10:00–20:30（拉麵街至約23:00）","hours_source":"https://www.tokyoeki-1bangai.co.jp/serviceguide/","lat":35.682286,"lng":139.766102},{"name":"Gotemba Premium Outlets","places":[{"name":"Gotemba Premium Outlets","url":"https://www.google.com/maps/search/?api=1&query=Gotemba%20Premium%20Outlets"}],"rating":"4.2","category":"Outlet","image":"assets/places/gotemba-premium-outlets.webp","image_credit":"Wikimedia","region":"御殿場","type_tag":"Outlet","station":"御殿場駅","hours":"12–2月 10:00–19:00","hours_source":"https://www.premiumoutlets.co.jp/chs/gotemba/","lat":35.307529,"lng":138.962196},{"name":"Grandberry Park","places":[{"name":"Grandberry Park","url":"https://www.google.com/maps/search/?api=1&query=Grandberry%20Park"}],"rating":"4.0","category":"商場","image":"assets/places/grandberry-park.webp","image_credit":"Wikimedia","region":"酒々井・木更津・其他 Outlet","type_tag":"百貨","hours":"10:00–20:00","hours_source":"https://gbp.minamimachida-grandberrypark.com/","lat":35.511501,"lng":139.470791},{"name":"Mitsui Outlet Park Kisarazu","places":[{"name":"Mitsui Outlet Park Kisarazu","url":"https://www.google.com/maps/search/?api=1&query=Mitsui%20Outlet%20Park%20Kisarazu"}],"rating":"4.0","category":"Outlet","image":"assets/places/mitsui-outlet-kisarazu.webp","image_credit":"Wikimedia","region":"酒々井・木更津・其他 Outlet","type_tag":"Outlet","hours":"10:00–20:00","hours_source":"https://mitsui-shopping-park.com/mop/kisarazu/hour/index.html","lat":35.4358,"lng":139.934193},{"name":"Lawson Fujikawaguchiko Town hall","places":[{"name":"Lawson Fujikawaguchiko Town hall","url":"https://www.google.com/maps/search/?api=1&query=Lawson%20Fujikawaguchiko%20Town%20hall"}],"rating":"4.1","category":"便利店","image":"assets/places/lawson-kawaguchiko.webp","image_credit":"Wikimedia","region":"河口湖・富士吉田","type_tag":"便利店","station":"河口湖","hours":"24小時","hours_source":"lawson store search / tabelog","lat":35.501247,"lng":138.765145},{"name":"LAWSON Kawaguchiko Station","places":[{"name":"LAWSON Kawaguchiko Station","url":"https://www.google.com/maps/search/?api=1&query=LAWSON%20Kawaguchiko%20Station"}],"rating":"3.8","category":"便利店","image":"assets/places/lawson-kawaguchiko-station.webp","image_credit":"品牌共用","region":"河口湖・富士吉田","type_tag":"便利店","station":"河口湖駅","hours":"24小時","hours_source":"lawson store search","lat":35.498529,"lng":138.768642},{"name":"グランリヴィエール箱根 湯本店 HANARE","places":[{"name":"グランリヴィエール箱根 湯本店 HANARE","url":"https://www.google.com/maps/place/%E3%82%B0%E3%83%A9%E3%83%B3%E3%83%AA%E3%83%B4%E3%82%A3%E3%82%A8%E3%83%BC%E3%83%AB%E7%AE%B1%E6%A0%B9%20%E6%B9%AF%E6%9C%AC%E5%BA%97%20HANARE/@35.2320453,139.1024915,17z/data=!3m1!4b1!4m6!3m5!1s0x6019a337bd91a93b:0xec1006428b377728!8m2!3d35.2320453!4d139.1024915!16s%2Fg%2F11vhct2_3l?hl=zh-TW"}],"rating":"4.6","category":"糕點","note":"有人話麵包餅乾好食","region":"箱根","type_tag":"雜貨","station":"箱根湯本駅","hours":"10:00–18:00（官方寫無定休日，或隨季節變動）","hours_source":"https://hakonerusk.com/pages/shopinfo5","lat":35.2320453,"lng":139.1024915,"image":"assets/places/hanare-hakone-yumoto.webp","image_credit":"品牌官網"},{"name":"ワークマン女子 イグジットメルサ銀座店","places":[{"name":"ワークマン女子 イグジットメルサ銀座店","url":"https://www.google.com/maps/place/Workman%20Colors/@35.6707776,139.7639811,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b1fe4eb7ba3:0xe975ea793d84decb!8m2!3d35.6707776!4d139.7639811!16s%2Fg%2F11sqg_qjm9?hl=zh-TW"}],"rating":"3.6","category":"戶外","note":"工裝衫","region":"銀座・有樂町・日比谷","type_tag":"服飾","station":"銀座駅","hours":"11:00–20:00（11 月無休；隨設施）","hours_source":"https://www.workman.co.jp/store/%E3%83%AF%E3%83%BC%E3%82%AF%E3%83%9E%E3%83%B3%E5%A5%B3%E5%AD%90%E3%82%A4%E3%82%B0%E3%82%B8%E3%83%83%E3%83%88%E3%83%A1%E3%83%AB%E3%82%B5%E9%8A%80%E5%BA%A7%E5%BA%97","lat":35.6707776,"lng":139.7639811},{"name":"Launa lea 有樂町マルイ店","places":[{"name":"Launa lea 有樂町マルイ店","url":"https://www.google.com/maps/place/Launa%20lea%E6%9C%89%E6%A5%BD%E7%94%BA%E3%83%9E%E3%83%AB%E3%82%A4%E5%BA%97/@35.6740741,139.7638178,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b44e5307035:0xfeafd760344c5973!8m2!3d35.6740741!4d139.7638178!16s%2Fg%2F11q9q0189s?hl=zh-TW"}],"rating":"4.3","category":"鞋舖","note":"鞋","region":"銀座・有樂町・日比谷","type_tag":"服飾","station":"有楽町駅","hours":"11:00–20:00","hours_source":"https://launalea.com/contents/shoplist_yurakuchomarui/","lat":35.6740741,"lng":139.7638178},{"name":"ANEMONE グランスタ丸の内店","places":[{"name":"ANEMONE グランスタ丸の内店","url":"https://www.google.com/maps/place/ANEMONE/@35.6816017,139.76534,17z/data=!3m1!4b1!4m6!3m5!1s0x60188b1a6b9c8375:0x140f31b5f459413b!8m2!3d35.6816017!4d139.76534!16s%2Fg%2F11gh9q4t35?hl=zh-TW"}],"rating":"4.0","category":"飾品店","note":"飾物","region":"東京駅・丸之內・日本橋","type_tag":"雜貨","station":"東京駅","hours":"10:00–21:00","hours_source":"https://www.gransta.jp/mall/gransta_marunouchi/anemone/","lat":35.6816017,"lng":139.76534,"image":"assets/places/anemone-gransta.webp","image_credit":"品牌官網"}]};

const STORAGE_KEY = "japan-trip-last-day";
const REGION_ORDER = [
  "銀座・有樂町・日比谷",
  "表參道・原宿・青山",
  "澀谷",
  "新宿",
  "東京駅・丸之內・日本橋",
  "築地・豐洲",
  "神田・人形町",
  "其他東京",
  "小田原",
  "箱根",
  "御殿場",
  "河口湖・富士吉田",
  "酒々井・木更津・其他 Outlet",
  "羽田・成田・其他",
];

const CUISINE_ORDER = [
  "拉麵",
  "壽司",
  "燒肉",
  "居酒屋",
  "海鮮丼",
  "牛排漢堡",
  "炸豬排",
  "烏冬蕎麥",
  "甜品咖啡",
  "甜品",
  "咖啡店",
  "雪糕",
  "早午餐",
  "天婦羅",
  "牛舌",
  "自助餐",
  "市場",
  "其他",
];

const SHOP_TYPE_ORDER = ["百貨", "Outlet", "戶外", "服飾", "雜貨", "便利店"];

const WEATHER_CACHE_KEY = "japan-trip-weather-v2";
const SHOPPING_LIST_KEY = "japan-trip-shopping-list";

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
    if (host.includes("narukawamuseum")) return "成川美術館官網";
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
  const mapState = spotMaps["view-" + name];
  if (mapState && mapState.map) {
    setTimeout(() => {
      mapState.map.invalidateSize();
      if (mapState.bounds && mapState.bounds.isValid()) mapState.map.fitBounds(mapState.bounds, { padding: [28, 28], maxZoom: 14 });
    }, 120);
  }
}

function weatherEmoji(code) {
  const w = WMO[code] || WMO[Math.floor(code / 10) * 10] || ["🌤", "天氣"];
  return w;
}

function tokyoDateKey(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function weatherCodeAt(daily, index) {
  if (!daily) return null;
  const codes = daily.weather_code || daily.weathercode;
  if (!codes || codes[index] == null) return null;
  return codes[index];
}

function isDateRangeError(err) {
  return /out of allowed range|end_date|start_date/i.test(String((err && err.message) || ""));
}

function parseAllowedRange(err) {
  const match = String((err && err.message) || "").match(
    /from (\d{4}-\d{2}-\d{2}) to (\d{4}-\d{2}-\d{2})/
  );
  return match ? { start: match[1], end: match[2] } : null;
}

async function fetchWeatherJson(url) {
  const res = await fetch(url);
  let data = null;
  try {
    data = await res.json();
  } catch (_) {
    data = null;
  }
  if (!res.ok || !data || data.error) {
    throw new Error((data && data.reason) || "weather http " + res.status);
  }
  return data;
}

function pendingWeatherCard(region) {
  return { date: region.date, region: region.region, pending: true };
}

function weatherCardFromDaily(region, data, dateMapFn) {
  if (!data || !data.daily || !Array.isArray(data.daily.time)) return pendingWeatherCard(region);
  const lookDate = dateMapFn(region.date);
  const di = data.daily.time.indexOf(lookDate);
  if (di < 0) return pendingWeatherCard(region);
  const code = weatherCodeAt(data.daily, di);
  const tmax = data.daily.temperature_2m_max && data.daily.temperature_2m_max[di];
  const tmin = data.daily.temperature_2m_min && data.daily.temperature_2m_min[di];
  if (code == null || tmax == null || tmin == null) return pendingWeatherCard(region);
  const [emoji, label] = weatherEmoji(code);
  return {
    date: region.date,
    region: region.region,
    emoji,
    label,
    tmax: Math.round(tmax),
    tmin: Math.round(tmin),
    pending: false,
  };
}

const WEATHER_DAILY =
  "daily=weathercode,weather_code,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo";

function weatherUrl(base, lat, lon, start, end) {
  return `${base}?latitude=${lat}&longitude=${lon}&${WEATHER_DAILY}&start_date=${start}&end_date=${end}`;
}

async function fetchDailyByRegion(regions, urlFor) {
  const unique = [];
  const keyToIdx = {};
  regions.forEach((r) => {
    const k = `${r.lat},${r.lon}`;
    if (!(k in keyToIdx)) {
      keyToIdx[k] = unique.length;
      unique.push(r);
    }
  });
  const results = await Promise.all(
    unique.map((r) => fetchWeatherJson(urlFor(r.lat, r.lon)))
  );
  return { results, keyToIdx };
}

function showWeatherOffline(slot) {
  slot.innerHTML = `<div class="weather-fallback">☁️ 天氣需連網更新<br><span class="weather-fallback-sub">連上網路後重新整理即可顯示</span></div>`;
}

function rememberWeather(todayKey, cards, mode) {
  try {
    sessionStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify({ day: todayKey, cards, mode }));
  } catch (_) {}
}

async function loadWeather() {
  const slot = document.getElementById("weather-slot");
  if (!slot) return;

  const todayKey = tokyoDateKey();
  try {
    const cached = sessionStorage.getItem(WEATHER_CACHE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.day === todayKey && Array.isArray(parsed.cards) && parsed.cards.length) {
        renderWeatherCards(slot, parsed.cards, parsed.mode || "forecast");
        return;
      }
    }
  } catch (_) {}

  slot.innerHTML = `<div class="weather-loading">天氣載入中…</div>`;

  const regions = TRIP_DATA.weather_regions || [];
  if (!regions.length) return;
  const tripStart = regions.reduce((min, r) => (r.date < min ? r.date : min), regions[0].date);
  const tripEnd = regions.reduce((max, r) => (r.date > max ? r.date : max), regions[0].date);
  const sample = regions[0];

  let bounds;
  try {
    await fetchWeatherJson(
      weatherUrl("https://api.open-meteo.com/v1/forecast", sample.lat, sample.lon, tripStart, tripEnd)
    );
    bounds = { start: tripStart, end: tripEnd };
  } catch (err) {
    if (!isDateRangeError(err)) {
      showWeatherOffline(slot);
      return;
    }
    const allowed = parseAllowedRange(err);
    if (!allowed) {
      renderWeatherCards(slot, regions.map(pendingWeatherCard), "forecast");
      return;
    }
    const start = tripStart > allowed.start ? tripStart : allowed.start;
    const end = tripEnd < allowed.end ? tripEnd : allowed.end;
    bounds = start <= end ? { start, end } : null;
  }

  if (!bounds) {
    try {
      const { results, keyToIdx } = await fetchDailyByRegion(regions, (lat, lon) =>
        weatherUrl(
          "https://archive-api.open-meteo.com/v1/archive",
          lat,
          lon,
          tripStart.replace("2026-", "2025-"),
          tripEnd.replace("2026-", "2025-")
        )
      );
      const cards = regions.map((r) =>
        weatherCardFromDaily(r, results[keyToIdx[`${r.lat},${r.lon}`]], (d) => d.replace("2026-", "2025-"))
      );
      if (!cards.some((c) => !c.pending)) throw new Error("empty archive");
      rememberWeather(todayKey, cards, "archive");
      renderWeatherCards(slot, cards, "archive");
    } catch (_) {
      showWeatherOffline(slot);
    }
    return;
  }

  try {
    const inWindow = regions.filter((r) => r.date >= bounds.start && r.date <= bounds.end);
    const { results, keyToIdx } = await fetchDailyByRegion(inWindow, (lat, lon) =>
      weatherUrl("https://api.open-meteo.com/v1/forecast", lat, lon, bounds.start, bounds.end)
    );
    const cards = regions.map((r) => {
      if (r.date < bounds.start || r.date > bounds.end) return pendingWeatherCard(r);
      return weatherCardFromDaily(r, results[keyToIdx[`${r.lat},${r.lon}`]], (d) => d);
    });
    rememberWeather(todayKey, cards, "forecast");
    renderWeatherCards(slot, cards, "forecast");
  } catch (err) {
    if (isDateRangeError(err)) {
      renderWeatherCards(slot, regions.map(pendingWeatherCard), "forecast");
      return;
    }
    showWeatherOffline(slot);
  }
}

function renderWeatherCards(slot, cards, mode) {
  const badge = mode === "archive" ? "往年同期參考" : "預報";
  const hasPending = cards.some((c) => c.pending);
  const hasLive = cards.some((c) => !c.pending);
  const note =
    mode === "archive"
      ? "距離出發尚遠，暫顯示 2025 年同期實況作參考；出發前約兩週內會自動改為正式預報。"
      : hasPending && hasLive
        ? "已公布的日子是即時預報；其餘日子預報尚未公布，可查時會自動補上。"
        : hasPending
          ? "這幾日的預報尚未公布，可查時會自動補上。"
          : "預報會隨時間更新；出發前請再確認一次。";
  slot.innerHTML = `
    <h3 class="section-title">天氣小卡 <span class="badge">${badge}</span></h3>
    <div class="weather-grid">
      ${cards
        .map((c) => {
          const body = c.pending
            ? `<div class="weather-pending">預報尚未公布</div>`
            : `<div class="weather-emoji">${c.emoji}</div>
          <div class="weather-label">${escapeHtml(c.label)}</div>
          <div class="weather-temp"><span class="tmax">${c.tmax}°</span><span class="tsep">/</span><span class="tmin">${c.tmin}°</span></div>`;
          return `
        <div class="weather-card${c.pending ? " is-pending" : ""}">
          <div class="weather-date">${formatDate(c.date)}</div>
          <div class="weather-region">${escapeHtml(c.region)}</div>
          ${body}
        </div>`;
        })
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
        <div class="stat"><div class="num">${Object.keys(TRIP_DATA.passes || {}).length}</div><div class="label">付費票券</div></div>
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


function renderSpotMedia(s, listKey) {
  const isFood = listKey === "restaurants";
  const imgs = [];
  if (isFood && s.food_image) {
    imgs.push({ src: s.food_image, alt: `${s.name} 食物` });
  }
  if (s.image) {
    imgs.push({ src: s.image, alt: `${s.name} 店舖` });
  }
  if (!imgs.length) return "";
  const credit = s.image_credit
    ? `<div class="spot-credit">${escapeHtml(s.image_credit)}</div>`
    : "";
  const media = imgs
    .map(
      (im) =>
        `<img loading="lazy" src="${escapeHtml(im.src)}" alt="${escapeHtml(im.alt)}" />`
    )
    .join("");
  return `<div class="spot-media">${media}${credit}</div>`;
}

function spotPracticalTagsHtml(s) {
  const tags = [];
  if (s.hours) {
    tags.push(`<span class="spot-tag spot-tag-hours">🕒 ${escapeHtml(s.hours)}</span>`);
  }
  if (s.need_reserve === true) {
    tags.push(`<span class="spot-tag spot-tag-warn">要預約</span>`);
  } else if (s.need_reserve === false) {
    tags.push(`<span class="spot-tag spot-tag-muted">不用預約</span>`);
  }
  if (s.busy_queue) {
    tags.push(`<span class="spot-tag spot-tag-warn">多人排隊</span>`);
  }
  if (s.station) {
    tags.push(`<span class="spot-tag spot-tag-info">🚉 ${escapeHtml(s.station)}</span>`);
  }
  if (!tags.length) return "";
  return `<div class="spot-tags">${tags.join("")}</div>`;
}

function spotTypeValue(s, listKey) {
  if (listKey === "restaurants") return s.cuisine || "其他";
  if (listKey === "shopping") return s.type_tag || "雜貨";
  return "";
}


const CATEGORY_ZH = {
  "Ramen": "拉麵",
  "Sushi": "壽司",
  "Cafe": "咖啡店",
  "Izakaya": "居酒屋",
  "Restaurant": "餐廳",
  "Seafood donburi restaurant": "海鮮丼",
  "Yakiniku": "燒肉",
  "Soba noodle shop": "蕎麥麵",
  "Tonkatsu restaurant": "炸豬排",
  "Tongue restaurant": "牛舌",
  "Hawaiian": "夏威夷料理",
  "Steak": "牛排",
  "Western": "西餐",
  "Ice Cream": "雪糕",
  "Wholesale market": "批發市場",
  "Buffet": "自助餐",
  "Seafood": "海鮮",
  "Tempura": "天婦羅",
  "udon noodles": "烏冬",
  "Japanese delicatessen": "日式熟食",
  "Pastries": "糕點",
  "Dessert": "甜品",
  "Beauty salon": "美容院",
  "Shopping mall": "商場",
  "Outdoor sports store": "戶外用品店",
  "Outlet mall": "Outlet",
  "Clothing store": "服飾",
  "Fashion accessories store": "飾品店",
  "Department store": "百貨",
  "Convenience store": "便利店",
  "Camping store": "露營用品店",
  "Running store": "跑步用品店",
  "Used clothing store": "二手服飾",
  "Stationery store": "文具店",
  "Discount store": "折扣店",
  "Electronics store": "電器店",
  "Variety store": "雜貨店",
  "Toy store": "玩具店",
  "General store": "生活雜貨"
};

function categoryLabelZh(cat, fallback) {
  if (!cat) return fallback || "";
  if (CATEGORY_ZH[cat]) return CATEGORY_ZH[cat];
  // already CJK?
  if (/[\u3040-\u30ff\u3400-\u9fff]/.test(cat)) return cat;
  return cat;
}

function spotCardHtml(s, listKey, cardClass, defaultBadge) {
  const badge = categoryLabelZh(s.category, defaultBadge);
  const meta = [];
  if (s.rating) meta.push(`<span class="chip">★ ${escapeHtml(s.rating)}</span>`);
  if (s.price) meta.push(`<span class="chip">${escapeHtml(s.price)}</span>`);
  const media = renderSpotMedia(s, listKey);
  const hasMedia = media ? " has-media" : "";
  const typeVal = spotTypeValue(s, listKey);
  const typeAttr = typeVal ? ` data-type-filter="${escapeHtml(typeVal)}"` : "";
  return `
        <article class="spot-card ${cardClass}${hasMedia}" data-name="${escapeHtml(s.name)}" data-region="${escapeHtml(s.region || "其他東京")}"${typeAttr}>
          <div class="spot-body">
            <div class="spot-badge">${escapeHtml(badge)}</div>
            <h3>${escapeHtml(s.name)}</h3>
            ${meta.length ? `<div class="spot-meta-row">${meta.join("")}</div>` : ""}
            ${spotPracticalTagsHtml(s)}
            ${s.note ? `<p class="spot-note">${escapeHtml(s.note)}</p>` : ""}
            <div class="spot-actions">${placeButtonsHtml(s.places)}</div>
          </div>
          ${media}
        </article>`;
}

function groupSpotsByRegion(spots) {
  const map = new Map();
  for (const s of spots) {
    const r = s.region || "其他東京";
    if (!map.has(r)) map.set(r, []);
    map.get(r).push(s);
  }
  const ordered = [];
  for (const r of REGION_ORDER) {
    if (map.has(r) && map.get(r).length) ordered.push([r, map.get(r)]);
    map.delete(r);
  }
  for (const [r, list] of map) ordered.push([r, list]);
  return ordered;
}

function typeFilterOrder(listKey) {
  if (listKey === "restaurants") return CUISINE_ORDER;
  if (listKey === "shopping") return SHOP_TYPE_ORDER;
  return null;
}

function typeFilterLabel(listKey) {
  if (listKey === "restaurants") return "菜式";
  if (listKey === "shopping") return "類型";
  return "";
}

function countByType(spots, listKey) {
  const counts = new Map();
  for (const s of spots) {
    const t = spotTypeValue(s, listKey) || "其他";
    counts.set(t, (counts.get(t) || 0) + 1);
  }
  return counts;
}

function applySpotFilters(el) {
  const regionBtn = el.querySelector(".region-filter:not(.type-filter) .region-chip.is-active");
  const typeBtn = el.querySelector(".type-filter .region-chip.is-active");
  const regionVal = regionBtn ? regionBtn.dataset.regionFilter : "__all__";
  const typeVal = typeBtn ? typeBtn.dataset.typeFilter : "__all__";

  el.querySelectorAll(".region-section").forEach((sec) => {
    const regionOk = regionVal === "__all__" || sec.dataset.region === regionVal;
    let visibleCards = 0;
    sec.querySelectorAll(".spot-card").forEach((card) => {
      const typeOk =
        typeVal === "__all__" ||
        !card.dataset.typeFilter ||
        card.dataset.typeFilter === typeVal;
      const show = regionOk && typeOk;
      card.hidden = !show;
      if (show) visibleCards += 1;
    });
    sec.hidden = !regionOk || visibleCards === 0;
  });
  if (el.id) updateSpotMapFilters(el.id);
}

function bindSpotFilterRow(el, viewId, rowSelector, dataAttr) {
  const filter = el.querySelector(rowSelector);
  if (!filter || filter.dataset.bound) return;
  filter.dataset.bound = "1";
  filter.addEventListener("click", (ev) => {
    const btn = ev.target.closest(".region-chip");
    if (!btn || btn.dataset.spotView !== viewId) return;
    filter.querySelectorAll(".region-chip").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    applySpotFilters(el);
    const regionBtn = el.querySelector(".region-filter:not(.type-filter) .region-chip.is-active");
    const regionVal = regionBtn ? regionBtn.dataset.regionFilter : "__all__";
    if (dataAttr === "regionFilter" && regionVal !== "__all__") {
      const sec = el.querySelector(`.region-section[data-region="${CSS.escape(regionVal)}"]`);
      if (sec && !sec.hidden) sec.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}


const spotMaps = {};

function spotMapColor(listKey) {
  if (listKey === "beauty") return "#d46a8a";
  if (listKey === "restaurants") return "#e07a3d";
  return "#3a7bd5";
}

function spotMapIcon(color) {
  return L.divIcon({
    className: "spot-map-pin",
    html: `<span style="background:${color}"></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -8],
  });
}

function initSpotMap(viewId, listKey, spots) {
  if (typeof L === "undefined") return;
  const mapEl = document.getElementById(viewId + "-map");
  if (!mapEl) return;

  if (spotMaps[viewId] && spotMaps[viewId].map) {
    clearSpotMapGps(viewId);
    spotMaps[viewId].map.remove();
    delete spotMaps[viewId];
  }

  const color = spotMapColor(listKey);
  const map = L.map(mapEl, {
    scrollWheelZoom: false,
    attributionControl: true,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const layer = L.layerGroup().addTo(map);
  const markersByName = {};
  const withCoords = (spots || []).filter(
    (s) => typeof s.lat === "number" && typeof s.lng === "number" && !Number.isNaN(s.lat) && !Number.isNaN(s.lng)
  );

  withCoords.forEach((s) => {
    const mapsUrl =
      s.places && s.places[0] && s.places[0].url
        ? s.places[0].url
        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.name)}`;
    const marker = L.marker([s.lat, s.lng], { icon: spotMapIcon(color), title: s.name });
    marker.bindPopup(
      `<div class="spot-map-popup"><strong>${escapeHtml(s.name)}</strong><a href="${escapeHtml(mapsUrl)}" target="_blank" rel="noopener noreferrer">開啟 Google 地圖</a></div>`
    );
    markersByName[s.name] = marker;
  });

  spotMaps[viewId] = {
    map,
    layer,
    markersByName,
    listKey,
    spots: withCoords,
    bounds: null,
    gpsLayer: L.layerGroup().addTo(map),
    gpsWatchId: null,
  };
  addSpotMapLocateControl(viewId, map);
  updateSpotMapFilters(viewId);
  setTimeout(() => map.invalidateSize(), 80);
}

function clearSpotMapGps(viewId) {
  const state = spotMaps[viewId];
  if (!state) return;
  if (state.gpsWatchId != null && navigator.geolocation) {
    try {
      navigator.geolocation.clearWatch(state.gpsWatchId);
    } catch (_) {}
    state.gpsWatchId = null;
  }
  if (state.gpsLayer) state.gpsLayer.clearLayers();
}

function showSpotMapGps(viewId, lat, lng, accuracy) {
  const state = spotMaps[viewId];
  if (!state || !state.map || !state.gpsLayer) return;
  state.gpsLayer.clearLayers();
  const latlng = L.latLng(lat, lng);
  const acc = typeof accuracy === "number" && accuracy > 0 ? Math.min(accuracy, 200) : 40;
  L.circle(latlng, {
    radius: acc,
    color: "#1a73e8",
    weight: 1,
    fillColor: "#1a73e8",
    fillOpacity: 0.15,
  }).addTo(state.gpsLayer);
  L.circleMarker(latlng, {
    radius: 8,
    color: "#fff",
    weight: 2,
    fillColor: "#1a73e8",
    fillOpacity: 1,
  })
    .bindPopup("你的目前位置")
    .addTo(state.gpsLayer);
  if (state.bounds && state.bounds.isValid()) {
    const b = L.latLngBounds(state.bounds);
    b.extend(latlng);
    state.map.fitBounds(b, { padding: [36, 36], maxZoom: 16 });
  } else {
    state.map.setView(latlng, 15);
  }
}

function locateUserOnSpotMap(viewId) {
  const state = spotMaps[viewId];
  if (!state || !state.map) return;
  const btn = document.querySelector(`.spot-map-locate[data-view="${viewId}"]`);
  if (!navigator.geolocation) {
    alert("此裝置或瀏覽器不支援定位。");
    return;
  }
  if (btn) {
    btn.disabled = true;
    btn.classList.add("is-loading");
    btn.setAttribute("aria-busy", "true");
  }
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      showSpotMapGps(viewId, pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy);
      if (btn) {
        btn.disabled = false;
        btn.classList.remove("is-loading");
        btn.removeAttribute("aria-busy");
        btn.classList.add("is-active");
      }
    },
    (err) => {
      if (btn) {
        btn.disabled = false;
        btn.classList.remove("is-loading");
        btn.removeAttribute("aria-busy");
      }
      let msg = "無法取得目前位置。";
      if (err && err.code === 1) msg = "請允許此網站使用位置權限，才能顯示 GPS。";
      else if (err && err.code === 2) msg = "暫時無法取得位置，請稍後再試。";
      else if (err && err.code === 3) msg = "定位逾時，請移到較空曠處再試。";
      alert(msg);
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
}

function addSpotMapLocateControl(viewId, map) {
  const Locate = L.Control.extend({
    options: { position: "topright" },
    onAdd: function () {
      const container = L.DomUtil.create("div", "leaflet-bar spot-map-locate-wrap");
      const btn = L.DomUtil.create("a", "spot-map-locate", container);
      btn.href = "#";
      btn.dataset.view = viewId;
      btn.title = "顯示目前位置（GPS）";
      btn.setAttribute("role", "button");
      btn.setAttribute("aria-label", "顯示目前位置");
      btn.innerHTML = "◎";
      L.DomEvent.disableClickPropagation(container);
      L.DomEvent.on(btn, "click", (e) => {
        L.DomEvent.preventDefault(e);
        locateUserOnSpotMap(viewId);
      });
      return container;
    },
  });
  map.addControl(new Locate());
}

function updateSpotMapFilters(viewId) {
  const state = spotMaps[viewId];
  if (!state || !state.map) return;
  const el = document.getElementById(viewId);
  const visible = new Set();
  if (el) {
    el.querySelectorAll(".spot-card").forEach((card) => {
      if (!card.hidden && card.dataset.name) visible.add(card.dataset.name);
    });
  }

  state.layer.clearLayers();
  const latLngs = [];
  Object.keys(state.markersByName).forEach((name) => {
    if (!visible.has(name)) return;
    const marker = state.markersByName[name];
    state.layer.addLayer(marker);
    const ll = marker.getLatLng();
    latLngs.push(ll);
  });

  if (latLngs.length) {
    const bounds = L.latLngBounds(latLngs);
    state.bounds = bounds;
    state.map.fitBounds(bounds, { padding: [28, 28], maxZoom: 14 });
  } else {
    state.bounds = null;
    state.map.setView([35.68, 139.76], 11);
  }
}

function loadShoppingList() {
  try {
    const raw = localStorage.getItem(SHOPPING_LIST_KEY);
    if (!raw) return [];
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) {
      localStorage.removeItem(SHOPPING_LIST_KEY);
      return [];
    }
    return data
      .filter((item) => item && typeof item === "object" && typeof item.name === "string" && item.name.trim())
      .map((item) => ({
        id: String(item.id || ""),
        name: item.name.trim().slice(0, 80),
        qty: typeof item.qty === "string" ? item.qty.trim().slice(0, 20) : "",
        note: typeof item.note === "string" ? item.note.trim().slice(0, 120) : "",
        done: item.done === true,
        created: Number(item.created) || 0,
      }))
      .filter((item) => item.id);
  } catch (_) {
    try {
      localStorage.removeItem(SHOPPING_LIST_KEY);
    } catch (_) {}
    return [];
  }
}

function saveShoppingList(items) {
  localStorage.setItem(SHOPPING_LIST_KEY, JSON.stringify(items));
}

function sortedShoppingItems(items) {
  return items.slice().sort((a, b) => {
    if (a.done !== b.done) return a.done ? 1 : -1;
    return (a.created || 0) - (b.created || 0);
  });
}

function shoppingListItemsHtml(items) {
  const sorted = sortedShoppingItems(items);
  if (!sorted.length) {
    return `<p class="shopping-list-empty">還沒有想買的東西。填上品項，加入第一樣。</p>`;
  }
  return `<ul class="shopping-list-items">${sorted
    .map((item) => {
      const qty = item.qty ? `<span class="shopping-item-qty">${escapeHtml(item.qty)}</span>` : "";
      const note = item.note ? `<span class="shopping-item-note">${escapeHtml(item.note)}</span>` : "";
      return `
      <li class="shopping-item${item.done ? " is-done" : ""}">
        <label class="shopping-item-main">
          <input type="checkbox" data-shop-id="${escapeHtml(item.id)}" ${item.done ? "checked" : ""} aria-label="已買：${escapeHtml(item.name)}" />
          <span class="shopping-item-text">
            <span class="shopping-item-name">${escapeHtml(item.name)}</span>
            ${qty}
            ${note}
          </span>
        </label>
        <button type="button" class="shopping-item-delete" data-delete-id="${escapeHtml(item.id)}">刪除</button>
      </li>`;
    })
    .join("")}</ul>`;
}

function shoppingListSectionHtml() {
  return `
    <section class="shopping-list-card" aria-labelledby="shopping-list-title">
      <h2 id="shopping-list-title">我的購物清單</h2>
      <p class="shopping-list-hint">可記下想買的東西，勾選表示已買；清單保存在這個瀏覽器。</p>
      <form id="shopping-list-form" class="shopping-list-form">
        <label class="shopping-field shopping-field-name">
          <span>品項</span>
          <input name="name" type="text" required maxlength="80" placeholder="例如：藥妝、球鞋" autocomplete="off" enterkeyhint="done" />
        </label>
        <label class="shopping-field">
          <span>數量</span>
          <input name="qty" type="text" maxlength="20" placeholder="選填" autocomplete="off" />
        </label>
        <label class="shopping-field">
          <span>備註</span>
          <input name="note" type="text" maxlength="120" placeholder="選填" autocomplete="off" />
        </label>
        <button type="submit" class="btn btn-place shopping-add">新增</button>
      </form>
      <div id="shopping-list-body">${shoppingListItemsHtml(loadShoppingList())}</div>
    </section>`;
}

function renderShoppingListBody(root) {
  const body = root.querySelector("#shopping-list-body");
  if (body) body.innerHTML = shoppingListItemsHtml(loadShoppingList());
}

function bindShoppingList(root) {
  const form = root.querySelector("#shopping-list-form");
  const body = root.querySelector("#shopping-list-body");
  if (!form || !body || form.dataset.bound === "1") return;
  form.dataset.bound = "1";
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.elements.name.value.trim();
    if (!name) {
      form.elements.name.focus();
      return;
    }
    const items = loadShoppingList();
    items.push({
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name.slice(0, 80),
      qty: form.elements.qty.value.trim().slice(0, 20),
      note: form.elements.note.value.trim().slice(0, 120),
      done: false,
      created: Date.now(),
    });
    saveShoppingList(items);
    form.reset();
    form.elements.name.focus();
    renderShoppingListBody(root);
  });
  body.addEventListener("change", (e) => {
    const box = e.target.closest("input[type=checkbox][data-shop-id]");
    if (!box) return;
    const items = loadShoppingList();
    const item = items.find((entry) => entry.id === box.dataset.shopId);
    if (!item) return;
    item.done = box.checked;
    saveShoppingList(items);
    renderShoppingListBody(root);
  });
  body.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-delete-id]");
    if (!btn) return;
    saveShoppingList(loadShoppingList().filter((entry) => entry.id !== btn.dataset.deleteId));
    renderShoppingListBody(root);
  });
}

function renderSpotList(viewId, listKey, cardClass, heroTitle, defaultBadge) {
  const el = document.getElementById(viewId);
  if (!el) return;
  const spots = TRIP_DATA[listKey] || [];
  const subtitle =
    "資料來自你 Google 地圖「東京」收藏清單；評分／價錢為地圖顯示，出發前請再核對。可按地區" +
    (typeFilterOrder(listKey) ? "與類型" : "") +
    "篩選。";
  const groups = groupSpotsByRegion(spots);
  const chipHtml = groups
    .map(
      ([region, list]) =>
        `<button type="button" class="region-chip" data-region-filter="${escapeHtml(region)}" data-spot-view="${viewId}">${escapeHtml(region)} <span class="region-count">${list.length}</span></button>`
    )
    .join("");
  const allChip = `<button type="button" class="region-chip is-active" data-region-filter="__all__" data-spot-view="${viewId}">全部 <span class="region-count">${spots.length}</span></button>`;

  let typeRow = "";
  const typeOrder = typeFilterOrder(listKey);
  if (typeOrder) {
    const counts = countByType(spots, listKey);
    const typeChips = typeOrder
      .filter((t) => counts.get(t))
      .map(
        (t) =>
          `<button type="button" class="region-chip" data-type-filter="${escapeHtml(t)}" data-spot-view="${viewId}">${escapeHtml(t)} <span class="region-count">${counts.get(t)}</span></button>`
      )
      .join("");
    const allType = `<button type="button" class="region-chip is-active" data-type-filter="__all__" data-spot-view="${viewId}">全部 <span class="region-count">${spots.length}</span></button>`;
    typeRow = `
    <div class="filter-label">${escapeHtml(typeFilterLabel(listKey))}</div>
    <div class="region-filter type-filter" data-spot-view="${viewId}">${allType}${typeChips}</div>`;
  }

  const sections = groups
    .map(([region, list]) => {
      const cards = list
        .map((s) => spotCardHtml(s, listKey, cardClass, defaultBadge))
        .join("");
      const id = `${viewId}-region-${encodeURIComponent(region)}`;
      return `
      <section class="region-section" data-region="${escapeHtml(region)}" id="${id}">
        <h3 class="region-heading">${escapeHtml(region)} <span class="region-count">${list.length}</span></h3>
        <div class="spot-grid">${cards}</div>
      </section>`;
    })
    .join("");

  const mapLabel =
    listKey === "beauty" ? "美容店舖地圖" : listKey === "restaurants" ? "餐廳地圖" : "購物地圖";
  const listHead = listKey === "shopping" ? shoppingListSectionHtml() : "";
  el.innerHTML = `
    ${listHead}
    <div class="hero-card" style="margin-bottom:16px">
      <h2>${heroTitle}</h2>
      <p class="hero-sub">${subtitle}</p>
    </div>
    <div class="spot-map-wrap">
      <div class="spot-map" id="${viewId}-map" role="img" aria-label="${mapLabel}"></div>
      <p class="spot-map-hint">只顯示本分頁清單內的店舖（不會混入其他種類）。右上角 ◎ 可開 GPS 顯示你的位置（需允許位置權限）。</p>
    </div>
    <div class="spot-filters-sticky">
      <div class="filter-label">地區</div>
      <div class="region-filter" data-spot-view="${viewId}">${allChip}${chipHtml}</div>
      ${typeRow}
    </div>
    <div class="region-sections">${sections}</div>
  `;

  bindSpotFilterRow(el, viewId, ".region-filter:not(.type-filter)", "regionFilter");
  bindSpotFilterRow(el, viewId, ".type-filter", "typeFilter");
  if (listKey === "shopping") bindShoppingList(el);
  initSpotMap(viewId, listKey, spots);
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

function phoneHref(phone) {
  const compact = String(phone || "").replace(/[^\d+]/g, "");
  return compact ? `tel:${compact}` : "";
}

function renderBookingDetails(p) {
  if (!p || !p.booking_id) return "";
  const passengers = Array.isArray(p.passengers) ? p.passengers : [];
  const facts = [
    ["出發日期", p.date ? formatDate(p.date) : ""],
    ["出發時間", p.time || ""],
    ["到達時間", p.arrive_time || ""],
    ["出發地點", p.from || ""],
    ["降車地點", p.to || ""],
    ["路線", p.route || ""],
    ["班次", p.trip_code || ""],
    ["方案", p.plan || ""],
    ["代表者", p.representative || ""],
    ["人數", p.pax_label || (passengers.length ? String(passengers.length) : "")],
    ["合計金額", p.fare || ""],
    ["運行", p.operator || ""],
    ["路線顏色", p.line_color || ""],
  ].filter(([, value]) => value);

  const factsHtml = facts
    .map(([label, value]) => {
      const valueHtml =
        label === "路線顏色"
          ? `<span class="pass-line"><span class="pass-line-dot" aria-hidden="true"></span>${escapeHtml(value)}</span>`
          : escapeHtml(value);
      return `<div class="pass-fact"><dt>${escapeHtml(label)}</dt><dd>${valueHtml}</dd></div>`;
    })
    .join("");

  const peopleHtml = passengers
    .map((person, i) => {
      const href = person.phone ? phoneHref(person.phone) : "";
      const phone = href
        ? `<a class="pass-phone" href="${escapeHtml(href)}">${escapeHtml(person.phone)}</a>`
        : "";
      const seat = person.seat ? `<span class="pass-seat">${escapeHtml(person.seat)}</span>` : "";
      return `<li class="pass-passenger"><span class="pass-passenger-name">${i + 1}. ${escapeHtml(person.name || "")}</span><span class="pass-passenger-meta">${seat}${phone}</span></li>`;
    })
    .join("");

  const peopleLabel = passengers.some((person) => person.seat) ? "乘客・座位" : "乘客";
  const boarding = p.boarding_note
    ? `<div class="pass-alert"><strong>搭乘注意</strong>${escapeHtml(p.boarding_note)}</div>`
    : "";

  return `
    <div class="pass-booking-id">
      <span class="label">預訂編號</span>
      <span class="num">${escapeHtml(String(p.booking_id))}</span>
    </div>
    <dl class="pass-facts">${factsHtml}</dl>
    ${
      peopleHtml
        ? `<div class="pass-people"><div class="pass-people-label">${peopleLabel}</div><ol class="pass-passengers">${peopleHtml}</ol></div>`
        : ""
    }
    ${boarding}
  `;
}

function renderPasses() {
  const el = document.getElementById("view-passes");
  const passes = TRIP_DATA.passes || {};

  const cards = Object.entries(passes)
    .map(([key, p]) => {
      const booking = renderBookingDetails(p);
      const actions = [];
      if (p.confirm_pdf) {
        actions.push(
          `<a class="btn btn-pass" href="${escapeHtml(p.confirm_pdf)}" target="_blank" rel="noopener noreferrer">開啟確認 PDF</a>`
        );
      }
      if (p.url) {
        const label = p.url_label || (booking ? "開啟預訂系統" : "開啟官網／購買");
        const cls = p.confirm_pdf ? "btn btn-link" : "btn btn-pass";
        actions.push(
          `<a class="${cls}" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">${label}</a>`
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
      <article class="pass-card${booking ? " pass-booking" : ""}">
        ${img}
        <div class="pass-body">
          <h3>${escapeHtml(p.name)}</h3>
          <p>${escapeHtml(p.note || "")}</p>
          ${booking}
          <div class="pass-actions">${actions.join("")}</div>
        </div>
      </article>`;
    })
    .join("");

  el.innerHTML = `
    <div class="hero-card" style="margin-bottom:16px">
      <h2>付費票券</h2>
      <p class="hero-sub">箱根周遊券、河口湖周遊券、東橫巴士與 WILLER 高速巴士預訂 · 點圖片可放大</p>
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
