import { BarLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-[2px]">
      <BarLoader color="#36d7b7" />
    </div>
  )
}

export default Loading
