{\rtf1\ansi\ansicpg932\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u12471 \u12531 \u12503 \u12523 \u12394  localStorage \u12473 \u12488 \u12450 \
const KEY = 'apps100.v1';\
\
const AppStore = \{\
  list() \{\
    try \{\
      const raw = localStorage.getItem(KEY);\
      const arr = raw ? JSON.parse(raw) : [];\
      // createdAt \uc0\u12434  number \u21270 \
      return arr.map(x=>(\{ ...x, createdAt: Number(x.createdAt) \})).sort((a,b)=>a.createdAt - b.createdAt);\
    \} catch \{\
      return [];\
    \}\
  \},\
  save(arr) \{\
    localStorage.setItem(KEY, JSON.stringify(arr));\
  \},\
  add(\{ name, url \}) \{\
    const now = Date.now();\
    const id = String(now) + '_' + Math.random().toString(36).slice(2,7);\
    const arr = this.list();\
    arr.push(\{ id, name, url, createdAt: now \});\
    this.save(arr);\
  \},\
  remove(id) \{\
    const arr = this.list().filter(x=>x.id !== id);\
    this.save(arr);\
  \},\
  clear() \{\
    this.save([]);\
  \},\
  export() \{\
    return JSON.stringify(this.list(), null, 2);\
  \},\
  import(jsonText) \{\
    const data = JSON.parse(jsonText);\
    if (!Array.isArray(data)) throw new Error('invalid');\
    // \uc0\u12374 \u12387 \u12367 \u12426 \u12496 \u12522 \u12487 \u12540 \u12471 \u12519 \u12531 \
    const cleaned = data.map(x=>(\{\
      id: String(x.id || (Date.now()+Math.random())),\
      name: String(x.name || ''),\
      url: x.url ? String(x.url) : '',\
      createdAt: Number(x.createdAt || Date.now()),\
    \}));\
    this.save(cleaned);\
  \}\
\};\
}