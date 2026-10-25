import axios from "axios";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Api_url =
  "https://v6.exchangerate-api.com/v6/14ae5a5f9189d47da794a3a0/latest";

async function currencyCalculate(from, to, amount) {
  try {
    const res = await axios.get(`${Api_url}/${from}`);
    const rates = res.data.conversion_rates;
    if (!rates[to.toUpperCase()]) {
      console.log("you enter a wrong a code");
      return;
    }

    const convert = amount * rates[to.toUpperCase()];
    console.log(
      `${amount} ${from.toUpperCase()} = ${convert.toFixed(2)} ${to.toUpperCase()}`,
    );
    rl.close();
  } catch (error) {
    console.error("currency changer is not working", error);
  }
}

rl.question("Enter target currency (e.g USD) :", (from) => {
  rl.question("Enter the base currency :", (to) => {
    rl.question("Enter the amount to be converted :", (amount) => {
      currencyCalculate(from, to, parseFloat(amount));
    });
  });
});
