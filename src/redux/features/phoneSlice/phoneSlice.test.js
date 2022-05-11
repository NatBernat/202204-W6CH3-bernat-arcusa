import { phoneReducer } from "./phoneSlice";

describe("Given a phoneSlice reducer", () => {
  describe("When it receives a numbers array and addDigitActionCreator", () => {
    test("Then it should return the received numbers array", () => {
      const phoneNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      const addDigitAction = { type: "addDigit", payload: phoneNumber };
      const newPhoneNumber = phoneReducer(phoneNumber, addDigitAction);

      expect(newPhoneNumber).toContain(phoneNumber[0]);
    });
  });
});
