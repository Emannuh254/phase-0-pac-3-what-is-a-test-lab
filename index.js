const name = "Susan";
const height = 30;
const message = `${name} is ${height} inches tall`;

describe("Height", () => {
    it("is less than 40 and greater than 0", () => {
      expect(height).toBeGreaterThan(0);
      expect(height).toBeLessThan(40);
    });
});

module.exports = {name, height, message};
