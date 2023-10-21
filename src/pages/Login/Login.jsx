import { Button, Container, Form, Input, Link, Title, Wrapper } from './styles';

const Login = () => {
  return (
    <Container>
      <Wrapper width="25%">
        <Title>SIGN IN</Title>
        <Form direction="column">
          <Input placeholder="Type your e-mail" />
          <Input placeholder="Type your password" />
          <Button>LOGIN</Button>
          <Link>I forgot my password</Link>
          <Link>Create new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
