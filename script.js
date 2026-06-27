// ===== 默认数据（首次使用，或重置时用） =====
const DATA_VERSION = 2;

const DEFAULT_DATA = {
  version: DATA_VERSION,
  days: [
    {
      title: 'Day 1 · 延禧洞 → 延南洞 (7/9 周四)',
      items: [
        { time: '10:00', place: 'default value 咖啡店', traffic: '地铁2号线弘大入口站 → 步行', note: '自烘豆虹吸咖啡，延禧洞逛吃起点' },
        { time: '12:30', place: '연희보리밥', traffic: '步行5分钟', note: '大麦饭定食，一人友好' },
        { time: '14:00', place: '연희국화빵', traffic: '步行3分钟', note: '多口味鲫鱼饼，延禧洞标志小吃' },
        { time: '14:30', place: '하루한알', traffic: '步行', note: '蛋挞甜品小店，顺手带一个' },
        { time: '15:30', place: 'All Write 延禧', traffic: '步行', note: '文创手帐店，注意营业时间' },
        { time: '17:00', place: '延南洞街区', traffic: '延禧洞穿通道直达', note: '文艺杂货铺、咖啡逛吃' },
        { time: '19:00', place: '주재 清吧', traffic: '延南洞步行', note: '🐶 店里有黄狗！吧台座位，可点现做餐食，酒品建议详询老板' }
      ]
    },
    {
      title: 'Day 2 · 弘大 → 望远洞 (7/10 周五)',
      items: [
        { time: '12:00', place: '弘大商圈', traffic: '地铁2号线弘大入口站', note: '年轻潮流聚集地，街头表演、小店逛吃' },
        { time: '14:00', place: '마가렛 咖啡店', traffic: '弘大步行', note: '咖啡+特色风味刨冰' },
        { time: '17:30', place: '우이락 韩式酒馆', traffic: '弘大步行', note: '炸辣椒+牛肠鸡肉锅+苹果奶油米酒，强推' },
        { time: '19:30', place: '도쿄빙수 日式刨冰', traffic: '步行至望远洞', note: '日式风格刨冰，饭后甜品' },
        { time: '21:00', place: '弘大夜生活散步', traffic: '步行', note: '感受弘大夜晚氛围，轻松回民宿' }
      ]
    },
    {
      title: 'Day 3 · 解放村 → 梨泰院 (7/11 周六)',
      items: [
        { time: '11:00', place: '신흥교회앞', traffic: '地铁 → 龙山02路公交', note: '下车有胶片店和书店，深度游起点' },
        { time: '12:30', place: '五岔路口 (해방촌오거리)', traffic: '步行', note: '解放村核心区域，网红餐饮聚集' },
        { time: '15:00', place: 'cliff 咖啡店', traffic: '步行爬坡', note: '山坡高处，观赏绝美日落！看完可公交离开' },
        { time: '18:30', place: 'KKI 清吧', traffic: '下山至梨泰院方向', note: '歌单品味出色，性冷淡克制风装修，酒品易饮' },
        { time: '20:00', place: '梨泰院街区', traffic: '步行', note: '异域风情夜逛，餐饮酒吧密集' }
      ]
    },
    {
      title: 'Day 4 · TWICE演唱会日 (7/12 周日)',
      items: [
        { time: '11:00', place: '首尔林', traffic: '地铁至首尔林站', note: '城市公园散步，轻松上午' },
        { time: '13:30', place: 'Sound Planet LP酒吧', traffic: '首尔林步行', note: 'LP黑胶jazz funk，柠檬巧克力调酒口碑极佳，炸薯条好吃' },
        { time: '16:00', place: '出发去KSPO Dome', traffic: '地铁至奥林匹克公园站', note: '提前出发，预留到场和排队时间' },
        { time: '18:00', place: 'TWICE 演唱会 🎤', traffic: 'KSPO Dome (올림픽공원)', note: '享受演唱会！结束后地铁回民宿' }
      ]
    },
    {
      title: 'Day 5 · 景福宫 → 西村 → 北村 (7/13 周一)',
      items: [
        { time: '10:00', place: '景福宫 / 光化门', traffic: '地铁3号线景福宫站', note: '朝鲜王朝宫殿，可租韩服游览（穿韩服免门票）' },
        { time: '12:30', place: '사라브 서촌', traffic: '步行至西村', note: '单人份餐食，一人食用分量刚好' },
        { time: '14:00', place: '西村 + 北村韩屋村', traffic: '步行', note: '传统韩屋与文艺小店，咖啡餐饮文创密集' },
        { time: '17:00', place: '仁寺洞 + 益善洞', traffic: '步行/短途公交', note: '传统工艺品+韩屋改造网红商圈' },
        { time: '19:00', place: '서피동파 韩式酒馆', traffic: '大学路方向', note: '四色饼（泡菜/葱/海鲜）+冻水果米酒，泡菜汤口碑好' }
      ]
    },
    {
      title: 'Day 6 · 乙支路 → 明洞 → 清溪川 (7/14 周二)',
      items: [
        { time: '11:00', place: '乙支路商圈', traffic: '地铁2号线乙支路站', note: '老工业区改造，新旧碰撞感强，餐饮咖啡酒吧丰富' },
        { time: '13:00', place: '明洞', traffic: '步行10分钟', note: '核心商业步行街，美妆服饰连锁餐饮' },
        { time: '16:00', place: '清溪川', traffic: '步行', note: '城市溪流贯穿市中心，散步休憩好去处' },
        { time: '18:00', place: '南大门市场', traffic: '步行', note: '传统市场烟火气，平价美食晚餐' },
        { time: '20:00', place: 'Daiso 大创扫货', traffic: '就近门店', note: 'A4纸、线圈笔记本、手机挂绳、香膏…回国伴手礼' }
      ]
    },
    {
      title: 'Day 7 · 江南 → 狎鸥亭 (7/15 周三)',
      items: [
        { time: '12:00', place: '狎鸥亭商圈', traffic: '地铁盆唐线狎鸥亭罗德奥站', note: '高端逛街，买手店、品牌旗舰店' },
        { time: '14:00', place: '전포어관 蚕室店', traffic: '地铁至蚕室站', note: '汤+饼+炸物组合，별빛청하葡萄酒推荐，米酒不错' },
        { time: '17:00', place: '自由时间', traffic: '', note: '补漏想去没去的地方，或回民宿休息整理' },
        { time: '19:30', place: 'ZSET 清吧', traffic: '地铁至狎鸥亭/江南', note: '🏆 Asia Top 50！全自制食材，金汤力清爽美妙，需开门排队' }
      ]
    }
  ]
};

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

