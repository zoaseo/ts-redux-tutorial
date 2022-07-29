// 액션 타입 선언, 액션 생성 함수, 초기값, 리듀서
// 할 일 추가, 할 일 제거, 할 일 체크

import { ActionType, createReducer, deprecated } from "typesafe-actions";
const { createStandardAction } = deprecated;
// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;
// 액션 생성 함수
export const addTodo:any = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
})
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();

// 액션 객체들에 대한 타입 작성
const actions = {
    addTodo,
    toggleTodo,
    removeTodo
}
// 모든 액션 객체들에 대한 타입준비
// 함수의 리턴타입을 추론
type TodosAction = ActionType<typeof actions>
// 상태에서 사용할 할 일 항목 데이터 정의
export type Todo = {
    id: number;
    text: string;
    done: boolean;
}  
// 이 모듈에서 관리할 상태 타입 작성
export type TodoState = Todo[]

// 초기상태 선언
const initialState: TodoState = [];

// 리듀서 작성하기
const todos2 = createReducer<TodoState, TodosAction>(initialState, {
    [ADD_TODO]: (state, action) => {
        return state.concat({
            ...action.payload,
            done: false
        })
    },
    [TOGGLE_TODO]: (state,{ payload: id}) => 
    state.map(todo => (todo.id === id ? {...todo, done: ! todo.done} : todo)),
    [REMOVE_TODO]: (state,{ payload: id }) => 
    state.filter(todo => todo.id !== id)
})
export default todos2;