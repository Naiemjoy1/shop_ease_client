# ShopEase - Frontend

## Overview

ShopEase is a single-page application (SPA) built with React.js that allows users to browse, search, filter, sort, and paginate through products. The application uses Firebase for user authentication and integrates with a backend API for product management.

## Live Website

You can view the live application here: [ShopEase Live](https://shopease-scic.web.app/)

## Features

- **Search:** Search for products by name.
- **Filter:** Filter products by brand, category, and price range.
- **Sort:** Sort products by price (low to high, high to low) and date added (newest first).
- **Pagination:** Navigate through product pages with Next and Previous buttons.
- **Authentication:** Sign in using Google or Email/Password via Firebase.
- **Responsive Design:** Mobile-first design with fixed-size product cards.
- **UI Components:** Navbar with logo and routes, Footer with necessary links.

## Technologies

- **React.js** - Frontend framework
- **Firebase** - Authentication and storage
- **Axios** - HTTP requests
- **React Query** - Data fetching and state management
- **React Hook Form** - Form handling
- **SweetAlert2** - Alerts
- **React Rating** - Product ratings
- **LocalForage** - Local storage
- **Match Sorter** - Sorting and filtering

## Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Naiemjoy1/shop_ease_client
   ```

2. Navigate to the project directory:

   ```bash
   cd shop_ease_client
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env.local` file in the root directory and add the following environment variables:

   ```plaintext
   REACT_APP_FIREBASE_API_KEY=<your-api-key>
   REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
   REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
   REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-sender-id>
   REACT_APP_FIREBASE_APP_ID=<your-app-id>
   ```

5. Run the development server:
   ```bash
   npm start
   ```

### Project Structure

- `src/` - Source code
  - `components/` - Reusable React components
  - `pages/` - Page components
  - `services/` - API service calls
  - `contexts/` - React contexts for state management
  - `firebase/` - Firebase configuration and authentication logic
  - `App.js` - Main application component
- `public/` - Public assets

### Running Tests

- Add test cases for your components and services.
- Run tests using:
  ```bash
  npm test
  ```

### Deployment

- To build the project for production:
  ```bash
  npm run build
  ```
- Deploy the `build/` directory to your hosting provider.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.

## Repository Links

- [Frontend Repository](https://github.com/Naiemjoy1/shop_ease_client)
- [Backend Repository](https://github.com/Naiemjoy1/shop_ease_server)