// ===== 状态 =====
let tripData = loadData();
let editMode = false;
let editDayIdx = null;   // 正在编辑的 day index
let editItemIdx = null;  // 正在编辑的 item index（null = 新增）

// ===== localStorage 读写 =====
function loadData() {
  try {
    const raw = localStorage.getItem('seoul-trip');
    if (raw) {
      const data = JSON.parse(raw);
      // 版本太旧或没有版本号 → 自动升级到最新数据
      if (!data.version || data.version < DATA_VERSION) {
        localStorage.removeItem('seoul-trip');
        return JSON.parse(JSON.stringify(DEFAULT_DATA));
      }
      // 兼容旧数据：确保 expenses 数组存在
      migrateExpenses(data);
      return data;
    }
  } catch (e) { /* 数据损坏则用默认 */ }
  return JSON.parse(JSON.stringify(DEFAULT_DATA)); // 深拷贝
}

function migrateExpenses(data) {
  (data.days || []).forEach(day => {
    if (!Array.isArray(day.expenses)) day.expenses = [];
    (day.items || []).forEach(item => {
      if (!Array.isArray(item.expenses)) item.expenses = [];
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

// ===== 渲染 =====
function render() {
  const container = document.querySelector('.container');
  // 保留 header 和 footer，替换中间部分
  const oldCards = container.querySelectorAll('.day-card, .add-day-area');
  oldCards.forEach(el => el.remove());

  const footer = container.querySelector('.footer');

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
      if (editMode) return; // 编辑模式下不折叠
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

    // 行程列表
    const contentEl = document.createElement('div');
    contentEl.className = 'day-content';
    // 编辑模式下始终展开
    if (editMode) contentEl.classList.add('active');

    day.items.forEach((item, ii) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'item';

      // 可编辑内容区域
      const infoEl = document.createElement('div');
      infoEl.className = 'item-info';
      infoEl.innerHTML = `
        <div class="time">${escapeHtml(item.time)}</div>
        <div class="place place-link">${escapeHtml(item.place)}</div>
        <div class="traffic">${escapeHtml(item.traffic)}</div>
        <div class="note">${escapeHtml(item.note)}</div>
      `;
      // 地点名点击 → Naver Map
      const placeEl = infoEl.querySelector('.place');
      if (placeEl && item.place) {
        placeEl.addEventListener('click', (e) => {
          e.stopPropagation();
          openNaverMap(item.place);
        });
      }
      // 左侧：信息 + 花销
      const leftEl = document.createElement('div');
      leftEl.className = 'item-left';
      leftEl.appendChild(infoEl);

      // 花销记录
      const expensesEl = renderExpenses(item.expenses || [], di, ii, editMode, true);
      leftEl.appendChild(expensesEl);

      itemEl.appendChild(leftEl);

      // 右侧区域：缩略图 + 操作按钮
      const rightEl = document.createElement('div');
      rightEl.className = 'item-right';

      const thumbRow = renderThumbnailRow(item, di, ii, editMode);
      rightEl.appendChild(thumbRow);

      // 编辑模式：操作按钮
      if (editMode) {
        const itemActions = document.createElement('div');
        itemActions.className = 'item-actions';

        const expenseBtn = document.createElement('button');
        expenseBtn.className = 'btn-icon btn-expense';
        expenseBtn.textContent = '💰';
        expenseBtn.title = '记录花销';
        expenseBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          showExpenseForm(di, ii, null, itemEl);
        });

        const imgBtn = document.createElement('button');
        imgBtn.className = 'btn-icon btn-img';
        imgBtn.textContent = '📷';
        imgBtn.title = '添加图片';
        imgBtn.addEventListener('click', () => addImages(di, ii));

        const editBtn = document.createElement('button');
        editBtn.className = 'btn-icon';
        editBtn.textContent = '✏️';
        editBtn.addEventListener('click', () => openModal(di, ii));

        const delBtn = document.createElement('button');
        delBtn.className = 'btn-icon btn-danger';
        delBtn.textContent = '🗑️';
        delBtn.addEventListener('click', () => deleteItem(di, ii));

        itemActions.appendChild(expenseBtn);
        itemActions.appendChild(imgBtn);
        itemActions.appendChild(editBtn);
        itemActions.appendChild(delBtn);
        rightEl.appendChild(itemActions);
      }

      itemEl.appendChild(rightEl);

      contentEl.appendChild(itemEl);
    });

    // 空状态提示
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

    // 编辑模式：日记一笔
    if (editMode) {
      const dayExpBtn = document.createElement('button');
      dayExpBtn.className = 'btn-add btn-add-expense';
      dayExpBtn.textContent = '+ 记一笔零散花销';
      dayExpBtn.addEventListener('click', () => {
        showExpenseForm(di, null, null, dayExpensesEl);
      });
      contentEl.appendChild(dayExpBtn);
    }

    // 今日合计
    const dayTotal = calcDayTotal(day);
    if (dayTotal > 0 || editMode) {
      const totalEl = document.createElement('div');
      totalEl.className = 'day-total';
      totalEl.textContent = '今日合计 ' + formatKRW(dayTotal);
      contentEl.appendChild(totalEl);
    }

    card.appendChild(contentEl);
    container.insertBefore(card, footer);
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
    container.insertBefore(addDayArea, footer);
  }

  // 更新全程总计
  updateTripTotal();
}

function updateTripTotal() {
  let totalEl = document.getElementById('trip-total');
  const headerP = document.querySelector('.header p');
  const total = calcTripTotal();
  if (total > 0) {
    if (!totalEl) {
      totalEl = document.createElement('p');
      totalEl.id = 'trip-total';
      totalEl.className = 'trip-total';
      headerP.parentNode.insertBefore(totalEl, headerP.nextSibling);
    }
    totalEl.textContent = '全程总计 ' + formatKRW(total);
    totalEl.style.display = '';
  } else if (totalEl) {
    totalEl.style.display = 'none';
  }
}

// ===== 编辑模式切换 =====
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
    // 编辑已有行程
    title.textContent = '编辑行程';
    const item = tripData.days[di].items[ii];
    form.time.value = item.time;
    form.place.value = item.place;
    form.traffic.value = item.traffic;
    form.note.value = item.note;
  } else {
    // 新增行程
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
    note: form.note.value.trim()
  };

  if (!item.place) {
    alert('至少填写地点名称');
    return;
  }

  if (editItemIdx !== null) {
    // 编辑已有 — 保留 imageIds 和 expenses
    const existing = tripData.days[editDayIdx].items[editItemIdx];
    item.imageIds = existing.imageIds || [];
    item.expenses = existing.expenses || [];
    tripData.days[editDayIdx].items[editItemIdx] = item;
  } else {
    // 新增
    tripData.days[editDayIdx].items.push(item);
  }

  closeModal();
  saveData();
}

