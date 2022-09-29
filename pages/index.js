import { HeadComponent } from '../components/head'

export default function Home() {
  return (
    <>
      <HeadComponent type="landingPage" />
      <div className='flex flex-col h-screen items-center justify-center'>
        <h1 className="font-bold text-hijau-lvl2 text-3xl">Gorku</h1>
        <img
          src='/images/gorku_logo.png'
        />
      </div>
    </>
  )
}
