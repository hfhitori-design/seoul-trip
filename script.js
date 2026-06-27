// ===== 首尔 Solo Trip · 电子手账 =====
// DATA_VERSION = 3

const DATA_VERSION = 3;

// ===== 默认行程数据 =====
const DEFAULT_DATA = {
  version: DATA_VERSION,
  settings: { totalBudget: 0, rmbRate: 185 },
  checklist: [
    { id: 'cl_1', text: '护照 + 签证', category: '证件', done: false },
    { id: 'cl_2', text: '机票确认单', category: '证件', done: false },
    { id: 'cl_3', text: 'T-money 交通卡', category: '出行', done: false },
    { id: 'cl_4', text: '换汇（建议 ₩30-50万现金）', category: '出行', done: false },
    { id: 'cl_5', text: '打印住宿确认单', category: '证件', done: false },
    { id: 'cl_6', text: '下载 Naver Map / Kakao T / Papago', category: '出行', done: false },
    { id: 'cl_7', text: 'TWICE 演唱会门票截图', category: '证件', done: false },
    { id: 'cl_8', text: '常用药品（创可贴、肠胃药）', category: '物品', done: false },
    { id: 'cl_9', text: '转换插头（韩国 C/F 型）', category: '物品', done: false },
    { id: 'cl_10',text: '存紧急电话 + 使馆电话', category: '出行', done: false }
  ],
  days: [
    {
      title: 'Day 1 · 延禧洞 → 延南洞',
      date: '7/9 周四',
      weather: 'sunny',
      rainNote: '',
      checkedIn: false,
      journal: '',
      items: [
        { time: '10:00', place: 'default value 精品咖啡店', traffic: '地铁2号线弘大入口站 → 步行', note: '自烘豆虹吸咖啡，延禧洞逛吃起点', placeId: 'loc_008', tags: ['咖啡','精品咖啡'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '12:30', place: '연희보리밥', traffic: '步行5分钟', note: '大麦饭定食，一人友好', placeId: 'loc_012', tags: ['一人友好'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '14:00', place: '연희국화빵', traffic: '步行3分钟', note: '多口味鲫鱼饼，延禧洞标志小吃', placeId: 'loc_014', tags: ['必打卡'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '14:30', place: '하루한알', traffic: '步行', note: '蛋挞甜品小店，顺手带一个', placeId: 'loc_010', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '15:30', place: 'All Write 延禧', traffic: '步行', note: '文创手帐店，注意营业时间', placeId: 'loc_011', tags: ['文创'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '17:00', place: '延南洞街区', traffic: '延禧洞穿通道直达', note: '文艺杂货铺、咖啡逛吃', placeId: 'loc_034', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '19:00', place: '주재 清吧', traffic: '延南洞步行', note: '🐶 店里有黄狗！吧台座位，可点现做餐食，酒品建议详询老板', placeId: 'loc_005', tags: ['清吧','一人友好'], checked: false, travelTime: '', alternatives: ['loc_006'], imageIds: [], expenses: [] }
      ],
      expenses: []
    },
    {
      title: 'Day 2 · 弘大 → 望远洞',
      date: '7/10 周五',
      weather: 'sunny',
      rainNote: '',
      checkedIn: false, journal: '',
      items: [
        { time: '12:00', place: '弘大商圈', traffic: '地铁2号线弘大入口站', note: '年轻潮流聚集地，街头表演、小店逛吃', placeId: 'loc_036', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '14:00', place: '마가렛 咖啡店', traffic: '弘大步行', note: '咖啡+特色风味刨冰', placeId: 'loc_007', tags: ['咖啡'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '17:30', place: '우이락 韩式酒馆', traffic: '弘大步行', note: '炸辣椒+牛肠鸡肉锅+苹果奶油米酒，强推', placeId: 'loc_020', tags: ['必打卡','一人友好'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '19:30', place: '도쿄빙수 日式刨冰', traffic: '步行至望远洞', note: '日式风格刨冰，饭后甜品', placeId: 'loc_021', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '21:00', place: '弘大夜生活散步', traffic: '步行', note: '感受弘大夜晚氛围，轻松回民宿', placeId: '', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] }
      ],
      expenses: []
    },
    {
      title: 'Day 3 · 解放村 → 梨泰院',
      date: '7/11 周六',
      weather: 'sunny',
      rainNote: '',
      checkedIn: false, journal: '',
      items: [
        { time: '11:00', place: '신흥교회앞', traffic: '地铁 → 龙山02路公交', note: '下车有胶片店和书店，深度游起点', placeId: '', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '12:30', place: '五岔路口 (해방촌오거리)', traffic: '步行', note: '解放村核心区域，网红餐饮聚集', placeId: '', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '15:00', place: 'cliff 咖啡店', traffic: '步行爬坡', note: '山坡高处，观赏绝美日落！看完可公交离开', placeId: 'loc_002', tags: ['日落','景观'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '18:30', place: 'KKI 清吧', traffic: '下山至梨泰院方向', note: '歌单品味出色，性冷淡克制风装修，酒品易饮', placeId: 'loc_001', tags: ['清吧','一人友好'], checked: false, travelTime: '', alternatives: ['loc_004'], imageIds: [], expenses: [] },
        { time: '20:00', place: '梨泰院街区', traffic: '步行', note: '异域风情夜逛，餐饮酒吧密集', placeId: 'loc_032', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] }
      ],
      expenses: []
    },
    {
      title: 'Day 4 · TWICE 演唱会日',
      date: '7/12 周日',
      weather: 'sunny',
      rainNote: '',
      checkedIn: false, journal: '',
      items: [
        { time: '11:00', place: '首尔林', traffic: '地铁至首尔林站', note: '城市公园散步，轻松上午', placeId: 'loc_049', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '13:30', place: 'Sound Planet LP酒吧', traffic: '首尔林步行', note: 'LP黑胶jazz funk，柠檬巧克力调酒口碑极佳，炸薯条好吃', placeId: 'loc_030', tags: ['清吧','黑胶'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '16:00', place: '出发去KSPO Dome', traffic: '地铁至奥林匹克公园站', note: '提前出发，预留到场和排队时间', placeId: 'loc_051', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '18:00', place: 'TWICE 演唱会 🎤', traffic: 'KSPO Dome (올림픽공원)', note: '享受演唱会！结束后地铁回民宿', placeId: '', tags: ['必打卡'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] }
      ],
      expenses: []
    },
    {
      title: 'Day 5 · 景福宫 → 西村 → 北村',
      date: '7/13 周一',
      weather: 'sunny',
      rainNote: '',
      checkedIn: false, journal: '',
      items: [
        { time: '10:00', place: '景福宫 / 光化门', traffic: '地铁3号线景福宫站', note: '朝鲜王朝宫殿，可租韩服游览（穿韩服免门票）', placeId: 'loc_046', tags: ['必打卡','韩服'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '12:30', place: '사라브 서촌', traffic: '步行至西村', note: '单人份餐食，一人食用分量刚好', placeId: 'loc_024', tags: ['一人友好'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '14:00', place: '西村 + 北村韩屋村', traffic: '步行', note: '传统韩屋与文艺小店，咖啡餐饮文创密集', placeId: 'loc_038', tags: ['韩屋','适合拍照'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '17:00', place: '仁寺洞 + 益善洞', traffic: '步行/短途公交', note: '传统工艺品+韩屋改造网红商圈', placeId: 'loc_043', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '19:00', place: '서피동파 韩式酒馆', traffic: '大学路方向', note: '四色饼（泡菜/葱/海鲜）+冻水果米酒，泡菜汤口碑好', placeId: 'loc_023', tags: ['必打卡','一人友好'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] }
      ],
      expenses: []
    },
    {
      title: 'Day 6 · 乙支路 → 明洞 → 清溪川',
      date: '7/14 周二',
      weather: 'sunny',
      rainNote: '',
      checkedIn: false, journal: '',
      items: [
        { time: '11:00', place: '乙支路商圈', traffic: '地铁2号线乙支路站', note: '老工业区改造，新旧碰撞感强，餐饮咖啡酒吧丰富', placeId: 'loc_039', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '13:00', place: '明洞', traffic: '步行10分钟', note: '核心商业步行街，美妆服饰连锁餐饮', placeId: 'loc_042', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '16:00', place: '清溪川', traffic: '步行', note: '城市溪流贯穿市中心，散步休憩好去处', placeId: 'loc_045', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '18:00', place: '南大门市场', traffic: '步行', note: '传统市场烟火气，平价美食晚餐', placeId: 'loc_041', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '20:00', place: 'Daiso 大创扫货', traffic: '就近门店', note: 'A4纸、线圈笔记本、手机挂绳、香膏…回国伴手礼', placeId: 'loc_050', tags: ['购物'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] }
      ],
      expenses: []
    },
    {
      title: 'Day 7 · 江南 → 狎鸥亭',
      date: '7/15 周三',
      weather: 'sunny',
      rainNote: '',
      checkedIn: false, journal: '',
      items: [
        { time: '12:00', place: '狎鸥亭商圈', traffic: '地铁盆唐线狎鸥亭罗德奥站', note: '高端逛街，买手店、品牌旗舰店', placeId: 'loc_048', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '14:00', place: '전포어관 蚕室店', traffic: '地铁至蚕室站', note: '汤+饼+炸物组合，별빛청하葡萄酒推荐，米酒不错', placeId: 'loc_028', tags: ['一人友好'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '17:00', place: '自由时间', traffic: '', note: '补漏想去没去的地方，或回民宿休息整理', placeId: '', tags: [], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] },
        { time: '19:30', place: 'ZSET 清吧', traffic: '地铁至狎鸥亭/江南', note: '🏆 Asia Top 50！全自制食材，金汤力清爽美妙，需开门排队', placeId: 'loc_026', tags: ['清吧','必打卡','高端'], checked: false, travelTime: '', alternatives: [], imageIds: [], expenses: [] }
      ],
      expenses: []
    }
  ]
};

// ===== 韩语短语（按场景分组）=====
const KOREAN_GROUPS = [
  {
    title: '🍽️ 餐厅点单',
    phrases: [
      { kr: '이거 주세요',       roman: 'i-geo ju-se-yo',        zh: '我要这个（指菜单）' },
      { kr: '여기서 먹을게요',   roman: 'yeo-gi-seo meo-geul-ge-yo', zh: '在这吃（堂食）' },
      { kr: '포장해 주세요',     roman: 'po-jang-hae ju-se-yo',  zh: '请打包' },
      { kr: '물 주세요',         roman: 'mul ju-se-yo',          zh: '请给我水' },
      { kr: '맥주 한 병 주세요', roman: 'maek-ju han byeong ju-se-yo', zh: '一瓶啤酒' },
      { kr: '소주 한 병 주세요', roman: 'so-ju han byeong ju-se-yo', zh: '一瓶烧酒' },
      { kr: '매워요?',           roman: 'mae-wo-yo?',            zh: '辣吗？' },
      { kr: '덜 맵게 해 주세요', roman: 'deol maep-ge hae ju-se-yo', zh: '请做微辣' },
      { kr: '맛있어요!',         roman: 'ma-si-sseo-yo!',        zh: '很好吃！' }
    ]
  },
  {
    title: '💳 结账支付',
    phrases: [
      { kr: '계산서 주세요',     roman: 'gye-san-seo ju-se-yo',  zh: '请给我账单' },
      { kr: '얼마예요?',         roman: 'eol-ma-ye-yo?',         zh: '多少钱？' },
      { kr: '카드 돼요?',        roman: 'ka-deu dwae-yo?',       zh: '可以刷卡吗？' },
      { kr: '현금만 돼요?',      roman: 'hyeon-geum-man dwae-yo?', zh: '只收现金吗？' },
      { kr: '따로 계산할게요',   roman: 'tta-ro gye-san-hal-ge-yo', zh: '分开付账' },
      { kr: '깎아 주세요',       roman: 'kka-kka ju-se-yo',      zh: '便宜一点吧' },
      { kr: '영수증 주세요',     roman: 'yeong-su-jeung ju-se-yo', zh: '请给我收据' },
      { kr: '택스 리펀드 해 주세요', roman: 'taek-seu ri-peon-deu hae ju-se-yo', zh: '请帮我退税' }
    ]
  },
  {
    title: '🚶 出行问路',
    phrases: [
      { kr: '…에 어떻게 가요?',  roman: '…e eo-tteo-ke ga-yo?',  zh: '…怎么去？' },
      { kr: '여기 멈춰 주세요',  roman: 'yeo-gi meom-chwo ju-se-yo', zh: '请在这里停（打车）' },
      { kr: '화장실 어디예요?',  roman: 'hwa-jang-sil eo-di-ye-yo?', zh: '洗手间在哪？' }
    ]
  },
  {
    title: '🗣️ 基础交流',
    phrases: [
      { kr: '혼자예요',          roman: 'hon-ja-ye-yo',          zh: '我是一个人' },
      { kr: '한국말 잘 못해요',  roman: 'han-gung-mal jal mot-hae-yo', zh: '我韩语不太好' },
      { kr: '영어 할 수 있어요?', roman: 'yeong-eo hal su i-sseo-yo?', zh: '会说英语吗？' },
      { kr: '사진 찍어 주세요',  roman: 'sa-jin jji-geo ju-se-yo', zh: '请帮我拍张照' }
    ]
  },
  {
    title: '🙏 礼貌用语',
    phrases: [
      { kr: '감사합니다',        roman: 'gam-sa-ham-ni-da',      zh: '谢谢' },
      { kr: '죄송합니다',        roman: 'joe-song-ham-ni-da',    zh: '对不起 / 借过' },
      { kr: '괜찮아요',          roman: 'gwaen-cha-na-yo',       zh: '没关系 / 不用了' },
      { kr: '잠시만요',          roman: 'jam-si-man-yo',         zh: '等一下 / 稍等' },
      { kr: '주세요',            roman: 'ju-se-yo',              zh: '请给我…（万能词）' }
    ]
  }
];

// ===== IndexedDB 图片存储 =====
const DB_NAME = 'seoul-trip-images';
const DB_VERSION = 2;
const STORE_NAME = 'images';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };
    req.onsuccess = (e) => resolve(e.target.result);
    req.onerror = (e) => reject(e.target.error);
  });
}

function generateImageId() {
  return 'img_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
}

async function saveImage(blob, place) {
  const db = await openDB();
  const id = generateImageId();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.add({ id, data: blob, place, addedAt: Date.now() });
    tx.oncomplete = () => resolve(id);
    tx.onerror = (e) => reject(e.target.error);
  });
}

async function loadImage(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = (e) => reject(e.target.error);
  });
}

async function deleteImage(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = (e) => reject(e.target.error);
  });
}

