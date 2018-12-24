import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// -----------------------------------------------------------------------------

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .label('Name')
    .required(),
});

// TODO: Replace with `updateTag` Mutation.
export const updateTag = (values, actions) => {
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
const TagUpdateForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <h1>Update Tag</h1>
        <p>
          Required fields are followed by{' '}
          <strong>
            <abbr title="required">*</abbr>
          </strong>
          .
        </p>
        <p>
          <label htmlFor="name">
            <span>Name:</span>{' '}
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>{' '}
          <Field type="text" id="name" name="name" required />{' '}
          <ErrorMessage component="span" name="name" />
        </p>
        <p>
          <button type="submit" disabled={isSubmitting}>
            Update Tag
          </button>
        </p>
      </Form>
    )}
  </Formik>
);

TagUpdateForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

TagUpdateForm.defaultProps = {
  onSubmit: updateTag,
};

// -----------------------------------------------------------------------------

export default TagUpdateForm;
