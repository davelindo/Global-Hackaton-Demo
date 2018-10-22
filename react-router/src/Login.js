
import React, { Component } from "react";
import PropType from "prop-types";
import { Button, Form, Grid, Header, Image, Segment } from "semantic-ui-react";

class LoginForm extends Component {

  constructor(props) {
    super(props);

  }

  
  


  render() {
    return (
      
      <div className="login-form">
        <style>
          {`
                body > div,
                body > div > div,
                body > div > div > div.login-form {
                height: 100%;
                }
            `}
        </style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="red" textAlign="center">
              Log-in to your account
            </Header>
            <Form  onSubmit={this.props.login}size="large" color="gray">
              <Segment stacked>
                <Button color="red" fluid size="large" type="submit" on>
                  Login
                </Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}



export default LoginForm;
