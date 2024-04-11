'use server'

import { auth } from '@/app/services/auth'
import { updateProfileSchema } from './schemas'
import { prisma } from '@/app/services/database'
import { z } from 'zod'

export async function updateProfile(
  input: z.infer<typeof updateProfileSchema>,
) {
  const session = await auth()
  if (!session?.user?.id) {
    return {
      error: 'Not Authorized',
      data: null,
    }
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      name: input.name,
    },
  })
}
