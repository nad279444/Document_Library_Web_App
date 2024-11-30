import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'

export default function Page() {
    const { getUser } = getKindeServerSession()
    const user = getUser()
    console.log(user)
  
    if (!user) redirect('/auth-callback?origin=dashboard') //sync first time users to database

    return(
        <div></div>
    )
}