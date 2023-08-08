# M08W21 - Real World React

### To Do

- [ ] React Router
- [ ] MUI
- [ ] `useContext`
- [ ] `useReducer`
- [ ] `useRef`

### React Router

React Router is a powerful library for handling routing in React applications. It allows you to create a navigation system with clickable links, nested routes, and dynamic routing. To use React Router, you need to install the `react-router-dom` package.

```jsx
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
```

You can also use the `useParams` hook to access parameters from the URL inside child components.

```jsx
import { useParams, Routes, Route, Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <nav>
        <Link to="/products/2">Product #2</Link>
        <br />
        <Link to="/products/3">Product #3</Link>
        <br />
        <Link to="/products/4">Product #4</Link>
        <br />
        <Link to="/products/5">Product #5</Link>
      </nav>

      <Routes>
        <Route path="/products/:productId" element={<Product />} />
        <Route
          path="/products"
          element={<h3>Please select a product above</h3>}
        />
      </Routes>
    </div>
  );
};

const Product = () => {
  const params = useParams();

  return (
    <div>
      <h2>Product {params.productId}</h2>
    </div>
  );
};
```

You can also use the `useNavigate` hook to programmatically navigate through your app.

```jsx
import { useNavigate } from "react-router-dom";

const MyComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Go to About Page</button>
    </div>
  );
};
```

### MUI - Material-UI

Material-UI is a popular React component library that follows Google's Material Design guidelines. It provides a set of ready-to-use components and styles that you can easily integrate into your React applications. To use Material-UI, you need to install the `@mui/material` and `@emotion/react` packages.

#### Installation

```bash
npm install @mui/material @emotion/react @emotion/styled
```

or with Yarn:

```bash
yarn add @mui/material @emotion/react @emotion/styled
```

#### Usage

Once you have installed the required packages, you can start using Material-UI components in your application. Here's an example of using some basic components:

```jsx
import { Button, TextField, Typography } from "@mui/material";

const MyComponent = () => {
  return (
    <div>
      <Typography variant="h4" color="primary">
        Hello, Material-UI!
      </Typography>
      <TextField label="Enter your name" />
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </div>
  );
};
```

#### Theming

Material-UI also provides theming options, allowing you to customize the colors, typography, and other aspects of the components to match your application's design. You can create a custom theme using the `createTheme` function from `@mui/material/styles` and apply it using the `ThemeProvider` component.

```jsx
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, TextField, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  palette: {
    primary: {
      main: "#00bcd4",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

const MyThemedComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h4" color="primary">
          Hello, Material-UI with Custom Theme!
        </Typography>
        <TextField label="Enter your name" />
        <Button variant="contained" color="secondary">
          Click me
        </Button>
      </div>
    </ThemeProvider>
  );
};
```

#### Material-UI Icons

Material-UI also provides a set of ready-to-use icons that you can easily include in your components.

```jsx
import { Button, DeleteIcon, SaveIcon } from "@mui/material";

const MyIconComponent = () => {
  return (
    <div>
      <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
        Save
      </Button>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </div>
  );
};
```

#### Material-UI Documentation

To explore all the available components and their properties, you can refer to the official Material-UI documentation: [Material-UI](https://mui.com/)

Material-UI offers a wide range of components and styles that can save you a lot of development time and provide a consistent and attractive UI for your React applications.

### `useContext`

`useContext` is a React hook that allows you to share state between components without having to pass props down through the component tree. It creates a context that can be consumed by any component within its provider.

```jsx
import React, { createContext, useContext } from "react";

const MyContext = createContext();

const ParentComponent = () => {
  return (
    <div>
      <MyContext.Provider value={{ message: "hello world" }}>
        <ChildOne />
        <ChildTwo />
      </MyContext.Provider>
    </div>
  );
};

const ChildOne = () => {
  const context = useContext(MyContext);

  return <p>{context.message}</p>;
};

const ChildTwo = () => {
  const { message } = useContext(MyContext);

  return <p>{message}</p>;
};
```

### `useReducer`

`useReducer` is another React hook that is an alternative to `useState` when managing complex state logic. It is used to handle state transitions through a reducer function, similar to how it's done with Redux.

```jsx
import { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const MyComponent = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};
```

### `useRef`

`useRef` is a hook used to create a mutable reference that persists across renders. It can be used to access DOM elements or store values that won't trigger a re-render when changed.

```jsx
import { useRef } from "react";

const MyComponent = () => {
  const inputRef = useRef();

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
};
```

### Useful Links

- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [MUI](https://mui.com)
- [useContext Hook](https://reactjs.org/docs/hooks-reference.html#usecontext)
- [useReducer Hook](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [useRef Hook](https://reactjs.org/docs/hooks-reference.html#useref)
