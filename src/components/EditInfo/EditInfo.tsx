import React from 'react'
import { TextField } from '@material-ui/core'
import { connect, ConnectedProps } from 'react-redux'
import { infoState } from 'store/modules/infoCountries'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import { object, string, number } from 'yup'
import { CustomForm } from './EditInfo.style'

const mapStateToProps = (state: infoState) => {
  return ({
    infosMap: state.InfoReducer.mapState
  })
}

const dispatchProps = {
}

const connector = connect(mapStateToProps, dispatchProps)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  nativeName: string
}

const schema = object().shape({
  name: string().required(),
  nativeName: string().required(),
  capital: string().required(),
  area: number().required(),
  population: number().required()
})

const EditInfo: React.FC<Props> = () => {
  const {} = useForm({
    resolver: yupResolver(schema)
  })
  return (
    <CustomForm>
      <TextField
        label="Nome"
        name="name"
      />
    </CustomForm>
  )
}

export default connector(EditInfo)
