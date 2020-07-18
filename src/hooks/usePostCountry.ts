import { useEffect, useState } from "react";
import {Service} from 'types/service';
import {Country} from 'types/country';

export function usePostCountry(apiQuery: string) : Service<Country[]> {
	const [result, setResult] = useState<Service<Country[]>>({
		status: 'loading'
	});



	useEffect(() => {
		fetch(apiQuery).then(res => {
			if(!res.ok) {
				if(res.status === 404) return []
				throw Error(res.status.toString())
			}
			return res.json();
		}).then(
			res => setResult({status: 'loaded', payload: res}),
			err => setResult({status: 'error', error: err}),
		)
	}, [apiQuery]);

	return result;
}