import axios from "axios";
import { makeAutoObservable } from "mobx";

class CardStore {
  card: {} = {};

  constructor() {
    makeAutoObservable(this);
  }

  fetchCard(id: any) {
    const fetch = async (id: any) => {
      const result = await axios({
        method: "get",
        url: `https://fakestoreapi.com/products/${id}`,
      }).catch((err) => {
       console.log(err);
      });
      this.card = result.data;
    };
    fetch(id);
  }
}

export default new CardStore();
