interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: () => void
}

const SearchInput = ({ onSearch, ...props }: IProps) => {
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') onSearch()
  }

  return (
    <div className="mb-4 flex items-center gap-2">
      <input
        type="text"
        className="rounded-md border border-gray-300 px-2 py-1.5 outline-none transition-all duration-200 focus:border-black/80"
        onKeyUp={handleKeyUp}
        {...props}
      />
      <button
        onClick={onSearch}
        className="rounded-md bg-neutral-900 px-3 py-2 text-sm text-white transition-all hover:bg-neutral-900/80"
      >
        Search
      </button>
    </div>
  )
}

export default SearchInput
