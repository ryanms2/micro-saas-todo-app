import { ProfileForm } from './_components/form'
import { auth } from '@/app/services/auth'

export default async function Page() {
  const session = await auth()

  return <ProfileForm defaultValues={session?.user} />
}
