/* 鮨創作割烹ちく — メインJS */

// =============================================
// 言語切り替え（JP / EN）
// =============================================
const i18nData = {
  ja: {
    'hero-sub': '糸島唯一の江戸前寿司と創作和食。<br>全国より届く旬魚と、福岡・糸島の四季を味わう',
    'btn-reserve': 'ご予約はこちら',
    'btn-omakase': 'おまかせコースを見る',
    'news-title': 'お知らせ',
    'news-category-notice': 'お知らせ',
    'news-launch': 'ホームページを開設いたしました',
    'news-more': '一覧を見る',
    'concept-title': '素材と向き合い、<br>一貫に静かな余韻を込める。',
    'concept-body-1': '全国各地より届く旬の魚介。<br>そして糸島の豊かな風土が育てた野菜や食材。<br>その時季に最も良い素材を見極め、<br>一つひとつ丁寧に仕立てています。',
    'concept-body-2': '福岡・糸島で唯一の江戸前寿司として、創作和食の技も交えながら、季節の移ろいを一皿ごとに表現します。<br>赤酢のシャリ、丁寧に仕込む酒肴、そして握りへと続く流れ。<br>料理と空間、会話までも含めて、その日だけの時間をお愉しみください。',
    'concept-body-3': 'カウンター8席。職人の所作を間近に感じながら味わう空間と、<br>ゆったりと過ごせる個室をご用意しております。<br>福岡県糸島市での接待や記念日、大切な方とのお食事にも、静かなひとときをお過ごしください。',
    'menu-title': 'メニュー',
    'menu-alacarte-name': 'アラカルト',
    'menu-alacarte-desc': '赤酢のシャリで仕立てる旬の一貫。<br>握り・酒肴・巻物・お椀・甘味など、<br>お好みのものをお選びいただけます。',
    'menu-alacarte-l1-label': '握り',
    'menu-alacarte-l1-desc': '赤酢のシャリで仕立てる旬の一貫',
    'menu-alacarte-l2-label': '酒肴',
    'menu-alacarte-l2-desc': '日替わりで愉しむ季節の逸品',
    'menu-alacarte-l3-label': '巻物',
    'menu-alacarte-l3-desc': '細巻き・太巻き 各種',
    'menu-alacarte-l4-label': 'お椀',
    'menu-alacarte-l4-desc': '出汁を味わう一椀',
    'menu-alacarte-l5-label': '甘味',
    'menu-alacarte-l5-desc': '季節の甘味',
    'menu-alacarte-note': '※ 価格はメニュー表をご参照ください',
    'menu-takeout-name': 'お持ち帰り',
    'menu-takeout-desc': 'ご自宅でのお食事や、<br>法事・お祝いなどのお集まりにも。<br>前日までのご予約をお願いいたします。',
    'menu-takeout-l1-label': '折詰',
    'menu-takeout-l1-desc': '旬の握り・ちらし寿司',
    'menu-takeout-l2-label': '巻物',
    'menu-takeout-l2-desc': '太巻き・細巻き 各種',
    'menu-takeout-l3-label': '酒肴',
    'menu-takeout-l3-desc': '季節の日替わり料理',
    'menu-takeout-l4-label': 'お集まり',
    'menu-takeout-l4-desc': '法事・お祝い・慶事対応可',
    'menu-takeout-note': '※ 前日までのご予約をお願いいたします',
    'omakase-title': 'ディナーコース',
    'omakase-desc': 'その日の仕入れにより内容が変わります。',
    'course-a-name': '握りコース',
    'course-b-name': 'おまかせコース',
    'course-b-badge': 'おすすめ',
    'course-c-name': '特別おまかせコース',
    'tax-incl': '（税込）',
    'course-note': '※ 仕入れにより内容が変わります',
    'course-a-i1': '先付け',
    'course-a-i2': '握り 8貫',
    'course-a-i3': '巻物 1本',
    'course-a-i4': 'お椀',
    'course-b-i1': '先付け',
    'course-b-i2': '造里',
    'course-b-i3': '蒸し物',
    'course-b-i4': '揚げ物',
    'course-b-i5': '寿司 8貫',
    'course-b-i6': 'お椀',
    'course-b-i7': '水菓子',
    'course-c-i1': '八寸',
    'course-c-i2': '造里',
    'course-c-i3': '蒸し物',
    'course-c-i4': '煮物',
    'course-c-i5': '揚げ物',
    'course-c-i6': '寿司 10貫',
    'course-c-i7': 'お椀',
    'course-c-i8': '水菓子',
    'budget-title': 'ご予算に合わせたコースも承ります',
    'budget-desc': 'お気軽にご相談ください。ご要望・人数・ご予算に応じて、<br>特別なコースをご用意いたします。',
    'budget-btn': 'ご相談・ご予約',
    'omakase-note-1': 'アレルギーのある方は事前にお知らせください。',
    'omakase-note-2': 'ドリンクは別途。',
    'omakase-note-3': 'お子様向けメニューはご相談ください。',
    'info-title': '店舗情報',
    'info-address-label': '住所',
    'info-address-val': '〒819-1116<br>福岡県糸島市前原中央2-3-39',
    'info-phone-label': '電話',
    'info-hours-label': '営業時間',
    'info-hours-val': '17:00〜22:30（LO 22:00）<br>金・土曜日 17:00〜24:00（食事LO 23:00 / ドリンクLO 23:30）',
    'info-closed-label': '定休日',
    'info-closed-val': '水曜日',
    'info-seats-label': '席数',
    'info-seats-val': 'カウンター8席、個室1室（8名掛け）',
    'info-access-label': 'アクセス',
    'info-access-val': '筑前前原駅より徒歩圏内',
    'reserve-title': 'ご予約',
    'reserve-desc': '完全予約制。お電話またはオンラインにてご予約ください。',
    'reserve-online-title': 'オンライン予約',
    'reserve-online-desc': '24時間いつでもご予約いただけます。コース・日時・人数をお選びください。',
    'reserve-online-btn': 'オンライン予約へ',
    'reserve-phone-title': 'お電話でのご予約',
    'reserve-phone-desc': 'ご不明な点やご要望はお電話にてお気軽にどうぞ。担当者が丁寧にご対応します。',
    'reserve-hours': '受付時間：15:00〜22:00（水曜除く）',
    'reserve-note-title': 'ご予約の際のお願い',
    'reserve-note-1': 'キャンセルにつきましては、ご予約日の3日前までにご連絡をお願いいたします。以降のキャンセルは、所定のキャンセル料を頂戴いたします。',
    'reserve-note-2': 'お席のご利用は2時間程度を目安とさせていただいております。ごゆっくりお過ごしくださいませ。',
    'reserve-note-3': 'アレルギーやお苦手な食材がございましたら、ご予約時にお申し付けください。',
    'reserve-note-4': '貸切でのご利用も承っております。お気軽にご相談ください。',
    'reserve-note-5': 'お子様のご来店につきましては、事前にご相談をお願いいたします。',
    'footer-address': '〒819-1116 福岡県糸島市前原中央2-3-39',
    'announce': '2026年7月中旬オープン予定 &nbsp;|&nbsp; 詳細はInstagramにてお知らせいたします',
  },
  en: {
    'hero-sub': 'The only Edomae sushi in Itoshima.<br>Seasonal fish from across Japan, the four seasons of Fukuoka\'s Itoshima.',
    'btn-reserve': 'Make a Reservation',
    'btn-omakase': 'View Omakase Courses',
    'news-title': 'News',
    'news-category-notice': 'Notice',
    'news-launch': 'Our website has launched.',
    'news-more': 'View all',
    'concept-title': 'Facing each ingredient,<br>infusing quiet resonance into every piece.',
    'concept-body-1': 'Seasonal seafood delivered from across Japan.<br>Vegetables and ingredients nurtured by the rich land of Itoshima.<br>We select the finest ingredients of each season<br>and prepare each one with care.',
    'concept-body-2': 'Fukuoka-Itoshima\'s only Edomae sushi restaurant, expressing the changing seasons in every dish, weaving in the techniques of creative Japanese cuisine.<br>Red vinegar shari, carefully prepared sake snacks, leading into the nigiri.<br>Please enjoy a time that is uniquely yours — the food, the space, the conversation.',
    'concept-body-3': 'Eight counter seats where you can witness the chef\'s craft up close,<br>and a private room for unhurried dining.<br>Whether for business entertaining, anniversaries, or a special meal with loved ones in Itoshima — please savor a quiet moment.',
    'menu-title': 'Menu',
    'menu-alacarte-name': 'À la carte',
    'menu-alacarte-desc': 'Seasonal nigiri crafted with red vinegar shari.<br>Choose from nigiri, sake snacks, rolls, soup, and sweets<br>to suit your preference.',
    'menu-alacarte-l1-label': 'Nigiri',
    'menu-alacarte-l1-desc': 'Seasonal nigiri with red vinegar shari',
    'menu-alacarte-l2-label': 'Sake snacks',
    'menu-alacarte-l2-desc': 'Daily seasonal delicacies',
    'menu-alacarte-l3-label': 'Rolls',
    'menu-alacarte-l3-desc': 'Thin rolls, thick rolls & more',
    'menu-alacarte-l4-label': 'Soup',
    'menu-alacarte-l4-desc': 'A bowl to savor the dashi broth',
    'menu-alacarte-l5-label': 'Sweets',
    'menu-alacarte-l5-desc': 'Seasonal sweets',
    'menu-alacarte-note': '* Please refer to our menu for prices',
    'menu-takeout-name': 'Take-out',
    'menu-takeout-desc': 'Perfect for home dining or gatherings<br>such as memorial services and celebrations.<br>Please reserve by the previous day.',
    'menu-takeout-l1-label': 'Bento box',
    'menu-takeout-l1-desc': 'Seasonal nigiri / chirashi sushi',
    'menu-takeout-l2-label': 'Rolls',
    'menu-takeout-l2-desc': 'Thick rolls, thin rolls & more',
    'menu-takeout-l3-label': 'Sake snacks',
    'menu-takeout-l3-desc': 'Daily seasonal dishes',
    'menu-takeout-l4-label': 'Gatherings',
    'menu-takeout-l4-desc': 'Memorial services, celebrations & special occasions',
    'menu-takeout-note': '* Please reserve by the previous day',
    'omakase-title': 'Dinner Courses',
    'omakase-desc': 'Course contents vary based on the day\'s sourcing.',
    'course-a-name': 'Nigiri Course',
    'course-b-name': 'Omakase Course',
    'course-b-badge': 'Recommended',
    'course-c-name': 'Special Omakase Course',
    'tax-incl': '(tax included)',
    'course-note': '* Contents vary based on the day\'s sourcing',
    'course-a-i1': 'Appetizer',
    'course-a-i2': 'Nigiri  8 pieces',
    'course-a-i3': 'Roll  1 piece',
    'course-a-i4': 'Soup',
    'course-b-i1': 'Appetizer',
    'course-b-i2': 'Sashimi',
    'course-b-i3': 'Steamed dish',
    'course-b-i4': 'Fried dish',
    'course-b-i5': 'Sushi  8 pieces',
    'course-b-i6': 'Soup',
    'course-b-i7': 'Dessert',
    'course-c-i1': 'Hassun (seasonal platter)',
    'course-c-i2': 'Sashimi',
    'course-c-i3': 'Steamed dish',
    'course-c-i4': 'Simmered dish',
    'course-c-i5': 'Fried dish',
    'course-c-i6': 'Sushi  10 pieces',
    'course-c-i7': 'Soup',
    'course-c-i8': 'Dessert',
    'budget-title': 'Custom courses available to suit your budget',
    'budget-desc': 'Please feel free to contact us.<br>We will prepare a special course tailored to your requests, number of guests, and budget.',
    'budget-btn': 'Inquire / Reserve',
    'omakase-note-1': 'Please inform us of any allergies in advance.',
    'omakase-note-2': 'Drinks are not included.',
    'omakase-note-3': 'Please consult us regarding children\'s menus.',
    'info-title': 'Restaurant Info',
    'info-address-label': 'Address',
    'info-address-val': '2-3-39 Maebaru Chuo,<br>Itoshima, Fukuoka 819-1116, Japan',
    'info-phone-label': 'Phone',
    'info-hours-label': 'Hours',
    'info-hours-val': 'Mon–Thu, Sun: 17:00–22:30 (LO 22:00)<br>Fri & Sat: 17:00–24:00 (Food LO 23:00 / Drinks LO 23:30)',
    'info-closed-label': 'Closed',
    'info-closed-val': 'Wednesdays',
    'info-seats-label': 'Seating',
    'info-seats-val': '8 counter seats, 1 private room (up to 8 guests)',
    'info-access-label': 'Access',
    'info-access-val': 'Within walking distance from Chikuzen-Maebaru Station',
    'reserve-title': 'Reservation',
    'reserve-desc': 'Reservations required. Please book by phone or online.',
    'reserve-online-title': 'Online Reservation',
    'reserve-online-desc': 'Available 24 hours. Select your course, date, and number of guests.',
    'reserve-online-btn': 'Reserve Online',
    'reserve-phone-title': 'Phone Reservation',
    'reserve-phone-desc': 'For inquiries and requests, feel free to call us. Our staff will be happy to assist.',
    'reserve-hours': 'Hours: 15:00–22:00 (except Wednesdays)',
    'reserve-note-title': 'Reservation Notes',
    'reserve-note-1': 'For cancellations, please notify us at least 3 days before your reservation date. Cancellation fees may apply for later cancellations.',
    'reserve-note-2': 'Seating duration is approximately 2 hours. Please take your time and enjoy.',
    'reserve-note-3': 'Please inform us of any allergies or dietary restrictions at the time of booking.',
    'reserve-note-4': 'Private dining events are available. Please feel free to inquire.',
    'reserve-note-5': 'Please consult us in advance regarding dining with children.',
    'footer-address': '2-3-39 Maebaru Chuo, Itoshima, Fukuoka 819-1116, Japan',
    'announce': 'Opening mid-July 2026 &nbsp;|&nbsp; Details to be announced on Instagram',
  },
  'zh-cn': {
    'hero-sub': '糸岛唯一的江户前寿司和创意和食。<br>来自全国各地的时令鱼和福冈·糸岛的四季风味',
    'btn-reserve': '立即预约',
    'btn-omakase': '查看主厨套餐',
    'news-title': '最新资讯',
    'news-category-notice': '通知',
    'news-launch': '网站正式上线',
    'news-more': '查看全部',
    'concept-title': '专注食材，<br>将静谧余韵融入每一贯。',
    'concept-body-1': '来自全国各地的时令鱼鲜。<br>以及糸岛丰饶土地孕育的蔬菜与食材。<br>严选当季最优质的食材，<br>每一道料理都精心烹制。',
    'concept-body-2': '作为福冈·糸岛唯一的江户前寿司餐厅，融合创意和食技法，在每道菜中呈现季节的变迁。<br>赤醋醋饭、精心调制的下酒菜，再到握寿司的流程。<br>料理、空间、乃至对话，请尽享这一天独特的时光。',
    'concept-body-3': '吧台8席，可近距离感受职人技艺，<br>另设可放松用餐的包间。<br>无论是商务接待、纪念日，还是与重要之人的用餐，<br>欢迎在福冈县糸岛市度过宁静时光。',
    'menu-title': '菜单',
    'menu-alacarte-name': '单点',
    'menu-alacarte-desc': '赤醋醋饭搭配时令食材的握寿司。<br>可从握寿司、下酒菜、卷物、汤品、甜点中<br>自由选择。',
    'menu-alacarte-l1-label': '握寿司',
    'menu-alacarte-l1-desc': '赤醋醋饭搭配时令食材',
    'menu-alacarte-l2-label': '下酒菜',
    'menu-alacarte-l2-desc': '每日更换的时令佳肴',
    'menu-alacarte-l3-label': '卷物',
    'menu-alacarte-l3-desc': '细卷、粗卷等各种',
    'menu-alacarte-l4-label': '汤品',
    'menu-alacarte-l4-desc': '品味高汤的一碗',
    'menu-alacarte-l5-label': '甜点',
    'menu-alacarte-l5-desc': '时令甜点',
    'menu-alacarte-note': '※ 价格请参阅菜单',
    'menu-takeout-name': '外带',
    'menu-takeout-desc': '适合居家用餐，<br>或法事、庆典等聚会。<br>请于前一天完成预约。',
    'menu-takeout-l1-label': '折箱',
    'menu-takeout-l1-desc': '时令握寿司、散寿司',
    'menu-takeout-l2-label': '卷物',
    'menu-takeout-l2-desc': '粗卷、细卷等各种',
    'menu-takeout-l3-label': '下酒菜',
    'menu-takeout-l3-desc': '每日更换的时令料理',
    'menu-takeout-l4-label': '聚会',
    'menu-takeout-l4-desc': '法事、庆典、喜事均可',
    'menu-takeout-note': '※ 请于前一天完成预约',
    'omakase-title': '主厨推荐套餐',
    'omakase-desc': '内容根据当日食材而定。',
    'course-a-name': '握寿司套餐',
    'course-b-name': '主厨套餐',
    'course-b-badge': '推荐',
    'course-c-name': '特别主厨套餐',
    'tax-incl': '（含税）',
    'course-note': '※ 内容根据食材采购而定',
    'course-a-i1': '前菜',
    'course-a-i2': '握寿司 8贯',
    'course-a-i3': '卷物 1条',
    'course-a-i4': '汤品',
    'course-b-i1': '前菜',
    'course-b-i2': '刺身',
    'course-b-i3': '蒸物',
    'course-b-i4': '炸物',
    'course-b-i5': '寿司 8贯',
    'course-b-i6': '汤品',
    'course-b-i7': '甜点',
    'course-c-i1': '八寸（时令拼盘）',
    'course-c-i2': '刺身',
    'course-c-i3': '蒸物',
    'course-c-i4': '煮物',
    'course-c-i5': '炸物',
    'course-c-i6': '寿司 10贯',
    'course-c-i7': '汤品',
    'course-c-i8': '甜点',
    'budget-title': '也可根据预算提供定制套餐',
    'budget-desc': '欢迎随时咨询。我们将根据您的需求、人数和预算，<br>为您准备特别套餐。',
    'budget-btn': '咨询·预约',
    'omakase-note-1': '如有过敏食物，请提前告知。',
    'omakase-note-2': '饮品另计。',
    'omakase-note-3': '儿童菜单请提前商量。',
    'info-title': '店铺信息',
    'info-address-label': '地址',
    'info-address-val': '〒819-1116<br>福冈县糸岛市前原中央2-3-39',
    'info-phone-label': '电话',
    'info-hours-label': '营业时间',
    'info-hours-val': '周一至四、周日：17:00〜22:30（最后点餐 22:00）<br>周五、六：17:00〜24:00（料理 23:00 / 饮品 23:30）',
    'info-closed-label': '休息日',
    'info-closed-val': '周三',
    'info-seats-label': '座位',
    'info-seats-val': '吧台8席，包间1间（可容纳8人）',
    'info-access-label': '交通',
    'info-access-val': '距筑前前原站步行可达',
    'reserve-title': '预约',
    'reserve-desc': '完全预约制。请通过电话或网络预约。',
    'reserve-online-title': '网络预约',
    'reserve-online-desc': '24小时均可预约。请选择套餐、日期和人数。',
    'reserve-online-btn': '前往网络预约',
    'reserve-phone-title': '电话预约',
    'reserve-phone-desc': '如有疑问或特殊需求，欢迎来电咨询。我们将热情为您服务。',
    'reserve-hours': '受理时间：15:00〜22:00（周三除外）',
    'reserve-note-title': '预约须知',
    'reserve-note-1': '取消预约请在预约日3天前联系我们。此后取消将收取取消费用。',
    'reserve-note-2': '用餐时间约为2小时，请慢慢享用。',
    'reserve-note-3': '如有过敏食物或不喜欢的食材，请在预约时告知。',
    'reserve-note-4': '可接受包场预约，欢迎咨询。',
    'reserve-note-5': '携带儿童用餐请提前咨询。',
    'footer-address': '〒819-1116 福冈县糸岛市前原中央2-3-39',
    'announce': '预计2026年7月中旬开业 &nbsp;|&nbsp; 详情将在Instagram公布',
  },
  'zh-tw': {
    'hero-sub': '糸島唯一的江戶前壽司和創意和食。<br>來自全國各地的時令魚和福岡·糸島的四季風味',
    'btn-reserve': '立即預約',
    'btn-omakase': '查看主廚套餐',
    'news-title': '最新消息',
    'news-category-notice': '通知',
    'news-launch': '網站正式上線',
    'news-more': '查看全部',
    'concept-title': '專注食材，<br>將靜謐餘韻融入每一貫。',
    'concept-body-1': '來自全國各地的時令魚鮮。<br>以及糸島豐饒土地孕育的蔬菜與食材。<br>嚴選當季最優質的食材，<br>每一道料理都精心烹製。',
    'concept-body-2': '作為福岡·糸島唯一的江戶前壽司餐廳，融合創意和食技法，在每道菜中呈現季節的變遷。<br>赤醋醋飯、精心調製的下酒菜，再到握壽司的流程。<br>料理、空間、乃至對話，請盡享這一天獨特的時光。',
    'concept-body-3': '吧台8席，可近距離感受職人技藝，<br>另設可放鬆用餐的包廂。<br>無論是商務接待、紀念日，還是與重要之人的用餐，<br>歡迎在福岡縣糸島市度過寧靜時光。',
    'menu-title': '菜單',
    'menu-alacarte-name': '單點',
    'menu-alacarte-desc': '赤醋醋飯搭配時令食材的握壽司。<br>可從握壽司、下酒菜、卷物、湯品、甜點中<br>自由選擇。',
    'menu-alacarte-l1-label': '握壽司',
    'menu-alacarte-l1-desc': '赤醋醋飯搭配時令食材',
    'menu-alacarte-l2-label': '下酒菜',
    'menu-alacarte-l2-desc': '每日更換的時令佳餚',
    'menu-alacarte-l3-label': '卷物',
    'menu-alacarte-l3-desc': '細卷、粗卷等各種',
    'menu-alacarte-l4-label': '湯品',
    'menu-alacarte-l4-desc': '品味高湯的一碗',
    'menu-alacarte-l5-label': '甜點',
    'menu-alacarte-l5-desc': '時令甜點',
    'menu-alacarte-note': '※ 價格請參閱菜單',
    'menu-takeout-name': '外帶',
    'menu-takeout-desc': '適合居家用餐，<br>或法事、慶典等聚會。<br>請於前一天完成預約。',
    'menu-takeout-l1-label': '折箱',
    'menu-takeout-l1-desc': '時令握壽司、散壽司',
    'menu-takeout-l2-label': '卷物',
    'menu-takeout-l2-desc': '粗卷、細卷等各種',
    'menu-takeout-l3-label': '下酒菜',
    'menu-takeout-l3-desc': '每日更換的時令料理',
    'menu-takeout-l4-label': '聚會',
    'menu-takeout-l4-desc': '法事、慶典、喜事均可',
    'menu-takeout-note': '※ 請於前一天完成預約',
    'omakase-title': '主廚推薦套餐',
    'omakase-desc': '內容根據當日食材而定。',
    'course-a-name': '握壽司套餐',
    'course-b-name': '主廚套餐',
    'course-b-badge': '推薦',
    'course-c-name': '特別主廚套餐',
    'tax-incl': '（含稅）',
    'course-note': '※ 內容根據食材採購而定',
    'course-a-i1': '前菜',
    'course-a-i2': '握壽司 8貫',
    'course-a-i3': '卷物 1條',
    'course-a-i4': '湯品',
    'course-b-i1': '前菜',
    'course-b-i2': '生魚片',
    'course-b-i3': '蒸物',
    'course-b-i4': '炸物',
    'course-b-i5': '壽司 8貫',
    'course-b-i6': '湯品',
    'course-b-i7': '甜點',
    'course-c-i1': '八寸（時令拼盤）',
    'course-c-i2': '生魚片',
    'course-c-i3': '蒸物',
    'course-c-i4': '煮物',
    'course-c-i5': '炸物',
    'course-c-i6': '壽司 10貫',
    'course-c-i7': '湯品',
    'course-c-i8': '甜點',
    'budget-title': '也可根據預算提供客製套餐',
    'budget-desc': '歡迎隨時諮詢。我們將根據您的需求、人數和預算，<br>為您準備特別套餐。',
    'budget-btn': '諮詢·預約',
    'omakase-note-1': '如有過敏食物，請提前告知。',
    'omakase-note-2': '飲品另計。',
    'omakase-note-3': '兒童菜單請提前商量。',
    'info-title': '店舖資訊',
    'info-address-label': '地址',
    'info-address-val': '〒819-1116<br>福岡縣糸島市前原中央2-3-39',
    'info-phone-label': '電話',
    'info-hours-label': '營業時間',
    'info-hours-val': '週一至四、週日：17:00〜22:30（最後點餐 22:00）<br>週五、六：17:00〜24:00（料理 23:00 / 飲品 23:30）',
    'info-closed-label': '公休日',
    'info-closed-val': '週三',
    'info-seats-label': '座位',
    'info-seats-val': '吧台8席，包廂1間（可容納8人）',
    'info-access-label': '交通',
    'info-access-val': '距筑前前原站步行可達',
    'reserve-title': '預約',
    'reserve-desc': '完全預約制。請透過電話或網路預約。',
    'reserve-online-title': '網路預約',
    'reserve-online-desc': '24小時均可預約。請選擇套餐、日期和人數。',
    'reserve-online-btn': '前往網路預約',
    'reserve-phone-title': '電話預約',
    'reserve-phone-desc': '如有疑問或特殊需求，歡迎來電諮詢。我們將熱情為您服務。',
    'reserve-hours': '受理時間：15:00〜22:00（週三除外）',
    'reserve-note-title': '預約須知',
    'reserve-note-1': '取消預約請在預約日3天前聯絡我們。此後取消將收取取消費用。',
    'reserve-note-2': '用餐時間約為2小時，請慢慢享用。',
    'reserve-note-3': '如有過敏食物或不喜歡的食材，請在預約時告知。',
    'reserve-note-4': '可接受包場預約，歡迎諮詢。',
    'reserve-note-5': '攜帶兒童用餐請提前諮詢。',
    'footer-address': '〒819-1116 福岡縣糸島市前原中央2-3-39',
    'announce': '預計2026年7月中旬開業 &nbsp;|&nbsp; 詳情將在Instagram公布',
  }
};

