'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'

export async function addNews(formData: FormData) {
  const supabase = await createClient()

  const data = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    category: formData.get('category') as string,
    date: formData.get('date') as string,
    image: formData.get('image') as string,
    color: formData.get('color') as string || 'bg-[#020817]',
  }

  const { error } = await supabase.from('news').insert([data])

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/admin/haberler')
}

export async function deleteNews(id: string) {
  const supabase = await createClient()

  const { error } = await supabase.from('news').delete().eq('id', id)

  if (error) {
    throw new Error(error.message)
  }

  revalidatePath('/admin/haberler')
}
