import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Empty from '@components/empty'
// import useStore from '@src/stores/user'

const PrivateRoute: FC<{ element: React.ReactNode }> = ({ element }) => {
	const location = useLocation()
	const { pathname } = location
	// const logged = useStore((state) => state.logged)
	const logged = true // Login validation here

	return logged ? (
		pathname === '/' ? (
			<Navigate to="/dashboard/workbeach" replace />
		) : (
			element
		)
	) : (
		<Empty title="没有权限" description="您还没有登录，请先去登录" type="403" />
	)
}

export default PrivateRoute
