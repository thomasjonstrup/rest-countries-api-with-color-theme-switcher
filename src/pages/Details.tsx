import React from "react";
import { useParams } from "react-router-dom";
import { usePostCountry } from "hooks/usePostCountry";
import { constructApiQuery } from "lib/constructApiQuery";
import { CountryCardItem } from "components/CountryCardItem";

interface Props {}

interface RouteParams {
	id: string;
}

const searchByCode = (code: string) => {
	return constructApiQuery({ type: "code", query: code });
};

export const Details: React.FC<Props> = () => {
	const params = useParams<RouteParams>();

	searchByCode(params.id);

	const homeService = usePostCountry(searchByCode(params.id));

	if (homeService.status === "error") {
		return null;
	}

	if (!homeService.payload) {
		return null;
	}

	return <CountryCardItem country={homeService.payload} />;
};
