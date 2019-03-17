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

// TODO: Replace with `createTag` Mutation.
export const createTag = (values, actions) => {
  setTimeout(() => {
    console.log('⚡️ values', JSON.stringify(values, null, 2));
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
// TODO: Update <TagCreateForm /> component with `createTag`.
const TagCreateForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <h1>Create Tag</h1>
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
            Add Tag
          </button>
        </p>
      </Form>
    )}
  </Formik>
);

TagCreateForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

TagCreateForm.defaultProps = {
  initialValues: {
    name: '',
  },
  onSubmit: createTag,
};

// -----------------------------------------------------------------------------

export default TagCreateForm;