// ===== 地点库 =====
let locationPool = [];

async function loadLocationPool() {
  try {
    const resp = await fetch('location-pool.json');
    if (resp.ok) {
      locationPool = await resp.json();
      // 缓存到 localStorage 供离线使用
      localStorage.setItem('seoul-location-pool', JSON.stringify(locationPool));
      return;
    }
  } catch (e) { /* 离线回退 */ }
  // 离线：从 localStorage 读取
  try {
    const cached = localStorage.getItem('seoul-location-pool');
    if (cached) { locationPool = JSON.parse(cached); return; }
  } catch (e) { /* ignore */ }
  locationPool = [];
}

function getLocById(id) {
  return locationPool.find(l => l.id === id) || null;
}

// ===== 状态 =====
let tripData = loadData();
let editMode = false;
let editDayIdx = null;
let editItemIdx = null;

// ===== localStorage 读写 =====
function loadData() {
  try {
    const raw = localStorage.getItem('seoul-trip');
    if (raw) {
      const data = JSON.parse(raw);
      if (!data.version || data.version < DATA_VERSION) {
        const migrated = migrateToV3(data);
        return migrated;
      }
      ensureV3Fields(data);
      return data;
    }
  } catch (e) { /* 数据损坏则用默认 */ }
  return JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function migrateToV3(oldData) {
  const fresh = JSON.parse(JSON.stringify(DEFAULT_DATA));
  if (!oldData.days) return fresh;
  // 保留旧行程数据，补充新字段
  fresh.days = oldData.days.map((oldDay, di) => {
    const template = fresh.days[di] || fresh.days[0];
    return {
      title: oldDay.title || template.title,
      date: oldDay.date || '',
      weather: oldDay.weather || 'sunny',
      rainNote: oldDay.rainNote || '',
      checkedIn: oldDay.checkedIn || false,
      journal: oldDay.journal || '',
      items: (oldDay.items || []).map(oldItem => ({
        time: oldItem.time || '',
        place: oldItem.place || '',
        traffic: oldItem.traffic || '',
        note: oldItem.note || '',
        placeId: oldItem.placeId || '',
        tags: oldItem.tags || [],
        checked: oldItem.checked || false,
        travelTime: oldItem.travelTime || '',
        alternatives: oldItem.alternatives || [],
        imageIds: oldItem.imageIds || [],
        expenses: oldItem.expenses || []
      })),
      expenses: oldDay.expenses || []
    };
  });
  // 保留旧 settings/checklist 如果有的话
  fresh.settings = oldData.settings || fresh.settings;
  fresh.checklist = oldData.checklist || fresh.checklist;
  fresh.version = DATA_VERSION;
  localStorage.setItem('seoul-trip', JSON.stringify(fresh));
  return fresh;
}

function ensureV3Fields(data) {
  data.settings = data.settings || { totalBudget: 0, rmbRate: 185, hardExpenses: [] };
  if (!data.settings.hardExpenses) data.settings.hardExpenses = [];
  data.checklist = data.checklist || DEFAULT_DATA.checklist;
  (data.days || []).forEach(day => {
    day.weather = day.weather || 'sunny';
    day.rainNote = day.rainNote || '';
    day.checkedIn = day.checkedIn || false;
    day.journal = day.journal || '';
    day.date = day.date || '';
    if (!Array.isArray(day.expenses)) day.expenses = [];
    (day.items || []).forEach(item => {
      item.placeId = item.placeId || '';
      item.tags = item.tags || [];
      item.checked = item.checked || false;
      item.travelTime = item.travelTime || '';
      item.alternatives = item.alternatives || [];
      if (!Array.isArray(item.expenses)) item.expenses = [];
      if (!Array.isArray(item.imageIds)) item.imageIds = [];
    });
  });
}

function saveData() {
  tripData.version = DATA_VERSION;
  localStorage.setItem('seoul-trip', JSON.stringify(tripData));
  render();
}

function resetData() {
  if (confirm('确定要重置所有行程数据吗？已编辑的内容将丢失。')) {
    tripData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    tripData.version = DATA_VERSION;
    localStorage.removeItem('seoul-trip');
    render();
  }
}

// ===== 渲染总入口 =====
function render() {
  // 记住当前展开的 Day 卡片
  const expandedDays = new Set();
  document.querySelectorAll('.day-content.active').forEach((el, i) => {
    expandedDays.add(i);
  });

  renderDays();
  renderBudgetBar();
  renderCheckinStats();
  renderChecklist();
  renderLocationPool();
  renderExpenseSummary();
  renderPhrases();
  renderWeatherWidget(getCachedWeather());

  // 恢复展开状态
  if (!editMode) {
    document.querySelectorAll('.day-content').forEach((el, i) => {
      if (expandedDays.has(i)) el.classList.add('active');
    });
  }
}

// ===== 渲染行程卡片 =====
function renderDays() {
  const container = document.getElementById('days-container');
  container.innerHTML = '';

  tripData.days.forEach((day, di) => {
    const card = document.createElement('div');
    card.className = 'day-card';

    // 标题栏
    const titleBar = document.createElement('div');
    titleBar.className = 'day-title-bar';

    const titleEl = document.createElement('div');
    titleEl.className = 'day-title';
    titleEl.textContent = day.title;
    titleEl.addEventListener('click', () => {
      if (editMode) return;
      const content = card.querySelector('.day-content');
      content.classList.toggle('active');
    });

    titleBar.appendChild(titleEl);

    // 编辑模式：标题编辑 + 删除按钮
    if (editMode) {
      const dayActions = document.createElement('div');
      dayActions.className = 'day-actions';
      const editTitleBtn = document.createElement('button');
      editTitleBtn.className = 'btn-icon';
      editTitleBtn.textContent = '✏️';
      editTitleBtn.title = '编辑标题';
      editTitleBtn.addEventListener('click', (e) => { e.stopPropagation(); editDayTitle(di); });
      const delDayBtn = document.createElement('button');
      delDayBtn.className = 'btn-icon btn-danger';
      delDayBtn.textContent = '🗑️';
      delDayBtn.title = '删除这一天';
      delDayBtn.addEventListener('click', (e) => { e.stopPropagation(); deleteDay(di); });
      dayActions.appendChild(editTitleBtn);
      dayActions.appendChild(delDayBtn);
      titleBar.appendChild(dayActions);
    }

    card.appendChild(titleBar);

    // 行程内容
    const contentEl = document.createElement('div');
    contentEl.className = 'day-content';
    if (editMode) contentEl.classList.add('active');

    // 遍历 items
    day.items.forEach((item, ii) => {
      // 交通时间提示（前一个 item 有 travelTime）
      if (ii > 0 && item.travelTime) {
        const travelHint = document.createElement('div');
        travelHint.className = 'travel-time-hint';
        travelHint.textContent = item.travelTime;
        contentEl.appendChild(travelHint);
      }

      const itemEl = document.createElement('div');
      itemEl.className = 'item';

      // 打卡圆圈
      const checkBtn = document.createElement('button');
      checkBtn.className = 'checkin-circle' + (item.checked ? ' checked' : '');
      checkBtn.title = item.checked ? '已打卡' : '点击打卡';
      checkBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        item.checked = !item.checked;
        if (item.checked) {
          checkBtn.classList.add('checked');
          // 动画后更新
          setTimeout(() => saveData(), 250);
        } else {
          checkBtn.classList.remove('checked');
          saveData();
        }
      });

      // 左侧信息
      const leftEl = document.createElement('div');
      leftEl.className = 'item-left';

      const infoEl = document.createElement('div');
      infoEl.className = 'item-info';
      infoEl.innerHTML =
        '<div class="time">' + escapeHtml(item.time) + '</div>' +
        '<div class="place place-link' + (item.checked ? ' checked' : '') + '">' + escapeHtml(item.place) + '</div>' +
        (item.traffic ? '<div class="traffic">' + escapeHtml(item.traffic) + '</div>' : '') +
        (item.note ? '<div class="note">' + escapeHtml(item.note) + '</div>' : '');

      // 整行点击 → Naver Map
      infoEl.addEventListener('click', (e) => {
        // 不拦截标签、备选等内部元素的点击
        if (e.target.closest('.sticker-tag') || e.target.closest('.alternatives-row')) return;
        if (item.place) openNaverMap(item.place);
      });

      // 标签
      if (item.tags && item.tags.length > 0) {
        const tagsRow = document.createElement('div');
        tagsRow.className = 'tags-row';
        item.tags.forEach(t => {
          const tag = document.createElement('span');
          tag.className = 'sticker-tag';
          tag.textContent = t;
          tagsRow.appendChild(tag);
        });
        infoEl.appendChild(tagsRow);
      }

      // 备选
      if (item.alternatives && item.alternatives.length > 0) {
        const altRow = document.createElement('div');
        altRow.className = 'alternatives-row';
        const altNames = item.alternatives.map(id => {
          const loc = getLocById(id);
          return loc ? loc.name : id;
        }).join(' / ');
        altRow.textContent = '备选：' + altNames;
        infoEl.appendChild(altRow);
      }

      leftEl.appendChild(infoEl);

      // 花销
      const expensesEl = renderExpenses(item.expenses || [], di, ii, editMode, true);
      leftEl.appendChild(expensesEl);

      // 右侧：缩略图 + 操作按钮
      const rightEl = document.createElement('div');
      rightEl.className = 'item-right';
      const thumbRow = renderThumbnailRow(item, di, ii, editMode);
      rightEl.appendChild(thumbRow);

      // 操作按钮行
      const itemActions = document.createElement('div');
      itemActions.className = 'item-actions';

      // 💰 记录花销：始终显示
      const expenseBtn = document.createElement('button');
      expenseBtn.className = 'btn-icon btn-expense';
      expenseBtn.textContent = '💰';
      expenseBtn.title = '记录花销';
      expenseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showExpenseForm(di, ii, null, itemEl);
      });
      itemActions.appendChild(expenseBtn);

      if (editMode) {
        const imgBtn = document.createElement('button');
        imgBtn.className = 'btn-icon btn-img';
        imgBtn.textContent = '📷';
        imgBtn.title = '添加图片';
        imgBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          addImages(di, ii);
        });

        const editBtn = document.createElement('button');
        editBtn.className = 'btn-icon';
        editBtn.textContent = '✏️';
        editBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          openModal(di, ii);
        });

        const delBtn = document.createElement('button');
        delBtn.className = 'btn-icon btn-danger';
        delBtn.textContent = '🗑️';
        delBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          deleteItem(di, ii);
        });

        itemActions.appendChild(imgBtn);
        itemActions.appendChild(editBtn);
        itemActions.appendChild(delBtn);
      }

      rightEl.appendChild(itemActions);

      itemEl.appendChild(checkBtn);
      itemEl.appendChild(leftEl);
      itemEl.appendChild(rightEl);
      contentEl.appendChild(itemEl);
    });

    // 空状态
    if (day.items.length === 0 && !editMode) {
      const emptyEl = document.createElement('div');
      emptyEl.className = 'empty-hint';
      emptyEl.textContent = '暂无行程，点击右上角"编辑"添加';
      contentEl.appendChild(emptyEl);
    }

    // 编辑模式：添加行程按钮
    if (editMode) {
      const addBtn = document.createElement('button');
      addBtn.className = 'btn-add';
      addBtn.textContent = '+ 添加行程';
      addBtn.addEventListener('click', () => openModal(di, null));
      contentEl.appendChild(addBtn);
    }

    // 日级别花销
    const dayExpensesEl = renderExpenses(day.expenses || [], di, null, editMode, false);
    contentEl.appendChild(dayExpensesEl);

    // 记一笔零散花销：始终显示
    const dayExpBtn = document.createElement('button');
    dayExpBtn.className = 'btn-add btn-add-expense';
    dayExpBtn.textContent = '+ 记一笔零散花销';
    dayExpBtn.addEventListener('click', () => {
      showExpenseForm(di, null, null, dayExpensesEl);
    });
    contentEl.appendChild(dayExpBtn);

    // 今日合计
    const dayTotal = calcDayTotal(day);
    if (dayTotal > 0 || editMode) {
      const totalEl = document.createElement('div');
      totalEl.className = 'day-total';
      const rmb = tripData.settings.rmbRate ? Math.round(dayTotal / tripData.settings.rmbRate) : 0;
      totalEl.textContent = '今日合计 ' + formatKRW(dayTotal) + (rmb > 0 ? ' ≈ ¥' + rmb : '');
      contentEl.appendChild(totalEl);
    }

    card.appendChild(contentEl);
    container.appendChild(card);
  });

  // 编辑模式：添加新的一天
  if (editMode) {
    const addDayArea = document.createElement('div');
    addDayArea.className = 'add-day-area';
    const addDayBtn = document.createElement('button');
    addDayBtn.className = 'btn-add-day';
    addDayBtn.textContent = '+ 添加新的一天';
    addDayBtn.addEventListener('click', addNewDay);
    addDayArea.appendChild(addDayBtn);
    container.appendChild(addDayArea);
  }
}

