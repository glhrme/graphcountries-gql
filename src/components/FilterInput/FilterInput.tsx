import React, {
  useRef,
  ChangeEvent,
  useState
} from 'react'
import { TextField } from '@material-ui/core'
import { debounce } from 'lodash'

type Props = {
  onFilter: (value: string) => void,
  buttonColor: 'primary' | 'secondary'
}

const FilterInput: React.FC<Props> = ({ onFilter, buttonColor }) => {
  const [filterText, setFilterText] = useState<string>('')
  const changeEvent = useRef(
    debounce((value: string) => { onFilter(value) }, 500)
  ).current

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value)
    changeEvent(event.target.value)
  }

  return (
    <TextField
      color={buttonColor}
      label='Filtro'
      name='searchInput'
      value={filterText}
      onChange={handleChange}
      variant="filled"
      size="small"
    />
  )
}

export default FilterInput
