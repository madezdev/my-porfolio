import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='text-center'>
        <h1 className="text-[3rem] font-semibold">🧑‍💻 Martin Hernandez</h1>
        <h2>🚀 Soy Desarrollador Full Stack JavaScript</h2>
      </div>
      <div>
        <a href="">Correo: madezdev@gmail.com</a>
      </div>

      <p>Pagína en construccion</p>
      <Image
        src='/progra.svg'
        width={500}
        height={500}
        alt='Pagina en construccion'
      />
    </main>
  )
}