// ===== 预算条 =====
function renderBudgetBar() {
  const row = document.getElementById('budget-row');
  const total = tripData.settings.totalBudget || 0;
  if (total <= 0) {
    row.style.display = 'none';
    return;
  }
  row.style.display = 'flex';
  const spent = calcTripTotal();
  const pct = Math.min(100, Math.round((spent / total) * 100));
  const over = spent > total;
  const rate = tripData.settings.rmbRate || 185;

  document.getElementById('budget-total-label').textContent = formatKRW(total);
  const bar = document.getElementById('budget-bar');
  bar.style.width = pct + '%';
  bar.className = 'budget-bar-fill' + (over ? ' over' : '');
  document.getElementById('budget-detail').textContent =
    '已花 ' + formatKRW(spent) + ' ≈ ¥' + Math.round(spent / rate) +
    (over ? ' 🔴 超支 ' + formatKRW(spent - total) : ' · 剩余 ' + formatKRW(total - spent));
}

// ===== 打卡统计 =====
function renderCheckinStats() {
  const row = document.getElementById('checkin-row');
  let total = 0, done = 0;
  tripData.days.forEach(d => d.items.forEach(i => { total++; if (i.checked) done++; }));
  if (total === 0) { row.style.display = 'none'; return; }
  row.style.display = 'flex';
  const pct = Math.round((done / total) * 100);
  document.getElementById('checkin-count').textContent = done + '/' + total + ' · ' + pct + '%';
}

