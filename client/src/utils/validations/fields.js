import * as Yup from 'yup';

export const emailValidation = Yup.string()
    .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        'El correo debe ser válido'
    )
    .email('Correo electrónico inválido')
    .required('Campo obligatorio');

export const passwordValidation = Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .matches(
      /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
      'La contraseña debe incluir al menos un número y un carácter especial'
    )
    .required('Este campo es obligatorio');

export const confirmPasswordValidation = Yup.string()
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
    .required('Campo obligatorio');

