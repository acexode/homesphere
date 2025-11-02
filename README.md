# Homesphere Gated Community App

Homesphere is an enterprise-grade gated community management platform built with Ionic 7 and Angular 17. The project is structured to support resident, admin, and security workflows with a premium Airbnb-inspired user experience.

## Getting Started

Install dependencies:

```bash
npm install
```

## Project Structure

Key directories include:

- `src/theme`: Global design system assets such as color variables and typography helpers.
- `src/app/core`: Application-wide services, models, and authentication utilities.
- `src/app/features`: Feature modules including the authentication experience.
- `src/environments`: Environment-specific configuration objects.

## Design System

The design system leverages an Inter-based typography scale, a blue primary palette, and generous spacing tokens for modern, comfortable layouts.

## Authentication

The `AuthService` manages token persistence through Ionic Storage, exposes reactive user state, and provides helpers for role-based access via the `AuthGuard`.

## Feature Overview

The app ships with fully scaffolded modules representing each pillar of a modern gated community platform:

- **Dashboards** – Role-based views for residents, administrators, and security teams summarizing key actions and metrics.
- **Security & Access Control** – Visitor approvals, QR pass generation/scanning, staff rosters, patrol tracking, and emergency SOS workflows.
- **Financial Suite** – Billing automation, payment entry points, prepaid utility vending, statements, and reconciliation tooling.
- **Helpdesk & Work Orders** – Ticket intake, assignment, vendor tracking, and resident feedback loops.
- **Community Communication** – Digital notice boards, polls, discussion forums, and targeted announcement broadcasts.
- **Amenity Management** – Facility booking, vetted vendor directories, and tenant lifecycle management.
- **Profiles & Preferences** – Self-service profile editing, notification preferences, and access to personalized data.
- **Notification Center** – A unified feed aggregating alerts from security, finance, helpdesk, and community channels.

Each module follows the shared design system to maintain a cohesive, Airbnb-inspired experience across the entire application.
