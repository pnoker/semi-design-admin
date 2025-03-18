import React, { FC, Suspense } from 'react'
import PrivateRoute from './privateRoute'
import SuspendFallbackLoading from '@src/components/fallback-loading'

export interface WrapperRouteProps {
	/** document title id */
	titleId: string
	/** authorization？ */
	auth?: boolean
	element: React.ReactNode
}

const PublicRoute: FC<{ element: React.ReactNode }> = ({ element }) => {
	return element
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ titleId, auth, element, ...props }) => {
	const WitchRoute = auth ? PrivateRoute : PublicRoute
	if (titleId) {
		document.title = titleId
	}
	return <WitchRoute element={element} {...props} />
}

const WrapperRouteWithOutLayoutComponent: FC<WrapperRouteProps> = ({ titleId, element }) => {
	if (titleId) {
		document.title = titleId
	}

	return <Suspense fallback={<SuspendFallbackLoading message="正在加载中" />}>{element}</Suspense>
}

export { WrapperRouteComponent, WrapperRouteWithOutLayoutComponent }
