export const saveLocalStorage = (data, name = '') => {
    if (!name) throw new Error('Favor de ingresar un nombre valido');
  if (name.length < 2) throw new Error('Nombre invalido');

  localStorage.setItem(name, JSON.stringify(data));
};

export const getLocalStorage = (name = '') => {
  if (!name) throw new Error('Favor de ingresar un nombre valido');
  if (name.length < 2) throw new Error('Nombre invalido');
  const result = JSON.parse(localStorage.getItem(name));
  return result;
};
