import styles from "../styles/Home.module.css";
import Logo from "../components/Logo";

function coins() {
  const coinsList = [
    {
      id: "1",
      name: "Bitcoin",
      price: "R$ 197.000,00",
      recomendacao: "Forte compra",
    },

    {
      id: "2",
      name: "Ethereum",
      price: "R$ 14.000,00",
      recomendacao: "Forte compra",
    },

    {
      id: "3",
      name: "ADA",
      price: "R$ 4,00",
      recomendacao: "Forte compra",
    },
    {
      id: "4",
      name: "Litecoin",
      price: "R$ 500,00",
      recomendacao: "Forte venda",
    },

    {
      id: "5",
      name: "Polygon MATIC",
      price: "R$ 7,00",
      recomendacao: "Forte compra",
    },

    {
      id: "6",
      name: "Chiliz",
      price: "R$ 1,93",
      recomendacao: "Forte compra",
    },
  ];

  return (
    <>
      <Logo />
      <div className={styles.wrapper_coins}>
        {coinsList.map((item) => (
          <div key={item.id} className={styles.card}>
            <h3>{item.name}</h3>
            <h5 className="price">{item.price}</h5>
            <span className="recomendacao">{item.recomendacao}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default coins;
