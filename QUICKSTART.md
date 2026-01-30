# 🚀 QUICK START GUIDE - AutoLeads Dashboard

## 📦 Step 1: Install Dependencies

```bash
npm install
```

## 🔐 Step 2: Setup Clerk Authentication

1. Go to https://dashboard.clerk.com
2. Create a new application
3. Go to "API Keys" section
4. Copy your keys

## ⚙️ Step 3: Configure Environment Variables

Create a file named `.env.local` in the root directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## ▶️ Step 4: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000

## ✅ That's it!

Your AutoLeads dashboard is now running!

---

## 📱 Available Pages:

- `/` - Home (redirects to dashboard if logged in)
- `/sign-in` - Sign in page
- `/sign-up` - Sign up page
- `/dashboard` - Main dashboard with stats
- `/leads` - Leads management list
- `/leads/[id]` - Individual lead profile
- `/automation` - Workflow builder
- `/analytics` - Analytics dashboard
- `/templates` - Email template library

---

## 🎨 Design Features:

✅ Glassmorphism cards
✅ Gradient backgrounds (purple/blue/indigo)
✅ Responsive mobile-first design
✅ Bottom navigation bar
✅ SVG mini charts
✅ Status badges
✅ Progress bars
✅ Smooth animations

---

## 🛠️ Tech Stack:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Clerk Authentication
- React Icons

---

## 📝 Need Help?

Check the full README.md for detailed documentation!
