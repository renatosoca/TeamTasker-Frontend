import { ReactNode, FC } from "react"

export const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className='grid md:grid-cols-[1fr_2fr] min-h-screen overflow-hidden'>
      { children }
    </div>
  )
}
