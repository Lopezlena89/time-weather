

interface Props{
    notas:string
}

export const MiniAnotaciones = ({notas}:Props) => {
  return (
    <div className="ml-5 flex  items-center">
        <p className="font-normal text-sm">{notas}</p>
    </div>
  )
}
