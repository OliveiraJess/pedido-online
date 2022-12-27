import styled from "styled-components";

export const Container = styled.aside`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem 0;
  width: 7.75rem;

  button {
    background: none;
    border: none;
    width: 100%;
  }

  nav {
    flex: 1;
    height: 100%;
    width: 100%;

    ul {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      height: 100%;
      justify-content: center;
    }

    li {
      a {
        align-items: center;
        display: flex;
        gap: 2rem;
        padding-left: 1.875rem;
        padding-right: 1.875rem;
        position: relative;
        width: fit-content;

        svg {
          fill: ${({ theme }) => theme.colors.white};
          height: 4rem;
          transition: fill 0.3s;
          width: 4rem;
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        &.active {
          &::after {
            background-color: ${({ theme }) => theme.colors.yellow};
            border-radius: 0 5px 5px 0;
            bottom: 0;
            content: '';
            height: calc(100% + 10px);
            left: 0;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 5px;
          }
          
          svg {
            fill: ${({ theme }) => theme.colors.yellow};
          }

          span {
            color: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
  }
`
