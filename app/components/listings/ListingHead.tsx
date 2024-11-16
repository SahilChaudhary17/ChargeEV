"use client";

import { SafeUser } from "../../types";
import useCountries from "../../hooks/useCountries";
import Heading from "../Heading";
import Image from "next/image";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
	title: string;
	locationValue: string;
	imageSrc: string;
	id: string;
	currentUser?: SafeUser | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
	title,
	locationValue,
	imageSrc,
	id,
	currentUser,
}) => {
	const { getByValue } = useCountries();

	const location = getByValue(locationValue);
	return ( 
		<>
			<Heading
				title={title}
				subtitle={`${location?.region}, ${location?.label}`}
			/>
			<div
				className="
				 w-full
				 h-[60vh]
				 overflow-hidden
				 rounded-xl
				 relative
				"
			>
				<Image
					alt={title}
					// src={imageSrc}
        		    src="https://plus.unsplash.com/premium_photo-1664283228678-b1da10cd249e?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					fill
					className="object-cover w-full"
				/>
				<div
					className="absolute top-5 right-5"
				>
					<HeartButton
						listingId={id}
						currentUser={currentUser}
					/>
				</div>
			</div>
		</>
	 );
}
 
export default ListingHead;