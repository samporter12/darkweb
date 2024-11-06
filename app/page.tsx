import ThemeSwitch from './components/ThemeSwitch';

export default function Home() {
  return (
    <main className='flex items-center justify-center w-screen h-screen bg-cyan-200 dark:bg-wisteria-500 font-[family-name:var(--font-kor-regular)]'>
      <section className='flex flex-col items-center gap-y-10'>
        <section className=''>
          <ThemeSwitch />
        </section>
        
        <h1 className='text-6xl font-extrabold text-cyan-900 dark:text-cyan-200'>
          Hi, im gustavo but you can call me Gus!
        </h1>

        {/* Card Section */}
        <main className='bg-white dark:bg-cyan-700 p-8 rounded-xl shadow-lg w-[350px] text-center'>
          {/* Image Link */}
          <a href="https://img.huffingtonpost.es/files/image_720_480/uploads/2024/11/06/el-candidato-republicano-donald-trump-en-el-palm-beach-county-convention-center-cuartel-general-de-la-campana-en-florida.jpeg" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://img.huffingtonpost.es/files/image_720_480/uploads/2024/11/06/el-candidato-republicano-donald-trump-en-el-palm-beach-county-convention-center-cuartel-general-de-la-campana-en-florida.jpeg" 
              alt="Imagen de Trump" 
              className="w-full h-auto rounded-md mb-4"
            />
          </a>

          {/* Text Below Button */}
          <p className='text-gray-700 dark:text-gray-300 mt-4'>
            .
          </p>
        </main>
      </section>
    </main>
  );
}