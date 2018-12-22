import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// -----------------------------------------------------------------------------

export const initialValues = { email: '', password: '' };

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required.')
    .email('Email format is invalid.'),
  password: Yup.string()
    .required('Password is required.')
    .min(8, 'Password length must be at least 8 characters.')
    .max(50, 'Password length cannot exceed 50 characters.'),
});

// TODO: Replace with `signIn` Mutation.
export const signIn = (values, actions) => {
  setTimeout(() => {
    console.log('⚡️ values', JSON.stringify(values, null, 2)); // eslint-disable-line no-console
    actions.setSubmitting(false);
  }, 600);
};

// TODO: Write <Title /> component.
// TODO: Write <FormRow /> component.
// TODO: Write <Label /> component.
// TODO: Write <FieldError /> component.
// TODO: Remove eslint rules.
/*
  eslint-disable
    jsx-a11y/label-has-associated-control,
    jsx-a11y/label-has-for,
    react/require-default-props,
    react/default-props-match-prop-types
 */
const SignInForm = ({ onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <h1>Sign In</h1>
        <p>
          Required fields are followed by{' '}
          <strong>
            <abbr title="required">*</abbr>
          </strong>
          .
        </p>

        <p>
          <label htmlFor="email">
            <span>Email: </span>
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>
          <Field type="email" id="email" name="email" required />
          <ErrorMessage name="email" component="div" />
        </p>
        <p>
          <label htmlFor="password">
            <span>Password: </span>
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>
          <Field type="password" id="password" name="password" required />
          <ErrorMessage name="password" component="div" />
        </p>
        <p>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </p>
      </Form>
    )}
  </Formik>
);

SignInForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

SignInForm.defaultProps = {
  onSubmit: signIn,
};

// -----------------------------------------------------------------------------

export default SignInForm;
