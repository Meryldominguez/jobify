import { render } from '@testing-library/react';
import App from './App';
import {commonBeforeEach, commonAfterEach  } from "./_testCommon";

beforeEach(commonBeforeEach)
afterEach(commonAfterEach)

test('Smoke test', () => {
  render(<App />);
});
