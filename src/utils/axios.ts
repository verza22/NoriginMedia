import axios, { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';
import { API_ROUTE, API_TIMEOUT } from '../config';

const apiClient = axios.create({
  baseURL: API_ROUTE,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  response => response,
  (error: unknown) => {
    let message = 'An unexpected error occurred';

    if (typeof error === 'string') {
      message = error;
    } else if (error && typeof error === 'object') {
      const axiosError = error as AxiosError;

      const responseData = axiosError.response?.data;

      if (
        responseData &&
        typeof responseData === 'object' &&
        'message' in responseData &&
        typeof (responseData as any).message === 'string'
      ) {
        message = (responseData as any).message;
      } else if (typeof axiosError.message === 'string') {
        message = axiosError.message;
      }
    }

    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
      position: 'bottom',
      bottomOffset: 100,
      visibilityTime: 10000,
    });

    return Promise.reject(error);
  }
);

export default apiClient;