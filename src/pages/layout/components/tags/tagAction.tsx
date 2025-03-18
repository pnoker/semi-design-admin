import React, { FC } from 'react'
import { Dropdown, Button, Tooltip } from '@douyinfe/semi-ui'
import useStore from '@src/store/common/headerTag'
import { useShallow } from 'zustand/shallow'
import { IconSetting, IconRefresh } from '@douyinfe/semi-icons'
import { useNavigate } from 'react-router-dom'

const Index: FC = () => {
	const [activeTagId, removeTag, removeOtherTag, removeAllTag, tags] = useStore(
		useShallow((state) => [state.activeTagId, state.removeTag, state.removeOtherTag, state.removeAllTag, state.tags])
	)
	const navigate = useNavigate()

	// Get current active tag
	const activeTag = tags.find((tag) => tag.id === activeTagId)

	// Refresh current page
	const refreshCurrentPage = () => {
		if (activeTag) {
			navigate(activeTag.path)
		}
	}

	return (
		<Dropdown
			trigger="click"
			position="bottomLeft"
			render={
				<Dropdown.Menu>
					<Dropdown.Item onClick={refreshCurrentPage} icon={<IconRefresh />}>
						Refresh current
					</Dropdown.Item>
					<Dropdown.Item onClick={removeOtherTag}>Close other tabs</Dropdown.Item>
					<Dropdown.Item onClick={removeAllTag}>Close all tabs</Dropdown.Item>
				</Dropdown.Menu>
			}
		>
			<Button theme="borderless" icon={<IconSetting />} size="small" />
		</Dropdown>
	)
}

export default Index
