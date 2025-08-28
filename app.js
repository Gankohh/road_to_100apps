// シンプルな localStorage ストア
const KEY = 'apps100.v1';

const AppStore = {
  list() {
    try {
      const raw = localStorage.getItem(KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return arr.map(x=>({ ...x, createdAt: Number(x.createdAt) })).sort((a,b)=>a.createdAt - b.createdAt);
    } catch {
      return [];
    }
  },
  save(arr) {
    localStorage.setItem(KEY, JSON.stringify(arr));
  },
  add({ name, url }) {
    const now = Date.now();
    const id = String(now) + '_' + Math.random().toString(36).slice(2,7);
    const arr = this.list();
    arr.push({ id, name, url, createdAt: now });
    this.save(arr);
  },
  remove(id) {
    const arr = this.list().filter(x=>x.id !== id);
    this.save(arr);
  },
  clear() {
    this.save([]);
  },
  export() {
    return JSON.stringify(this.list(), null, 2);
  },
  import(jsonText) {
    const data = JSON.parse(jsonText);
    if (!Array.isArray(data)) throw new Error('invalid');
    const cleaned = data.map(x=>({
      id: String(x.id || (Date.now()+Math.random())),
      name: String(x.name || ''),
      url: x.url ? String(x.url) : '',
      createdAt: Number(x.createdAt || Date.now()),
    }));
    this.save(cleaned);
  }
};
