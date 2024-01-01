//const SideBar:React.FC<UserInfoProps> = ({currentUser}):React.ReactElement =>{
import { Box, Button, TextField } from '@mui/material';
import { Formik, FormikHelpers } from 'formik';
import * as yup from 'yup';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../../components/header/header.components';
import { FocusEventHandler } from 'react';

type FormValues = {
  username: string;
  password: string;
  confirmpassword: string;
  firstname: string;
  lastname: string;
  city: string;
  phone: string;
  email: string;
};

const initialValues: FormValues = {
  username: '',
  password: '',
  confirmpassword: '',
  firstname: '',
  lastname: '',
  city: '',
  phone: '',
  email: '',
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const checkOutSchema = yup.object().shape({
  username: yup.string().required('required'),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(passwordRegExp, 'Pick a stronger password.'),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Required'),
  firstname: yup.string().required('required'),
  lastname: yup.string().required('required'),
  city: yup.string().required('required'),
  phone: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('required'),
  email: yup.string().email('invalid email').required('required'),
});

interface TextFieldProps {
  type: string;
  label: string;
  name: string;
  span: string;
  value: string;
  helperText: string | boolean | undefined;
  error: boolean;
  onBlur: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

interface FormikFieldProps {
  handleFormSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => void;
  isNonMobile: boolean;
}

const SubmitButton = (): React.ReactElement => {
  return (
    <Box display="flex" justifyContent="end" mt="20px">
      <Button type="submit" color="secondary" variant="contained">
        Create New User
      </Button>
    </Box>
  );
};

const FormTextField: React.FC<TextFieldProps> = (props): React.ReactElement => {
  return (
    <TextField
      fullWidth
      variant="filled"
      type={props.type}
      label={props.label}
      onBlur={props.onBlur}
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      error={props.error}
      helperText={props.helperText}
      sx={{ gridColumn: props.span }}
    />
  );
};

const FormikField: React.FC<FormikFieldProps> = (props): React.ReactElement => {
  return (
    <Formik
      onSubmit={props.handleFormSubmit}
      initialValues={initialValues}
      validationSchema={checkOutSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0,1fr))"
            sx={{
              '& > div': {
                gridColumn: props.isNonMobile ? undefined : 'span 4',
              },
            }}
          >
            <FormTextField
              type="text"
              label="Username"
              name="username"
              span="span 4"
              value={values.username}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.username && !!errors.username}
              helperText={touched.username && errors.username}
            />
            <FormTextField
              type="password"
              label="Password"
              name="password"
              span="span 2"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.password && !!errors.password}
              helperText={touched.password && errors.password}
            />
            <FormTextField
              type="password"
              label="Confirm Password"
              name="confirmpassword"
              span="span 2"
              value={values.confirmpassword}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.confirmpassword && !!errors.confirmpassword}
              helperText={touched.confirmpassword && errors.confirmpassword}
            />
            <FormTextField
              type="text"
              label="First Name"
              name="firstname"
              span="span 2"
              value={values.firstname}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.firstname && !!errors.firstname}
              helperText={touched.firstname && errors.firstname}
            />
            <FormTextField
              type="text"
              label="Last Name"
              name="lastname"
              span="span 2"
              value={values.lastname}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.lastname && !!errors.lastname}
              helperText={touched.lastname && errors.lastname}
            />
            <FormTextField
              type="text"
              label="Email"
              name="email"
              span="span 4"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
            />
            <FormTextField
              type="text"
              label="Phone number"
              name="phone"
              span="span 4"
              value={values.phone}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.phone && !!errors.phone}
              helperText={touched.phone && errors.phone}
            />
            <FormTextField
              type="text"
              label="City"
              name="city"
              span="span 4"
              value={values.city}
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.city && !!errors.city}
              helperText={touched.city && errors.city}
            />
          </Box>
          <SubmitButton />
        </form>
      )}
    </Formik>
  );
};

const Form: React.FC = (): React.ReactElement => {
  const isNonMobile = useMediaQuery('(min-width:600px)');

  const handleFormSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    console.info(values);
    console.info(formikHelpers);
  };
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <FormikField
        handleFormSubmit={handleFormSubmit}
        isNonMobile={isNonMobile}
      />
    </Box>
  );
};

export default Form;
