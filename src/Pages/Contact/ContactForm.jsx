import React ,{useContext} from 'react'
import { DataContext } from '../../DataContext'

function ContactForm() {
const{darkMode}=useContext(DataContext)

  return (
    <div className={` px-4 md:px-12 w-10/12 md:w-2/3`}>

  
      <form className={` ${darkMode && 'bg-gray-200'} bg-white p-6 rounded shadow-md w-full  box__shadow`}>
        <label className="block mb-1 md:mb-2 font-bold text-gray-800" htmlFor="name">
          Name:
        </label>
        <input
          className="w-full p-2 border rounded mb-4"
          type="text"
          id="name"
          name="name"
          required
        />

        <label className="block mb-1 md:mb-2 font-bold text-gray-800" htmlFor="email">
          Email:
        </label>
        <input
          className="w-full p-2 border rounded mb-4"
          type="email"
          id="email"
          name="email"
          required
        />

        <label className="block mb-1 md:mb-2 font-bold text-gray-800" htmlFor="message">
          Message:
        </label>
        <textarea
          className="w-full p-2 border rounded mb-4"
          id="message"
          name="message"
          rows="4"
          required
        ></textarea>

        <button
          className={` ${darkMode ?' bg-violet-700':'bg-black'} text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-green`}
          type="submit"
        >
          Submit
        </button>
      </form>

    </div>
  )
}

export default ContactForm