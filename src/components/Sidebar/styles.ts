import styled, { css } from 'styled-components'

interface ContainerProps {
  isMenuOpen: boolean
}

export const Container = styled.aside<ContainerProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 2rem 0;
  transition: width 0.3s;

  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          width: 16.3rem;
        `
      : css`
          width: 7.75rem;
        `}

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

  @media (max-width: 720px) {
    bottom: 0;
    left: 0;
    height: 5rem;;
    overflow-y: auto;
    padding: 0 0;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 999;

    button {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        align-items: center;
        flex-direction: row;
      }

      li {
        a {
          flex-direction: column;
          padding: 0rem;

          svg {
            height: 3.25rem;
            width: 3.25rem;
          }

          span {
            display: none;
          }

          &.active {
            &::after {
              display: none;
            }
          }
        }
      }
    }

  }
`
