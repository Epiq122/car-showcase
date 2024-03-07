export async function fetchCars() {
  const headers = {
    'X-RapidAPI-Key': '10f7cc593amsh3aa60bd509a97eep14d25cjsn751e17e925b4',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  };
  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers,
    },
  );
  const result = await response.json();
  return result;
}
