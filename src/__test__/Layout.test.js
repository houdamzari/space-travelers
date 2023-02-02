import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Layout from '../components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';

describe('Test Layout component', () => {
  test('should match with snapshot', () => {
    const layout = renderer
      .create(
        <BrowserRouter>
          <Layout>
            <h1>Hello World</h1>
          </Layout>
        </BrowserRouter>
      )
      .toJSON();

    expect(layout).toMatchSnapshot();
  });

  test('should match with snapshot', () => {
    render(
      <BrowserRouter>
        <Layout>
          <h1>Hello World</h1>
        </Layout>
      </BrowserRouter>
    );

    const layout = screen.getByText('Hello World');

    expect(layout).toBeInTheDocument();
  });
});
