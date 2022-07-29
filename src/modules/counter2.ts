// 1. 액션타입
// 2. 액션을 리턴해주는 함수
// 3. 초기값
// 4. 리듀서 만들기

import { ActionType, createReducer, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;

const INCREASE = "counter/INCREASE" 
const DECREASE = "counter/DECREASE"
const INCREASE_BY = "counter/INCREASE_BY" 

// 액션 생성 함수
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

// 스테이트의 타입을 지정
type CounterState = {
    count: number;
}
// 초기상태 생성
const initialState = {
    count: 0
}
// 리듀서 액션 타입 지정
const actions = { increase, decrease, increaseBy }
type CounterAction = ActionType<typeof actions>

// 리듀서 만들기
// createReducer를 통해서 오브젝트 맵 형태로 리듀서를 구현
const counter2 = createReducer<CounterState, CounterAction>(initialState, {
    [INCREASE]: state => ({ count: state.count + 1}),
    [DECREASE]: state => ({ count: state.count - 1}),
    [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload})
})
export default counter2;