<p align="center">
  <img src="https://i.ibb.co/qYXDbTTT/H-book-logo-11zon.png" alt="H book Logo" width="130" />
</p>

<h1 align="center">H book</h1>

<p align="center">
  <b>An Enterprise-Grade Automated Payroll & Employee Attendance Management System</b><br>
  Engineered with Google Apps Script, Google Sheets, and a High-Performance Responsive Web UI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Google%20Apps%20Script-orange?style=flat-square" alt="Google Apps Script">
  <img src="https://img.shields.io/badge/Database-Google%20Sheets-green?style=flat-square" alt="Google Sheets">
  <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JS-blue?style=flat-square" alt="Tech Stack">
  <img src="https://img.shields.io/badge/License-MIT-purple?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/Status-Production%20Ready-success?style=flat-square" alt="Status">
</p>

---

## 📋 Table of Contents
1. [About The Project](#-about-the-project)
2. [Core Architecture & Technology Stack](#-core-architecture--technology-stack)
3. [Key Modules & Features](#-key-modules--features)
4. [Role-Based Access Control (RBAC)](#-role-based-access-control-rbac)
5. [Setup & Deployment Guide](#-setup--deployment-guide)
6. [Project File Structure](#-project-file-structure)
7. [License](#-license)

---

## 📖 About The Project

**H book** is a powerful, custom-built administrative tool designed to completely automate workforce management, attendance tracking, and monthly salary processing[cite: 1, 2]. Built to handle intensive business operations, it bridges the gap between raw data storage (Google Sheets) and a lightning-fast, modern web interface. Featuring an adaptive dual-layout design, it delivers an optimal workspace experience across both high-resolution PC displays and mobile handheld devices[cite: 1, 2].

---

## 🛠 Core Architecture & Technology Stack

*   **Backend Logic**: Google Apps Script (`.gs`) handling server-side database querying, session tokens, security verification, and cloud synchronization.
*   **Database Storage**: Relational Google Sheets acting as an instant, scalable backend data warehouse.
*   **Frontend Interface**: Pure HTML5, modern CSS3 (Flexbox/Grid), and vanilla JavaScript (ES6+) structured for optimal performance.
*   **Styling System**: Google Material Symbols, Google Fonts (*Poppins*), and custom responsive media queries[cite: 1].
*   **Export Engine**: Integrated `html2pdf.js` library for client-side payslip generation and multi-month statement compilation[cite: 1].

---

## ✨ Key Modules & Features

### 1. 👥 Employee Master & Document Library
*   **Complete Lifecycle Management**: Add new employee profiles, edit personal data, manage contact fields, and track status indicators (`Working` vs. `X Working`)[cite: 1, 2].
*   **Drive Document Vault**: Upload employee compliance files (Aadhaar, PAN, Bank forms) directly through the interface to link securely with Google Drive storage[cite: 1, 2].

### 2. 📆 Advanced Attendance Matrix
*   **Real-time Matrix Grid**: View and update full monthly rosters with freeze-pane headers for high-volume employee lists[cite: 1, 2].
*   **Custom Status Tags**: Instant visual color coding for **Present (P)**, **Absent (A)**, **Half Absent (HA)**, **Leave (L)**, **Half Leave (HL)**, and **Holiday (H)**[cite: 1, 2].
*   **Mobile Numerical Keypad**: Specialized bottom-docked touch keypad allowing fast mobile input without triggering native OS keyboards[cite: 1, 2].
*   **Excel-like Navigation**: Full keyboard arrow navigation and `Enter` key support for swift data entry[cite: 1, 2].

### 3. 💰 Salary Processing & Ledger
*   **Automated Payroll Calculations**: Instantly computes final earnings based on basic pay, previous balances, absent penalties, and advance deductions[cite: 1, 2].
*   **Advance Salary Tracker**: Log mid-month draws, view historical advance entries in dedicated modals, and automatically carry forward adjustments[cite: 1, 2].
*   **Compliance Integration**: Built-in configuration frameworks for ESIC and EPFO statutory calculations[cite: 1, 2].

### 4. 📄 Professional Slips & Statements
*   **Individual & Bulk Payslips**: Print or export single and batch employee salary slips styled with official company branding and verification watermarks[cite: 1, 2].
*   **Multi-Month Financial Statements**: Generate chronological account statements across custom date ranges for precise auditing[cite: 1, 2].

### 5. ☁️ Smart Backup Vault
*   **Dual-Mode Backup System**: Secure your data instantly via local `.xlsx` spreadsheet downloads or automated Google Drive cloud vault replacements[cite: 1, 2].

---

## 🔒 Role-Based Access Control (RBAC)

**H book** incorporates a secure dual-tier permission hierarchy:
*   **Admin**: Full access to all database targets, security access controls, employee registrations, security setting configurations, and financial ledgers[cite: 1, 2].
*   **Manager**: Restricted access tailored specifically for streamlined daily attendance grid management and operational entry[cite: 1, 2].

---

## 🚀 Setup & Deployment Guide

To deploy your own instance of **H book**:

1. **Clone the Repository**:
   ```bash
   git clone [https://github.com/your-username/h-book.git](https://github.com/your-username/h-book.git)
