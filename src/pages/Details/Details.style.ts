import styled from 'styled-components'

export const WrapperInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  img {
    width: 64px;
    margin-right: 16px;
  }
`

export const WrapperButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  button, a {
    color: white;
    text-decoration: none;
  }
`

export const WrapperMain = styled.div`
  width: 300px;
  p {
    color: gray;
    > span {
      color: black;
    }
    > ul {
      display: flex;
      flex-direction: column;
      color: black;
      align-items: center;
    }
  }
`

export const WrapperMap = styled.div`
  width: 100vw;
  margin: 8px;
`

export const MarkerIcon = styled.div`
  padding: 5px;
    color: #fff;
    cursor: pointer;
    background: #1978c8;
    border-radius: 6px;
    font-size: 10px;
`

export const MarkerMain = styled.div`
  padding: 10px;
  color: #fff;
  cursor: pointer;
  background: #eb4034;
  border-radius: 6px;
`
