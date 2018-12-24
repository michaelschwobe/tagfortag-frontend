import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// -----------------------------------------------------------------------------

export const validationSchema = Yup.object().shape({
  from: Yup.string()
    .label('From')
    .required(),
  into: Yup.string()
    .label('Into')
    .required(),
});

// TODO: Replace with `mergeTags` Mutation.
export const mergeTags = (values, actions) => {
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
const TagMergeForm = ({ initialValues, onSubmit }) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
  >
    {({ isSubmitting }) => (
      <Form>
        <h1>Merge Tags</h1>
        <p>
          Required fields are followed by{' '}
          <strong>
            <abbr title="required">*</abbr>
          </strong>
          .
        </p>
        <p>
          <label htmlFor="from">
            <span>From:</span>{' '}
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>{' '}
          <Field component="select" id="from" name="from" required>
            <option value="">Choose&hellip;</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </Field>{' '}
          <ErrorMessage component="span" name="from" />
        </p>
        <p>
          <label htmlFor="into">
            <span>Into:</span>{' '}
            <strong>
              <abbr title="required">*</abbr>
            </strong>
          </label>{' '}
          <Field component="select" id="into" name="into" required>
            <option value="">Choose&hellip;</option>
            <option value="a">a</option>
            <option value="b">b</option>
            <option value="c">c</option>
          </Field>{' '}
          <ErrorMessage component="span" name="into" />
        </p>
        <p>
          <button type="submit" disabled={isSubmitting}>
            Merge Tags
          </button>
        </p>
      </Form>
    )}
  </Formik>
);

TagMergeForm.propTypes = {
  initialValues: PropTypes.shape({
    from: PropTypes.string,
    into: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

TagMergeForm.defaultProps = {
  initialValues: {
    from: '',
    into: '',
  },
  onSubmit: mergeTags,
};

// -----------------------------------------------------------------------------

export default TagMergeForm;
