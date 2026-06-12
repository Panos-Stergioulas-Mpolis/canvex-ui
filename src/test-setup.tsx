import server from "src/mocks/server";
import "@testing-library/jest-dom";

// Establish API mocking
beforeAll(() => server.listen());

// Reset handlers, so they don't affect other tests
afterEach(() => server.resetHandlers());

//  Clean up ater the tests are finished
afterAll(() => server.close());

vi.mock("react-helmet-async", () => ({
  Helmet: () => undefined,
  HelmetProvider: ({ children }: { children: React.ReactNode }) => children,
}));
