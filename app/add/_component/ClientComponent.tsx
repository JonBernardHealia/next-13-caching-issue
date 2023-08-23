"use client";

import { Todo } from "@prisma/client";
import { useEffect, useState } from "react";

export default function ClientComponent() {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const getCount = async () => {
      const response = await fetch('/api/add', { method: 'GET' });
      const { count } = await response.json() as { count: number };
  
      setCounter(count);
    }

    getCount();
  }, [])

  const handleAdd = async () => {
    const response = await fetch('/api/add', { method: 'POST' });
    const todo = await response.json() as Todo;

    if (todo.id) {
      setCounter(prev => prev + 1)
    }
  }
  
  const handleClearAll = async () => {
    await fetch('/api/add', { method: 'PUT' });

    setCounter(0);
  }

  return (
    <>
      <h4>Counter</h4>

      <p>{counter}</p>

      <button onClick={handleAdd}>add todo</button>
      <button onClick={handleClearAll}>clear all</button>
    </>
  )
}