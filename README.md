# CubeSquare — Property Listing

A responsive property listing experience built as part of the MeridianSquare Frontend Developer Stage 2 assessment.

## Tech Stack

* React
* TypeScript
* Vite
* Bootstrap 5
* Sass
* TanStack Query

## Features

* Reusable, typed `PropertyCard` component
* Responsive Bootstrap grid

  * 3 columns on desktop
  * 2 columns on tablet
  * 1 column on mobile
* Minimum yield percentage filter
* Location filter
* Property availability indicator
* Low-availability indication when less than 20% of tokens remain
* KYC status banner for pending and rejected states
* Explicit loading, error, and empty states
* Bootstrap Sass theme configuration
* Mock property API without a backend

## Project Structure

```text
src/
├── api/
│   └── properties.ts
├── components/
│   ├── KYCStatusBanner/
│   └── PropertyCard/
├── pages/
│   └── PropertyListingPage/
├── styles/
│   ├── _variables.scss
│   └── main.scss
├── types/
│   └── property.ts
├── App.tsx
└── main.tsx
```

## Getting Started

### Prerequisites

* Node.js 18+
* npm

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The application will be available at the local Vite development URL shown in the terminal.

### Production build

```bash
npm run build
```

## Theme Governance

Bootstrap is the primary styling system. Theme-level Sass variables are configured centrally for values such as the primary colour, border radius, and font family.

Components use Bootstrap utilities and contextual classes rather than duplicating theme values through local CSS.

See `docs/css-governance.md` for the CSS governance approach and white-label theming strategy.

## Data

The application uses the mock property data provided in the assessment. No backend service is required.

TanStack Query is used for the property data-fetching layer so that the data-access pattern can be extended to a real API without coupling the UI components to the request implementation.
