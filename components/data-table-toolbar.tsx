'use client';

import { Cross2Icon } from '@radix-ui/react-icons';
import { ColumnDef, Table } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DataTableViewOptions } from '@/components/data-table-view-options';

interface DataTableToolbarProps<TData> {
	table: Table<TData>;
	children?: React.ReactNode;
	searchKey: keyof TData | keyof TData[];
}

export function DataTableToolbar<TData>({ table, children, searchKey }: DataTableToolbarProps<TData>) {
	const isFiltered = table.getState().columnFilters.length > 0;

	return (
		<div className='flex items-center justify-between'>
			<div className='flex flex-1 items-center space-x-1.5'>
				<Input
					placeholder='Search...'
					value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ''}
					onChange={(event) => table.getColumn(searchKey)?.setFilterValue(event.target.value)}
					className='h-8 w-[150px] lg:w-[250px]'
				/>
				{children}
				{isFiltered && (
					<Button variant='ghost' onClick={() => table.resetColumnFilters()} className='h-8 px-1.5 lg:px-3'>
						Reset
						<Cross2Icon className='ml-1.5 h-4 w-4' />
					</Button>
				)}
			</div>
			<DataTableViewOptions table={table} />
		</div>
	);
}
