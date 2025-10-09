# 🦷 Ivory - Dental Appointment Management Web App

![Ivory Banner](https://github.com/soumojit622/Ivory/blob/master/public/banner.jpg)

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Clerk](https://img.shields.io/badge/Clerk-3D6EE1?style=for-the-badge&logo=clerk&logoColor=white)](https://clerk.com/)
[![Clerk Billing](https://img.shields.io/badge/Clerk_Billing-FF6F61?style=for-the-badge)](https://clerk.com/)
[![Sonner](https://img.shields.io/badge/Sonner-FF6F61?style=for-the-badge)](https://sonner.js.org/)
[![Resend](https://img.shields.io/badge/Resend-2563EB?style=for-the-badge&logo=mailchimp&logoColor=white)](https://resend.com/)
[![Neon](https://img.shields.io/badge/Neon-00CFFF?style=for-the-badge)](https://neon.tech/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![VAPI AI](https://img.shields.io/badge/VAPI_AI-FF4500?style=for-the-badge)](https://vapi.ai/)
[![shadcn/ui](https://img.shields.io/badge/shadcn_ui-2563EB?style=for-the-badge)](https://ui.shadcn.com/)

---

**Ivory** is a modern, intuitive web application designed for dental practices to streamline appointment booking and management. Patients can book appointments quickly, receive email confirmations, and keep track of their dental care, while admins can manage doctors and appointments effortlessly.

---

## 🌐 Live Demo
Experience Ivory in action:  
[**🔗 Live Demo**](https://ivory-hzl5.vercel.app/)  

> 💡 *Tip:* Use the admin email defined in `ADMIN_EMAIL` to access the admin panel and explore admin functionalities.

---

## 🌟 Key Features

### 🧑‍⚕️ Patient Features
- ✨ **Seamless Booking** – Book appointments effortlessly with a responsive, clean interface.  
- 📧 **Instant Email Confirmations** – Beautiful email templates with full appointment details.  
- 🗓 **Appointment Dashboard** – Quick overview of upcoming appointments.  
- 📱 **Mobile-First Design** – Fully responsive across all devices.  
- 🎨 **Interactive UI** – Smooth hover effects, animations, and toast notifications.  

### 🛠 Admin Features
- 🔒 **Secure Access** – Only `ADMIN_EMAIL` can access admin functionalities.  
- 👨‍⚕️ **Doctor Management** – Add, edit, or remove doctors seamlessly.  
- 📊 **Appointment Oversight** – Track all appointments in one dashboard.  
- 🖥 **Admin Panel** – Access at `/admin` to manage your practice efficiently.  
- 💳 **Clerk Billing** – Monitor subscriptions and premium feature payments.  

### 💌 Email Notifications
- ✉️ **Automated Emails** – Sent via **Resend**, built with **@react-email/components**.  
- 📝 **Full Appointment Details** – Includes doctor, date/time, type, duration, and cost.  
- 🖼 **Professional Templates** – Sleek and readable for all patients.  

### 🎨 UI & UX
- ⚡ **Next.js & Tailwind CSS** – Fast, modern, and responsive.  
- 🖱 **Interactive Components** – Smooth toasts and animations via **Sonner**.  
- 🌓 **Future Dark Mode** – Prepared for dark theme integration.  
- 🧩 **shadcn/ui** – Ready-to-use components for consistent UI.  

---

## 🛠 Technology Stack

| Technology | Description | Icon |
|------------|-------------|------|
| **Next.js** | Full-stack React framework | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) |
| **Tailwind CSS** | Utility-first CSS framework | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Clerk** | Authentication & user management | ![Clerk](https://img.shields.io/badge/Clerk-3D6EE1?style=for-the-badge&logo=clerk&logoColor=white) |
| **Clerk Billing** | Subscription & payments management | ![Clerk Billing](https://img.shields.io/badge/Clerk_Billing-FF6F61?style=for-the-badge) |
| **Sonner** | Toast notifications | ![Sonner](https://img.shields.io/badge/Sonner-FF6F61?style=for-the-badge) |
| **Resend** | Email sending service | ![Resend](https://img.shields.io/badge/Resend-2563EB?style=for-the-badge&logo=mailchimp&logoColor=white) |
| **PostgreSQL (Neon)** | Cloud relational database | ![PostgreSQL](https://img.shields.io/badge/Neon_PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white) |
| **Prisma ORM** | Type-safe database ORM | ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white) |
| **VAPI AI** | AI-powered virtual assistant | ![VAPI AI](https://img.shields.io/badge/VAPI_AI-FF4500?style=for-the-badge) |
| **Lucide Icons** | Open-source icon library | ![Lucide Icons](https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white) |
| **shadcn/ui** | Ready-to-use React UI components | ![shadcn UI](https://img.shields.io/badge/shadcn_ui-2563EB?style=for-the-badge) |

---

## 🖼 Screenshots

**Dashboard & Appointment Booking**  
![Dashboard Screenshot](https://github.com/soumojit622/Ivory/blob/master/public/dashboard.jpg)  

**Email Confirmation Example**  
![Email Screenshot](https://github.com/soumojit622/Ivory/blob/master/public/mail.jpg)  

> 💡 *Tip:* Screenshots highlight responsive UI and email confirmation workflow.

---

## 🏗 Architecture / Workflow

<img src="https://github.com/soumojit622/Ivory/blob/master/public/workflow.png" alt="Workflow Diagram" width="600" style="display:block; margin:auto;">

> *Diagram shows the flow: patient books → appointment saved in Neon DB via Prisma → email sent via Resend → admin manages via dashboard.*

---

## 🔒 Authentication & Security
- 🔐 **Clerk Authentication** – Secure login and registration.  
- 🛡 **Admin Access** – Restricted to `ADMIN_EMAIL`.  
- 👤 **User Privacy** – Users can only access their own appointments.  
- 🔑 **Passwordless & Verified Email** – Extra security layer.  

---

## ⚡ Future Enhancements
- 💳 Payment gateway integration for deposits.  
- ⏰ Real-time appointment reminders.  
- 📈 Admin analytics dashboard for appointments, revenue, patient activity.  
- 🏥 Multi-doctor support with advanced filtering and search.  
- 🌙 Dark mode for better UX.  
- 🤖 AI assistant via **VAPI AI** for patient queries.  

---

## ⚙️ Environment Variables

Before running Ivory, set up your `.env` file with the following keys:

```env
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database Connection
DATABASE_URL=your_postgres_database_url

# VAPI AI Assistant Configuration
NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_assistant_id
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key

# Admin Account
ADMIN_EMAIL=your_admin_email

# Expose admin email to frontend if needed
NEXT_PUBLIC_ADMIN_EMAIL=your_admin_email

# Email Sending Service
RESEND_API_KEY=your_resend_api_key

# Application URL
NEXT_PUBLIC_APP_URL=your_app_url
```

## 💬 Contribute

We welcome contributions from developers and enthusiasts!  

1. 🍴 Fork the repository.  
2. 🌿 Create a new branch:  
    ```bash
    git checkout -b feature-branch
    ```
3. 🖊️ Commit your changes:  
    ```bash
    git commit -m "Add your feature"
    ```
4. 🚀 Push the branch:  
    ```bash
    git push origin feature-branch
    ```
5. 🔀 Open a pull request.  

---

## 📬 Contact & Support
💬 **Questions or suggestions? Reach out!**  

📧 [soumojitbanerjee22@gmail.com](mailto:soumojitbanerjee22@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/soumojit-banerjee-4914b3228/)  

---

## 👨‍💻 Developed by [Soumojit Banerjee](https://www.linkedin.com/in/soumojit-banerjee-4914b3228/)

⭐ If you enjoyed using Ivory, give it a star on GitHub!  
