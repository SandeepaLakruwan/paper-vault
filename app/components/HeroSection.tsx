import Image from 'next/image';
import BookImage from '../../public/bookA.png';

export default function HeroSection() {
  return (
    <div className="flex font-anek font-normal text-lg flex-col items-center justify-center py-12 px-4 text-center">
      
      <div className="flex flex-col md:flex-row items-center md:space-x-6">
        
        <div className="text-4xl md:text-5xl font-bold text-dark_brown">PAST</div>

        
        <div className="flex items-center space-x-2">
          <span className="text-4xl md:text-5xl font-bold text-dark_brown">P</span>
          <Image
            src={BookImage}
            alt="Book A"
            width={60}
            height={60}
            className="w-[60px] h-auto"
          />
          <span className="text-4xl md:text-5xl font-bold text-dark_brown">PERS</span>
        </div>
      </div>

      <div className="mt-4 text-lg md:text-xl text-gray-800 flex gap-4 flex-wrap justify-center">
        <span><strong>100+</strong> Subjects</span>
        <span><strong>1000+</strong> Papers</span>
      </div>

      <p className="mt-2 text-base md:text-lg text-gray-600">
        Access Sri Lanka’s <span className="text-orange font-semibold">Largest</span> Collection of Past Papers
      </p>

      <div className="mt-6 flex items-center bg-white border rounded-full shadow px-4 py-2 max-w-md w-full">
        <input
          type="text"
          placeholder="Search"
          className="flex-grow bg-transparent focus:outline-none text-gray-700"
        />
        <button className="bg-dark_brown text-white px-6 py-2 rounded-full">
          Search
        </button>
      </div>
    </div>
  );
}
