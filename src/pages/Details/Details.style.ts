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