// ===== 行前 Checklist =====
function renderChecklist() {
  const container = document.getElementById('checklist-content');
  const list = tripData.checklist || [];
  const done = list.filter(i => i.done).length;

  container.innerHTML = '<div class="cl-progress" style="font-size:13px;color:var(--success);font-family:var(--font-hand);margin-bottom:8px">已完成 ' + done + '/' + list.length + '</div>';
  list.forEach((item, idx) => {
    const row = document.createElement('div');
    row.className = 'checklist-item';

    const check = document.createElement('button');
    check.className = 'cl-check' + (item.done ? ' done' : '');
    check.addEventListener('click', () => {
      item.done = !item.done;
      check.classList.toggle('done', item.done);
      row.querySelector('.cl-text').classList.toggle('done', item.done);
      saveData();
    });

    const text = document.createElement('span');
    text.className = 'cl-text' + (item.done ? ' done' : '');
    text.textContent = item.text;

    const cat = document.createElement('span');
    cat.className = 'cl-cat';
    cat.textContent = item.category;

    row.appendChild(check);
    row.appendChild(text);
    row.appendChild(cat);
    container.appendChild(row);
  });
}

// ===== 地点备选库 =====
let poolFilterArea = '';
let poolFilterTag = '';

function renderLocationPool() {
  const listEl = document.getElementById('pool-list');
  const filtersEl = document.getElementById('pool-filters');
  const query = (document.getElementById('pool-search-input').value || '').toLowerCase();

  // 收集所有区域和标签
  const areas = [...new Set(locationPool.map(l => l.neighborhood).filter(Boolean))];
  const tags = [...new Set(locationPool.flatMap(l => l.tags || []))];

  // 渲染筛选标签
  filtersEl.innerHTML = '';
  areas.forEach(a => {
    const chip = document.createElement('button');
    chip.className = 'filter-chip' + (poolFilterArea === a ? ' active' : '');
    chip.textContent = a;
    chip.addEventListener('click', () => {
      poolFilterArea = poolFilterArea === a ? '' : a;
      renderLocationPool();
    });
    filtersEl.appendChild(chip);
  });

  // 筛选
  let filtered = locationPool;
  if (query) {
    filtered = filtered.filter(l =>
      l.name.toLowerCase().includes(query) ||
      (l.nameKo || '').toLowerCase().includes(query) ||
      l.area.includes(query) ||
      l.neighborhood.includes(query)
    );
  }
  if (poolFilterArea) {
    filtered = filtered.filter(l => l.neighborhood === poolFilterArea);
  }

  listEl.innerHTML = '';
  if (filtered.length === 0) {
    listEl.innerHTML = '<div class="empty-hint">没有匹配的地点</div>';
    return;
  }

  // 收集每个地点被添加到哪些 Day
  const placeDays = {}; // { placeId: [dayIndex, ...] }
  tripData.days.forEach((d, di) => d.items.forEach(i => {
    if (i.placeId) {
      if (!placeDays[i.placeId]) placeDays[i.placeId] = [];
      placeDays[i.placeId].push(di);
    }
  }));

  filtered.forEach(loc => {
    const addedDays = loc.id ? (placeDays[loc.id] || []) : [];
    const isAdded = addedDays.length > 0;
    const card = document.createElement('div');
    card.className = 'location-card' + (isAdded ? ' added' : '');

    // 已添加的 Day 标签
    const dayBadges = isAdded
      ? ' <span class="loc-added-badge">已添加 Day ' + addedDays.map(di => di + 1).join(', Day ') + '</span>'
      : '';

    // 卡片主体（点击跳转地图）
    const body = document.createElement('div');
    body.className = 'loc-body';
    body.innerHTML =
      '<div class="loc-name">' + escapeHtml(loc.name) +
        dayBadges +
        ' <span style="font-size:12px;color:var(--text-muted)">' + escapeHtml(loc.nameKo || '') + '</span></div>' +
      '<div class="loc-area">📍 ' + escapeHtml(loc.neighborhood) + ' · ' + escapeHtml(loc.category) + (loc.budget ? ' · ' + loc.budget : '') + '</div>' +
      (loc.note ? '<div class="loc-note">' + escapeHtml(loc.note) + '</div>' : '') +
      '<div class="loc-meta">' + (loc.tags || []).map(t => '<span class="sticker-tag">' + escapeHtml(t) + '</span>').join('') + '</div>';
    body.addEventListener('click', () => openNaverMap(loc.name));

    // + 按钮：加入行程（已添加的改为 ✓）
    const addBtn = document.createElement('button');
    addBtn.className = 'loc-add-btn' + (isAdded ? ' done' : '');
    addBtn.textContent = isAdded ? '✓' : '+';
    addBtn.title = isAdded ? '已加入 Day ' + addedDays.map(di => di + 1).join(', Day ') + '（仍可再次添加）' : '加入行程';
    addBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showDayPicker(loc);
    });

    card.appendChild(body);
    card.appendChild(addBtn);
    listEl.appendChild(card);
  });
}

