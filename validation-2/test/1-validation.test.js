import Joi from "joi";

describe("Joi", () => {
  it("harus bisa membuat schema", () => {
    const schema = Joi.string().min(3).max(10).required();

    const request = "dan1234567";

    const result = schema.validate(request);
    if (result.error) {
      console.log(result.error);
    }
  });

  it("harus bisa memvalidasi tipe data dasar", () => {
    const usernameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().min(1000).max(1000000).required();

    const resultUsername = usernameSchema.validate("dani@gmail.com");
    console.log(resultUsername);

    const resultIsAdmin = isAdminSchema.validate("true");
    console.log(resultIsAdmin);

    const resultPrice = priceSchema.validate(10000);
    console.log(resultPrice);
  });
});