// ===== 删除行程 =====
function deleteItem(di, ii) {
  const item = tripData.days[di].items[ii];
  if (confirm(`删除「${item.place || item.time}」吗？`)) {
    tripData.days[di].items.splice(ii, 1);
    saveData();
  }
}

// ===== 编辑/删除 Day =====
function editDayTitle(di) {
  const newTitle = prompt('编辑标题：', tripData.days[di].title);
  if (newTitle !== null && newTitle.trim()) {
    tripData.days[di].title = newTitle.trim();
    saveData();
  }
}

function deleteDay(di) {
  const day = tripData.days[di];
  if (confirm(`删除「${day.title}」吗？包含的行程也会一起删除。`)) {
    tripData.days.splice(di, 1);
    saveData();
  }
}

function addNewDay() {
  const title = prompt('新的一天标题（如 Day 8）：');
  if (title !== null && title.trim()) {
    tripData.days.push({ title: title.trim(), items: [] });
    saveData();
  }
}

// ===== 花销渲染 =====
function renderExpenses(expenses, di, ii, editMode, isItem) {
  const wrap = document.createElement('div');
  wrap.className = 'expense-list';

  (expenses || []).forEach((exp, ei) => {
    const row = document.createElement('div');
    row.className = 'expense-row';
    row.innerHTML = '<span class="expense-amount">' + formatKRW(exp.amount) + '</span> '
      + '<span class="expense-cat">' + escapeHtml(exp.category || '📌其他') + '</span>'
      + (exp.note ? ' <span class="expense-note">' + escapeHtml(exp.note) + '</span>' : '');

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
  // 移除已有的表单
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
    if (ii !== null) {
      addItemExpense(di, ii, amount, category, note);
    } else {
      addDayExpense(di, amount, category, note);
    }
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

// ===== 图片缩略图渲染 =====
function renderThumbnailRow(item, di, ii, isEdit) {
  const row = document.createElement('div');
  row.className = 'thumb-row';

  const imageIds = item.imageIds || [];
  if (imageIds.length > 0) console.log('🖼️ 渲染缩略图, place:', item.place, 'imageIds:', imageIds, 'edit:', isEdit);

  imageIds.forEach((imgId, idx) => {
    const wrap = document.createElement('div');
    wrap.className = 'thumb-wrap';

    const img = document.createElement('img');
    img.className = 'thumb';
    img.alt = item.place;
    img.addEventListener('click', (e) => { e.stopPropagation(); openLightbox(imageIds, idx, item.place); });
    // 异步加载缩略图
    loadImage(imgId).then(record => {
      if (record) {
        img.src = URL.createObjectURL(record.data);
      }
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
  console.log('📷 addImages 被调用, day:', di, 'item:', ii);
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.multiple = true;
  input.style.display = 'none';
  document.body.appendChild(input);

  input.addEventListener('change', async () => {
    console.log('📷 change 事件触发, 文件数:', input.files.length);
    if (!input.files.length) { input.remove(); return; }
    const place = tripData.days[di].items[ii].place || '未命名地点';

    try {
      for (const file of input.files) {
        console.log('💾 保存中...', file.name);
        const imgId = await saveImage(file, place);
        console.log('✅ 已保存, id:', imgId);
        if (!tripData.days[di].items[ii].imageIds) {
          tripData.days[di].items[ii].imageIds = [];
        }
        tripData.days[di].items[ii].imageIds.push(imgId);
      }
      console.log('📋 当前 imageIds:', tripData.days[di].items[ii].imageIds);
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
  // 释放 object URL
  const img = document.getElementById('lightbox-img');
  if (img && img.src.startsWith('blob:')) URL.revokeObjectURL(img.src);
  if (img) img.src = '';
}

function showLightboxImage() {
  const img = document.getElementById('lightbox-img');
  const counter = document.getElementById('lightbox-counter');
  const prev = document.getElementById('lightbox-prev');
  const next = document.getElementById('lightbox-next');

  // 释放旧 URL
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
  tripData.days[di].items[ii].expenses.push({
    amount: Number(amount), category, note: note || ''
  });
  saveData();
}

function addDayExpense(di, amount, category, note) {
  if (!tripData.days[di].expenses) {
    tripData.days[di].expenses = [];
  }
  tripData.days[di].expenses.push({
    amount: Number(amount), category, note: note || ''
  });
  saveData();
}

function deleteItemExpense(di, ii, ei) {
  tripData.days[di].items[ii].expenses.splice(ei, 1);
  saveData();
}

function deleteDayExpense(di, ei) {
  tripData.days[di].expenses.splice(ei, 1);
  saveData();
}

// ===== Naver Map 跳转 =====
function openNaverMap(place) {
  if (!place) return;
  const appUrl = 'nmap://search?query=' + encodeURIComponent(place);
  const webUrl = 'https://map.naver.com/v5/search/' + encodeURIComponent(place);

  // App 优先，600ms 内未跳转则走网页兜底
  location.href = appUrl;

  setTimeout(function() {
    // 如果页面还在（App 没装），走网页
    location.href = webUrl;
  }, 600);
}

// ===== 工具函数 =====
function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ===== 初始化 =====
document.getElementById('btn-edit').addEventListener('click', toggleEditMode);
document.getElementById('btn-reset').addEventListener('click', resetData);
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-form').addEventListener('submit', submitModal);

// 点击遮罩关闭弹窗
document.getElementById('modal').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

// 灯箱事件（防御式绑定）
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

// 折叠/展开：由 render 中的事件代理处理
// 首次渲染
render();
