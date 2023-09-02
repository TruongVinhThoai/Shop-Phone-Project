export class Service {
  getPhones = async () => {
    try {
      const res = await axios({
        url: "https://64d6fb012a017531bc12e76b.mockapi.io/capstone",
        method: "GET",
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
  getPhoneById = async (id) => {
    try {
      const res = await axios({
        url: `https://64d6fb012a017531bc12e76b.mockapi.io/capstone/${id}`,
        method: "GET",
      });

      return res.data;
    } catch (err) {
      console.log(err);
    }
  };
}
