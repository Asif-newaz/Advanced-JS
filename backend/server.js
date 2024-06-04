import express from "express";
const app = express();

const products = [
  {
    id: 1,
    name: "wooden table",
    price: 200,
    image:
      "https://images.pexels.com/photos/269063/pexels-photo-269063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "glass table",
    price: 250,
    image:
      "https://images.pexels.com/photos/4055138/pexels-photo-4055138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "blank table",
    price: 300,
    image:
      "https://images.pexels.com/photos/172277/pexels-photo-172277.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "coffee table",
    price: 350,
    image:
      "https://images.pexels.com/photos/1193335/pexels-photo-1193335.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "glass table",
    price: 400,
    image:
      "https://images.pexels.com/photos/17434937/pexels-photo-17434937/free-photo-of-newlyweds-walking-downstairs.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

app.get("/api/products", (req, res) => {
  // http://localhost:3000/api/products?search=wooden

  if (req.query.search) {
    const filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return;
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
