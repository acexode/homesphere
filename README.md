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
