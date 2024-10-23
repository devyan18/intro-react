import { Button } from "./Button"

export const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)

    const datos = Object.fromEntries(formData)

    console.log(datos)
    // fetch
  }

  return (
    <form onSubmit={handleSubmit}>
      <input required type="email" name="email" className="border-2 border-black" /><br />
      <input required type="password" name="password" className="border-2 border-black" /><br />
      <Button text="Submit" />
    </form>
  )
}