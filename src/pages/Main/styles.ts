import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  min-height: 100vh;
  width: 100%;

  > section {
    flex: 1;
    height: 100vh;
    overflow-y: auto;
    padding: 2rem 1.875rem;
    width: 100%;

    img {
      margin-bottom: 2rem;
      width: 10rem;
    }

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;

      img {
        align-self: center;
      }
    }
  }
`
