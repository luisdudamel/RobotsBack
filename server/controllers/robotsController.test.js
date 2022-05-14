const { mockRobots } = require("../mocks/robots");
const { getRobots } = require("./robotsController");

jest.mock("../../db/models/robot", () => ({
  ...jest.requireActual("../../db/models/robot"),
  find: jest.fn().mockResolvedValue(mockRobots),
}));

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given a getRobots function", () => {
  describe("When its invoked with a response", () => {
    test("Then it should call the response's method with a status 200", async () => {
      const expectedStatus = 200;

      await getRobots(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedStatus);
    });

    test("Then it should call the responses method json, with a list of robots", async () => {
      getRobots(null, res);

      expect(res.json).toHaveBeenCalledWith({ robots: mockRobots });
    });
  });
});
