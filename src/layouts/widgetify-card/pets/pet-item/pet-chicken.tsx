import idle from '@/assets/animals/chicken/white_idle_8fps.gif'
import running from '@/assets/animals/chicken/white_run_8fps.gif'
import swipe from '@/assets/animals/chicken/white_swipe_8fps.gif'
import walking from '@/assets/animals/chicken/white_walk_fast_8fps.gif'
import { GiCorn } from 'react-icons/gi'
import { BasePetContainer, useBasePetLogic } from '../core/base-pet'
import {
	type PetAnimations,
	type PetAssets,
	type PetDimensions,
	type PetDurations,
	PetSpeed,
} from '../core/pet-types'
import { usePetContext } from '../pet.context'

export const ChickenComponent = () => {
	const { getCurrentPetName } = usePetContext()

	const chickenAnimations: PetAnimations = {
		idle,
		walk: walking,
		run: running,
		swipe,
		stand: swipe,
		climb: walking,
	}

	const chickenDimensions: PetDimensions = {
		size: 32,
		walkSpeed: PetSpeed.SLOW,
		runSpeed: PetSpeed.FAST,
		climbSpeed: 1.2,
		maxHeight: 100,
	}

	const chickenDurations: PetDurations = {
		walk: { min: 3000, max: 8000 },
		run: { min: 1500, max: 4000 },
		rest: { min: 5000, max: 10000 },
		climb: { min: 4000, max: 7000 },
	}
	const chickenAssets: PetAssets = {
		collectibleIcon: <GiCorn className="text-yellow-500" size={24} />,
		collectibleSize: 24,
		collectibleFallSpeed: 2,
	}

	const {
		containerRef,
		petRef,
		position,
		direction,
		showName,
		collectibles,
		getAnimationForCurrentAction,
		dimensions,
		assets,
	} = useBasePetLogic({
		name: getCurrentPetName(),
		animations: chickenAnimations,
		dimensions: chickenDimensions,
		durations: chickenDurations,
		assets: chickenAssets,
	})

	return (
		<BasePetContainer
			name={getCurrentPetName()}
			containerRef={containerRef}
			petRef={petRef}
			position={position}
			direction={direction}
			showName={showName}
			collectibles={collectibles}
			getAnimationForCurrentAction={getAnimationForCurrentAction}
			dimensions={dimensions}
			assets={assets}
			altText="Interactive Chicken"
		/>
	)
}
