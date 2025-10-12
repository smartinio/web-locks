const mockFridge: { [P: string]: any } = {};

beforeEach(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    mockFridge[key] = value;
  });

  global.Storage.prototype.getItem = jest.fn((key) => mockFridge[key]);
});
