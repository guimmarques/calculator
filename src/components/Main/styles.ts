import { Equals } from 'phosphor-react'
import { styled } from 'styled-components'

export const MainContainer = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(180deg, #807ece 0%, #8e7ece 100%);
`

export const CalculatorContainer = styled.div`
  width: 356px;
  height: 566px;
  display: flex;
  flex-direction: column;
  padding: 54px 32px 32px 32px;
  border-radius: 48px;
  gap: 26px;
  background-color: #2d2a37;

  border-radius: 48px;
  background: #2d2a37;
  box-shadow:
    0px -4px 5px 0px rgba(0, 0, 0, 0.22) inset,
    0px 6px 8px 0px rgba(255, 255, 255, 0.1) inset,
    0px 8px 17px 0px rgba(0, 0, 0, 0.29),
    0px 30px 30px 0px rgba(0, 0, 0, 0.26),
    0px 68px 41px 0px rgba(0, 0, 0, 0.15),
    0px 120px 48px 0px rgba(0, 0, 0, 0.04),
    0px 188px 52px 0px rgba(0, 0, 0, 0.01),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`

export const CalculatorInfo = styled.div`
  padding: 0px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* border: 1px solid black; */
`

export const CalculatorInputDisplay = styled.span`
  width: 100%;
  text-align: right;
  font-size: 20px;
  line-height: 28px;
  font-weight: 400;
  letter-spacing: -0.4px;
  color: #6b6b6b;
`

export const CalculatorResult = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CalculatorEqualIcon = styled(Equals)`
  width: 20px;
  height: 20px;
  color: #6b6b6b;
`

export const CalculatorResultDisplay = styled.span`
  color: #ebebeb;
  font-size: 36px;
`

export const CalculatorInputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 12px;
`

export type CalculatorInputProps = {
  variant?:
    | 'primary'
    | 'with-text-purple'
    | 'with-bg-purple'
    | 'with-bg-purple-light'
}

export const CalculatorInput = styled.button<CalculatorInputProps>`
  display: flex;
  width: 64px;
  height: 64px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  color: ${(props) =>
    props.variant === 'with-text-purple' ? '#975DFA' : '#EBEBEB'};
  font-size: 24px;
  letter-spacing: -0.48px;
  cursor: pointer;

  border-radius: 999px;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(255, 255, 255, 0.05) 100%
    ),
    ${(props) =>
      props.variant === 'with-bg-purple'
        ? '#462878'
        : props.variant === 'with-bg-purple-light'
        ? '#7F45E2'
        : '#2D2A37'};
  box-shadow:
    0px 2px 3px 0px rgba(255, 255, 255, 0.06) inset,
    0px 0px 2px 0px rgba(0, 0, 0, 0.29),
    0px 2px 4px 0px rgba(0, 0, 0, 0.26),
    0px 4px 6px 0px rgba(0, 0, 0, 0.1),
    0px 7px 7px 0px rgba(0, 0, 0, 0.04),
    0px 11px 7px 0px rgba(0, 0, 0, 0.01);
`
