import { memo, useState, ChangeEvent } from 'react'
import { useSimpleContext } from 'context/SimpleContext'

export const AnotherFirstLevelComponent = memo(() => {
  const { appData, editAge } = useSimpleContext()
  const [age, setAge] = useState(appData.age)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const realAge = Number(e.target.value)
    setAge(realAge)
    editAge(realAge)
  }

  return (
    <div className="with-borders">
      <h1>Another FirstLevel Component</h1>
      <label htmlFor="age">Quel est ton age en vrai ?</label>
      <input
        type="number"
        id="age"
        defaultValue={age}
        onChange={onChangeHandler}
      />
    </div>
  )
})
