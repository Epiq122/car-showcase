import { CarCard, CustomFilter, Hero, SearchBar } from '@/components';
import { fetchCars } from '@/utils';

export default async function Home() {
  const cars = await fetchCars();
  const isDataEmpty = !Array.isArray(cars) || cars.length < 1;

  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-bold'>Car Catalogue</h1>
          <p>Explore the cars you might like!</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div className='home__filter-container'>
            <CustomFilter title='fuel' />
            <CustomFilter title='year' />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {cars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops no results</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
