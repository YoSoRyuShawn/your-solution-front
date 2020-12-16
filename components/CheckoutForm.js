import React from 'react';
import { injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import { Formik } from 'formik'
import * as Yup from 'yup';
import axios from "axios";
import Router from 'next/router';
import Title from "../components/Title";

class CheckoutForm extends React.Component {

    handlePayment = async (values) => {

        // alert(JSON.stringify(values));

        const headers = new Headers();
        headers.set('Content-type', 'application/json');
        // headers.set('Access-Control-Allow-Origin', '*');

        //paymentIntentの作成を（ローカルサーバ経由で）リクエスト
        const responseJson = (
          await axios.post('https://your-solution-stg.herokuapp.com/createPaymentIntent', {
            amount: values.amount,
            username: values.username 
            },{
               headers: headers
             })
          ).data;

        //レスポンスからclient_secretを取得
        const client_secret = responseJson.client_secret;

        //client_secretを利用して（確認情報をStripeに投げて）決済を完了させる
        const confirmRes = await this.props.stripe.confirmCardPayment(client_secret, {
            payment_method: {
                // card: this.props.elements.getElement('card'),
                card: this.props.elements.getElement('cardNumber'),
                billing_details: {
                    name: values.username,
                }
            }
        });
        if (confirmRes.paymentIntent && confirmRes.paymentIntent.status === "succeeded") {
            alert("決済完了");
            Router.push({
              pathname:"/checkout/success",
              query:{
                name: values.username
              }
            });
            return;
        } else {
          Router.push({
            pathname:"/checkout/fail",
            query:{
              name: values.username
            }
          });
          return;
        }
    }

    render() {
        console.log(this.props.stripe);
        return (
            <>
            <Title />
            <div className="col-8">
                <p>決済情報の入力</p>
                <Formik
                    initialValues={{ amount: 100, username: 'TARO YAMADA' }}
                    onSubmit={(values) => this.handlePayment(values)}
                    validationSchema={Yup.object().shape({
                        amount: Yup.number().min(1).max(1000),
                    })}
                >
                    {
                        ({ handleChange, handleSubmit, handleBlur, values, errors, touched }) => (
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
                                        value={values.username}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        invalid={Boolean(touched.username && errors.username)}
                                    />
                                    <FormFeedback>
                                        {errors.username}
                                    </FormFeedback>
                                </FormGroup>
                                {/* <CardElement
                                    className="bg-light p-3"
                                    hidePostalCode={true}
                                /> */}
                                <legend className="col-form-label">カード番号</legend>
                                <CardNumberElement
                                    ref={this.cardNumberRef}
                                    className="p-2 bg-light"
                                />
                                <legend className="col-form-label">有効期限</legend>
                                <CardExpiryElement
                                    className="p-2 bg-light"
                                />
                                <legend className="col-form-label">セキュリティーコード</legend>
                                <CardCVCElement
                                    className="p-2 bg-light"
                                />

                                <Button
                                    type="submit"
                                    onClick={this.submit}
                                    className="my-3"
                                    color="primary"
                                >
                                    購入
                                </Button>
                            </Form>
                        )
                    }
                </Formik>

            </div>
            </>
        );
    }
}

export default injectStripe(CheckoutForm);
