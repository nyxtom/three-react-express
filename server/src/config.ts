/**
 * Web configuration keys including VITE_ prefix.
 * NOTE: this should load **before** dotenv loads
 */
const webConfig = Object.keys(process.env)
  .filter((k) => k.startsWith('VITE_'))
  .reduce((acc: Record<string, boolean | number | string>, key) => {
    const value = process.env[key];
    if (typeof value === 'undefined') {
      return acc;
    }
    const type = ['false', 'true'].includes(value)
      ? 'boolean'
      : isNaN(Number(value)) || value.length === 0
        ? 'string'
        : 'number';
    if (type === 'boolean') {
      acc[key] = value === 'true';
    } else if (type === 'number') {
      acc[key] = parseInt(value);
    } else if (typeof value !== 'string') {
      acc[key] = value;
    } else {
      if (value.length) {
        acc[key] = value;
      }
    }
    return acc;
  }, {});

export { webConfig };
