/* ========================================
   LANGUAGE SWITCHING SYSTEM
   Korean (ko) / Traditional Chinese (zh)
   ======================================== */

const LANG_DATA = {
  // ---- Navigation ----
  nav_purchase: { ko: '구매대행', zh: '商品代購' },
  nav_shipping: { ko: '배송대행', zh: '集運服務' },
  nav_apply: { ko: '신청하기', zh: '立即委託' },
  nav_pickup: { ko: '픽업대행', zh: '現地提貨' },
  nav_trade: { ko: '무역대행', zh: '批發專區' },
  nav_board: { ko: '게시판', zh: '最新公告' },
  nav_tracking: { ko: '배송조회', zh: '配送查詢' },

  // ---- Hero ----
  hero_title: { ko: '<span class="line-1">【韓國現地代購・直送台灣/港澳】</span><span class="line-2">專為台灣客戶打造的韓國商品一站式服務</span>', zh: '<span class="line-1">【韓國現地代購・直送台灣】</span><span class="line-2">專為台灣客戶打造的韓國商品一站式服務</span>' },

  // ---- Process Section ----
  process_title: { ko: '구매대행 이용 절차', zh: '購買代購流程' },
  step1_title: { ko: '한국 상품 선택', zh: '選擇韓國商品' },
  step1_desc: { ko: '원하는 한국 상품의 URL이나 이름을 알려주세요', zh: '提供您想要的韓國商品URL或名稱' },
  step2_title: { ko: '신청서 작성', zh: '填寫申請表' },
  step2_desc: { ko: '이름, 전화번호, LINE ID, 상품 정보, 수량을 작성합니다', zh: '填寫姓名、電話、LINE ID、商品資訊、數量' },
  step3_title: { ko: '상품 구매', zh: '我們購買商品' },
  step3_desc: { ko: '한국에서 상품을 구매합니다. 판매자 발송 후 1~2일 소요', zh: '我們在韓國購買商品，賣家發貨後約1~2天' },
  step4_title: { ko: '검수 및 견적', zh: '檢驗並報價' },
  step4_desc: { ko: '품질 검수 후 정확한 배송비와 서비스 비용을 안내합니다', zh: '品質檢驗後提供準確的運費和服務費報價' },
  step5_title: { ko: '대만으로 배송', zh: '配送到台灣' },
  step5_desc: { ko: 'EMS 또는 항공편으로 배송. 보통 4~8일 소요', zh: '透過EMS或空運配送，通常4~8天到達' },

  // ---- Calculator Section ----
  calc_title: { ko: '운임 계산기', zh: '運費計算機' },
  calc_price_label: { ko: '상품 가격 (KRW)', zh: '商品價格 (KRW)' },
  calc_quantity_label: { ko: '수량', zh: '數量' },
  calc_customs_label: { ko: '관세율', zh: '關稅率' },
  calc_cbm_label: { ko: 'CBM 체적', zh: 'CBM體積' },
  calc_cbm_help: { ko: '체적이 큰 상품의 경우 입력해주세요 (선택사항)', zh: '體積較大的商品請輸入（選填）' },
  calc_btn: { ko: '총 비용 계산하기', zh: '計算總費用' },
  calc_result_product: { ko: '상품 가격', zh: '商品價格' },
  calc_result_shipping: { ko: '배송비 (예상)', zh: '運費（預估）' },
  calc_result_customs: { ko: '관세', zh: '關稅' },
  calc_result_service: { ko: '서비스 수수료', zh: '服務費' },
  calc_result_total: { ko: '총 예상 비용', zh: '預估總費用' },
  calc_note: { ko: '※ 이 금액은 예상 금액이며, 실제 비용은 다를 수 있습니다.', zh: '※ 此為估算價格，實際費用可能有所不同。' },

  // ---- Service Cards ----
  services_title: { ko: '우리의 서비스', zh: '我們的服務' },
  card1_title: { ko: '구매대행 서비스', zh: '購買代購服務' },
  card1_desc: { ko: '한국 온라인 쇼핑몰 상품 대리 구매 - 화장품, 의류, 식품 등', zh: '代為購買韓國網購商品，包括化妝品、服飾、食品等' },
  card2_title: { ko: '배송대행 서비스', zh: '配送代購服務' },
  card2_desc: { ko: '한국에서 대만까지 전문 배송 서비스, 빠르고 안전합니다', zh: '提供韓國到台灣的專業配送服務，快速安全' },
  card3_title: { ko: '픽업대행 서비스', zh: '提貨代購服務' },
  card3_desc: { ko: '한국 현지 픽업 서비스로 다양한 물류 요구를 지원합니다', zh: '韓國當地提貨服務，協助處理各種物流需求' },
  card4_title: { ko: '무역대행 서비스', zh: '貿易代購服務' },
  card4_desc: { ko: 'B2B 무역 서비스, 대량 구매 전문 지원', zh: 'B2B貿易服務，大量採購專業支援' },
  card_more: { ko: '자세히 보기', zh: '了解更多' },

  // ---- Contact Section ----
  contact_title: { ko: '연락처', zh: '聯絡我們' },
  contact_address_label: { ko: '대만 사무실 주소', zh: '台灣辦公室地址' },
  contact_address: { ko: '대만 타이베이시 중산구 XX로 XX번지', zh: '台灣台北市中山區XX路XX號' },
  contact_phone_label: { ko: '전화번호', zh: '電話號碼' },
  contact_phone_tw: { ko: '대만', zh: '台灣' },
  contact_phone_kr: { ko: '한국', zh: '韓國' },
  contact_email_label: { ko: '이메일', zh: '電子郵件' },
  contact_hours_label: { ko: '영업시간', zh: '營業時間' },
  contact_hours: { ko: '월~금 9:30-18:30 (토 10:00-13:00)', zh: '週一至週五 9:30-18:30（週六 10:00-13:00）' },
  contact_line_qr: { ko: 'LINE QR코드', zh: 'LINE QR碼' },
  contact_add_line: { ko: 'LINE 친구 추가', zh: '加LINE好友' },
  contact_chat: { ko: '1:1 온라인 상담', zh: '1:1線上諮詢' },

  // ---- Footer ----
  footer_company: { ko: '한국 구매대행 서비스', zh: '韓國代購服務' },
  footer_reg: { ko: '사업자등록번호: XXX-XX-XXXXX', zh: '統一編號：XXXXXXXX' },
  footer_privacy: { ko: '개인정보처리방침', zh: '隱私政策' },
  footer_terms: { ko: '이용약관', zh: '服務條款' },
  footer_copyright: { ko: '© 2026 한국 구매대행 서비스. All rights reserved.', zh: '© 2026 韓國代購服務. All rights reserved.' },

  // ---- Floating LINE ----
  floating_tooltip: { ko: '문의하기', zh: '聯絡我們' },

  // ---- Modal ----
  modal_title: { ko: '연락처 정보', zh: '聯絡我們' },
  modal_office: { ko: '대만 사무실', zh: '台灣辦公室' },
  modal_manager: { ko: '담당자', zh: '負責人' },
  modal_line_chat: { ko: 'LINE 상담하기', zh: '加LINE諮詢' },
  modal_call: { ko: '전화 걸기', zh: '撥打電話' },
  modal_close: { ko: '닫기', zh: '關閉' },

  // ---- Apply Page ----
  apply_title: { ko: '구매대행 신청서', zh: '代購申請表' },
  apply_subtitle: { ko: '아래 양식을 작성하여 신청해주세요', zh: '請填寫以下表格進行申請' },
  apply_name: { ko: '이름', zh: '姓名' },
  apply_phone: { ko: '전화번호', zh: '電話號碼' },
  apply_line: { ko: 'LINE ID', zh: 'LINE ID' },
  apply_email: { ko: '이메일 (선택)', zh: 'Email（選填）' },
  apply_product_url: { ko: '상품 링크', zh: '商品連結' },
  apply_product_images: { ko: '상품 사진 (선택)', zh: '商品圖片（選填）' },
  apply_product_images_help: { ko: '상품 사진을 올려주시면 더 빠르게 찾을 수 있습니다', zh: '上傳商品圖片可幫助我們更快找到商品' },
  apply_product_name: { ko: '상품명', zh: '商品名稱' },
  apply_quantity: { ko: '수량', zh: '商品數量' },
  apply_price: { ko: '예상 가격 (KRW)', zh: '預計價格 (KRW)' },
  apply_address: { ko: '배송 주소', zh: '配送地址' },
  apply_city: { ko: '도시', zh: '縣市' },
  apply_district: { ko: '구/지역', zh: '區域' },
  apply_street: { ko: '상세 주소', zh: '詳細地址' },
  apply_postal: { ko: '우편번호', zh: '郵遞區號' },
  apply_special: { ko: '특별 요청사항 (선택)', zh: '特殊要求（選填）' },
  apply_agree: { ko: '개인정보처리방침 및 이용약관에 동의합니다', zh: '我同意隱私政策和服務條款' },
  apply_submit: { ko: '신청하기', zh: '提交申請' },
  apply_success_title: { ko: '신청이 완료되었습니다!', zh: '申請已提交！' },
  apply_success_msg: { ko: '빠른 시간 내에 LINE으로 연락드리겠습니다.', zh: '我們會盡快透過LINE聯絡您。' },

  // ---- Apply Form Validation ----
  val_required: { ko: '필수 입력 항목입니다', zh: '此為必填欄位' },
  val_email: { ko: '올바른 이메일 주소를 입력하세요', zh: '請輸入有效的電子郵件地址' },
  val_phone: { ko: '올바른 전화번호를 입력하세요', zh: '請輸入有效的電話號碼' },
  val_agree: { ko: '약관에 동의해주세요', zh: '請同意隱私政策和服務條款' },

  // ---- Purchase Page ----
  purchase_hero_title: { ko: '구매대행 서비스', zh: '購買代購服務' },
  purchase_hero_sub: { ko: '한국 온라인 쇼핑몰 상품을 대신 구매해 드립니다', zh: '代為購買韓國網購商品' },
  purchase_intro_title: { ko: '서비스 소개', zh: '服務介紹' },
  purchase_intro_p1: { ko: '한국의 다양한 온라인 쇼핑몰에서 원하시는 상품을 대신 구매해드립니다. 한국 화장품, 패션, 식품, 전자제품 등 다양한 카테고리의 상품을 안전하고 빠르게 구매할 수 있습니다.', zh: '我們代為從韓國各大網購平台購買您想要的商品。韓國化妝品、時裝、食品、電子產品等各類商品，安全快速地為您採購。' },
  purchase_intro_p2: { ko: '전문 스태프가 상품 검수부터 포장, 배송까지 모든 과정을 책임지고 처리합니다.', zh: '專業團隊從商品檢驗、包裝到配送，全程負責處理。' },
  purchase_features_title: { ko: '서비스 특징', zh: '服務特點' },
  purchase_f1: { ko: '한국 전 쇼핑몰 구매 가능 (쿠팡, 네이버, 11번가, Gmarket 등)', zh: '可從韓國所有購物平台購買（Coupang、Naver、11街、Gmarket等）' },
  purchase_f2: { ko: '상품 검수 후 사진 촬영 및 LINE으로 확인', zh: '商品檢驗後拍照並透過LINE確認' },
  purchase_f3: { ko: '안전한 포장 및 빠른 배송', zh: '安全包裝及快速配送' },
  purchase_f4: { ko: '투명한 요금 체계', zh: '透明的費用體系' },
  purchase_f5: { ko: 'LINE 실시간 상담 가능', zh: 'LINE即時諮詢服務' },
  purchase_process_title: { ko: '이용 절차', zh: '使用流程' },
  purchase_pricing_title: { ko: '요금 안내', zh: '費用說明' },
  purchase_pricing_col1: { ko: '상품 가격 (KRW)', zh: '商品價格 (KRW)' },
  purchase_pricing_col2: { ko: '서비스 수수료', zh: '服務費' },
  purchase_faq_title: { ko: '자주 묻는 질문', zh: '常見問題' },
  purchase_faq1_q: { ko: '어떤 상품을 구매할 수 있나요?', zh: '可以購買哪些商品？' },
  purchase_faq1_a: { ko: '한국 온라인 쇼핑몰에서 판매하는 대부분의 상품을 구매할 수 있습니다. 단, 위험물, 금지 품목은 제외됩니다.', zh: '韓國網購平台上銷售的大部分商品都可以購買。但危險品、禁止品項除外。' },
  purchase_faq2_q: { ko: '배송은 얼마나 걸리나요?', zh: '配送需要多長時間？' },
  purchase_faq2_a: { ko: '한국 내 배송 1~2일, 한국→대만 국제배송 4~8일 정도 소요됩니다.', zh: '韓國境內配送1~2天，韓國→台灣國際配送約4~8天。' },
  purchase_faq3_q: { ko: '결제 방법은 어떻게 되나요?', zh: '付款方式有哪些？' },
  purchase_faq3_a: { ko: '은행 이체, LINE Pay 등 다양한 방법으로 결제 가능합니다.', zh: '可透過銀行轉帳、LINE Pay等多種方式付款。' },
  bottom_contact: { ko: '1:1 문의하기', zh: '1:1 線上諮詢' },

  // ---- Shipping Page ----
  shipping_hero_title: { ko: '배송대행 서비스', zh: '配送代購服務' },
  shipping_hero_sub: { ko: '한국에서 대만까지 안전하고 빠른 배송', zh: '韓國到台灣安全快速的配送服務' },
  shipping_intro_title: { ko: '서비스 소개', zh: '服務介紹' },
  shipping_intro_p1: { ko: '한국에서 직접 구매하신 상품을 대만까지 안전하게 배송해드리는 서비스입니다. 한국 창고에 상품을 보내시면, 검수 후 대만으로 발송합니다.', zh: '將您在韓國購買的商品安全配送到台灣的服務。將商品寄到韓國倉庫後，檢驗後發往台灣。' },
  shipping_intro_p2: { ko: 'EMS, 항공 화물 등 다양한 배송 옵션을 제공합니다.', zh: '提供EMS、空運等多種配送選項。' },
  shipping_features_title: { ko: '서비스 특징', zh: '服務特點' },
  shipping_f1: { ko: '한국 내 무료 수거 서비스 (서울 지역)', zh: '韓國境內免費收件服務（首爾地區）' },
  shipping_f2: { ko: '상품 검수 및 재포장 서비스', zh: '商品檢驗及重新包裝服務' },
  shipping_f3: { ko: '합포장으로 배송비 절약', zh: '合併包裝節省運費' },
  shipping_f4: { ko: '실시간 배송 추적 가능', zh: '即時配送追蹤' },
  shipping_f5: { ko: '배송 보험 제공', zh: '提供配送保險' },
  shipping_pricing_title: { ko: '배송비 안내', zh: '運費說明' },
  shipping_pricing_col1: { ko: '무게 (kg)', zh: '重量 (kg)' },
  shipping_pricing_col2: { ko: 'EMS 요금 (TWD)', zh: 'EMS費用 (TWD)' },
  shipping_pricing_col3: { ko: '항공 화물 (TWD)', zh: '空運費用 (TWD)' },
  shipping_faq_title: { ko: '자주 묻는 질문', zh: '常見問題' },
  shipping_faq1_q: { ko: '한국 창고 주소는 어디인가요?', zh: '韓國倉庫地址在哪裡？' },
  shipping_faq1_a: { ko: '신청 후 한국 창고 주소를 LINE으로 안내해드립니다.', zh: '申請後會透過LINE提供韓國倉庫地址。' },
  shipping_faq2_q: { ko: '배송 중 파손되면 어떻게 되나요?', zh: '配送中商品損壞怎麼辦？' },
  shipping_faq2_a: { ko: '배송 보험에 가입된 상품은 보상 처리됩니다. 자세한 사항은 고객센터로 문의해주세요.', zh: '已投保的商品可獲得賠償。詳情請聯繫客服。' },

  // ---- Pickup Page ----
  pickup_hero_title: { ko: '픽업대행 서비스', zh: '提貨代購服務' },
  pickup_hero_sub: { ko: '한국 현지 픽업 및 물류 서비스', zh: '韓國當地提貨及物流服務' },
  pickup_intro_title: { ko: '서비스 소개', zh: '服務介紹' },
  pickup_intro_p1: { ko: '한국 현지에서 직접 상품을 픽업해야 하는 경우 대신 처리해드리는 서비스입니다. 매장 픽업, 도매시장 방문, 전시회 물품 수거 등 다양한 물류 요구에 대응합니다.', zh: '代為處理需要在韓國當地提貨的服務。賣場提貨、批發市場採購、展覽物品收集等各種物流需求。' },
  pickup_features_title: { ko: '서비스 특징', zh: '服務特點' },
  pickup_f1: { ko: '서울/경기 지역 당일 픽업 가능', zh: '首爾/京畿道地區當日提貨' },
  pickup_f2: { ko: '도매시장 방문 구매 대행', zh: '批發市場代購服務' },
  pickup_f3: { ko: '전시회/행사 물품 수거', zh: '展覽/活動物品收集' },
  pickup_f4: { ko: '픽업 후 검수 및 사진 전송', zh: '提貨後檢驗並傳送照片' },
  pickup_faq_title: { ko: '자주 묻는 질문', zh: '常見問題' },
  pickup_faq1_q: { ko: '픽업 가능 지역은 어디인가요?', zh: '提貨服務範圍在哪裡？' },
  pickup_faq1_a: { ko: '서울, 경기 지역은 기본이며 다른 지역은 별도 문의 부탁드립니다.', zh: '首爾、京畿道為基本範圍，其他地區請另行諮詢。' },

  // ---- Trade Page ----
  trade_hero_title: { ko: '무역대행 서비스', zh: '貿易代購服務' },
  trade_hero_sub: { ko: 'B2B 전문 무역 및 대량 구매 지원', zh: 'B2B專業貿易及大量採購支援' },
  trade_intro_title: { ko: '서비스 소개', zh: '服務介紹' },
  trade_intro_p1: { ko: '기업 고객을 위한 전문 무역대행 서비스입니다. 한국 제조사와의 직접 거래, 대량 구매, 수출입 서류 처리 등 무역 전반에 걸친 서비스를 제공합니다.', zh: '為企業客戶提供專業貿易代行服務。韓國製造商直接交易、大量採購、進出口文件處理等全方位貿易服務。' },
  trade_features_title: { ko: '서비스 특징', zh: '服務特點' },
  trade_f1: { ko: '한국 제조사/공급사 직접 연결', zh: '直接連結韓國製造商/供應商' },
  trade_f2: { ko: '대량 구매 할인 협상', zh: '大量採購折扣談判' },
  trade_f3: { ko: '수출입 서류 대행', zh: '進出口文件代辦' },
  trade_f4: { ko: 'OEM/ODM 지원', zh: 'OEM/ODM支援' },
  trade_faq_title: { ko: '자주 묻는 질문', zh: '常見問題' },
  trade_faq1_q: { ko: '최소 주문 수량이 있나요?', zh: '有最低訂購量嗎？' },
  trade_faq1_a: { ko: '제품에 따라 다르며, 자세한 사항은 상담을 통해 안내해드립니다.', zh: '依產品而異，詳情請透過諮詢了解。' },

  // ---- Board Page ----
  board_title: { ko: '게시판', zh: '討論區' },
  board_announcements: { ko: '공지사항', zh: '公告事項' },
  board_faq: { ko: '자주 묻는 질문', zh: '常見問題' },
  board_reviews: { ko: '고객 후기', zh: '客戶評價' },

  // ---- Tracking Page ----
  tracking_title: { ko: '배송 조회', zh: '配送查詢' },
  tracking_subtitle: { ko: '운송장 번호를 입력하여 배송 상태를 확인하세요', zh: '輸入追蹤號碼查詢配送狀態' },
  tracking_placeholder: { ko: '운송장 번호 입력', zh: '輸入追蹤號碼' },
  tracking_btn: { ko: '조회', zh: '查詢' },
  tracking_carriers: { ko: '택배사 바로가기', zh: '快遞公司連結' },
  tracking_korea_post: { ko: '한국우체국', zh: '韓國郵政' },

  // ---- Advantages Section ----
  advantages_title: { ko: '우리를 선택하는 이유', zh: '為什麼選擇我們' },
  adv1_title: { ko: '한국 현지 법인 운영', zh: '韓國現地法人運營' },
  adv1_desc: { ko: '개인 대행이 아닌, 한국 현지 법인이 직접 운영하여 더욱 안심', zh: '非個人代購，韓國當地公司直營，更有保障' },
  adv2_title: { ko: '투명한 견적・숨겨진 비용 없음', zh: '透明報價・無隱藏費用' },
  adv2_desc: { ko: '상품 가격＋국제 운임＋서비스 수수료, 한눈에 확인', zh: '商品價格＋國際運費＋服務費，一目了然' },
  adv3_title: { ko: '다양한 서비스 원스톱 제공', zh: '多元服務一站搞定' },
  adv3_desc: { ko: '구매대행, 배송대행, 픽업대행, 무역대행 등 모든 요구에 대응', zh: '代購、集運、現地提貨、批發，各種需求全面對應' },
  adv4_title: { ko: 'LINE 실시간 고객센터', zh: 'LINE即時客服' },
  adv4_desc: { ko: '한국어/중국어 실시간 상담, 소통에 문제 없습니다', zh: '中文客服即時回覆，溝通無障礙' },
  adv5_title: { ko: '출고 전 검수 사진 제공', zh: '到貨前拍照確認' },
  adv5_desc: { ko: '모든 상품을 한국 창고에서 검수 촬영 후 확인 후 발송', zh: '所有商品在韓國倉庫檢驗拍照，確認後再出貨' },
  adv6_title: { ko: '장기 협력 지원', zh: '長期合作支援' },
  adv6_desc: { ko: '개인 및 기업 고객 모두 장기 거래 가능, 대량 주문 할인', zh: '個人及企業客戶皆可長期配合，量大另有優惠' },

  // ---- Business Area ----
  business_title: { ko: '사업영역', zh: '業務範圍' },
  biz1_title: { ko: '구매대행', zh: '商品代購' },
  biz1_desc: { ko: '한국 쇼핑몰 상품 대리 구매 - 화장품, 의류, 식품 등', zh: '韓國網站商品代為購買，包括化妝品、服飾、食品等' },
  biz2_title: { ko: '배송대행', zh: '集運服務' },
  biz2_desc: { ko: '한국 창고 입고 후 대만까지 국제 배송 대행', zh: '韓國倉庫收貨後安排國際配送至台灣' },
  biz3_title: { ko: '픽업대행', zh: '現地提貨' },
  biz3_desc: { ko: '한국 현지 시장, 매장 픽업 서비스', zh: '韓國當地市場、實體店面提貨服務' },
  biz4_title: { ko: '무역대행', zh: '批發專區' },
  biz4_desc: { ko: '동대문 도매, 대량 구매 전문 지원', zh: '東大門批發、大量採購專業支援' },

  // ---- Useful Links ----
  useful_links_title: { ko: '도움이 되는 사이트', zh: '相關網站連結' },
  link_customs: { ko: '대만 세관', zh: '台灣關稅總局' },
  link_exchange: { ko: '환율 조회', zh: '匯率查詢' },
  link_tariff: { ko: '관세율 조회', zh: '關稅稅率查詢' },
  link_trade_bureau: { ko: '경제부 국제무역서', zh: '經濟部國際貿易署' },
  link_bsmi: { ko: '표준검사국', zh: '標準檢驗局' },
  link_customs_admin: { ko: '재정부 관무서', zh: '財政部關務署' },

  // ---- Service Visual Captions ----
  purchase_visual_caption: { ko: '한국 상품 구매대행 절차', zh: '韓國商品代購流程示意' },
  shipping_visual_caption: { ko: '한국→대만 배송 과정', zh: '韓國至台灣配送流程' },
  pickup_visual_caption: { ko: '한국 현지 픽업 서비스', zh: '韓國現地提貨服務' },
  trade_visual_caption: { ko: 'B2B 무역대행 서비스', zh: 'B2B貿易代購服務' },

  // ---- Tracking Page ----
  tracking_intl: { ko: '국제 배송', zh: '國際運送' },
  tracking_tw: { ko: '대만 현지 택배', zh: '台灣本地配送' },
  tracking_chunghwa: { ko: '중화우정', zh: '中華郵政' },
  tracking_blackcat: { ko: '흑묘택급편', zh: '黑貓宅急便' },
  tracking_hsinchu: { ko: '신주물류', zh: '新竹物流' },
  tracking_kerry: { ko: '가리대영', zh: '嘉里大榮' },
  tracking_family: { ko: '전가편의점', zh: '全家便利商店' },
};

// Initialize language
let currentLang = localStorage.getItem('site-language') || 'ko';

// Apply language to all elements with data-lang-key
function applyLanguage() {
  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if (LANG_DATA[key] && LANG_DATA[key][currentLang]) {
      // Check if it's an input placeholder
      if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
        el.placeholder = LANG_DATA[key][currentLang];
      } else if (LANG_DATA[key][currentLang].includes('<')) {
        el.innerHTML = LANG_DATA[key][currentLang];
      } else {
        el.textContent = LANG_DATA[key][currentLang];
      }
    }
  });

  // Update placeholder attributes separately
  document.querySelectorAll('[data-lang-placeholder]').forEach(el => {
    const key = el.getAttribute('data-lang-placeholder');
    if (LANG_DATA[key] && LANG_DATA[key][currentLang]) {
      el.placeholder = LANG_DATA[key][currentLang];
    }
  });

  // Update lang toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
  });

  // Update HTML lang attribute
  document.documentElement.lang = currentLang === 'ko' ? 'ko' : 'zh-TW';
}

// Switch language
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('site-language', lang);
  applyLanguage();
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function () {
  applyLanguage();

  // Bind toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      switchLanguage(this.getAttribute('data-lang'));
    });
  });
});
