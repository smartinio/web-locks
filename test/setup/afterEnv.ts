const mockFridge: { [P: string]: any } = {};

beforeEach(() => {
  Storage.prototype.setItem = jest.fn((key, value) => {
    mockFridge[key] = value;
  });

  Storage.prototype.getItem = jest.fn((key) => mockFridge[key]);
});
