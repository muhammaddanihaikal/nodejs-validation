import Joi from "joi";

describe("Joi", () => {
  it("harus bisa membuat schema", () => {
    const schema = Joi.string().min(3).max(10).required();

    const result = schema.validate(2);
    console.log(result.value); // result.value

    if (result.error) {
      console.log(result.error); // result.error
    }

    console.log(typeof result.value);
    console.log(typeof result.error); // error terisi jika validasi salah
  });
});
