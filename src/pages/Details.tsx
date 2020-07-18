import React from "react";
import { useParams } from "react-router-dom";
import { usePostCountry } from "hooks/usePostCountry";
import { constructApiQuery } from "lib/constructApiQuery";
import { CountryCardItem } from "components/CountryCardItem";

interface Props {}

const searchByCode = (code: string) => {
	return constructApiQuery({ type: "code", query: code });
};

export const Details: React.FC<Props> = () => {
	let { id } = useParams();

	searchByCode(id);

	const homeService = usePostCountry(searchByCode(id));

	if(homeService.status === 'error') {
		return null;
	}

	if (!homeService.payload) {
		return null;
	}

	return <CountryCardItem country={homeService.payload} />;
};
