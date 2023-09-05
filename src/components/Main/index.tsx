import { Divide, Equals, Minus, Plus, PlusMinus, X } from 'phosphor-react'
import { MouseEvent, useState } from 'react'
import { numberRules } from '../../utils/numbers-rules'
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
import { operatorRules } from '../../utils/operator-rules'
import { aggregationJoin } from '../../utils/aggregation-join'
import { calculate } from '../../utils/calculate'

export default function Main() {
  const [result, setResult] = useState<number>()
  const [aggregator, setAggregator] = useState<string[]>([])

  async function handleClickOnInput(event: MouseEvent<HTMLButtonElement>) {
    const value = event.currentTarget.id
    const isValueNumber = !isNaN(Number(value))
    const aggregatorCopy = [...aggregator]

    if (!value) {
      return
    }

    if (value === 'CE') {
      const ceAggregator = [...aggregator]
      ceAggregator.pop()
      setAggregator(ceAggregator)
      return
    }

    if (value === 'C') {
      setResult(0)
      setAggregator([])
      return
    }

    if (isValueNumber) {
      const newAggregator = numberRules(value, aggregatorCopy)
      setAggregator(newAggregator)
    }

    if (['%', '/', '*', '-', '+'].includes(value)) {
      const newAggregator = operatorRules(value, aggregatorCopy)
      setAggregator(newAggregator)
    }

    if (value === '=') {
      const calculateResult = calculate(aggregatorCopy)

      setResult(calculateResult)
    }
  }

  return (
    <MainContainer>
      <CalculatorContainer>
        <CalculatorInfo>
          <CalculatorInputDisplay>
            {aggregationJoin(aggregator) || '0'}
          </CalculatorInputDisplay>
          <CalculatorResult>
            <CalculatorEqualIcon />
            <CalculatorResultDisplay>{result || 0}</CalculatorResultDisplay>
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
