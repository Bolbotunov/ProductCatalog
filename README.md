# Product Catalog

React-based mini-application for browsing a product catalog and managing a shopping cart.

---

## [Deploy](https://bolbotunov-catalog.netlify.app/)

## Features

### Product Catalog

- **Product Grid:** Items displayed as cards.
- **Search:** Real-time search by title with debounce optimization.
- **Filtering:** Category-based filtering.
- **Sorting:** Sort by price or name.
- **Pagination:** 12 products per page.
- **Empty State:** Visual feedback when no products are found.

### Shopping Cart

- **Management:** Add, remove, or adjust item quantities.
- **Total Calculation:** Real-time calculation of the total price.
- **Cart Badge:** Visual indicator of the total item count in the header.
- **Persistence:** Cart data is saved to localStorage

### UI/UX

- **Responsive Design:** Fully adaptive for desktop and mobile devices.
- **Interactive States:** Disabled states for buttons during actions.
- **Dark Mode:** Support for dark and light themes.
- **Toast Notifications:** User feedback for actions.
- **Skeleton Loaders:** Smooth loading states.

---

## Tech Stack

- **React 19**: Functional components and hooks.
- **TypeScript**: Strict typing for better maintainability.
- **Redux Toolkit**: Cart state management.
- **React Query**: Data fetching from FakeStore API.
- **React Router**: Client-side navigation.
- **SCSS Modules**: Scoped and modular styling.
- **Jest + React Testing Library**: Unit testing.
- **Husky / lint-staged / commitlint**: Git hooks for code quality.
- **Prettier / ESLint**: Code formatting and linting.

---

## Installation and Setup

```bash
# Install dependencies
yarn install

# Run dev server
yarn dev

# Build for production
yarn build

```

## Testing

```bash

yarn test
```

## Linting

```bash

yarn lint
```

### Project structure

```
src/
├── api/
│   ├── getResponse.ts
│   ├── useCategories.ts
│   └── useProducts.ts
├── components/
│   ├── App/
│   ├── Burger/
│   ├── Button/
│   ├── CartIcon/
│   ├── CartProductCard/
│   ├── CatalogFilters/
│   ├── ContentLayout/
│   ├── EmptyState/
│   ├── ErrorBoundary/
│   ├── ErrorFallback/
│   ├── Footer/
│   ├── Header/
│   ├── Input/
│   ├── Navigation/
│   ├── Pagination/
│   ├── ProductCard/
│   ├── Select/
│   ├── Skeleton/
│   ├── ThemeProvider/
│   └── ThemeSwitcher/
├── constants/
│   ├── api.ts
│   ├── index.ts
│   ├── localStorage.ts
│   ├── sortOptions.ts
│   ├── theme.ts
│   └── time.ts
├── context/
│   └── ThemeContext.tsx
├── hooks/
│   ├── useCart.ts
│   ├── useCatalog.ts
│   └── useDebounce.ts
├── pages/
│   ├── CartPage/
│   ├── CatalogPage/
│   └── NotFoundPage/
├── store/
│   ├── cartSlice.tsx
│   └── store.ts
├── types/
│   └── index.ts
├── utils/
│   ├── filterProducts.ts
│   ├── localStorageUtils.ts
│   └── sortProducts.ts
├── main.tsx
└── index.html
```
