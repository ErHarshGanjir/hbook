````markdown
# 🌍 Enterprise Deployment & Infrastructure

H Book is designed using a **cloud-first, modular, and scalable architecture**. While the current implementation is powered by **Google Apps Script**, the overall system architecture has been planned so that it can evolve into a fully independent SaaS platform without major frontend changes.

The separation of presentation, business logic, database, storage, and deployment layers ensures flexibility for future migrations and enterprise-scale deployments.

---

# 🏗 Enterprise System Architecture

```
                               INTERNET

                                   │

                           Registered Domain

                                   │

         ┌─────────────────────────┴─────────────────────────┐

         ▼                                                   ▼

    GoDaddy DNS                                      Cloudflare DNS
 (Primary Registrar)                             (Optional CDN / SSL)

         │                                                   │

         └─────────────────────────┬─────────────────────────┘

                                   ▼

                          HTTPS / SSL Certificate

                                   ▼

                       Hostinger Business Hosting

                                   │

        ┌──────────────────────────┼──────────────────────────┐

        ▼                          ▼                          ▼

  Static Frontend            REST API Layer           Authentication

 (HTML / CSS / JS)        (Node.js / Express)      JWT / OAuth / Session

        │                          │                          │

        └──────────────────────────┼──────────────────────────┘

                                   ▼

                           MongoDB Atlas Cluster

                                   │

                ┌──────────────────┼──────────────────┐

                ▼                  ▼                  ▼

          Employee DB         Payroll DB         Attendance DB

                │                  │                  │

                └──────────────────┼──────────────────┘

                                   ▼

                           File Storage Layer

                     Google Drive / Cloud Storage

                                   ▼

                            Backup Infrastructure
```

---

# ☁ Cloud Infrastructure

H Book is built around independent cloud services.

| Layer | Platform | Purpose |
|--------|----------|---------|
| Domain Registrar | GoDaddy | Domain registration |
| DNS Management | GoDaddy / Cloudflare | DNS records & SSL |
| Web Hosting | Hostinger Business Hosting | Frontend hosting |
| Backend API | Node.js + Express *(Future Architecture)* | Business logic |
| Current Backend | Google Apps Script | Existing production backend |
| Database | MongoDB Atlas | Primary cloud database |
| File Storage | Google Drive | Employee documents |
| Source Control | GitHub | Version control |
| CI/CD | GitHub Actions | Automated deployment |
| Monitoring | UptimeRobot | Service monitoring |
| CDN | Cloudflare | Global caching & security |

---

# 🌐 Domain Configuration

The recommended production setup uses a custom domain.

Example:

```
www.hbook.in
```

### DNS Configuration

```
A Record

www → Hostinger Server

API

api.hbook.in

→ Backend Server

ADMIN

admin.hbook.in

→ Administrative Portal

CDN

Cloudflare Proxy Enabled
```

---

# 🌍 Deployment Topology

```
GitHub

      │

      ▼

GitHub Actions

      │

      ▼

Hostinger

      │

      ▼

Frontend Deployment

      │

      ▼

Users
```

Backend Deployment

```
Google Apps Script

↓

Web App

↓

API Endpoint

↓

Frontend
```

Future

```
GitHub

↓

Docker

↓

Node.js

↓

MongoDB Atlas
```

---

# 🗂 GitHub Repository Structure

```
H-Book

├── frontend

│ ├── assets

│ ├── css

│ ├── js

│ ├── images

│ └── index.html

│

├── backend

│ ├── apps-script

│ ├── api

│ ├── middleware

│ ├── services

│ ├── database

│ └── controllers

│

├── docs

├── screenshots

├── architecture

├── deployment

├── README.md

└── LICENSE
```

---

# 🚀 Hosting Strategy

## Current Production

Frontend

Google Apps Script HTML Service

Backend

Google Apps Script

Database

Google Sheets

Storage

Google Drive

---

## Recommended Enterprise Deployment

Frontend

Hostinger Business Hosting

Backend

Node.js + Express

Database

MongoDB Atlas

Authentication

JWT + Refresh Tokens

Storage

Google Drive API

Email

SMTP / SendGrid

Backup

MongoDB Backup + Google Drive

---

# 🛢 MongoDB Atlas Architecture

```
MongoDB Atlas

│

├── users

├── employees

├── attendance

├── payroll

├── salary_history

├── documents

├── audit_logs

├── notifications

└── settings
```

Each collection is independently indexed to improve performance while maintaining relationships through unique identifiers.

---

# 🔐 Authentication Architecture

```
User

↓

Login

↓

API

↓

Verify Password

↓

Generate JWT

↓

Refresh Token

↓

Secure Cookies

↓

Dashboard
```

---

# 📦 Storage Strategy

Employee files are separated from business data.

```
Employee Data

↓

MongoDB

Employee Documents

↓

Google Drive

Salary Slips

↓

PDF Storage

Reports

↓

Archive
```

---

# 🔄 CI/CD Pipeline

```
Developer

↓

Git Commit

↓

GitHub

↓

GitHub Actions

↓

Build

↓

Deploy

↓

Hostinger

↓

Production
```

---

# 📊 Scalability Roadmap

| Version | Infrastructure |
|----------|----------------|
| v1 | Google Apps Script + Google Sheets |
| v2 | Hostinger + MongoDB Atlas |
| v3 | Node.js REST API |
| v4 | Docker Containers |
| v5 | Kubernetes Cluster |
| v6 | Multi-Tenant SaaS Platform |

---

# 🎯 Enterprise Goals

- Cloud-native deployment
- Modular architecture
- Scalable REST API
- Independent frontend and backend
- MongoDB-based data model
- Secure authentication
- Automated deployments
- Zero-downtime updates
- Enterprise-grade security
- Future-ready SaaS architecture

> **Note:** The current implementation uses **Google Apps Script**, **Google Sheets**, and **Google Drive**. The Hostinger, Node.js, MongoDB Atlas, and CI/CD sections describe a recommended enterprise deployment path rather than the current production implementation.
````
