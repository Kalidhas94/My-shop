# Add to Cart Task - React Application

This is a ReactJS application that implements a product catalog and a shopping cart with proper routing and state management.

## Features

- **Product Listing**: Fetches and displays products from the Fake Store API.
- **Responsive Design**: Built with Tailwind CSS for a seamless experience on all devices.
- **Cart Management**:
  - Add items to cart.
  - Remove items from cart.
  - Increase/Decrease item quantity.
  - Dynamic price calculation.
  - 10% Discount applied to the final total.
- **Routing**: Client-side routing using React Router.
- **State Management**: Context API for global cart state.

## Tech Stack

- ReactJS
- React Router DOM
- Tailwind CSS
- Fake Store API

## Setup Instructions

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Run the development server:
    ```bash
    npm run dev
    ```
4.  Open your browser at `http://localhost:5173`.

## Project Structure

- `src/components`: Reusable UI components (Navbar, ProductCard).
- `src/pages`: Page components (Home, Cart).
- `src/context`: Cart context for state management.
- `src/App.jsx`: Main application component with routing setup.

## Functionality Details

- **Home Page**: Shows a grid of products. Users can add a product to the cart. If a product is already in the cart, the button changes to "Remove".
- **Cart Page**: displays selected items with their image, title, price, and quantity. Users can adjust quantity or remove items. The summary shows the subtotal, a 10% discount, and the final amount.