// ===== 加入行程：选择 Day =====
function showDayPicker(loc) {
  // 移除已有选择器
  const old = document.querySelector('.day-picker-popup');
  if (old) old.remove();

  const popup = document.createElement('div');
  popup.className = 'day-picker-popup';

  const title = document.createElement('div');
  title.className = 'day-picker-title';
  title.textContent = '将「' + loc.name + '」加入：';

  const list = document.createElement('div');
  list.className = 'day-picker-list';

  tripData.days.forEach((day, di) => {
    const opt = document.createElement('button');
    opt.className = 'day-picker-opt';
    opt.textContent = day.title;
    opt.addEventListener('click', () => {
      day.items.push({
        time: '',
        place: loc.name,
        traffic: '',
        note: loc.note || '',
        placeId: loc.id,
        tags: loc.tags || [],
        checked: false,
        travelTime: '',
        alternatives: [],
        imageIds: [],
        expenses: []
      });
      popup.remove();
      showToast('已加入「' + day.title + '」');
      saveData();
    });
    list.appendChild(opt);
  });

  const cancel = document.createElement('button');
  cancel.className = 'day-picker-cancel';
  cancel.textContent = '取消';
  cancel.addEventListener('click', () => popup.remove());

  popup.appendChild(title);
  popup.appendChild(list);
  popup.appendChild(cancel);
  document.body.appendChild(popup);

  // 点击外部关闭
  setTimeout(() => {
    const closeHandler = function(e) {
      if (!popup.contains(e.target)) {
        popup.remove();
        document.removeEventListener('click', closeHandler);
      }
    };
    document.addEventListener('click', closeHandler);
  }, 10);
}

// ===== 随机抽选 =====
function randomPick() {
  const resultEl = document.getElementById('random-result');
  // 收集所有未打卡的地点
  const checkedPlaces = new Set();
  tripData.days.forEach(d => d.items.forEach(i => {
    if (i.checked) checkedPlaces.add(i.placeId);
  }));

  const candidates = locationPool.filter(l => l.id && !checkedPlaces.has(l.id));
  if (candidates.length === 0) {
    resultEl.style.display = 'block';
    resultEl.className = 'random-result empty';
    resultEl.innerHTML = '<span>🎉 所有地点都打卡过了！</span>';
    return;
  }

  // 随机动画
  resultEl.style.display = 'block';
  resultEl.className = 'random-result rolling';
  let count = 0;
  const maxCount = 12;
  const interval = setInterval(() => {
    const rand = candidates[Math.floor(Math.random() * candidates.length)];
    resultEl.innerHTML =
      '<span class="random-icon">🎰</span>' +
      '<span class="random-name">' + escapeHtml(rand.name) + '</span>' +
      '<span class="random-area">' + escapeHtml(rand.neighborhood) + '</span>';
    count++;
    if (count >= maxCount) {
      clearInterval(interval);
      // 最终选中
      const picked = candidates[Math.floor(Math.random() * candidates.length)];
      resultEl.className = 'random-result picked';
      resultEl.innerHTML =
        '<span class="random-icon">🎯</span>' +
        '<div>' +
          '<span class="random-name">' + escapeHtml(picked.name) + '</span>' +
          '<span class="random-area">📍 ' + escapeHtml(picked.neighborhood) + ' · ' + escapeHtml(picked.category) + '</span>' +
          (picked.note ? '<div class="random-note">' + escapeHtml(picked.note) + '</div>' : '') +
        '</div>' +
        '<button class="random-go-btn" onclick="window._openMap(\'' + escapeHtml(picked.name) + '\')">🧭 导航</button>';
    }
  }, 100);
}

// ===== 花销总结 =====
function renderExpenseSummary() {
  const container = document.getElementById('summary-content');
  const categories = {};
  let totalSpent = 0;
  const dailySpending = [];

  tripData.days.forEach((day, di) => {
    let daySum = 0;
    day.items.forEach(item => {
      (item.expenses || []).forEach(e => {
        const cat = e.category || '📌其他';
        categories[cat] = (categories[cat] || 0) + e.amount;
        totalSpent += e.amount;
        daySum += e.amount;
      });
    });
    (day.expenses || []).forEach(e => {
      const cat = e.category || '📌其他';
      categories[cat] = (categories[cat] || 0) + e.amount;
      totalSpent += e.amount;
      daySum += e.amount;
    });
    dailySpending.push({ title: 'Day' + (di + 1), amount: daySum });
  });

  const hardExpenses = tripData.settings.hardExpenses || [];
  const hardTotal = hardExpenses.reduce((s, e) => s + (e.amount || 0), 0);

  if (totalSpent === 0 && hardTotal === 0) {
    container.innerHTML = '<div class="empty-hint">还没有花销记录，在行程中点 💰 记一笔吧 ✍️</div>';
    return;
  }

  const rate = tripData.settings.rmbRate || 185;
  const grandTotal = totalSpent + hardTotal;
  const personCount = 4;

  // 硬性花销列表
  const hardListHTML = hardExpenses.map((e, ei) => {
    const isRMB = e.currency === 'RMB';
    const displayAmount = isRMB ? '¥' + Number(e.amount / rate).toLocaleString() : formatKRW(e.amount);
    const converted = isRMB ? formatKRW(e.amount) : '≈ ¥' + Math.round(e.amount / rate);
    return '<div class="hard-expense-row">' +
      '<span>' + escapeHtml(e.name) + '</span>' +
      '<span style="font-weight:500">' + displayAmount + '</span>' +
      '<span style="font-size:11px;color:var(--text-muted)">' + converted + '</span>' +
      '<button class="expense-del" onclick="deleteHardExpense(' + ei + ')">✕</button>' +
    '</div>';
  }).join('');

  // 饼图（仅当有花销时）
  let chartHTML = '';
  if (totalSpent > 0) {
    const pieColors = ['#4a6b7c','#5d7f91','#7193a5','#8aa7b8','#a8bec9','#c5d5de'];
    const catEntries = Object.entries(categories).sort((a,b) => b[1] - a[1]);
    const pieSegments = catEntries.map((e, i) => {
      const start = i === 0 ? 0 : catEntries.slice(0, i).reduce((s, c) => s + c[1] / totalSpent * 100, 0);
      const size = e[1] / totalSpent * 100;
      return pieColors[i % pieColors.length] + ' ' + start + '% ' + (start + size) + '%';
    }).join(', ');
    const pieStyle = pieSegments ? 'conic-gradient(' + pieSegments + ')' : '';
    const maxDay = Math.max(1, ...dailySpending.map(d => d.amount));
    chartHTML =
      '<div style="display:flex;align-items:center;gap:20px;justify-content:center;flex-wrap:wrap;margin-top:14px">' +
        '<div>' +
          '<div class="pie-chart" style="background:' + pieStyle + '"></div>' +
          '<div style="font-size:11px;color:var(--text-muted);text-align:center;margin-top:4px">分类占比</div>' +
          '<div style="font-size:11px;margin-top:4px">' +
            catEntries.map((e, i) =>
              '<span style="display:inline-flex;align-items:center;gap:4px;margin:2px 6px">' +
              '<span style="width:10px;height:10px;border-radius:2px;background:' + pieColors[i % pieColors.length] + ';display:inline-block"></span>' +
              escapeHtml(e[0]) + ' ' + formatKRW(e[1]) +
              '</span>'
            ).join('') +
          '</div>' +
        '</div>' +
        '<div>' +
          '<div class="bar-chart" style="width:200px">' +
            dailySpending.map(d => {
              const h = Math.round((d.amount / maxDay) * 100);
              return '<div class="bar-col"><div class="bar-fill" style="height:' + h + '%"></div><div class="bar-label">' + d.title + '</div></div>';
            }).join('') +
          '</div>' +
          '<div style="font-size:11px;color:var(--text-muted);text-align:center">每日花销</div>' +
        '</div>' +
      '</div>';
  }

  container.innerHTML =
    '<div class="summary-cards">' +
      '<div class="summary-card"><div class="val">' + formatKRW(grandTotal) + '</div><div class="lbl">总花销 ≈ ¥' + Math.round(grandTotal / rate) + '</div></div>' +
      '<div class="summary-card"><div class="val">' + formatKRW(Math.round(grandTotal / personCount)) + '</div><div class="lbl">人均花销（' + personCount + '人）</div></div>' +
    '</div>' +
    '<div class="hard-expenses">' +
      '<div class="hard-expenses-title">✈️ 行程前硬性花销</div>' +
      '<div class="hard-expenses-list">' + (hardListHTML || '<div style="font-size:12px;color:var(--text-muted)">暂无，点击下方添加</div>') + '</div>' +
      '<div style="display:flex;gap:6px;margin-top:8px">' +
        '<input id="hard-expense-name" type="text" placeholder="如 机票、酒店" class="add-loc-input" style="flex:1">' +
        '<input id="hard-expense-amount" type="number" placeholder="金额" class="add-loc-input" style="width:80px" inputmode="numeric">' +
        '<select id="hard-expense-currency" class="expense-select" style="width:56px">' +
          '<option value="KRW">₩</option>' +
          '<option value="RMB">¥</option>' +
        '</select>' +
        '<button id="btn-add-hard" class="btn-expense-save" style="flex-shrink:0">添加</button>' +
      '</div>' +
      (hardTotal > 0 ? '<div style="text-align:right;font-size:13px;margin-top:6px;color:var(--text-secondary)">硬性花销小计：<b>' + formatKRW(hardTotal) + '</b> ≈ ¥' + Math.round(hardTotal / rate) + '</div>' : '') +
    '</div>' + chartHTML;
}

