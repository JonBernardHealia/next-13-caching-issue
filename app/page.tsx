import Link from "next/link";
import prisma from "./_utils/prisma";

export const revalidate = 0;

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const todos = await prisma.todo.findMany();
  
  return (
    <>
      <Link href="/add">Add to-do</Link>

      <h4>To-do list</h4>

      {
        todos.length > 0 
          ? todos.map((todo) => (
            <div key={todo.id}>{`${todo.id} - ${todo.title}`}</div>
          )) 
          : <div>None</div>
      }
    </>
  )
}
