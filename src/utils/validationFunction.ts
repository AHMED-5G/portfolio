/**
 * Validator function type that accepts an input value and optional arguments.
 * The return value can be a string indicating an error message, or null if validation succeeds.
 *
 * @typeparam InputT - The type of the input value to be validated.
 * @typeparam Args - (Optional) The type of the additional arguments to be passed to the validator function.
 *                   Defaults to an array containing a single string argument if not provided.
 *
 * @explanation
 * The default value of [string] for Args simplifies the usage of the Validator type.
 * It allows most validator functions to work with just the value and message parameters without explicitly providing the type argument for Args.
 * This default value is beneficial when defining validators that commonly require only the value and message parameters.
 */
export type Validator<InputT, Args extends unknown[] = [string?]> = (
  value: InputT,
  ...args: Args
) => string | null;

interface Validation<InputT> {
  value: InputT;
  errors: string[];

  validate<Args extends unknown[]>(
    validator: Validator<InputT, Args>,
    ...args: Args
  ): Validation<InputT>;

  getErrors(): string[];
}

/**
 * Creates a validation object for the specified input value.
 *
 * @typeparam InputT - The type of the input value to be validated.
 * @param value - The input value to be validated.
 * @returns A validation object.
 */
export function createValidation<InputT>(value: InputT): Validation<InputT> {
  const errors: string[] = [];

  function validate<Args extends unknown[]>(
    validator: Validator<InputT, Args>,
    ...args: Args
  ): Validation<InputT> {
    const error = validator(value, ...args);
    if (error) {
      errors.push(error);
    }
    return validation;
  }

  function getErrors(): string[] {
    return errors;
  }

  const validation: Validation<InputT> = {
    value,
    errors,
    validate,
    getErrors,
  };

  return validation;
}