// ===== 韩语短语 =====
function speakKorean(text) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ko-KR';
  u.rate = 0.85;
  speechSynthesis.speak(u);
}

function renderPhrases() {
  const container = document.getElementById('phrases-content');
  container.innerHTML = KOREAN_GROUPS.map((g, gi) =>
    '<div class="phrase-group">' +
      '<div class="phrase-group-title" onclick="this.classList.toggle(\'open\');this.nextElementSibling.classList.toggle(\'open\')">' +
        '<span class="phrase-arrow">▸</span> ' + g.title +
        '<span class="phrase-count">' + g.phrases.length + '条</span>' +
      '</div>' +
      '<div class="phrase-group-body">' +
        g.phrases.map(p =>
          '<div class="phrase-card">' +
            '<div style="flex:1;min-width:0">' +
              '<div class="kr">' + escapeHtml(p.kr) + '</div>' +
              '<div class="roman">' + escapeHtml(p.roman) + '</div>' +
            '</div>' +
            '<div class="zh">' + escapeHtml(p.zh) + '</div>' +
            '<button class="btn-speak" onclick="speakKorean(\'' + p.kr.replace(/'/g, "\\'") + '\')" title="播放发音">🔊</button>' +
          '</div>'
        ).join('') +
      '</div>' +
    '</div>'
  ).join('');
}

// 暴露到全局供 inline onclick 调用
window.speakKorean = speakKorean;

// ===== 花销渲染 =====
function renderExpenses(expenses, di, ii, editMode, isItem) {
  const wrap = document.createElement('div');
  wrap.className = 'expense-list';

  (expenses || []).forEach((exp, ei) => {
    const row = document.createElement('div');
    row.className = 'expense-row';
    const rmb = tripData.settings.rmbRate ? Math.round((exp.amount || 0) / tripData.settings.rmbRate) : 0;
    row.innerHTML = '<span class="expense-amount">' + formatKRW(exp.amount) + '</span> ' +
      '<span class="expense-cat">' + escapeHtml(exp.category || '📌其他') + '</span>' +
      (exp.note ? ' <span class="expense-note">' + escapeHtml(exp.note) + '</span>' : '') +
      (rmb > 0 ? ' <span style="font-size:11px;color:var(--text-muted)">≈¥' + rmb + '</span>' : '');

    if (editMode) {
      const delBtn = document.createElement('button');
      delBtn.className = 'expense-del';
      delBtn.textContent = '✕';
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (isItem) deleteItemExpense(di, ii, ei);
        else deleteDayExpense(di, ei);
      });
      row.appendChild(delBtn);
    }

    wrap.appendChild(row);
  });

  return wrap;
}

function showExpenseForm(di, ii, ei, parentEl) {
  const old = document.querySelector('.expense-form');
  if (old) old.remove();

  const form = document.createElement('div');
  form.className = 'expense-form';

  const amountInput = document.createElement('input');
  amountInput.type = 'number';
  amountInput.placeholder = '金额 ₩';
  amountInput.className = 'expense-input-amount';
  amountInput.setAttribute('inputmode', 'numeric');

  const catSelect = document.createElement('select');
  catSelect.className = 'expense-select';
  EXPENSE_CATEGORIES.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    catSelect.appendChild(opt);
  });

  const noteInput = document.createElement('input');
  noteInput.type = 'text';
  noteInput.placeholder = '备注';
  noteInput.className = 'expense-input-note';

  const saveBtn = document.createElement('button');
  saveBtn.textContent = '保存';
  saveBtn.className = 'btn-expense-save';
  saveBtn.addEventListener('click', () => {
    const amount = Number(amountInput.value);
    if (!amount || amount <= 0) return;
    const category = catSelect.value;
    const note = noteInput.value.trim();
    form.remove();
    if (ii !== null) addItemExpense(di, ii, amount, category, note);
    else addDayExpense(di, amount, category, note);
  });

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = '取消';
  cancelBtn.className = 'btn-expense-cancel';
  cancelBtn.addEventListener('click', () => form.remove());

  form.appendChild(amountInput);
  form.appendChild(catSelect);
  form.appendChild(noteInput);
  form.appendChild(saveBtn);
  form.appendChild(cancelBtn);

  parentEl.insertAdjacentElement('afterend', form);
  amountInput.focus();
}

// ===== 图片缩略图 =====
function renderThumbnailRow(item, di, ii, isEdit) {
  const row = document.createElement('div');
  row.className = 'thumb-row';

  const imageIds = item.imageIds || [];
  imageIds.forEach((imgId, idx) => {
    const wrap = document.createElement('div');
    wrap.className = 'thumb-wrap';  // 宝丽来效果

    const img = document.createElement('img');
    img.className = 'thumb';
    img.alt = item.place;
    img.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(imageIds, idx, item.place); });
    loadImage(imgId).then(record => {
      if (record) img.src = URL.createObjectURL(record.data);
    }).catch(e => console.error('加载缩略图失败:', imgId, e));

    if (isEdit) {
      const delBtn = document.createElement('button');
      delBtn.className = 'thumb-del';
      delBtn.textContent = '✕';
      delBtn.addEventListener('click', (e) => { e.stopPropagation(); removeImage(di, ii, imgId); });
      wrap.appendChild(delBtn);
    }

    wrap.appendChild(img);
    row.appendChild(wrap);
  });

  return row;
}

// ===== 图片操作 =====
async function addImages(di, ii) {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.multiple = true;
  input.style.display = 'none';
  document.body.appendChild(input);

  input.addEventListener('change', async () => {
    if (!input.files.length) { input.remove(); return; }
    const place = tripData.days[di].items[ii].place || '未命名地点';
    try {
      for (const file of input.files) {
        const imgId = await saveImage(file, place);
        if (!tripData.days[di].items[ii].imageIds) {
          tripData.days[di].items[ii].imageIds = [];
        }
        tripData.days[di].items[ii].imageIds.push(imgId);
      }
      saveData();
    } catch (e) {
      console.error('保存图片失败:', e);
      alert('图片保存失败，请重试');
    }
    input.remove();
  });

  input.click();
}

async function removeImage(di, ii, imgId) {
  if (!confirm('删除这张图片吗？')) return;
  await deleteImage(imgId);
  const imageIds = tripData.days[di].items[ii].imageIds || [];
  const idx = imageIds.indexOf(imgId);
  if (idx > -1) imageIds.splice(idx, 1);
  saveData();
}

// ===== 灯箱 =====
let lightboxImageIds = [];
let lightboxIndex = 0;

