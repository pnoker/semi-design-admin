import { useEffect, useState } from 'react'
import globalStore from '@src/store/common/global'

export function useLoading() {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const unsubscribe = globalStore.subscribe((state) => setLoading(state.loading))
		return () => {
			unsubscribe()
		}
	}, [])

	return {
		loading
	}
}
