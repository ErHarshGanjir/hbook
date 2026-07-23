<p align="center">
  <img src="https://i.ibb.co/qYXDbTTT/H-book-logo-11zon.png" alt="H book Logo" width="140" />
</p>

<h1 align="center">H book</h1>

<p align="center">
  <b>Enterprise-Grade Automated Payroll & Workforce Attendance Management Ecosystem</b><br>
  <i>Powered by Google Apps Script, Relational Google Sheets, and an Adaptive Dual-Interface Frontend.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-Google%20Apps%20Script-orange?style=flat-square" alt="Google Apps Script">
  <img src="https://img.shields.io/badge/Database-Google%20Sheets-green?style=flat-square" alt="Google Sheets">
  <img src="https://img.shields.io/badge/Frontend-HTML5%20%7C%20CSS3%20%7C%20JS-blue?style=flat-square" alt="Tech Stack">
  <img src="https://img.shields.io/badge/Architecture-MVC%20Client--Server-purple?style=flat-square" alt="Architecture">
  <img src="https://img.shields.io/badge/License-MIT-success?style=flat-square" alt="License">
</p>

---

## 📋 Table of Contents
1. [Overview & Architecture](#-overview--architecture)
2. [Role-Based Access Control (RBAC) & Security](#-role-based-access-control-rbac--security)
3. [Comprehensive Module & Function Directory](#-comprehensive-module--function-directory)
   * [1. Core Authentication & Session Module](#1-core-authentication--session-module)
   * [2. Employee Master Profile & Compliance Module](#2-employee-master-profile--compliance-module)
   * [3. Advanced Attendance Matrix Module](#3-advanced-attendance-matrix-module)
   * [4. Salary Processing & Ledger Module](#4-salary-processing--ledger-module)
   * [5. Payslip & Multi-Month Statement Module](#5-payslip--multi-month-statement-module)
   * [6. Secure Smart Backup Vault Module](#6-secure-smart-backup-vault-module)
4. [Project File Structure](#-project-file-structure)
5. [Deployment Guide](#-deployment-guide)

---

## 🏛️ Overview & Architecture

**H book** is structured around a decoupled client-server model. 
*   **The Backend (`H book bekend.txt`)** is managed via Google Apps Script executing server-side JavaScript, interfacing directly with structured Google Sheets ranges and Google Drive cloud folders.
*   **The Frontend (`H book front end.txt`)** is a unified single-file adaptive web client that detects screen widths in real-time, switching seamlessly between a dense desktop dashboard and a touch-optimized mobile workspace complete with a custom bottom keypad[cite: 1].

---

## 🔒 Role-Based Access Control (RBAC) & Security

The system enforces strict permission parameters determined during user authentication:
*   **Admin**: Unrestricted access to system configuration, security settings, user management, cross-month database target switching, and full payroll registers[cite: 1, 2].
*   **Manager**: Restricted strictly to the current active month's attendance matrix view and designated data-entry operations[cite: 1, 2].
*   **Token Security**: Utilizes secure 15-day session tokens saved locally via browser storage coupled with server-side expiry timestamp verifications[cite: 1, 2].

---

## 📦 Comprehensive Module & Function Directory

Below is the complete reference list of all functional modules, their underlying script functions, and explicit descriptions of their operations.

---

### 1. Core Authentication & Session Module
*Handles user verification, session persistence, token handling, and role restrictions[cite: 1, 2].*

| Function Name | Type | Description |
| :--- | :--- | :--- |
| `doGet()` | Server (`.gs`) | Initializes and renders the responsive single-page web app template (`Index.html`) with mobile viewport settings. |
| `getAdminSheet()` | Server (`.gs`) | Auto-creates or fetches the hidden `Admin_Users` configuration sheet, setting default admin credentials if uninitialized. |
| `checkLogin(username, password)` | Server (`.gs`) | Evaluates credentials against the database, generating a secure 15-day UUID session token upon a match. |
| `validateSessionToken(savedToken)` | Server (`.gs`) | Validates active session tokens against expiration timestamps for automated user re-entry. |
| `updateOwnPassword(userId, oldPassword, newPassword)` | Server (`.gs`) | Validates existing passwords and updates user credentials securely. |
| `fetchUsersForUI()` | Server (`.gs`) | Queries all registered system users to populate the admin access control matrix. |
| `saveNewUser(id, pass, role)` | Server (`.gs`) | Creates or updates user profiles and system access levels in the admin register. |
| `deleteUser(targetId)` | Server (`.gs`) | Permanently revokes access and deletes user rows from the security sheet. |

---

### 2. Employee Master Profile & Compliance Module
*Manages workforce demographics, metadata, compliance tracking, and Google Drive document vaults[cite: 1, 2].*

| Function Name | Type | Description |
| :--- | :--- | :--- |
| `getEmployeeMaster(targetMonth)` | Server (`.gs`) | Cross-references master profiles from the `emp` sheet with monthly data maps to compile active working states, basic salaries, and deductions[cite: 2]. |
| `saveNewEmployee(formData, targetMonth)` | Server (`.gs`) | Registers a new employee into the master sheet grid and automatically provisions them inside the active month sheet[cite: 2]. |
| `updateEmployeeData(formData)` | Server (`.gs`) | Updates specific demographic rows (Aadhaar, Bank, IFSC, Phone, Remarks) corresponding to employee records[cite: 2]. |
| `uploadToDrive(base64Data, filename, mimeType, empId, label)` | Server (`.gs`) | Decodes base64 document payloads, uploads files to a dedicated Google Drive folder (`DOCUMENTS_UPLOAD_FOLDER_ID`), and appends JSON link tuples to the employee record[cite: 2]. |
| `toggleEmployeeStatus(empId, targetMonth)` | Server (`.gs`) | Switches a staff member's operational status between `Working` and `X Working` for the targeted month sheet[cite: 2]. |
| `toggleComplianceStatus(targetMonth, empId, type, newStatus)` | Server (`.gs`) | Enables or disables statutory compliance configurations (ESIC / EPFO) dynamically[cite: 2]. |
| `updateComplianceBasicPay(targetMonth, empId, type, newValue)` | Server (`.gs`) | Updates base calculation amounts for overall, ESIC, or EPFO basic pay tiers[cite: 2]. |

---

### 3. Advanced Attendance Matrix Module
*Handles real-time attendance rosters, cell color-coding, keyboard traversal, and mobile input mapping[cite: 1, 2].*

| Function Name | Type | Description |
| :--- | :--- | :--- |
| `getAvailableDatabases()` | Server (`.gs`) | Scans the workbook to extract all active month database sheets, filtering out system control sheets[cite: 2]. |
| `getAttendanceData(monthSheetName)` | Server (`.gs`) | Calculates precise monthly date spans, extracts active working personnel, and slices daily attendance arrays (Columns Z onwards)[cite: 2]. |
| `updateAttendanceCell(targetMonth, empId, colIndex, value)` | Server (`.gs`) | Writes individual attendance marks (`P`, `A`, `HA`, `L`, `HL`, `H`) to designated coordinate matrix cells[cite: 2]. |
| `loadAttendance()` | Client (`.js`) | Dynamically constructs freeze-pane headers, calculates current day highlights, and injects attendance rows for both PC and mobile[cite: 1]. |
| `saveAttendance(inputElement, empId, colIndex)` | Client (`.js`) | Normalizes input text strings to uppercase and triggers asynchronous backend synchronization[cite: 1]. |
| `handleGridNav(event, empId, col)` | Client (`.js`) | Intercepts keyboard navigation (`Enter`, `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`) to allow seamless Excel-like matrix movement[cite: 1]. |
| `pressKeypad(val)` | Client (`.js`) | Manages the touch-optimized bottom numeric keypad interface for fast mobile attendance entry[cite: 1]. |

---

### 4. Salary Processing & Ledger Module
*Computes earnings, handles advance draws, deductions, and payment modes[cite: 1, 2].*

| Function Name | Type | Description |
| :--- | :--- | :--- |
| `saveSalaryPayment(targetMonth, empId, paidAmt, payDate, payMode)` | Server (`.gs`) | Records finalized salary amounts, payment dates, and payment types (`online`/`cash`) into designated ledger columns[cite: 2]. |
| `saveAdvancePayment(targetMonth, empId, amt, date, rem)` | Server (`.gs`) | Appends mid-month advance distributions into JSON ledger arrays and recalculates running total columns[cite: 2]. |
| `openSalaryAction(actionType)` | Client (`.js`) | Master router method that executes pre-fetching routines and launches specialized financial modals (Payment, Advance, Slips, Statement, Backup)[cite: 1]. |
| `renderSalaryPaymentTable()` | Client (`.js`) | Filters and builds responsive payout rows and mobile cards for staff with active salary balances[cite: 1]. |
| `openSalaryBreakdown(empId)` | Client (`.js`) | Aggregates basic pay, absence penalties, advance logs, and round-figure adjustments into an analytical breakdown modal[cite: 1]. |

---

### 5. Payslip & Multi-Month Statement Module
*Compiles printable and PDF-exportable document outputs[cite: 1, 2].*

| Function Name | Type | Description |
| :--- | :--- | :--- |
| `getDedicatedSlipData(monthSheetName)` | Server (`.gs`) | Extracts isolated financial parameters, deduction arrays, and attendance markers specifically structured for payslip generation[cite: 2]. |
| `getEmployeeStatementData(empId, monthsArr)` | Server (`.gs`) | Iterates across custom multi-month date ranges to compile longitudinal financial performance metrics for specified employees[cite: 2]. |
| `buildSlipTemplate(emp, targetMonth, hideDetails)` | Client (`.js`) | Constructs HTML templates embedded with dynamic inline watermarks, summary calculation boxes, attendance grids, and advance logs[cite: 1]. |
| `executeNewTabDoc(htmlContent, customFileName)` | Client (`.js`) | Spawns sandboxed document views equipped with native printing options and `html2pdf.js` client-side conversion pipelines[cite: 1]. |
| `triggerStatementGeneration()` | Client (`.js`) | Parses searchable employee tokens and date range parameters to produce multi-month chronological audit reports[cite: 1]. |

---

### 6. Secure Smart Backup Vault Module
*Manages data export integrity and cloud redundancy[cite: 1, 2].*

| Function Name | Type | Description |
| :--- | :--- | :--- |
| `executeSmartBackup(activeUser, mode)` | Server (`.gs`) | Employs an isolated memory-locked temp sheet engine to copy non-future sheets as static values, exporting clean `.xlsx` blobs for local download or Google Drive vault replacement[cite: 2]. |
| `processBackupAction(mode)` | Client (`.js`) | Manages UI buffering states, handles local blob download triggers via virtual anchor elements, and displays cloud sync status verifications[cite: 1]. |

---

## 📁 Project File Structure

```text
H-book/
├── Code.gs             # Server-side business logic, security routines, and DB handlers[cite: 2]
├── Index.html          # Adaptive client-side workspace (PC dashboards, mobile views, modals)[cite: 1]
└── README.md           # Exhaustive system documentation
