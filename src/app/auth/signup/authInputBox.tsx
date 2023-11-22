interface IProps {
    type: string,
    name?: string,
    id?: string,
    placeholder?: string,
    errorMessage?: string | null
}

export default function AuthInputBox({ type, placeholder, id, name, errorMessage }: IProps) {
    return (
        <div className="flex flex-col gap-1">
            <input
                className={`border px-4 py-3 rounded-md text-lg w-full outline-none ${errorMessage ? 'border-red-500' : 'border-gray-500'}`}
                placeholder={placeholder}
                type={type} name={name} id={id} />
            <span className='text-red-500'>{errorMessage}</span>
        </div>
    )
}
