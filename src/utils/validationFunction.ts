type Validator<T> = (value: T) => string;

interface Validation<T> {
  value: T;
  errors: string[];
  validate(validator: Validator<T>, message?: string): Validation<T>;
  getErrors(): string[];
}

export function createValidation<T>(value: T): Validation<T> {
  const errors: string[] = [];

  function validate(validator: Validator<T>, message?: string): Validation<T> {
    const error = validator(value);
    if (error) {
      errors.push(message || error);
    }
    return validation;
  }

  function getErrors(): string[] {
    return errors;
  }

  const validation: Validation<T> = {
    value,
    errors,
    validate,
    getErrors,
  };

  return validation;
}
