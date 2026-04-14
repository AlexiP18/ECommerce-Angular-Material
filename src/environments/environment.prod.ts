const runtimeBasicUrl = (window as any).__env?.BASIC_URL || 'http://localhost:8080/';

export const environment = {
  production: true,
  BASIC_URL: runtimeBasicUrl.endsWith('/') ? runtimeBasicUrl : `${runtimeBasicUrl}/`
};
