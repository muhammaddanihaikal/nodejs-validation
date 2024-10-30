import Joi from "joi";

describe("joi", () => {
  it("should can validate array", () => {
    const hobiesSchema = Joi.array()
      .items(Joi.string().min(3).max(100).required())
      .min(1)
      .unique();

    const request = ["dani", "dani", 12];

    const result = hobiesSchema.validate(request, {
      abortEarly: false,
    });

    console.log(result);

    if (result.error) {
      result.error.details.forEach((value) => {
        console.log(`${value.path} = ${value.message}`);
      });
    }
  });
});
