import { Divide, Equals, Minus, Plus, PlusMinus, X } from 'phosphor-react'
import { MouseEvent, MouseEventHandler, useState } from 'react'
import {
  CalculatorContainer,
  CalculatorEqualIcon,
  CalculatorInfo,
  CalculatorInput,
  CalculatorInputDisplay,
  CalculatorInputsContainer,
  CalculatorResult,
  CalculatorResultDisplay,
  MainContainer,
} from './styles'
import { numberRules } from '../../utils/numbers-rules'

export default function Main() {
  // const [result, setResult] = useState()
  const [aggregator, setAggregator] = useState<string[]>([])

  function handleClickOnInput(event: MouseEvent<HTMLButtonElement>) {
    const value = event.currentTarget.id
    const isValueNumber = isNaN(Number(value))

    if (!value) {
      return
    }

    if (value === 'CE') {
      setAggregator([])
      return
    }

    if (isValueNumber) {
      const newAggregator = numberRules(value, aggregator)
      setAggregator(newAggregator)
      return
    }

    if (['+', '-', '*', '/'].includes(value) && aggregator.length === 0) {
      alert('Error')
    }

    if (['+', '-', '*', '/'].includes(value) && aggregator.length > 0) {
      setAggregator((prev) => [...prev, value])
      return
    }

    if (!isNaN(Number(value)) && aggregator.length === 0) {
      setAggregator([value])
      return
    }

    const lastValueOfAggregator = aggregator.slice(-1)[0]

    if (
      !isNaN(Number(value)) &&
      aggregator.length > 0 &&
      ['+', '-', '*', '/'].includes(lastValueOfAggregator)
    ) {
      setAggregator((prev) => [...prev, value])

      return
    }

    if (
      !isNaN(Number(value)) &&
      aggregator.length > 0 &&
      !isNaN(Number(lastValueOfAggregator))
    ) {
      const aggregatorWithNumberConcatNumber = [...aggregator]
      aggregatorWithNumberConcatNumber[
        aggregatorWithNumberConcatNumber.length - 1
      ] = `${lastValueOfAggregator}${value}`
      setAggregator(aggregatorWithNumberConcatNumber)
    }
  }

  console.log(aggregator)

  return (
    <MainContainer>
      <CalculatorContainer>
        <CalculatorInfo>
          <CalculatorInputDisplay>
            {aggregator.join('') || '0'}
          </CalculatorInputDisplay>
          <CalculatorResult>
            <CalculatorEqualIcon />
            <CalculatorResultDisplay>2</CalculatorResultDisplay>
          </CalculatorResult>
        </CalculatorInfo>
        <CalculatorInputsContainer>
          <CalculatorInput
            id="CE"
            onClick={handleClickOnInput}
            variant="with-text-purple"
          >
            CE
          </CalculatorInput>
          <CalculatorInput id="C" onClick={handleClickOnInput}>
            C
          </CalculatorInput>
          <CalculatorInput id="%" onClick={handleClickOnInput}>
            %
          </CalculatorInput>
          <CalculatorInput
            id="/"
            onClick={handleClickOnInput}
            variant="with-bg-purple"
          >
            <Divide size={28} />
          </CalculatorInput>
          <CalculatorInput id="7" onClick={handleClickOnInput}>
            7
          </CalculatorInput>
          <CalculatorInput id="8" onClick={handleClickOnInput}>
            8
          </CalculatorInput>
          <CalculatorInput id="9" onClick={handleClickOnInput}>
            9
          </CalculatorInput>
          <CalculatorInput
            id="*"
            onClick={handleClickOnInput}
            variant="with-bg-purple"
          >
            <X size={28} />
          </CalculatorInput>
          <CalculatorInput id="4" onClick={handleClickOnInput}>
            4
          </CalculatorInput>
          <CalculatorInput id="5" onClick={handleClickOnInput}>
            5
          </CalculatorInput>
          <CalculatorInput id="6" onClick={handleClickOnInput}>
            6
          </CalculatorInput>
          <CalculatorInput
            id="-"
            onClick={handleClickOnInput}
            variant="with-bg-purple"
          >
            <Minus size={28} />
          </CalculatorInput>
          <CalculatorInput id="1" onClick={handleClickOnInput}>
            1
          </CalculatorInput>
          <CalculatorInput id="2" onClick={handleClickOnInput}>
            2
          </CalculatorInput>
          <CalculatorInput id="3" onClick={handleClickOnInput}>
            3
          </CalculatorInput>
          <CalculatorInput
            id="+"
            onClick={handleClickOnInput}
            variant="with-bg-purple"
          >
            <Plus size={28} />
          </CalculatorInput>
          <CalculatorInput id="+-" onClick={handleClickOnInput}>
            <PlusMinus size={28} />
          </CalculatorInput>
          <CalculatorInput id="0" onClick={handleClickOnInput}>
            0
          </CalculatorInput>
          <CalculatorInput id="," onClick={handleClickOnInput}>
            ,
          </CalculatorInput>
          <CalculatorInput
            id="="
            onClick={handleClickOnInput}
            variant="with-bg-purple-light"
          >
            <Equals size={28} />
          </CalculatorInput>
        </CalculatorInputsContainer>
      </CalculatorContainer>
    </MainContainer>
  )
}
