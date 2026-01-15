const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect("DB-URL/1stDBWriteYBE");

    const User = mongoose.model("User", {
      name: String,
      email: String,
      password: String,
    });

    const user = new User({
      name: "Himayti",
      email: "kyakrogejanke@menabtata.com",
      password: "123456",
    });

    await user.save();
    console.log("User saved successfully");
  } catch (err) {
    console.error("Error:", err);
  }
}

main();