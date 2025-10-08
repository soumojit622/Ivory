# 🦷 Ivory - Dental Appointment Management Web App

**Ivory** is a modern, intuitive web application designed for dental practices to streamline appointment booking and management. Patients can book appointments quickly, receive email confirmations, and keep track of their dental care, while admins can manage doctors and appointments effortlessly.

---

## 🌟 Key Features

### 🧑‍⚕️ Patient Features
- Effortless appointment booking with a clean, responsive interface.
- Instant email confirmation with appointment details.
- Quick overview of upcoming appointments on a personalized dashboard.
- Mobile-first design ensures seamless experience across devices.
- Friendly UI with interactive components and animations.

### 🛠 Admin Features
- Secure admin access restricted to verified email (`ADMIN_EMAIL`).
- Add, edit, or remove doctors in the system.
- Monitor and manage all appointments with ease.
- Access the admin panel at `/admin` to oversee your practice.

### 💌 Email Notifications
- Automated appointment confirmation emails via **Resend**.
- Beautiful, professional email templates built with **@react-email/components**.
- Emails include full appointment details: doctor, date, time, type, duration, and cost.

### 🎨 UI & UX
- Built with **Next.js** and **Tailwind CSS** for a modern, sleek look.
- Animated elements, hover effects, and interactive toasts (via **Sonner**) improve user engagement.
- Responsive, mobile-friendly layout with easy navigation.

---

## 🛠 Technology Stack

| Technology | Description | Icon |
|------------|-------------|------|
| **Next.js** | Full-stack React framework for building scalable web apps | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) |
| **Tailwind CSS** | Utility-first CSS framework for modern responsive UI | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| **Clerk** | Authentication & user management | ![Clerk](https://img.shields.io/badge/Clerk-3D6EE1?style=for-the-badge&logo=clerk&logoColor=white) |
| **Sonner** | Toast notifications library | ![Sonner](https://img.shields.io/badge/Sonner-FF6F61?style=for-the-badge) |
| **Resend** | Email sending service for React components | ![Resend](https://img.shields.io/badge/Resend-2563EB?style=for-the-badge&logo=mailchimp&logoColor=white) |
| **PostgreSQL** | Relational database for storing app data | ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white) |
| **Lucide Icons** | Open-source icon library for React | ![Lucide Icons](https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white) |

---

## 🖼 Screenshots

### Dashboard & Appointment Booking
![Dashboard Screenshot](https://i.ibb.co/tRy6cC2/logo.png)  

### Email Confirmation Example
![Email Screenshot](https://i.ibb.co/your-email-screenshot.png)  

---

## 🔒 Authentication & Security
- Secure login and registration using **Clerk**.
- Admin functionality restricted to `ADMIN_EMAIL`.
- Users can only view and manage their own appointments.
- Passwordless authentication and email verification for extra security.

---

## ⚡ Future Enhancements
- Integration with payment gateways for appointment deposits.
- Real-time notifications for appointment reminders.
- Analytics dashboard for admins: track appointments, revenue, and patient activity.
- Multi-doctor support with advanced filtering and search.
- Dark mode for better user experience.

---

## 🤝 Contributing

We welcome contributions!  
1. Fork the repository  
2. Create a new branch (`git checkout -b feature/YourFeature`)  
3. Commit your changes (`git commit -m 'Add YourFeature'`)  
4. Push to your branch (`git push origin feature/YourFeature`)  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  

---

Made with ❤️ by **Soumojit Banerjee**  
[Website](https://soumojit.vercel.app) | [GitHub](https://github.com/soumojit622) | [LinkedIn](https://www.linkedin.com/in/soumojit-banerjee-4914b3228)
