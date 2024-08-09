interface objectType {
  name: string;
  age: number;
  email: string;
  address?: { city: string; country: string };
}

const mango: objectType = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: objectType = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
export {};
