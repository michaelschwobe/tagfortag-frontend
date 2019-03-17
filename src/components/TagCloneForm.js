import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// -----------------------------------------------------------------------------

export const validationSchema = Yup.object().shape({
  currId: Yup.string()
    .label('From')
    .required(),
  nextId: Yup.string()
    .label('Into')
    .required(),
});

// TODO: Replace with `cloneTag` Mutation.
export const cloneTag = (values, actions) => {
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
// TODO: Update <TagCloneForm /> component with `cloneTag`.
const TagCloneForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <h1>Clone Tag</h1>
        <p>
          Required fields are followed by{' '}
          <strong>
            <abbr title="required">*</abbr>
          </strong>
          .
        </p>
        <p>
          <label htmlFor="currId">
            <span>From:</span>{' '}
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>{' '}
          <Field component="select" id="currId" name="currId" required>
            <option value="">Choose&hellip;</option>
            <option value="xxx">xxx</option>
            <option value="yyy">yyy</option>
            <option value="zzz">zzz</option>
          </Field>{' '}
          <ErrorMessage component="span" name="currId" />
        </p>
        <p>
          <label htmlFor="nextId">
            <span>Into:</span>{' '}
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>{' '}
          <Field component="select" id="nextId" name="nextId" required>
            <option value="">Choose&hellip;</option>
            <option value="xxx">xxx</option>
            <option value="yyy">yyy</option>
            <option value="zzz">zzz</option>
          </Field>{' '}
          <ErrorMessage component="span" name="nextId" />
        </p>
        <p>
          <button type="submit" disabled={isSubmitting}>
            Clone Tag
          </button>
        </p>
      </Form>
    )}
  </Formik>
);

TagCloneForm.propTypes = {
  initialValues: PropTypes.shape({
    currId: PropTypes.string,
    nextId: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

TagCloneForm.defaultProps = {
  initialValues: {
    currId: '',
    nextId: '',
  },
  onSubmit: cloneTag,
};

// -----------------------------------------------------------------------------

export default TagCloneForm;
