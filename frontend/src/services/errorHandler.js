export function getApiErrorMessage(error) {
  return error?.response?.data?.message || error?.message || 'An unexpected error occurred.';
}
