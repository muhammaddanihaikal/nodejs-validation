import Joi from "joi";

describe("Joi", () => {
  it("harus mengembalikan validation error", () => {
    const emailSchema = Joi.string().min(6).max(30).email().required();

    // ambil semua error dengan abortEarly: false
    const emailResult = emailSchema.validate("dani", { abortEarly: false });
    console.log(emailResult.value);

    if (emailResult.error) {
      // print semua error
      emailResult.error.details.forEach((detail) => {
        console.log(`${detail.path} = ${detail.message}`);
      });
    }
  });
});