const langCycle = ['ja', 'en', 'zh-cn', 'zh-tw'];
const langLabels = { ja: '日本語', en: 'English', 'zh-cn': '中文', 'zh-tw': '繁體中文' };
const langAttr   = { ja: 'ja',    en: 'en',     'zh-cn': 'zh-Hans', 'zh-tw': 'zh-Hant' };

let currentLang = localStorage.getItem('lang') || 'ja';

function applyI18n(lang) {
  const t = i18nData[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.getElementById('html-root').lang = langAttr[lang] || lang;
  const btn = document.getElementById('lang-toggle');
  const nextLang = langCycle[(langCycle.indexOf(lang) + 1) % langCycle.length];
  if (btn) btn.textContent = langLabels[nextLang];
  currentLang = lang;
  localStorage.setItem('lang', lang);
}

applyI18n(currentLang);

document.getElementById('lang-toggle').addEventListener('click', () => {
  const nextLang = langCycle[(langCycle.indexOf(currentLang) + 1) % langCycle.length];
  applyI18n(nextLang);
});

// ヘッダースクロール制御
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('open');
  document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
});

nav.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// スクロールアニメーション
const revealTargets = [
  '.concept-text',
  '.concept-visual',
  '.menu-card',
  '.course-card',
  '.info-text',
  '.info-map',
  '.reserve-card',
  '.omakase-note',
  '.reserve-note',
];

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll(revealTargets.join(',')).forEach((el, i) => {
  el.classList.add('reveal');
  const delay = (i % 3) * 0.1;
  el.style.transitionDelay = `${delay}s`;
  observer.observe(el);
});

