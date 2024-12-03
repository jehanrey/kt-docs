```ts
import { useState } from 'preact/hooks'

export default function Test() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="flex flex-col gap-5 bg-red-500">
      <div>Current count is: {count}</div>
      <div className="flex gap-2">
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>
    </div>
  )
}

```
