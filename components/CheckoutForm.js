import { CardElement, injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement, Elements } from 'react-stripe-elements';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Formik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';

function CheckoutForm(props) {
  const handlePayment = async (values) => {
    const header = new Headers();
    header.set("Content-type", "application")
    const responseJson = (
      await axios.post("/createPaymen",{
        amout: values.amout,
        username: values.username
      },{
        headers: headers
      })
    ).data;
    const client_secret = responseJson.client_secret;

    const confirmRes = await props.stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: props.elements.getElement("cardNumber"),
        billing_details: {
          name: values.username
        }
      }
    });

    if(confirmRes.paymentIntent.status === "succeeded") {
      // console.log("決済完了");
    }
  };

  return(
    <div className="col-8">
      {/* あとで英語にする */}
      <p>決済情報の入力</p>
      <Formik
        initialValues={{ amount: 100, username: 'TARO YAMADA' }}
        onSubmit={(values) => handlePayment(values)}
        validationSchema={Yup.object().shape({
          amount: Yup.number().min(1).max(1000),
        })}
      >
      {
        ({ handleChange, handleSubmit, handleBlur, values, errors, touched}) => {
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>金額</Label>
              <Input 
                type="text"
                name="amount"
                value={values.amount}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={Boolean(touched.amount && errors.amount)}
              />
              <FormFeedback>
                {errors.amount}
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label>利用者名</Label>
              <Input 
                type="text"
                name="username"
                values={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={Boolean(touched.username && errors.username)}
              />
              <FormFeedback>
                {errors.username}
              </FormFeedback>
            </FormGroup>
            <legend className="col-form-label">カード番号</legend>
            <CardNumberElement 
              ref={this.cardNumberRef}
              className="p-2 bg-light"
            />
            <legend className="col-form-label">有効期限</legend>
            <CardExpiryElement 
              className="p-2 bg-light"
            />
            <legend className="col-form-label">セキュリティコード</legend>
            <CardCVCElement 
              className="p-2 bg-light"
            />

            <Button
              onClick={submit}
              className="my-3"
              color="primary"
            >
              購入
            </Button>
          </Form>
        }
      }
      </Formik>
    </div>
  );
}

export default injectStripe(CheckoutForm);