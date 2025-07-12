# 🔄 Skill Swap Platform

A mini full-stack web application that enables users to list their skills and request others in return. Users can find matching skill partners, send swap requests, and rate each other after a successful swap. Built using **Next.js**, **Clerk**, and **Tailwind CSS**.

---

## 🌟 Features

- 🔐 User Authentication (Sign up, Sign in, Logout) using Clerk
- 📝 User Profiles with:
  - Name, Location (optional), Profile Photo (optional)
  - Skills Offered & Skills Wanted
  - Availability (e.g., weekends, evenings)
  - Privacy Toggle (Public / Private)
- 🔍 Search Users by Skills
- 🔁 Request & Accept Skill Swaps:
  - Accept/Reject/Delete swap requests
  - View pending/current swap requests
- ⭐ Ratings & Feedback after a swap
- 🛡 Admin Dashboard:
  - Approve skills
  - Ban users
  - Send announcements
  - Download user/swap/feedback reports

---

## 📸 Demo

🔗 [https://www.loom.com/share/6330ba2126a84f8e88e568b09270ebc9](#) *(replace with your video link)*

---

## 🚀 Tech Stack

| Layer      | Tech                     |
|------------|--------------------------|
| Frontend   | Next.js (Pages Router)   |
| Styling    | Tailwind CSS + shadcn/ui |
| Auth       | Clerk                    |
| Backend    | Node.js + Express (or FastAPI) |
| Database   | MongoDB |
| Storage    | Cloudinary (for profile images) |

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/skill-swap-platform.git
cd skill-swap-platform
