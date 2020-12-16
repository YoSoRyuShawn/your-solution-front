import Head from "next/head";
import CheckoutForm from "../../components/CheckoutForm";
import { Elements, StripeProvider} from "react-stripe-elements";
import { useState, Fragment } from "react";
import Script from 'react-load-script';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  const [stripe, setStripe] = useState(null);
  const onStripeLoad = () => {
    if(window.Stripe) {
      setStripe(window.Stripe("pk_test_51HyWlgCAUqx4BaPL7KcmY0WevZG6TpmlW5uLGJ4FVmrkFZU0Bprspo9tqwQGf9K77CpJtQHNu8mfQgYPQdmvRQkR00OuElpR8r"))
    }
  }
  return (
    <div>
      <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <script src="https://js.stripe.com/v3/"></script>
      </Head>
      <StripeProvider stripe={stripe}>
        <div className="container">
          <Elements>
          <Fragment>
            <CheckoutForm />
            <Script 
              url="https://js.stripe.com/v3/"
              onLoad={() => onStripeLoad()}
            />
            </Fragment>
          </Elements>
        </div>
      </StripeProvider>
    </div>
  )
}