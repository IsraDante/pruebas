const Robots = [
   {
      id: 1,
      name: "Mr. Roboto",
      model: "X-002",
      image: "https://robohash.org/Mr.Roboto",
   },

   {
      id: 2,
      name: "Calandracas",
      model: "F-406",
      image: "https://robohash.org/calandracas",
   },

   {
      id: 3,
      name: "Lupita Z",
      model: "J-012",
      image: "https://robohash.org/Lupita Z",
   },
];

export default Robots;

const find = Robots.findIndex((i) => i.name === "Lupita Z");
console.log(find);
