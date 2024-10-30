import Joi from "joi";

describe("Joi", () => {
  it("harus bisa custom validation", () => {
    const registerSchema = Joi.object({
      username: Joi.string().email().required(),
      password: Joi.string().min(5).max(30).required(),
      confirmPassword: Joi.string().min(5).max(30).required(),
    })
      .custom((value, helpers) => {
        // masukkan logika custom validasi disini

        // jika password dan confirmPassword tidak sama
        if (value.password !== value.confirmPassword) {
          return helpers.error("register.password.different");
        }

        return value;
      })
      .messages({
        "register.password.different":
          "password and confirmPassword is different",
      });

    const request = {
      username: "dani@gmail.com",
      password: "dani123",
      confirmPassword: "inipassword123",
    };

    const result = registerSchema.validate(request, { abortEarly: false });
    console.log(result);
  });
});
