import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// -----------------------------------------------------------------------------

export const validationSchema = Yup.object().shape({
  id: Yup.string()
    .label('Name')
    .required(),
});

// TODO: Replace with `deleteTag` Mutation.
export const deleteTag = (values, actions) => {
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
const TagDeleteForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <h1>Delete Tag</h1>
        <p>
          Required fields are followed by{' '}
          <strong>
            <abbr title="required">*</abbr>
          </strong>
          .
        </p>
        <p>
          <label htmlFor="id">
            <span>Name:</span>{' '}
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>{' '}
          <Field component="select" id="id" name="id" required>
            <option value="">Choose&hellip;</option>
            <option value="xxx">xxx</option>
            <option value="yyy">yyy</option>
            <option value="zzz">zzz</option>
          </Field>{' '}
          <ErrorMessage component="span" name="id" />
        </p>
        <p>
          <button type="submit" disabled={isSubmitting}>
            Delete Tag
          </button>
        </p>
      </Form>
    )}
  </Formik>
);

TagDeleteForm.propTypes = {
  initialValues: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

TagDeleteForm.defaultProps = {
  initialValues: {
    id: '',
  },
  onSubmit: deleteTag,
};

// -----------------------------------------------------------------------------

export default TagDeleteForm;
