import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// -----------------------------------------------------------------------------

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .required()
    .email('Email must be a valid format.'),
  password: Yup.string()
    .label('Password')
    .required()
    .min(8),
});

// TODO: Replace with `signIn` Mutation.
export const signIn = (values, actions) => {
  setTimeout(() => {
    console.log('⚡️ values', JSON.stringify(values, null, 2)); // eslint-disable-line no-console
    actions.setSubmitting(false);
  }, 600);
};

// TODO: Remove eslint rules after elements are replaced with components.
/*
  eslint-disable
    jsx-a11y/label-has-associated-control,
    jsx-a11y/label-has-for,
    react/require-default-props,
    react/default-props-match-prop-types
 */
const SignInForm = ({ initialValues, onSubmit }) => (
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
            <span>Email:</span>{' '}
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>{' '}
          <Field type="email" id="email" name="email" required />{' '}
          <ErrorMessage component="span" name="email" />
        </p>
        <p>
          <label htmlFor="password">
            <span>Password:</span>{' '}
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>{' '}
          <Field type="password" id="password" name="password" required />{' '}
          <ErrorMessage component="span" name="password" />
        </p>
        <p>
          <button type="submit" disabled={isSubmitting}>
            Sign In
          </button>
        </p>
      </Form>
    )}
  </Formik>
);

SignInForm.propTypes = {
  initialValues: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

SignInForm.defaultProps = {
  initialValues: {
    email: '',
    password: '',
  },
  onSubmit: signIn,
};

// -----------------------------------------------------------------------------

export default SignInForm;
