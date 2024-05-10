import { ShoppingCart, User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='w-full bg-teal-500 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>Farmácia Generation</Link>

          <div className='flex gap-4'>
            <Link to='/categorias' className='hover:underline'>Categoria</Link>
            <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
            <User size={25} weight="bold"></User>
            <ShoppingCart size={24} weight="bold"></ShoppingCart>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
