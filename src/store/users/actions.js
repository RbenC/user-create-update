import { store } from '../../store'

import {
	FETCH_USERS_START,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_FAILURE,
	DELETE_USERS_START,
	DELETE_USERS_SUCCESS,
	DELETE_USERS_FAILURE,
	CREATE_USERS_START,
	CREATE_USERS_SUCCESS,
	CREATE_USERS_FAILURE,
	UPDATE_USERS_START,
	UPDATE_USERS_SUCCESS,
	UPDATE_USERS_FAILURE
} from './constants'

//fetch
export const fetchUsersStart = () => ({
	type: FETCH_USERS_START
})

export const fetchUsersSuccess = (users) => ({
	type: FETCH_USERS_SUCCESS,
	payload: users
})

export const fetchUsersFailure = (errorMessage) => ({
	type: FETCH_USERS_FAILURE,
	payload: errorMessage
})

//delete
export const deleteUsersStart = () => ({
	type: DELETE_USERS_START
})

export const deleteUsersSuccess = (id) => ({
	type: DELETE_USERS_SUCCESS,
	payload: id
})

export const deleteUsersFailure = (errorMessage) => ({
	type: DELETE_USERS_FAILURE,
	payload: errorMessage
})

//CREATE
export const createUsersStart = () => ({
	type: CREATE_USERS_START
})

export const createUsersSuccess = (user) => ({
	type: CREATE_USERS_SUCCESS,
	payload: user
})

export const createUsersFailure = (errorMessage) => ({
	type: CREATE_USERS_FAILURE,
	payload: errorMessage
})

//UPDATE
export const updateUsersStart = () => ({
	type: UPDATE_USERS_START
})

export const updateUsersSuccess = (userx) => {
	const { users: usuarios } = store.getState()
	const users = usuarios.data
	const iEdit = users.findIndex((user) => user.id === userx.id)
	users[iEdit] = userx

	return {
		type: UPDATE_USERS_SUCCESS,
		payload: users
	}
}

export const updateUsersFailure = (errorMessage) => ({
	type: UPDATE_USERS_FAILURE,
	payload: errorMessage
})
