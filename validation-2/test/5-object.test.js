import Joi from "joi";

describe("Joi", () => {
  it("harus bisa validasi object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().email().min(6).max(100).required(),
      password: Joi.string().min(6).max(30).required(),
    });

    const request = {
      username: "dani@gmail.com",
      password: "dani123",
    };

    const resultLogin = loginSchema.validate(request, {
      abortEarly: false,
    });
    console.log(resultLogin.value);

    if (resultLogin.error) {
      resultLogin.error.details.forEach((e) => {
        console.log(`${e.path} : ${e.message}`);
      });
    }
  });

  it("harus bisa validasi nested object", () => {
    const userSchema = Joi.object({
      id: Joi.string().email().min(6).max(100).required(),
      name: Joi.string().min(6).max(30).required(),
      address: Joi.object({
        street: Joi.string().max(100).required(),
        city: Joi.string().max(50).required(),
        country: Joi.string().max(50).required(),
        zipCode: Joi.string().max(50).required(),
      }).required(),
    });

    const request = {
      id: "dani@daf.com",
      name: "dani234",
      address: {},
    };

    const resultUser = userSchema.validate(request, {
      abortEarly: false,
    });
    console.log(resultUser.value);

    if (resultUser.error) {
      resultUser.error.details.forEach((e) => {
        console.log(`${e.path} : ${e.message}`);
      });
    }
  });
});
