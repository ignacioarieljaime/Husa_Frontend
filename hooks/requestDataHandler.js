export function requestDataController(object) {
  let newObject = {};

  Object.keys(object).forEach((key) => {
    if (object[key] !== null) {
      newObject = { ...newObject, [key]: object[key] };
    }
  });
  return newObject;
}
