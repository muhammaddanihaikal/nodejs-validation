import Joi from "joi";

describe("Joi", () => {
  it("should can create custom validation", () => {
    const registerSchema = Joi.object({
      username: Joi.string().email().min(3).required(),
      password: Joi.string().min(3).required(),
      confirmPassword: Joi.string().min(3).required(),
    })
      .custom((value, helpers) => {
        if (value.password !== value.confirmPassword) {
          return helpers.error("register.password.different");
        }
        // console.log("anjay");
        // console.log(value);
        return value;
      })
      .message({
        "register.password.different":
          "password and confirmPassword is different",
      });

    const request = {
      username: "dani@gmail.com",
      password: "123",
      confirmPassword: "123",
    };

    const result = registerSchema.validate(request, {
      abortEarly: false,
    });

    console.log(result);
  });
});
