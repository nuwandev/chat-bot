# AI ChatBot

Simple browser-based AI chat interface using Google Gemini API and Tailwind CSS. Lets users enter prompts and view markdown-formatted AI responses in a styled chat UI.

## Learning Outcomes

- Fetch-based API integration (POST JSON)
- Async handling & basic error states
- DOM templating with template literals
- Input focus & keyboard interaction (Enter to send)
- Styling rapidly with Tailwind utility classes
- Markdown rendering pipeline using `marked`

## 🚀 Features

- Responsive Tailwind UI (gradient header, message bubbles)
- Enter key submits message
- Status indicator (Online / Typing…)
- Markdown parsing of AI responses (`marked`)
- Time stamps per message
- Basic API response validation

## 📂 Project Structure

```text
chat-bot/
├── index.html          # UI markup + Tailwind CDN
├── assets/
│   └── js/
│       └── app.js      # Chat logic & API call
└── README.md
```

## 🛠️ Tech Stack

- HTML / CSS (Tailwind CDN)
- Vanilla JavaScript (ES6)
- Google Generative Language API (Gemini 2.0 Flash)
- marked (Markdown to HTML)

## ⚙️ Setup

Clone the parent repo (contains all projects):

```bash
git clone https://github.com/nuwandev/Internet-Technologies-Module-iCET.git
cd Internet-Technologies-Module-iCET/projects/chat-bot
```

Open `index.html` in a browser (no build needed). Optional static server:

```bash
python -m http.server 8080
```

Visit <http://localhost:8080>

## 🧩 Usage

1. Open `index.html`.
2. Type a prompt.
3. Press Enter or click send.
4. Read AI markdown-formatted reply.
5. Repeat.

## 🧱 Architecture

- `index.html` – Static shell & element IDs.
- `app.js` – Event listeners, fetch call, DOM injection, time utility.
- Flat, single-module script for simplicity.

## 🗄️ Data / Storage

- No persistence (all in-memory DOM).
- API endpoint: `POST https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`
- Messages rendered directly; no history export.

## 🔧 Scripts

None required (pure static). Potential future:

- `npm run build` (bundler)
- `npm run preview`

## 🧪 Testing

Not implemented. Potential: mock fetch, assert DOM output (Jest + JSDOM).

## 📦 Deployment

- Host as static: GitHub Pages / Netlify / Vercel.
- Hide API key via serverless proxy in production.

## 📝 Notes

- API key currently hard-coded (security risk).
- No sanitization of markdown output—add DOMPurify if user-provided content ever included.
- Long sessions may bloat DOM (no virtual list / trimming).
- Error UI minimal (console + status label).

## 📄 License

MIT (adjust if needed).
