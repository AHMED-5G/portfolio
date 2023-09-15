/**
 * Validator function type that accepts an input value and optional arguments.
 * The return value can be a string indicating an error message, or null if validation succeeds.
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
    hasErrors(): boolean;
    getFirstError(): string | null;
    continueWhenError(): Validation<InputT>;
  }
  export function createValidation<InputT>(value: InputT): Validation<InputT> {
    const errors: string[] = [];
    let continueAfterFirstError = false;
    let validationCounter = 0;
  
    function validate<Args extends unknown[]>(
      validator: Validator<InputT, Args>,
      ...args: Args
    ): Validation<InputT> {
      validationCounter++;
      if (!continueAfterFirstError && errors.length > 0) {
        return validation;
      }
  
      const error = validator(value, ...args);
      if (error) {
        errors.push(error);
      }
  
      return validation;
    }
  
    function getErrors(): string[] {
      return errors;
    }
  
    function hasErrors(): boolean {
      return errors.length > 0;
    }
  
    function getFirstError(): string | null {
      return errors[0] || null;
    }
  
    /**
     * It is recommended to call this function as the first validation
     * function or at least at index 1 in the validation chain to ensure
     * that subsequent validators are executed even if there are errors
     * in preceding validators.
     */
    function continueWhenError(): Validation<InputT> {
      if (validationCounter > 1) {
        console.warn(
          "Warning: The `continueWhenError` function should be called as the first validation function or at index 1 in the validation chain.",
        );
      }
      continueAfterFirstError = true;
      return validation;
    }
  
    const validation: Validation<InputT> = {
      value,
      errors,
      validate,
      getErrors,
      getFirstError,
      hasErrors,
      continueWhenError,
    };
  
    return validation;
  }
  