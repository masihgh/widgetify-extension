import idle from '@/assets/animals/crab/red_idle_8fps.gif'
import running from '@/assets/animals/crab/red_run_8fps.gif'
import swipe from '@/assets/animals/crab/red_swipe_8fps.gif'
import walking from '@/assets/animals/crab/red_walk_fast_8fps.gif'
import { IoFish } from 'react-icons/io5'
import { BasePetContainer, useBasePetLogic } from '../core/base-pet'
import {
	type PetAnimations,
	type PetAssets,
	type PetDimensions,
	type PetDurations,
	PetSpeed,
} from '../core/pet-types'
import { usePetContext } from '../pet.context'

export const CrabComponent = () => {
	const { getCurrentPetName } = usePetContext()

	const crabAnimations: PetAnimations = {
		idle,
		walk: walking,
		run: running,
		swipe,
		stand: swipe,
		climb: walking,
	}

	const crabDimensions: PetDimensions = {
		size: 32,
		walkSpeed: PetSpeed.SLOW,
		runSpeed: PetSpeed.NORMAL,
		climbSpeed: 0.8,
		maxHeight: 80,
	}

	const crabDurations: PetDurations = {
		walk: { min: 4000, max: 9000 },
		run: { min: 2000, max: 5000 },
		rest: { min: 6000, max: 12000 },
		climb: { min: 3000, max: 6000 },
	}
	const crabAssets: PetAssets = {
		collectibleIcon: <IoFish className="text-blue-500" size={24} />,
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
		animations: crabAnimations,
		dimensions: crabDimensions,
		durations: crabDurations,
		assets: crabAssets,
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
			altText="Interactive Crab"
		/>
	)
}
