import Head from 'next/head'
import Layout from '../components/Layout/Layout';
import Home from '../components/Home/Home';

export default function home({pizzas}) {
  return (
    <Layout>
      <Home pizzas={pizzas} />
    </Layout>
  )
}

export const getStaticProps = async () =>{

  const res = await fetch('https://pizza-website-back.herokuapp.com/pizza/');
  // const res = await fetch('http://localhost:8000/pizza/');
  const pizzas = await res.json();

  return {
      props: {
          pizzas,
      },
  }
}