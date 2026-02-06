# React Shopping Cart Application

A modern, responsive e-commerce application built with ReactJS, featuring dynamic cart management, routing, and real-time pricing updates.

## 🚀 Features

- **Product Listing**: Fetches and displays products from the [Fake Store API](https://fakestoreapi.com/) in a responsive grid layout.
- **Smart Cart Management**:
  - Add items to cart directly from the home page.
  - "Add to Cart" button transforms into "Remove from Cart" for added items.
  - Adjust quantities within the cart page.
  - Real-time total price calculation.
- **Discount System**: Automatic 10% discount applied to the final price.
- **Routing**: Seamless navigation between Product Listing and Cart pages using React Router.
- **Responsive Design**: Mobile-first approach using Tailwind CSS for a premium look on all devices.

## 🛠️ Tech Stack

- **ReactJS**: Frontend library for building the user interface.
- **React Router**: For client-side routing and navigation.
- **Context API**: For global state management (Cart logic).
- **Tailwind CSS**: For utility-first styling and responsive design.
- **Vite**: Next Generation Frontend Tooling.

## 📦 Installation & Setup

1.  **Clone the repository** (if applicable) or navigate to the project folder.

2.  **Install Dependencies**:
    ```bash
    npm install
    # or
    npm i
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit `http://localhost:5173` (or the URL provided in the terminal).

## 📜 Available Scripts

- `npm run dev`: Start the development server with hot module replacement.
- `npm run build`: Build the application for production.
- `npm run lint`: Run ESLint to check code quality.
- `npm run preview`: Preview the production build locally.

## 🧩 Project Structure

- `src/components`: Reusable UI components (Navbar, ProductCard, ProductList).
- `src/context`: React Context for managing Cart state (CartContext).
- `src/pages`: Main page views (Home, Cart).
- `src/App.jsx`: Main application entry point with Route definitions.

## 📝 Usage

1.  **Browse Products**: simple scroll through the "Featured Products" on the home page.
2.  **Add to Cart**: Click "Add to Cart" on any product. The button will change to "Remove" to indicate it's selected.
3.  **Manage Cart**: Click the Cart icon in the navbar.
4.  **Adjust Quantities**: Use the `+` and `-` buttons to change item quantity.
5.  **Checkout**: View the subtotal, discount, and final price in the Order Summary.

## 🎨 Design

The application uses a "Rich Aesthetics" approach with:
- **Glassmorphism effects** on the navbar.
- **Soft shadows and rounded corners** for a modern feel.
- **Interactive hover states** for better user engagement.
- **Dynamic gradients** to add vibrancy.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 API Information

Products are fetched from the **Fake Store API** (https://fakestoreapi.com/), which provides a realistic dataset for e-commerce testing.

## ⚙️ Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5173 already in use | Change the port in `vite.config.js` or kill the process using that port |
| Styles not applying | Verify Tailwind CSS configuration in `tailwind.config.js` and restart dev server |
| Context values undefined | Ensure CartContext is properly wrapped around the app in `main.jsx` |
| Products not loading | Check browser console for API errors; verify internet connection |

## 📚 Future Enhancements

- **Search & Filter**: Add product search and category filters.
- **Wishlist Feature**: Allow users to save favorite products.
- **User Authentication**: Implement login/signup functionality.
- **Payment Integration**: Integrate payment gateway for checkout.
- **Order History**: Track and display user's previous orders.
- **Product Reviews**: Allow users to leave and view product reviews.

## 📄 License

This project is open source and available for educational purposes.
