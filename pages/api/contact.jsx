const Contact = (req, res) => {
  console.log(req.body);
//   if (req.method === "POST") {
//     if (!data) {
//       res.status(400).json({ message: "no data" });
//     }
// }
// res.status(400).json({ message: "Bad Request" });
res.status(200).json({ message: req.body });
};

export default Contact;
