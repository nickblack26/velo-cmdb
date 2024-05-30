import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { createClient } from '@/lib/supabase/server';

type Props = {
	defaultValue?: string;
};

const TypeSelector = async ({ defaultValue }: Props) => {
	const supabase = createClient();
	const { data: types, error } = await supabase.from('assetTypes').select('id, name').order('name');
	// .is('parent', null)
	// .returns<{ id: string; name: string; assetTypes: { id: string; name: string }[] }[]>();

	if (!types) {
		console.error(error);
		return <div></div>;
	}

	console.log(defaultValue);

	return (
		<Select
			name='type'
			defaultValue={defaultValue}
		>
			<SelectTrigger aria-label='Select type'>
				<SelectValue placeholder='Select type' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					{types?.map((type) => (
						<SelectItem
							key={type.id}
							value={type.id}
						>
							{type.name}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export default TypeSelector;