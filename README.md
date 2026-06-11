# DINAKAR D J — Professional Portfolio

A MERN stack portfolio built for software developer job search. And showing my skills and knowledge I learnt. Clean, professional design with system-based dark/light theme, categorized skills, and a contact/feedback form.

## Tech Stack

| Layer | Technology |
|-------|------------|
| **M**ongoDB | Message storage for contact form |
| **E**xpress | REST API backend |
| **R**eact | Frontend UI (Vite) |
| **N**ode.js | Server runtime |

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB Atlas](https://www.mongodb.com/atlas) (free tier) for contact form persistence

### 1. Install dependencies

```bash
npm run install:all
```

### 2. Configure environment

```bash
cp server/.env.example server/.env
```

Edit `server/.env` with your MongoDB connection string.

### 3. Run locally

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

---

## Data Pipeline — How to Fill Your Portfolio

All content is managed in **one file**:

```
client/src/data/profile.js
```

### Step-by-step checklist

| Step | What to do | File / Location |
|------|------------|-----------------|
| 1 | Add your profile photo | Save as `client/public/images/profile.jpg` |
| 2 | Update resume (if changed) | Replace `client/public/resume/DINAKAR-DJ-Resume.pdf` |
| 3 | Fill personal info | `profile` object in `profile.js` |
| 4 | Add social links | `socialLinks` — Instagram, Twitter, GitHub, LeetCode |
| 5 | Customize career roadmap | `careerPath` array |
| 6 | Update experience | `experience` array |
| 7 | Add achievements | `achievements` array (currently blank placeholders) |
| 8 | Add certificate links/years | `certificates` array |
| 9 | Update education | `education` array |
| 10 | Adjust skills | `skillCategories` array |
| 11 | Add project URLs | `projects` — `liveUrl`, `githubUrl` per project |

### Example: Adding a social link

```js
export const socialLinks = {
  instagram: 'https://instagram.com/yourhandle',
  twitter: 'https://twitter.com/yourhandle',
  linkedin: 'https://www.linkedin.com/in/userdinakardj2209',
  github: 'https://github.com/yourhandle',
  leetcode: 'https://leetcode.com/yourhandle',
};
```

### Example: Adding an achievement

```js
{
  title: 'Winner — National Hackathon 2025',
  description: 'Built a real-time analytics dashboard in 24 hours.',
  year: '2025',
  icon: 'trophy', // trophy | star | award
}
```

Empty social links show as disabled icons in the footer until you add URLs.

---

## Project Structure

```
portfolio/
├── client/                 # React frontend (Vite)
│   ├── public/
│   │   ├── images/         # Profile photo
│   │   └── resume/         # PDF resume
│   └── src/
│       ├── components/     # UI sections
│       └── data/
│           └── profile.js  
├── server/                 # Express API
│   ├── models/             # MongoDB schemas
│   └── routes/             # API routes
└── package.json            # Root scripts
```

## Sections

1. **Hero** — Photo, intro, resume download
2. **Career Path** — Professional roadmap timeline
3. **Experience** — Work history with tech tags
4. **Achievements** — Awards & milestones
5. **Certificates** — Certifications
6. **Education** — Academic history
7. **Skills** — Categorized, color-differentiated
8. **Projects** — Featured work with links
9. **Contact** — Feedback & queries form

## Theme

Three modes via the header toggle:

- **System** — follows your device light/dark setting (default)
- **Light** — force light mode
- **Dark** — force dark mode

Choice is saved in `localStorage` (`portfolio-theme`).

**Color palette:** Black, white, blue (`#2563eb`), red (`#dc2626`) for accents and hovers.

---

## Deployment

### Option A: Single server (Render / Railway)

Best for MERN as one app.

1. Build the client:
   ```bash
   npm run build
   ```
2. Set environment variables on your host:
   - `MONGODB_URI`
   - `NODE_ENV=production`
   - `CLIENT_URL=https://your-domain.com`
3. Start command: `npm start`
4. The server serves the built React app and API together.

### Option B: Split deployment (Vercel + Render)

| Service | Deploy | Settings |
|---------|--------|----------|
| **Frontend** | Vercel — `client/` folder | `VITE_API_URL=https://your-api.onrender.com/api` |
| **Backend** | Render — `server/` folder | `MONGODB_URI`, `CLIENT_URL=https://your-portfolio.vercel.app` |

### MongoDB Atlas setup

1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas)
2. Database Access → create user
3. Network Access → allow `0.0.0.0/0` (or your host IP)
4. Connect → copy connection string → paste in `MONGODB_URI`

Contact form submissions are stored in the `contacts` collection.

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit feedback/query |

---

## Design References

Inspired by professional portfolios:

- [brittanychiang.com](https://brittanychiang.com/) — Clean section layout, timeline experience
- [calebixca.com](https://calebixca.com/) — Modern hero, contact interaction
- [mktgportfolio.com/arizona](https://mktgportfolio.com/arizona) — Professional presentation

---

## License

Private — personal portfolio project.
