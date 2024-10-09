import Graphql from '../assets/graphql.svg';

export default function Navbar() {
  return (
    <header className='shadow-md py-1 px-4 flex justify-around items-center'>
      <div className="flex items-center">
        <img src={Graphql} className='size-10' alt="graphql" loading='lazy' />
        <h2 className='text-[#f6009c] text-xl font-semibold'><span className='hidden md:inline-block'>GraphQL</span> CRUD</h2>
      </div>

      <div className="hidden sm:block">
        <a href="https://github.com/AbdurRaahimm/React-GraphQL-CRUD.git"
          className="px-2 py-1 flex justify-center items-center gap-1 hover:text-[#f6009c]  font-semibold">
          Github
          <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" >
            <path fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0, 0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z ">
            </path>
            <polygon fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8, 14.9 62.8,22.9 71.5,22.9 ">
            </polygon>
          </svg>
        </a>
      </div>
    </header>
  )
}
