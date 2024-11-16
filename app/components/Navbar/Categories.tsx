'use client';

import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { 
	GiBarn,
	GiBoatFishing, 
	GiCactus, 
	GiCastle, 
	GiCaveEntrance, 
	GiForestCamp, 
	GiIsland, 
	GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
	{
		label: 'Beach',
		icon: TbBeach,
		description: 'This station is close to the beach!'
	},
	{
		label: 'Windmills',
		icon: GiWindmill,
		description: 'This station has windmills!'
	},
	{
		label: 'Modern',
		icon: MdOutlineVilla,
		description: 'This station is modern!'
	},
	{
		label: 'Countryside',
		icon: TbMountain,
		description: 'This station is in the countryside!'
	},
	{
		label: 'Pools',
		icon: TbPool,
		description: 'This station has a pool'
	},
	{
		label: 'Islands',
		icon: GiIsland,
		description: 'This station is on an island'
	},
	{
		label: 'Lake',
		icon: GiBoatFishing,
		description: 'This station is close to a lake'
	},
	{
		label: 'Skiing',
		icon: FaSkiing,
		description: 'This station is has skiing activites'
	},
	{
		label: 'Castles',
		icon: GiCastle,
		description: 'This station is in a castle'
	},
	{
		label: 'Camping',
		icon: GiForestCamp,
		description: 'This station has camping activities'
	},
	{
		label: 'Arctic',
		icon: BsSnow,
		description: 'This station has camping activities!'
	},
	{
		label: 'Cave',
		icon: GiCaveEntrance,
		description: 'This station is in a cave!'
	},
	{
		label: 'Desert',
		icon: GiCactus,
		description: 'This station is in the desert!'
	},
	{
		label: 'Barn',
		icon: GiBarn,
		description: 'This station is in the farm!'
	},
	{
		label: 'Lux',
		icon: IoDiamond,
		description: 'This station is luxurious!'
	},
]

const Categories = () => {
	const params = useSearchParams();
	const category = params?.get('category');
	const pathname = usePathname();

	const isMainPage = pathname === '/';

	if (!isMainPage) {
		return null;
	}
	return ( 
		<Container>
			<div
				className='
					pt-4
					flex
					flex-row
					items-center
					justify-between
					overflow-x-auto
				'

			>
				{categories.map((item) => (
					<CategoryBox
						key={item.label}
						label={item.label}
						selected={category == item.label}
						icon={item.icon}
					/>
				))}
			</div>
		</Container>
	 );
}
 
export default Categories;