// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import { useEffect, useState } from 'react'

const useLocalStorage = (key, initValue = '') => {
  const [value, setValue] = useState(
    () => (JSON.parse(localStorage.getItem(key)) ?? [initValue])[0]
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify([value]))
  }, [key, value])

  return [value, setValue]
}

function Greeting({ initialName = '' }) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = useLocalStorage('name', initialName)
  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
