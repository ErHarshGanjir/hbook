<p align="center">
  <img src="https://i.ibb.co/qYXDbTTT/H-book-logo-11zon.png" alt="H book Logo" width="150" />
</p>

<h1 align="center">✨ H book ✨</h1>

<p align="center">
  <b>Enterprise-Grade Automated Payroll & Workforce Attendance Management Ecosystem</b><br>
  <i>Built with heart, guided by experience, and engineered for seamless automation.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Google%20Apps%20Script-orange?style=for-the-badge" alt="Google Apps Script">
  <img src="https://img.shields.io/badge/Database-Google%20Sheets-green?style=for-the-badge" alt="Google Sheets">
  <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JS-blue?style=for-the-badge" alt="Tech Stack">
  <img src="https://img.shields.io/badge/License-MIT-success?style=for-the-badge" alt="License">
</p>

---

## 🌟 The Story & Dedication

Great software is never just about writing lines of code; it is about the visionaries who dream it, the anchors who support it, and the friends who inspire it. **H book** is a labor of love, built to solve real-world challenges while honoring the people who made it possible.

*   🎯 **Project Director & Backbone:** **Rahul** — The guiding force and structural pillar of this entire endeavor. Without your unwavering direction and clarity, this vision would never have taken shape.
*   💻 **Lead Developer / Engineer:** **Er. Harsh Ganjir** — Translating complex ideas into reality, line by line, and bringing the architecture to life.
*   ❤️ **Special Dedication:** This project is lovingly dedicated to **Jay**. Your constant support, inspiration, and invaluable presence were the true driving forces behind every late-night coding session. This one is for you!
*   📊 **Our Benchmark & Guiding Light:** A profound acknowledgment goes to our foundational **X Project (Excel and VBA)**. That masterpiece served as our ultimate benchmark, providing the core logic and helping us overcome hurdles at every single point of this system's web development.

---

