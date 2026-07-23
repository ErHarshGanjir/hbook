<p align="center">
  <img src="https://i.ibb.co/qYXDbTTT/H-book-logo-11zon.png" alt="H book Logo" width="150" />
</p>

<h1 align="center">H book</h1>

<p align="center">
  <b>Advanced Automated Payroll, Workforce Attendance & Cloud Resource Management Ecosystem</b><br>
  <i>Built with heart, guided by experience, and engineered for infinite scalability.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Atlas">
  <img src="https://img.shields.io/badge/Hosting-Hostinger-673AB7?style=for-the-badge" alt="Hostinger">
  <img src="https://img.shields.io/badge/DNS-GoDaddy-1BDBDB?style=for-the-badge&logo=godaddy&logoColor=white" alt="GoDaddy">
  <img src="https://img.shields.io/badge/Version%20Control-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/Alternative%20Build-Google%20Apps%20Script-orange?style=for-the-badge" alt="GAS">
</p>

---

## 🌟 The Story & Dedication

Great software is never just about writing lines of code; it is about the visionaries who dream it, the anchors who support it, and the friends who inspire it. **H book** is built to solve real-world challenges while honoring the people who made it possible.

*   🎯 **Project Director & Backbone:** **Rahul** — The guiding force and structural pillar of this entire endeavor. Without your unwavering direction and clarity, this vision would never have taken shape.
*   ❤️ **Special Dedication:** This project is lovingly dedicated to **Jay**. Your constant support, inspiration, and invaluable presence were the true driving forces behind every late-night coding session. This one is for you!
*   💻 **Lead Developer :** **Harsh** — Translating complex architecture into reality, deploying secure clusters, and bringing the full-stack vision to life.
*   📊 **Our Benchmark & Guiding Light:** A profound acknowledgment goes to our foundational **X Project (Excel and VBA) H Book Pro max**. That masterpiece served as our ultimate benchmark, providing the core financial logic and helping us overcome hurdles at every single point of this system's enterprise evolution.

---

