import Joi from "joi";

describe("Joi", () => {
  it("harus bisa menggunakan custom messages", () => {
    const schema = Joi.string().min(3).max(5).required().messages({
      "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
      "string.max": "{{#label}} panjang harus maksimal {{#limit}} karakter",
    });

    const request = "dddddd";

    const result = schema.validate(request, {
      abortEarly: false,
    });

    console.log(result);
  });

  it("harus bisa menggunakan custom messages di object validation", () => {
    const schema = Joi.object({
      username: Joi.string().email().required().messages({
        "any.required": "{{#label}} harus diisi",
        "string.email": "{{#label}} harus valid email",
      }),
      password: Joi.string().min(5).max(30).required().messages({
        "any.required": "{{#label}} harus diisi",
        "string.min": "{{#label}} harus minimal {{#limit}} karakter",
        "string.max": "{{#label}} harus maksimal {{#limit}} karakter",
      }),
    });

    const request = {
      username: "dani@gmail.com",
      password: "danis",
    };

    const result = schema.validate(request, {
      abortEarly: false,
    });

    console.log(result);
  });
});
