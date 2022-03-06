import React from 'react'
import {
    InputGroup,
    Input,
    InputRightAddon,
    useColorModeValue
} from '@chakra-ui/react'
import { Currency } from '@uniswap/sdk';

interface CProps {
    initialFromPrice: string,
    currency?: Currency,
    setInitialPrice: Function
}

const CInput: React.FC<CProps> = ({
    initialFromPrice,
    currency,
    setInitialPrice
}) => {

    const tokenListTrgiggerBgColor = useColorModeValue('', '#213345');
    return (
        <InputGroup size='sm' width="250px">
            <Input placeholder='0' height="40px" value={initialFromPrice} onChange={(e) => setInitialPrice(e.target.value)} />
            <InputRightAddon children={(currency?.symbol && currency?.symbol && currency?.symbol.length > 4
                ? currency?.symbol.slice(0, 4) +
                '...'
                : currency?.symbol) || ""} height="40px" color={tokenListTrgiggerBgColor} />
        </InputGroup>
    )
}

export default CInput