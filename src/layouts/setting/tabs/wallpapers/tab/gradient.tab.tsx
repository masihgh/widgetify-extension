import { RequireAuth } from '@/components/auth/require-auth'
import { GradientWallpaper } from '../components/gradient-wallpaper.component'
import { useWallpaper } from '../hooks/use-wallpaper'
import { useWallpapersByCategory } from '../hooks/use-wallpapers-by-category'

export function GradientTab() {
	const { allWallpapers } = useWallpapersByCategory()

	const {
		selectedBackground,

		handleSelectBackground,
	} = useWallpaper(allWallpapers)

	return (
		<RequireAuth mode="preview">
			<div className="shadow-sm rounded-xl">
				<GradientWallpaper
					onSelectGradient={handleSelectBackground}
					selectedGradient={
						selectedBackground && selectedBackground.type === 'GRADIENT'
							? selectedBackground
							: undefined
					}
				/>
			</div>
		</RequireAuth>
	)
}
