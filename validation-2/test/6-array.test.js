import Joi from "joi";

describe("Joi", () => {
  it("harus bisa validasi array", () => {
    const hobbiesSchema = Joi.array()
      .items(Joi.string().min(5).max(100))
      .unique();

    const hobbies = ["A", "Renang", "Mancing"];

    const resultHobbies = hobbiesSchema.validate(hobbies, {
      abortEarly: false,
    });
    console.log(resultHobbies.value);

    if (resultHobbies.error) {
      resultHobbies.error.details.forEach((e) => {
        console.log(`${e.path} : ${e.message}`);
      });
    }
  });

  it("harus bisa validasi array of object", () => {
    const addressesSchema = Joi.array()
      .min(1)
      .items(
        Joi.object({
          street: Joi.string().max(100).required(),
          city: Joi.string().max(50).required(),
          country: Joi.string().max(50).required(),
          zipCode: Joi.string().max(50).required(),
        })
      );

    const addresses = [
      {
        street: "jalan kerti",
      },
    ];

    const resultAddresses = addressesSchema.validate(addresses, {
      abortEarly: false,
    });
    console.log(resultAddresses.value);

    if (resultAddresses.error) {
      resultAddresses.error.details.forEach((e) => {
        console.log(`${e.path} : ${e.message}`);
      });
    }
  });
});
