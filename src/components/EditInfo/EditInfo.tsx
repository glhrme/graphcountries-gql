import React from 'react'
import { Button, TextField } from '@material-ui/core'
import { connect, ConnectedProps } from 'react-redux'
import { infoState, editCountryInfo } from 'store/modules/infoCountries'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string, number } from 'yup'
import { CustomForm } from './EditInfo.style'
import Country from 'shared/types/Country'

const mapStateToProps = (state: infoState) => {
  return ({
    infosMap: state.InfoReducer.mapState
  })
}

const dispatchProps = {
  editCountryInfo
}

const connector = connect(mapStateToProps, dispatchProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  countryInfo: Country,
  closeModal: (value: boolean) => void,
  update: (value: Country) => void
}

const schema = object().shape({
  name: string().required(),
  nativeName: string().required(),
  capital: string().required(),
  area: number().required(),
  population: number().required()
})

const EditInfo: React.FC<Props> = (props) => {
  const { errors, register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: props.countryInfo.name,
      nativeName: props.countryInfo.nativeName,
      capital: props.countryInfo.capital,
      area: props.countryInfo.area,
      population: props.countryInfo.population
    }
  })

  const onSubmit = (data: any) => {
    const countryToEdit = {
      ...props.countryInfo,
      ...data
    }
    props.editCountryInfo(props.countryInfo.nativeName, countryToEdit)
    props.closeModal(true)
    props.update(countryToEdit)
  }

  return (
    <CustomForm>
      <TextField
        label="Nome"
        name="name"
        inputRef={register}
        error={!!errors.name}
        helperText={errors?.name?.message}
      />
      <TextField
        label="Nome Nativo"
        name="nativeName"
        inputRef={register}
        error={!!errors.nativeName}
        helperText={errors?.nativeName?.message}
      />
      <TextField
        label="Capital"
        name="capital"
        inputRef={register}
        error={!!errors.nativeName}
        helperText={errors?.nativeName?.message}
      />
      <TextField
        label="Área"
        name="area"
        type="number"
        inputRef={register}
        error={!!errors.area}
        helperText={errors?.area?.message}
      />
      <TextField
        label="População"
        name="population"
        type="number"
        inputRef={register}
        error={!!errors.population}
        helperText={errors?.population?.message}
      />
      <Button
        type="submit"
        onClick={handleSubmit((data: any) => onSubmit(data))}
        color="primary"
        variant="contained"
      >
        Salvar
      </Button>
    </CustomForm>
  )
}

export default connector(EditInfo)