## 📋 Table of Contents
1. [Overview & Architecture](#-overview--architecture)
2. [Role-Based Access Control (RBAC)](#-role-based-access-control-rbac)
3. [📖 User Manual (How to Use)](#-user-manual-how-to-use)
4. [🛠️ Comprehensive Function Directory](#️-comprehensive-function-directory)
5. [📁 Project File Structure](#-project-file-structure)
6. [🚀 Deployment Guide](#-deployment-guide)

---

## 🏛️ Overview & Architecture

**H book** is structured around a highly efficient decoupled client-server model. 
*   **The Backend (`Code.gs`)** is managed via Google Apps Script executing server-side JavaScript, interfacing directly with structured Google Sheets ranges and Google Drive cloud folders.
*   **The Frontend (`Index.html`)** is a unified single-file adaptive web client that detects screen widths in real-time, switching seamlessly between a dense desktop dashboard and a touch-optimized mobile workspace complete with a custom bottom keypad[cite: 1].

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
*   **Edit & Toggle Status:** Click on an employee's name to edit their profile. You can upload documents directly to their Drive Vault or toggle their status between `Working` and `X Working`[cite: 1, 2].

### 3️⃣ Marking Attendance (Attendance Tab)
*   **PC Interface:** Click any cell in the grid and type `P` (Present), `A` (Absent), `HA` (Half Absent), `L` (Leave), `HL` (Half Leave), or `H` (Holiday)[cite: 1]. You can use your keyboard's **Arrow Keys** and **Enter** to navigate the grid just like Excel[cite: 1]!
*   **Mobile Interface:** Tap a cell, then use the **Custom Floating Keypad** at the bottom of the screen to punch in attendance quickly[cite: 1].

### 4️⃣ Processing Salaries & Advances (Salary Tab)
*   **Advance Salary:** Log mid-month advance distributions. The system automatically updates the employee's accumulated ledger[cite: 1, 2].
*   **Process Salary:** View final generated salaries. Enter the *Paid Amount*, *Date*, and *Payment Mode* (Cash/Online) and click Save[cite: 1].
*   **Breakdown:** Click an employee's name in the Salary tab to see a detailed modal explaining exactly how their salary was calculated (Basic + Prev Balance - Deductions)[cite: 1].

### 5️⃣ Generating Slips & Backups
*   **Salary Slips & Statements:** Generate beautiful, print-ready PDF payslips with attendance calendars and watermarks[cite: 1].
*   **Data Backup:** Go to the Salary Tab -> Data Backup. You can download your database as a local `.xlsx` Excel file or sync it directly to a secure Google Drive Vault[cite: 1, 2].

---

## 🛠️ Comprehensive Function Directory

Below is the detailed technical breakdown of the core functions powering **H book**.

### 🔐 1. Authentication & Security
| Function Name | Location | Description |
| :--- | :--- | :--- |
| `checkLogin()` | Server | Evaluates credentials against the database and generates a secure 15-day UUID session token. |
| `validateSessionToken()` | Server | Cross-references active local session tokens against server-side expiration timestamps for auto-login. |
| `saveNewUser()` | Server | Creates or updates user profiles and system access levels (Admin/Manager) in the security sheet. |
| `updateOwnPassword()` | Server | Validates existing passwords and updates user credentials securely[cite: 2]. |

### 👥 2. Employee Profile & Compliance
| Function Name | Location | Description |
| :--- | :--- | :--- |
| `getEmployeeMaster()` | Server | Cross-references master profiles to compile active working states, basic salaries, and running deductions[cite: 2]. |
| `saveNewEmployee()` | Server | Registers a new employee into the master sheet grid and automatically provisions them inside the active month sheet[cite: 2]. |
| `uploadToDrive()` | Server | Decodes base64 document payloads (PDFs/Images), uploads them to Google Drive, and appends JSON link tuples to the employee record[cite: 2]. |
| `toggleComplianceStatus()` | Server | Enables or disables statutory compliance configurations (ESIC / EPFO) dynamically[cite: 2]. |

### 📅 3. Attendance Matrix Engine
| Function Name | Location | Description |
| :--- | :--- | :--- |
| `getAttendanceData()` | Server | Extracts active working personnel and slices daily attendance arrays for UI rendering[cite: 2]. |
| `updateAttendanceCell()` | Server | Writes individual attendance marks (`P`, `A`, `HA`, `L`, `HL`, `H`) to designated coordinate matrix cells in real-time[cite: 2]. |
| `handleGridNav()` | Client | Intercepts keyboard navigation (`Arrow Keys`, `Enter`) to allow seamless, Excel-like matrix movement without mouse clicks[cite: 1]. |
| `pressKeypad()` | Client | Manages the touch-optimized bottom numeric keypad interface for lightning-fast mobile attendance entry[cite: 1]. |

### 💰 4. Salary & Ledger Processing
| Function Name | Location | Description |
| :--- | :--- | :--- |
| `saveSalaryPayment()` | Server | Records finalized salary amounts, payment dates, and payment types (Cash/Online) into designated ledger columns[cite: 2]. |
| `saveAdvancePayment()` | Server | Appends mid-month advance distributions into JSON ledger arrays and dynamically recalculates running total columns[cite: 2]. |
| `openSalaryBreakdown()` | Client | Aggregates basic pay, absence penalties, advance logs, and round-figure adjustments into an analytical breakdown modal[cite: 1]. |

### 📄 5. Payslips & Document Generation
| Function Name | Location | Description |
| :--- | :--- | :--- |
| `buildSlipTemplate()` | Client | Constructs HTML templates embedded with dynamic inline watermarks, calculation summary boxes, and dynamic attendance grids[cite: 1]. |
| `triggerStatementGeneration()` | Client | Parses searchable employee tokens and date range parameters to produce multi-month chronological audit reports[cite: 1]. |
| `executeNewTabDoc()` | Client | Spawns sandboxed document views equipped with native printing options and `html2pdf.js` client-side PDF conversion pipelines[cite: 1]. |

### ☁️ 6. Smart Backup Vault
| Function Name | Location | Description |
| :--- | :--- | :--- |
| `executeSmartBackup()` | Server | Employs an isolated memory-locked temp sheet engine to export clean `.xlsx` blobs for local download or Google Drive vault replacement[cite: 2]. |

---

## 📁 Project File Structure

```text
H-book/
├── Code.gs             # Backend: Server-side business logic, security routines, and DB handlers
├── Index.html          # Frontend: Adaptive client-side workspace (PC dashboards, mobile views)
└── README.md           # Documentation: Exhaustive system guide and credits