// ナビゲーションアクティブ表示
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--gold-light)'
          : '';
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => sectionObserver.observe(s));

// 木目テクスチャ：マウスパララックス（ヒーローのみ）
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    heroBg.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
  }, { passive: true });
}

// =============================================
// STUDIO CMS — NEWS 連携
// =============================================
// STUDIOのCMS設定が完了したら下記2行を書き換えてください
// ・API_URL  : STUDIO CMS の APIエンドポイントURL
// ・API_KEY  : STUDIO CMS の APIキー
// ・LIST_URL : 「一覧を見る」ボタンのリンク先URL
// =============================================
const NEWS_API_URL = '';          // 例: 'https://api.studio.design/cms/...'
const NEWS_API_KEY = '';          // 例: 'studioXXXXXXXXXXXXXXXX'
const NEWS_LIST_URL = '';         // 例: 'https://yoursite.studio.site/news'
const NEWS_LIMIT   = 3;

// フィールド名マッピング（STUDIOのフィールド名に合わせて変更）
const NEWS_FIELDS = {
  title    : 'title',     // タイトルのフィールド名
  date     : 'date',      // 日付のフィールド名
  category : 'category',  // カテゴリのフィールド名（不要なら '' に）
};

function formatNewsDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}.${m}.${day}`;
}

function renderNewsItems(items) {
  const list = document.getElementById('news-list');
  if (!list || !items.length) return;
  list.innerHTML = items.map(item => {
    const title    = item[NEWS_FIELDS.title]    || '';
    const date     = formatNewsDate(item[NEWS_FIELDS.date] || item.publishedAt || '');
    const category = NEWS_FIELDS.category ? (item[NEWS_FIELDS.category] || '') : '';
    return `
      <li class="news-item">
        <time class="news-date">${date}</time>
        ${category ? `<span class="news-category">${category}</span>` : ''}
        <p class="news-text">${title}</p>
      </li>`;
  }).join('');
}

async function loadNewsFromCMS() {
  if (!NEWS_API_URL || !NEWS_API_KEY) return; // 未設定なら仮データをそのまま表示

  const list = document.getElementById('news-list');
  if (list) list.innerHTML = '<li class="news-loading">Loading...</li>';

  try {
    const res = await fetch(`${NEWS_API_URL}?limit=${NEWS_LIMIT}`, {
      headers: { 'X-API-KEY': NEWS_API_KEY }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    // STUDIOのレスポンス形式に応じて調整（contents / items / data など）
    const items = json.contents ?? json.items ?? json.data ?? json;
    renderNewsItems(Array.isArray(items) ? items : []);
  } catch (e) {
    console.warn('NEWS CMS fetch failed:', e);
    // 失敗時は仮データを復元
    if (list) list.innerHTML = `
      <li class="news-item">
        <time class="news-date">—</time>
        <p class="news-text">お知らせを取得できませんでした</p>
      </li>`;
  }
}

// 「一覧を見る」リンク先を設定
const newsMoreBtn = document.getElementById('news-more');
if (newsMoreBtn && NEWS_LIST_URL) newsMoreBtn.href = NEWS_LIST_URL;

loadNewsFromCMS();

// スムーズスクロール（アンカーリンク）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const headerH = header.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});


// フローティング予約ボタン（スクロール200px以降に表示）
const floatReserve = document.getElementById('float-reserve');
if (floatReserve) {
  const toggleFloat = () => {
    floatReserve.classList.toggle('visible', window.scrollY > 200);
  };
  window.addEventListener('scroll', toggleFloat, { passive: true });
  toggleFloat();
}