function openLightbox(imageIds, idx, place) {
  lightboxImageIds = imageIds;
  lightboxIndex = idx;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
  showLightboxImage();
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('active');
  document.body.style.overflow = '';
  const img = document.getElementById('lightbox-img');
  if (img && img.src.startsWith('blob:')) URL.revokeObjectURL(img.src);
  if (img) img.src = '';
}

function showLightboxImage() {
  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');
  const prev = document.getElementById('lightbox-prev');
  const next = document.getElementById('lightbox-next');
  if (img.src.startsWith('blob:')) URL.revokeObjectURL(img.src);

  const imgId = lightboxImageIds[lightboxIndex];
  loadImage(imgId).then(record => {
    if (record) {
      img.src = URL.createObjectURL(record.data);
      img.alt = record.place;
    }
  }).catch(e => console.error('灯箱加载图片失败:', imgId, e));

  counter.textContent = (lightboxIndex + 1) + ' / ' + lightboxImageIds.length;
  prev.style.visibility = lightboxIndex > 0 ? 'visible' : 'hidden';
  next.style.visibility = lightboxIndex < lightboxImageIds.length - 1 ? 'visible' : 'hidden';
}

function lightboxPrev() {
  if (lightboxIndex > 0) { lightboxIndex--; showLightboxImage(); }
}

function lightboxNext() {
  if (lightboxIndex < lightboxImageIds.length - 1) { lightboxIndex++; showLightboxImage(); }
}

// ===== 编辑模式 =====
function toggleEditMode() {
  editMode = !editMode;
  const btn = document.getElementById('btn-edit');
  if (editMode) {
    btn.textContent = '完成';
    btn.classList.add('editing');
  } else {
    btn.textContent = '编辑';
    btn.classList.remove('editing');
    closeModal();
  }
  render();
}

// ===== 弹窗 =====
function openModal(di, ii) {
  editDayIdx = di;
  editItemIdx = ii;
  const modal = document.getElementById('modal');
  const form = document.getElementById('modal-form');
  const title = document.getElementById('modal-title');

  if (ii !== null) {
    title.textContent = '编辑行程';
    const item = tripData.days[di].items[ii];
    form.time.value = item.time;
    form.place.value = item.place;
    form.traffic.value = item.traffic;
    form.note.value = item.note;
  } else {
    title.textContent = '添加行程';
    form.time.value = '';
    form.place.value = '';
    form.traffic.value = '';
    form.note.value = '';
  }

  modal.classList.add('active');
  form.time.focus();
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
  editDayIdx = null;
  editItemIdx = null;
}

function submitModal(e) {
  e.preventDefault();
  const form = document.getElementById('modal-form');
  const item = {
    time: form.time.value.trim(),
    place: form.place.value.trim(),
    traffic: form.traffic.value.trim(),
    note: form.note.value.trim(),
    placeId: '',
    tags: [],
    checked: false,
    travelTime: '',
    alternatives: [],
    imageIds: [],
    expenses: []
  };

  if (!item.place) {
    alert('至少填写地点名称');
    return;
  }

  if (editItemIdx !== null) {
    const existing = tripData.days[editDayIdx].items[editItemIdx];
    item.imageIds = existing.imageIds || [];
    item.expenses = existing.expenses || [];
    item.placeId = existing.placeId || '';
    item.tags = existing.tags || [];
    item.checked = existing.checked || false;
    item.travelTime = existing.travelTime || '';
    item.alternatives = existing.alternatives || [];
    tripData.days[editDayIdx].items[editItemIdx] = item;
  } else {
    tripData.days[editDayIdx].items.push(item);
  }

  closeModal();
  saveData();
}

// ===== 删除 =====
function deleteItem(di, ii) {
  const item = tripData.days[di].items[ii];
  if (confirm('删除「' + (item.place || item.time) + '」吗？')) {
    tripData.days[di].items.splice(ii, 1);
    saveData();
  }
}

function editDayTitle(di) {
  const newTitle = prompt('编辑标题：', tripData.days[di].title);
  if (newTitle !== null && newTitle.trim()) {
    tripData.days[di].title = newTitle.trim();
    saveData();
  }
}

function deleteDay(di) {
  const day = tripData.days[di];
  if (confirm('删除「' + day.title + '」吗？包含的行程也会一起删除。')) {
    tripData.days.splice(di, 1);
    saveData();
  }
}

function addNewDay() {
  const title = prompt('新的一天标题（如 Day 8）：');
  if (title !== null && title.trim()) {
    tripData.days.push({
      title: title.trim(), date: '', weather: 'sunny', rainNote: '',
      checkedIn: false, journal: '', items: [], expenses: []
    });
    saveData();
  }
}

// ===== 花销管理 =====
const EXPENSE_CATEGORIES = ['🍜餐饮', '🚇交通', '🛍️购物', '🎫门票', '📌其他'];

function formatKRW(amount) {
  return '₩' + Number(amount).toLocaleString('ko-KR');
}

function calcDayTotal(day) {
  let total = 0;
  (day.items || []).forEach(item => {
    (item.expenses || []).forEach(e => { total += e.amount || 0; });
  });
  (day.expenses || []).forEach(e => { total += e.amount || 0; });
  return total;
}

function calcTripTotal() {
  let total = 0;
  (tripData.days || []).forEach(day => { total += calcDayTotal(day); });
  return total;
}

function addItemExpense(di, ii, amount, category, note) {
  if (!tripData.days[di].items[ii].expenses) {
    tripData.days[di].items[ii].expenses = [];
  }
  tripData.days[di].items[ii].expenses.push({ amount: Number(amount), category, note: note || '' });
  saveData();
}

function addDayExpense(di, amount, category, note) {
  if (!tripData.days[di].expenses) tripData.days[di].expenses = [];
  tripData.days[di].expenses.push({ amount: Number(amount), category, note: note || '' });
  saveData();
}

// ===== 硬性花销 =====
function addHardExpense() {
  const name = document.getElementById('hard-expense-name').value.trim();
  const amount = Number(document.getElementById('hard-expense-amount').value);
  const currency = document.getElementById('hard-expense-currency').value;
  if (!name || !amount || amount <= 0) return;
  if (!tripData.settings.hardExpenses) tripData.settings.hardExpenses = [];
  const rate = tripData.settings.rmbRate || 185;
  // 统一转为 KRW 存储
  const amountKRW = currency === 'RMB' ? Math.round(amount * rate) : amount;
  tripData.settings.hardExpenses.push({ name, amount: amountKRW, currency });
  document.getElementById('hard-expense-name').value = '';
  document.getElementById('hard-expense-amount').value = '';
  saveData();
}
function deleteHardExpense(ei) {
  tripData.settings.hardExpenses.splice(ei, 1);
  saveData();
}
window.deleteHardExpense = deleteHardExpense;

function deleteItemExpense(di, ii, ei) {
  tripData.days[di].items[ii].expenses.splice(ei, 1);
  saveData();
}

function deleteDayExpense(di, ei) {
  tripData.days[di].expenses.splice(ei, 1);
  saveData();
}

// ===== Naver Map（仅 App 跳转）=====
function openNaverMap(place) {
  if (!place) return;
  location.href = 'nmap://search?query=' + encodeURIComponent(place);
}

// ===== 工具 =====
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== 天气 =====
const WEATHER_CACHE_KEY = 'seoul-weather-cache';
const SEOUL_LAT = 37.57;
const SEOUL_LON = 126.98;

// WMO Weather codes → emoji + description
function weatherFromCode(code) {
  if (code <= 0) return { emoji: '☀️', desc: '晴朗' };
  if (code <= 3) return { emoji: '⛅', desc: '多云' };
  if (code <= 48) return { emoji: '🌫️', desc: '雾' };
  if (code <= 55) return { emoji: '🌦️', desc: '毛毛雨' };
  if (code <= 65) return { emoji: '🌧️', desc: '雨' };
  if (code <= 75) return { emoji: '🌨️', desc: '雪' };
  if (code <= 82) return { emoji: '🌧️', desc: '阵雨' };
  if (code <= 99) return { emoji: '⛈️', desc: '雷暴' };
  return { emoji: '☀️', desc: '晴朗' };
}

async function fetchWeather() {
  try {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=' + SEOUL_LAT +
      '&longitude=' + SEOUL_LON +
      '&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode' +
      '&timezone=Asia/Seoul&forecast_days=7';
    const resp = await fetch(url);
    if (!resp.ok) throw new Error('API error');
    const data = await resp.json();
    const cache = {
      updatedAt: Date.now(),
      daily: data.daily
    };
    localStorage.setItem(WEATHER_CACHE_KEY, JSON.stringify(cache));
    return cache;
  } catch (e) {
    console.warn('天气获取失败，使用缓存:', e.message);
    return getCachedWeather();
  }
}

