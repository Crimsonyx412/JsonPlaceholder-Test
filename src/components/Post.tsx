interface IProps {
  title: string
  body: string
}

const Post = ({ title, body }: IProps) => {
  return (
    <div className="flex w-full cursor-pointer flex-col gap-3 rounded-xl border p-4 transition-all duration-200 hover:border-black/80">
      <h1 className="text-2xl text-black">{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default Post
