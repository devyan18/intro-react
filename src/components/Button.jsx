export const Button = ({ text = "Button", isPrimary }) => {

  // if (isPrimary) {
  //   return (
  //     <button className="bg-pink-500 text-black px-4 py-1 rounded-md hover:bg-pink-700"
  //     >{ text }</button>
  //   )
  // }

  return (
    <button className={`${ isPrimary ? "bg-pink-500 hover:bg-pink-700" : "bg-gray-950 hover:bg-gray-800" } text-white px-4 py-1 rounded-md `}
    >{ text }</button>
  )
}