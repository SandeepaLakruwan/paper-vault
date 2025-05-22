import Image from "next/image";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-4 shadow-lg bg-white text-black rounded-lg">
            <Image
                src="/Logo.png"
                alt="A descriptive alt text"
                width={100}
                height={100}
                className=""
            />
            <nav className="space-x-10 font-anek text-base font-normal">
                <a href="#">Home</a>
                <a href="#">Markings</a>
                <select className="bg-transparent w-auto min-w-fit">
                    <option selected>Exams</option>
                    <option>New Exams</option>
                    <option>Past Exams</option>
                    <option>Results</option>
                </select>
                <a href="#">About Us</a>
                </nav>
            <div>
                <button className="bg-orange text-white rounded-full px-4 py-1 hover:bg-dark-brown transition">Log in</button>
            
            </div>
        </header>
    );
}
