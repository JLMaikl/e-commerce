import axios from "axios";
import { makeAutoObservable } from "mobx";

class CardsStore {
  cards: any[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCards() {
    const fetch = async () => {
      const result: any = await axios({
        method: "get",
        url: "https://fakestoreapi.com/products",
      }).catch((err) => {
        console.log(err);
      });
      this.cards = [...result.data];
    };
    fetch();
  }
}

export default new CardsStore();
