const { error404NotFound, general500Error } = require("./errors");

describe("Given a error404NotFound function", () => {
  describe("When its invoked with a response", () => {
    test("Then it should call the responses method status with a 404", () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: () => {},
      };
      const expectedErrorStatus = 404;

      error404NotFound(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedErrorStatus);
    });
  });
});

describe("Given a general500Error function", () => {
  describe("When its invoked with a response", () => {
    test("Then it should call the responses method status with a 500", () => {
      const res = {
        status: jest.fn().mockReturnThis(),
        json: () => {},
      };
      const expectedGeneralErrorStatus = 500;

      general500Error(null, res);

      expect(res.status).toHaveBeenCalledWith(expectedGeneralErrorStatus);
    });
  });
});
