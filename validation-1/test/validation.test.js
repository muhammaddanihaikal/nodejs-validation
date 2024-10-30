import Joi from "joi";

describe("joi", () => {
  it("should can create schema", () => {
    const schema = Joi.string().min(3).max(10).required();

    const result = schema.validate("s22");
    if (result.error) {
      console.log(result.error);
    }
  });

  it("should can validate basic data type", () => {
    const usernameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().min(10000).max(1000000).required();

    const resultUsername = usernameSchema.validate("dani@gmail.com");
    const resultIsAdmin = isAdminSchema.validate("true");
    const resultPrice = priceSchema.validate("10000");

    console.log(resultUsername);
    console.log(resultIsAdmin);
    console.log(resultPrice);
  });
});
