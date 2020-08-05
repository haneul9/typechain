const name: String = "hashcoder",
  age: Number = 40,
  gender: String = "male";

const sayHi = (name: String, age: Number, gender: String) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age, gender);

export {};