function getCachedWeather() {
  try {
    const raw = localStorage.getItem(WEATHER_CACHE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return null;
}

function renderWeatherWidget(cache) {
  const iconEl = document.getElementById('weather-icon');
  const tempEl = document.getElementById('weather-temp');
  const descEl = document.getElementById('weather-desc');
  const rainEl = document.getElementById('weather-rain');
  const rainPctEl = document.getElementById('weather-rain-pct');
  const updatedEl = document.getElementById('weather-updated');

  if (!cache || !cache.daily || !cache.daily.time) {
    iconEl.textContent = '🌤️';
    tempEl.textContent = '--°';
    descEl.textContent = '暂无天气数据';
    rainEl.style.display = 'none';
    updatedEl.textContent = '';
    return;
  }

  const today = cache.daily.time[0];
  const todayIdx = 0; // 今天
  const code = cache.daily.weathercode[todayIdx];
  const tmax = cache.daily.temperature_2m_max[todayIdx];
  const tmin = cache.daily.temperature_2m_min[todayIdx];
  const rainProb = cache.daily.precipitation_probability_max[todayIdx];

  const w = weatherFromCode(code);
  iconEl.textContent = w.emoji;
  tempEl.textContent = Math.round(tmin) + '° ~ ' + Math.round(tmax) + '°';
  descEl.textContent = '首尔 ' + w.desc;

  // 降雨概率
  if (rainProb > 0) {
    rainEl.style.display = 'flex';
    rainPctEl.textContent = '降雨概率 ' + rainProb + '%';
    rainEl.className = 'weather-rain' + (rainProb >= 50 ? ' high' : '');
  } else {
    rainEl.style.display = 'none';
  }

  // 雨天室内推荐
  let rainRecs = '';
  if (rainProb >= 30) {
    const indoorLocs = locationPool.filter(l => l.indoor && l.soloFriendly).slice(0, 4);
    if (indoorLocs.length > 0) {
      rainRecs = '<div class="rain-recs">' +
        '<span class="rain-recs-label">🏠 今日室内推荐</span>' +
        indoorLocs.map(loc =>
          '<span class="rain-rec-item" onclick="event.stopPropagation();window._openMap(\'' + escapeHtml(loc.name) + '\')">📌 ' + escapeHtml(loc.name) + '</span>'
        ).join('') +
        '</div>';
    }
  }

  // 更新时间
  const ago = Math.round((Date.now() - cache.updatedAt) / 60000);
  const agoStr = ago < 1 ? '刚刚' : ago < 60 ? ago + '分钟前' : Math.floor(ago/60) + '小时前';
  updatedEl.innerHTML = rainRecs +
    '<span class="update-time">更新于 ' + agoStr + '</span>';

  // 暴露 map 函数给 inline onclick
  window._openMap = openNaverMap;
}

async function updateWeather() {
  const widget = document.getElementById('weather-widget');
  if (!widget) return;
  widget.classList.add('loading');
  let cache;
  if (navigator.onLine) {
    cache = await fetchWeather();
  } else {
    cache = getCachedWeather();
  }
  renderWeatherWidget(cache);
  widget.classList.remove('loading');
}

// ===== 预算设置弹窗 =====
function openBudgetModal() {
  const modal = document.getElementById('budget-modal');
  const form = document.getElementById('budget-form');
  form.totalBudget.value = tripData.settings.totalBudget || '';
  form.rmbRate.value = tripData.settings.rmbRate || 185;
  modal.classList.add('active');
}

function closeBudgetModal() {
  document.getElementById('budget-modal').classList.remove('active');
}

function submitBudget(e) {
  e.preventDefault();
  const form = document.getElementById('budget-form');
  tripData.settings.totalBudget = Number(form.totalBudget.value) || 0;
  tripData.settings.rmbRate = Number(form.rmbRate.value) || 185;
  closeBudgetModal();
  saveData();
}

// ===== Tab 切换 =====
function setupTabs() {
  const btns = document.querySelectorAll('.tab-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      // 切换按钮状态
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      // 切换面板
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      const panel = document.getElementById('tab-' + tab);
      if (panel) panel.classList.add('active');
    });
  });
}


// ===== Toast 提示 =====
function showToast(msg) {
  const toast = document.getElementById('offline-toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

// ===== 离线检测 =====
function showOfflineToast() {
  showToast('📡 离线模式');
}

// ===== 初始化 =====
async function init() {
  await loadLocationPool();

  // 天气：先渲染缓存，再后台更新
  renderWeatherWidget(getCachedWeather());
  updateWeather();
  // 每30分钟自动刷新天气
  setInterval(updateWeather, 30 * 60 * 1000);

  // 事件绑定
  document.getElementById('btn-edit').addEventListener('click', toggleEditMode);
  document.getElementById('btn-reset').addEventListener('click', resetData);
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-form').addEventListener('submit', submitModal);
  document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  // 预算弹窗
  document.getElementById('btn-budget-set').addEventListener('click', openBudgetModal);
  document.getElementById('budget-modal-close').addEventListener('click', closeBudgetModal);
  document.getElementById('budget-form').addEventListener('submit', submitBudget);
  document.getElementById('budget-modal').addEventListener('click', function(e) {
    if (e.target === this) closeBudgetModal();
  });

  // 地点库搜索 + 随机抽选 + 添加地点
  document.getElementById('pool-search-input').addEventListener('input', renderLocationPool);
  document.getElementById('btn-random-pick').addEventListener('click', randomPick);
  document.getElementById('btn-add-loc').addEventListener('click', () => {
    const form = document.getElementById('add-loc-form');
    form.style.display = form.style.display === 'none' ? 'flex' : 'none';
    if (form.style.display === 'flex') document.getElementById('add-loc-name').focus();
  });
  document.getElementById('btn-add-loc-cancel').addEventListener('click', () => {
    document.getElementById('add-loc-form').style.display = 'none';
  });
  // 硬性花销（事件代理，因为按钮是动态渲染的）
  document.getElementById('summary-content').addEventListener('click', function(e) {
    if (e.target.id === 'btn-add-hard') addHardExpense();
  });
  document.getElementById('btn-add-loc-save').addEventListener('click', () => {
    const name = document.getElementById('add-loc-name').value.trim();
    if (!name) { alert('请填写地点名称'); return; }
    const newLoc = {
      id: 'loc_custom_' + Date.now(),
      name: name,
      nameKo: '',
      area: document.getElementById('add-loc-neighborhood').value.trim() || '其他',
      neighborhood: document.getElementById('add-loc-neighborhood').value.trim() || '其他',
      category: document.getElementById('add-loc-category').value.trim() || '其他',
      tags: [],
      hours: '',
      hoursNote: '',
      indoor: true,
      soloFriendly: true,
      budget: document.getElementById('add-loc-budget').value.trim() || '',
      note: document.getElementById('add-loc-note').value.trim() || '',
      address: ''
    };
    locationPool.push(newLoc);
    // 更新 localStorage 缓存
    localStorage.setItem('seoul-location-pool', JSON.stringify(locationPool));
    // 清空表单
    ['add-loc-name','add-loc-neighborhood','add-loc-category','add-loc-note','add-loc-budget'].forEach(id => {
      document.getElementById(id).value = '';
    });
    document.getElementById('add-loc-form').style.display = 'none';
    renderLocationPool();
    showToast('已添加「' + name + '」');
  });

  // Tab 切换
  setupTabs();

  // 灯箱
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev = document.getElementById('lightbox-prev');
  const lbNext = document.getElementById('lightbox-next');
  const lb = document.getElementById('lightbox');
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', lightboxPrev);
  if (lbNext) lbNext.addEventListener('click', lightboxNext);
  if (lb) {
    lb.addEventListener('click', function(e) {
      if (e.target === this) closeLightbox();
    });
  }
  document.addEventListener('keydown', function(e) {
    if (!lb || !lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev();
    if (e.key === 'ArrowRight') lightboxNext();
  });

  // 离线检测
  window.addEventListener('offline', showOfflineToast);
  window.addEventListener('online', () => {
    loadLocationPool().then(() => renderLocationPool());
  });

  // 首次渲染
  render();
}

// 启动应用
init();
