"use server"

import createSupabaseServerClient from "@/lib/supabase/server"

export async function createTodo(title: string) {

    const supabase = await createSupabaseServerClient();

   const result = await supabase.from("todo").insert({title}).single()

   return JSON.stringify(result)

}

export async function readTodo() {}

export async function deleteTodoById(id: string) {}

export async function updateTodoById(id: string, completed: boolean) {}
