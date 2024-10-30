import Joi from "joi";

describe("joi", () => {
  it("should can validate object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().min(3).email().required(),
      password: Joi.string().min(6).required(),
    });

    const request = {
      username: "dani@gmail.com",
      password: "123456",
    };

    const result = loginSchema.validate(request, {
      abortEarly: false,
    });

    console.log(result);
  });

  it("should can validate nested object", () => {
    const createUserSchema = Joi.object({
      id: Joi.string().max(100).required(),
      name: Joi.string().max(100).required(),
      address: Joi.object({
        street: Joi.string().max(200).required(),
        city: Joi.string().max(100).required(),
        country: Joi.string().max(100).required(),
        zipCode: Joi.string().max(10).required(),
      }).required(),
    });

    const request = {
      address: {},
    };

    const result = createUserSchema.validate(request, {
      abortEarly: false,
    });

    // console.log(result);

    if (result.error) {
      result.error.details.forEach((detail) => {
        console.log(`${detail.path} = ${detail.message}`);
      });
    }
  });

  it("should can validate array of object", () => {
    const addressSchema = Joi.array()
      .min(1)
      .items(
        Joi.object({
          street: Joi.string().max(200).required(),
          city: Joi.string().max(100).required(),
          country: Joi.string().max(100).required(),
          zipCode: Joi.string().max(10).required(),
        })
      );

    const request = [
      {
        street: "jalan kerti",
      },
    ];

    const result = addressSchema.validate(request, {
      abortEarly: false,
    });

    console.log(result);
  });
});
