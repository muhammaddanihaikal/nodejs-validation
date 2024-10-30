import Joi from "joi";

describe("Joi", () => {
  it("should return validation error", () => {
    const usernameSchema = Joi.string().min(8).email().required();

    const result = usernameSchema.validate("ups", {
      abortEarly: false,
    });
    console.log(result);

    if (result.error) {
      result.error.details.forEach((detail) => {
        console.log(`${detail.path} = ${detail.message}`);
      });
    }
  });
});
