import { set } from 'lodash';
import { useState, useEffect } from 'react';


export const useForm = (callback, validator, initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    Object.keys(errors).length === 0 && isSubmitting && callback();
  }, [errors]); // eslint-disable-line

  useEffect(() => {
    return () => {
      setHasChanged(false);
    }
  }, []);

  const handleSubmit = (event) => {
    event && event.preventDefault();
    setErrors(validator ? validator(values) : {});
    setHasChanged(false);
    setIsSubmitting(true);
  };

  const handleChange = (name, value) => {
    setHasChanged(true);
    setValues(values => ({ ...set(values, name, value) }));
  };

  return { errors, handleChange, handleSubmit, hasChanged, setErrors, values };
};

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
