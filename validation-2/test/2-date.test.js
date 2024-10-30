import Joi from "joi";

describe("Joi", () => {
  it("harus bisa validasi tanggal", () => {
    const birdDateSchema = Joi.date().min("01-01-2000").max("now").required();

    const resultBirdDate1 = birdDateSchema.validate("10-20-2024");
    console.log(resultBirdDate1);

    const resultBirdDate2 = birdDateSchema.validate("10-30-2026");
    console.log(resultBirdDate2); // error
  });
});

// WAWANCARA

// halo semuanya perkenalkan nama saya Muhammad Dani Haikal
// saya merupakan lulusan sarjana terapan teknik informatika politeknik harapan bersama tegal
// saya senang dalam hal backend development mulai dari merancang database sampai membuat api
// untuk pengalaman saya sendiri adalah, pada semester 5 saya terdapat project besar di kuliah bernama big project, yaitu project gabungan dari berbagai mata kuliah, saya berperan sebagai backend developer yang membangun api

// kemudian pada semster 6 saya mengikuti program studi independent kampus merdeka pada mitra skilvul dengan posisi kelas backend development, disitu saya dan tim membuat api untuk frontend dev

// pada semester 7 saya mengikuti magang di pt git solution yogyakarta sebagai web dev, dan saya juga berperan sebagai backend developer, saya merancang database dan membuat api menggunakan express js untuk di consume oleh fe

// pada semster 8 saya membuat project skripsi saya tentang pemesanan rental motor berbasis website, disitu saya membangun menggunakan react js dan express js, karena saya lumayan bisa di backend jadi saya berfokus dulu di backend dev mulai dari merancang database sampai implementasi sistem, untuk fiturnya sendiri lumayan kompleks pada project tersebut diantaranya crud, upload file, auth, payment gateway, email verivication.

// selain coding saya juga senang dalam membaca buku dan berolahraga, karena dengan membaca buku saya bisa membuka wawasan saya dan dengan berolahraga saya jadi lebih segar lagi untuk memulai hari hari saya. dan dengan aktifikat itu juga saya belajar disiplin setiap hari.