## 📋 Table of Contents
1. [Enterprise Architecture & Infrastructure](#-enterprise-architecture--infrastructure)
2. [Role-Based Access Control (RBAC)](#-role-based-access-control-rbac)
3. [📖 User Manual (How to Use)](#-user-manual-how-to-use)
4. [🛠️ Comprehensive Function Directory](#️-comprehensive-function-directory)
5. [🚀 Deployment & DevOps Pipeline](#-deployment--devops-pipeline)

---

## 🏛️ Enterprise Architecture & Infrastructure

**H book** has been radically upgraded from its original spreadsheet roots into a highly scalable, production-ready cloud application. 

*   **Primary Database (MongoDB Atlas):** Data is structured in a fully managed NoSQL cloud database, allowing for rapid querying of complex multi-month financial statements and high-volume daily attendance matrices.
*   **Web Hosting (Hostinger):** The primary frontend and backend API layers are hosted on Hostinger for ultra-fast load times, 99.9% uptime, and SSL-secured data transmission.
*   **Domain & DNS (GoDaddy):** Custom domain registration and DNS routing are configured through GoDaddy, seamlessly pointing A-Records and CNAMEs to the Hostinger servers.
*   **Source Control (GitHub):** The entire codebase is version-controlled on GitHub, acting as the central hub for CI/CD pipelines, code reviews, and automated deployment pushes.
*   **Alternative Legacy Deployment (Google Apps Script):** For environments requiring zero-cost overhead, the system retains a fully functional alternative deployment utilizing **Google Apps Script (Backend)** and **Google Sheets (Database)**[cite: 1, 2].

---

## 🔒 Role-Based Access Control (RBAC)

The system enforces strict permission parameters determined during user authentication[cite: 1, 2]:
*   👑 **Admin**: Unrestricted access to system configuration, security settings, user management, cross-month database target switching, and full payroll registers[cite: 1, 2].
*   👤 **Manager**: Restricted strictly to the current active month's attendance matrix view and designated data-entry operations[cite: 1, 2].
*   🔑 **Token Security**: Utilizes secure 15-day session tokens saved locally via browser storage coupled with server-side expiry timestamp verifications[cite: 1, 2].

---

## 📖 User Manual (How to Use)

Welcome to the **H book** operating guide! Here is how to navigate and utilize the system effectively:

### 1️⃣ Login & Navigation
*   Navigate to the deployed Web App URL.
*   Enter your **User ID** and **Password**. The system will securely log you in and remember your session for 15 days[cite: 1, 2].
*   Use the **Sidebar (PC)** or **Bottom Navigation Bar (Mobile)** to switch between Profiles, Attendance, Salary, and Settings[cite: 1].

### 2️⃣ Managing Employees (Profiles Tab)
*   **Add New:** Click the `+ Add New` button to register an employee. Fill in their personal details, bank info, and compliance numbers[cite: 1].
*   **Edit & Toggle Status:** Click on an employee's name to edit their profile. You can upload documents directly to their Cloud Vault or toggle their status between `Working` and `X Working`[cite: 1, 2].

### 3️⃣ Marking Attendance (Attendance Tab)
*   **PC Interface:** Click any cell in the grid and type `P` (Present), `A` (Absent), `HA` (Half Absent), `L` (Leave), `HL` (Half Leave), or `H` (Holiday)[cite: 1]. You can use your keyboard's **Arrow Keys** and **Enter** to navigate the grid just like Excel[cite: 1]!
*   **Mobile Interface:** Tap a cell, then use the **Custom Floating Keypad** at the bottom of the screen to punch in attendance quickly[cite: 1].

### 4️⃣ Processing Salaries & Advances (Salary Tab)
*   **Advance Salary:** Log mid-month advance distributions. The system automatically updates the employee's accumulated ledger[cite: 1, 2].
*   **Process Salary:** View final generated salaries. Enter the *Paid Amount*, *Date*, and *Payment Mode* (Cash/Online) and click Save[cite: 1].
*   **Breakdown:** Click an employee's name in the Salary tab to see a detailed modal explaining exactly how their salary was calculated (Basic + Prev Balance - Deductions)[cite: 1].

### 5️⃣ Generating Slips & Backups
*   **Salary Slips & Statements:** Generate beautiful, print-ready PDF payslips with attendance calendars and watermarks[cite: 1].
*   **Data Backup:** Go to the Salary Tab -> Data Backup. You can download your database as a local file or sync it directly to a secure cloud vault[cite: 1, 2].

---

## 🛠️ Comprehensive Function Directory

### 🔐 1. Authentication & Security
| Function Name | Description |
| :--- | :--- |
| `checkLogin()` | Evaluates credentials against the database and generates a secure session token[cite: 2]. |
| `validateSessionToken()` | Cross-references active local session tokens against server-side expiration timestamps for auto-login[cite: 2]. |
| `saveNewUser()` | Creates or updates user profiles and system access levels (Admin/Manager)[cite: 2]. |

### 👥 2. Employee Profile & Compliance
| Function Name | Description |
| :--- | :--- |
| `getEmployeeMaster()` | Cross-references master profiles to compile active working states, basic salaries, and running deductions[cite: 2]. |
| `saveNewEmployee()` | Registers a new employee into the master database and automatically provisions them[cite: 2]. |
| `uploadToDrive()` | Decodes base64 document payloads (PDFs/Images) and uploads them to the Cloud Vault[cite: 2]. |

### 📅 3. Attendance Matrix Engine
| Function Name | Description |
| :--- | :--- |
| `updateAttendanceCell()` | Writes individual attendance marks (`P`, `A`, `HA`, `L`, `HL`, `H`) to designated coordinate matrix cells in real-time[cite: 2]. |
| `handleGridNav()` | Intercepts keyboard navigation (`Arrow Keys`, `Enter`) to allow seamless, Excel-like matrix movement without mouse clicks[cite: 1]. |
| `pressKeypad()` | Manages the touch-optimized bottom numeric keypad interface for lightning-fast mobile attendance entry[cite: 1]. |

### 💰 4. Salary & Ledger Processing
| Function Name | Description |
| :--- | :--- |
| `saveSalaryPayment()` | Records finalized salary amounts, payment dates, and payment types (Cash/Online) into designated ledger records[cite: 2]. |
| `openSalaryBreakdown()` | Aggregates basic pay, absence penalties, advance logs, and round-figure adjustments into an analytical breakdown modal[cite: 1]. |

### 📄 5. Payslips & Document Generation
| Function Name | Description |
| :--- | :--- |
| `buildSlipTemplate()` | Constructs HTML templates embedded with dynamic inline watermarks, calculation summary boxes, and dynamic attendance grids[cite: 1]. |
| `executeNewTabDoc()` | Spawns sandboxed document views equipped with native printing options and `html2pdf.js` client-side PDF conversion pipelines[cite: 1]. |

---

## 🚀 Deployment & DevOps Pipeline

### Primary Enterprise Deployment (MERN / Hostinger)
1. **GitHub Repository:** Push your local source code to GitHub.
2. **MongoDB Atlas:** 
   * Create a cluster and acquire the MongoDB URI.
   * Configure Network Access (IP Whitelisting) and Database Users.
3. **Hostinger Hosting:**
   * Connect your Hostinger account to the GitHub repository for automated CI/CD deployment.
   * Add the MongoDB URI and required API keys to your Hostinger environment variables (`.env`).
4. **GoDaddy DNS Configuration:**
   * Log into GoDaddy. Navigate to DNS Management.
   * Change the Nameservers to point to Hostinger (`hbook.rakhechamedical.in`) OR point the `A Record 185.199.108.153``A Record 185.199.109.153``A Record 185.199.110.153``A Record 185.199.111.153` to your Hostinger IP address.

### Alternative / Legacy Deployment (Google Apps Script)
*For lightweight or zero-cost execution:*
1. **Google Sheets Integration:** Initialize a target Google Spreadsheet and navigate to **Extensions > Apps Script**[cite: 2].
2. **Source Injection:** Paste the server-side code into `Code.gs` and create an HTML file named `Index` for `Index.html`[cite: 1, 2].
3. **Web App Deployment:** Click **Deploy > New Deployment**, select **Web App**, execute as **Me**, set access to **Anyone**, and authorize permissions[cite: 2].



---
<p align="center"><i>Made  by Er. Harsh Ganjir for Rakhecha medical stores </i></p>
<p align="center"><i>r for Rakhecha medical stores </i></p>
