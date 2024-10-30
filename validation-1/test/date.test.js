import Joi from "joi";

describe("Joi", () => {
  it("should can validate date", () => {
    const birthDateSchema = Joi.date().required().max("now").min("1-1-1988");

    const result = birthDateSchema.validate("1-1-2023"); // benar
    const result2 = birthDateSchema.validate("1-1-1978"); // salah, kurang
    const result3 = birthDateSchema.validate("1-1-2030"); // salah, lebih

    console.log(result);
    console.log(typeof result.value); // type: object 'Date' bawaan js

    console.log(result2);
    console.log(typeof result2.error); // type: object 'ValidationError' punya joi

    console.log(result3);
    console.log(typeof result3.error); // type: object 'ValidationError' punya joi
  });
});
