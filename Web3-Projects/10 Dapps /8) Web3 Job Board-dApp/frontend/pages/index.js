import Link from "next/link";
import React,{useState} from "react";
import Navbar from "./Components/navbar";

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <section className="py-24">
      <div className="flex flex-col p-8">
        <h1 className="text-2xl border-b-2 border-blue-400 w-52">Web3 Job Board</h1>
        <h1 className="text-2xl w-96 text-sky-600 py-2">For Job Seekers and Recruitors</h1>
        <p className="py-3 text-[#9CB4CC] ">This dApp helps applicants and Employers in finding talent and web3 related jobs</p>

        <div className="flex flex-col py-4">
          <Link href='/CreateNewJob'>
        <button className="bg-sky-300 hover:bg-sky-500 rounded-full p-2 mb-2">Create a New Job</button>
          </Link>
          <Link href='/AvailableJobs'>
        <button className="bg-[#c3e6f8] hover:bg-[#8fceed] rounded-full p-2">Available Jobs</button>
          </Link>
        </div>
      </div>
        {/* <img src="https://img.icons8.com/ios/400/000000/find-matching-job.png"/> */}
        <div className="flex justify-center">
          <img src="https://img.icons8.com/dusk/350/000000/find-matching-job.png"/>
        </div>
      </section>
    </div>
  )
}

export default Home