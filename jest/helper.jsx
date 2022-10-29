import { render as rtlRender } from '@testing-library/react-native';

// Overriding the render method
function render(ui, { renderOptions } = {}) {
  function Wrapper({ children }) {
    return children;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react-native';
// override render method
export { render };
