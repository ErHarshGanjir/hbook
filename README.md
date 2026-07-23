<p align="center">
  <img src="https://i.ibb.co/qYXDbTTT/H-book-logo-11zon.png" alt="H book Logo" width="140" />
</p>

<h1 align="center">H book</h1>

<p align="center">
  <b>Enterprise-Grade Automated Payroll & Workforce Attendance Management Ecosystem</b><br>
  <i>Built with heart, guided by experience, and engineered for seamless automation.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Google%20Apps%20Script-orange?style=flat-square" alt="Google Apps Script">
  <img src="https://img.shields.io/badge/Database-Google%20Sheets-green?style=flat-square" alt="Google Sheets">
  <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JS-blue?style=flat-square" alt="Tech Stack">
  <img src="https://img.shields.io/badge/License-MIT-success?style=flat-square" alt="License">
</p>

---

## 🌟 The Story & Dedication

Great software is never just about writing lines of code; it is about the visionaries who dream it, the anchors who support it, and the friends who inspire it. **H book** is a labor of love, built to solve real-world challenges while honoring the people who made it possible.

*   **Project Director & Backbone:** **Rahul** — The guiding force and structural pillar of this entire endeavor. Without your unwavering direction and clarity, this vision would never have taken shape.
*   **Lead Developer / Engineer:** **Er. Harsh Ganjir** — Translating complex ideas into reality, line by line, and bringing the architecture to life.
*   **Special Dedication:** This project is lovingly dedicated to **Jay**. Your constant support, inspiration, and invaluable presence were the true driving forces behind every late-night coding session. This one is for you! ❤️
*   **Our Benchmark & Guiding Light:** A profound acknowledgment goes to our foundational **X Project (Excel and VBA)**. That masterpiece served as our ultimate benchmark, providing the core logic and helping us overcome hurdles at every single point of this system's web development.

---

## 📋 Table of Contents
1. [Overview & Architecture](#-overview--architecture)
2. [Role-Based Access Control (RBAC)](#-role-based-access-control-rbac)
3. [Comprehensive Module Directory](#-comprehensive-module-directory)
4. [Project File Structure](#-project-file-structure)
5. [Deployment Guide](#-deployment-guide)

---

## 🏛️ Overview & Architecture

**H book** is structured around a decoupled client-server model. 
*   **The Backend (`Code.gs`)** is managed via Google Apps Script executing server-side JavaScript, interfacing directly with structured Google Sheets ranges and Google Drive cloud folders.
*   **The Frontend (`Index.html`)** is a unified single-file adaptive web client that detects screen widths in real-time, switching seamlessly between a dense desktop dashboard and a touch-optimized mobile workspace complete with a custom bottom keypad[cite: 1].

---

## 🔒 Role-Based Access Control (RBAC)

The system enforces strict permission parameters determined during user authentication[cite: 1, 2]:
*   **Admin**: Unrestricted access to system configuration, security settings, user management, cross-month database target switching, and full payroll registers[cite: 1, 2].
*   **Manager**: Restricted strictly to the current active month's attendance matrix view and designated data-entry operations[cite: 1, 2].
*   **Token Security**: Utilizes secure 15-day session tokens saved locally via browser storage coupled with server-side expiry timestamp verifications[cite: 1, 2].

---

## 📦 Comprehensive Module Directory

### 1. Core Authentication & Session Module
Handles user verification, session persistence, token handling, and role restrictions[cite: 1, 2].
*   `checkLogin(username, password)`: Evaluates credentials against the database, generating a secure 15-day UUID session token.
*   `validateSessionToken(savedToken)`: Validates active session tokens for automated user re-entry.
*   `saveNewUser(id, pass, role)`: Creates or updates user profiles and system access levels.
*   `updateOwnPassword(userId, oldPassword, newPassword)`: Validates existing passwords and updates user credentials securely[cite: 2].

### 2. Employee Master Profile & Compliance Module
Manages workforce demographics, metadata, compliance tracking, and Google Drive document vaults[cite: 1, 2].
*   `getEmployeeMaster(targetMonth)`: Cross-references master profiles to compile active working states, basic salaries, and deductions[cite: 2].
*   `uploadToDrive(...)`: Decodes base64 document payloads, uploads files to Google Drive, and appends JSON link tuples to the employee record[cite: 2].
*   `toggleComplianceStatus(...)`: Enables or disables statutory compliance configurations (ESIC / EPFO) dynamically[cite: 2].
*   `saveNewEmployee(formData, targetMonth)`: Registers a new employee into the master sheet grid and automatically provisions them inside the active month sheet[cite: 2].

### 3. Advanced Attendance Matrix Module
Handles real-time attendance rosters, cell color-coding, keyboard traversal, and mobile input mapping[cite: 1, 2].
*   `getAttendanceData(monthSheetName)`: Extracts active working personnel and slices daily attendance arrays[cite: 2].
*   `updateAttendanceCell(...)`: Writes individual attendance marks (`P`, `A`, `HA`, `L`, `HL`, `H`) to designated coordinate matrix cells[cite: 2].
*   `handleGridNav(...)`: Intercepts keyboard navigation for seamless Excel-like matrix movement[cite: 1].
*   `pressKeypad(val)`: Manages the touch-optimized bottom numeric keypad interface for fast mobile attendance entry[cite: 1].

### 4. Salary Processing & Ledger Module
Computes earnings, handles advance draws, deductions, and payment modes[cite: 1, 2].
*   `saveSalaryPayment(...)`: Records finalized salary amounts, payment dates, and payment types into designated ledger columns[cite: 2].
*   `saveAdvancePayment(...)`: Appends mid-month advance distributions into JSON ledger arrays and recalculates running total columns[cite: 2].
*   `openSalaryBreakdown(empId)`: Aggregates basic pay, absence penalties, advance logs, and round-figure adjustments into an analytical modal[cite: 1].

### 5. Payslip & Multi-Month Statement Module
Compiles printable and PDF-exportable document outputs[cite: 1, 2].
*   `buildSlipTemplate(...)`: Constructs HTML templates embedded with dynamic inline watermarks, calculation boxes, and attendance grids[cite: 1].
*   `triggerStatementGeneration()`: Parses searchable employee tokens and date range parameters to produce multi-month chronological audit reports[cite: 1].
*   `executeNewTabDoc(...)`: Spawns sandboxed document views equipped with native printing options and `html2pdf.js` client-side conversion pipelines[cite: 1].

### 6. Secure Smart Backup Vault Module
Manages data export integrity and cloud redundancy[cite: 1, 2].
*   `executeSmartBackup(activeUser, mode)`: Employs an isolated memory-locked temp sheet engine to export clean `.xlsx` blobs for local download or Google Drive vault replacement[cite: 2].

---

## 📁 Project File Structure

```text
H-book/
├── Code.gs             # Server-side business logic, security routines, and DB handlers
├── Index.html          # Adaptive client-side workspace (PC dashboards, mobile views, modals)
└── README.md           # Exhaustive system documentation
