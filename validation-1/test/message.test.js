import Joi from "joi";

describe("Joi", () => {
  it("should can use custom message", () => {
    const schema = Joi.string().required().min(2).max(5).messages({
      "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
      "string.max": "{{#label}} panjang harus maksimal {{#limit}} karakter",
    });

    const request = "a";

    const result = schema.validate(request, {
      abortEarly: false,
    });
    console.log(result);
  });

  it("should can use custom message in object validaton", () => {
    const schema = Joi.object({
      username: Joi.string().email().required().messages({
        "any.required": "{{#label}} harus diisi",
        "string.email": "{{#label}} harus valid email",
      }),
      password: Joi.string().min(3).max(5).required().messages({
        "any.required": "{{#label}} harus diisi",
        "string.min": "{{#label}} harus minimal {{#limit}}",
        "string.max": "{{#label}} harus maximal {{#limit}}",
      }),
    });

    const request = {
      username: "dani",
    };

    const result = schema.validate(request, {
      abortEarly: false,
    });
    console.log(result);
  });
});
