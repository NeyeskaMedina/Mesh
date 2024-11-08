import React, { useEffect } from 'react';
import { Formik, Form, Field } from "formik";
import './styles.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { loginSchema } from "../../utils/validations/schemas.js";
// import * as jwt_decode from 'jwt-decode'; 

const Login = () => {

  // Maneja la respuesta exitosa de Google
  const handleGoogleSuccess = (response) => {
    console.log(response);
    
    // Decodificar el token de credencial para obtener información del usuario
    const decoded = jwt_decode(response.credential);
    console.log("Datos del usuario:", decoded);

    // Crear el objeto con la información del usuario
    const userData = {
      googleId: decoded.sub,
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    };

    // Llamar a la función de registro en el backend
    registerUser(userData);
  };

  // Maneja la respuesta de error de Google
  const handleError = () => {
    console.log('Error al autenticar con Google');
  };

  // Función para registrar el usuario en el backend
  const registerUser = async (userData) => {
    try {
      // Realiza una solicitud POST al backend para almacenar los datos del usuario
      const response = await fetch('http://tu-backend.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('Usuario registrado exitosamente');
      } else {
        console.log('Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return (
    <GoogleOAuthProvider clientId="664597914441-3hebeiv6vfog12ecr9jbr8b5k40k8pov.apps.googleusercontent.com">
      <div className="login-container">
        <h1 className="logo">Mesh</h1>
        <h2>Bienvenido a tu plataforma de punto de venta digital</h2>
            <Formik 
                initialValues={{
                    email: '',
                    password: '',
                    // confirmPassword: '',
                }}
                validationSchema={loginSchema}
                onSubmit={(values) =>{
                    console.log('datos del usuario', values);


                }}
            >
                {({ errors, touched }) => (
                    <Form style={{ marginBottom: '10px', paddingBottom: '30px', borderBottom: '1px solid white' }}>
                      <div>
                          <Field className='input-field' name='email' placeholder="Correo electrónico"/>
                          {errors.email && touched.email && <div style={{ color: 'orange' }}>{errors.email}</div>}
                      </div>
                      <div>
                          <Field className='input-field' name='password' type='password' placeholder="Contraseña"/>
                          {errors.password && touched.password && <div style={{ color: 'orange' }}>{errors.password}</div>}
                      </div>
                      {/* <div>
                          <Field className='input-field' name='confirmPassword' type='password' placeholder="Confirmar contraseña"/>
                          {errors.confirmPassword && touched.confirmPassword && <div style={{ color: 'orange' }}>{errors.confirmPassword}</div>}
                      </div> */}

                      <button type="submit" className="login-button">Iniciar Sesión</button>
                    </Form>
                )}
            </Formik>
                {/* Botón de inicio de sesión con Google */}
            <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleError}
                render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="google-button"
                    >
                      Iniciar sesión con Google
                    </button>
                )}
            />

        <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
