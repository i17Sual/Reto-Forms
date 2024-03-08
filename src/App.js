import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const [formValues, setFormValues] = useState({ email: "", password: "", favClass: "1" });
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);

  const handleEmailChange = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
    // No se realiza validación aquí
  };

  const handlePasswordChange = (e) => {
    setFormValues({ ...formValues, password: e.target.value });
    validatePassword(e.target.value); // Validación de la contraseña al escribir
  };

  const handleSelectChange = (e) => {
    setFormValues({ ...formValues, favClass: e.target.value });
  };

  const clickSubmit = () => {
    validateEmail(formValues.email); // Validación del correo al hacer clic en "Submit"
    validatePassword(formValues.password); // Validación de la contraseña al hacer clic en "Submit"
    alert(JSON.stringify(formValues));
  };

  const validateEmail = (email) => {
    const isEmailValid = /@.*\./.test(email);
    setEmailValidation(isEmailValid);
    return isEmailValid;
  };

  const validatePassword = (password) => {
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d).{9,}/.test(password);
    setPasswordValidation(isPasswordValid);
    return isPasswordValid;
  };

  return (
    <div>
      <h1>Ejemplo de formularios!</h1>

      <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} value={formValues.email} />
          {!emailValidation && <Form.Text className="text-danger">Formato de correo invalido</Form.Text>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} value={formValues.password} />
          {!passwordValidation && (
            <Form.Text className="text-danger">La contraseña debe tener 9 caracteres y contener letras y numeros</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Label>Favorite Class</Form.Label>
          <Form.Select onChange={handleSelectChange}>
            <option value="1">ISIS3710</option>
            <option value="2">Programación con tecnologias weeeb</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
