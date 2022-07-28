import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';

const ContainerCounter = () => {
    const count = useSelector((state: RootState) => state.counter.count);
    const dispatch = useDispatch();

    const onIncrease = () => {
        dispatch(increase())
    }
    const onDecrease = () => {
        dispatch(decrease())
    }
    const onIncreaseBy = (diff:number) => {
        dispatch(increaseBy(diff))
    }
    return (
        <Counter count={count}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        onIncreaseBy={onIncreaseBy}/>
    );
};

export default ContainerCounter;