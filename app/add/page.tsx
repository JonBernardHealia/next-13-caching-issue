import Link from "next/link";

import ClientComponent from "./_component/ClientComponent";

/** Add your relevant code here for the issue to reproduce */
export default async function Add() {
  return (
    <>
      <Link href="/">Back to list</Link>

      <h4>To-do list</h4>

      <ClientComponent />
    </>
  )
}
