import Graphql from '../assets/graphql.svg';

export default function Navbar() {
  return (
    <header className='shadow-md py-1 px-4 flex justify-around items-center'>
        <div className="flex items-center">
            <img src={Graphql} className='size-10' alt="graphql" loading='lazy' />
            <h2 className='text-[#f6009c] text-xl font-semibold'><span className='hidden md:inline-block'>GraphQL</span> CRUD</h2>
        </div>
        <nav>
            <ul className='flex gap-4'>
                <li> <a href="">Home</a> </li>
                <li> <a href="">Home</a> </li>
                <li> <a href="">Home</a> </li>
                <li> <a href="">Home</a> </li>
            </ul>
        </nav>
    </header>
  )
}
