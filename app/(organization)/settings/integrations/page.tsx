import { createClient } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import React from 'react';
import SettingsSection from '../settings-section';
import { Separator } from '@/components/ui/separator';
import { notFound } from 'next/navigation';
import { groupBy } from '@/lib/utils';
import Link from 'next/link';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {};

const Page = async (props: Props) => {
	const db = await createClient();

	const [{ data: integrations }, { data: organizationIntegrations }] = await Promise.all([
		db.collection('integrations').select(),
		db.collection('organizationIntegrations').select('integration(id, name)'),
	]);

	if (!integrations || !organizationIntegrations) return notFound();

	const result = groupBy(integrations, 'type');

	return (
		<div className='space-y-6'>
			<SettingsSection
				title='Integrations'
				description='Enhance your Hourglass experience with a wide variety of add-ons and integrations.'
			/>

			<Separator />

			<SettingsSection title='Enabled'>
				<div className='grid grid-cols-3 gap-3'>
					{organizationIntegrations?.map(({ integration: i }) => (
						<Link
							key={i.id}
							href={`/settings/integrations/${i.id}`}
							className='group'
						>
							<Card className='group-hover:bg-secondary/50 transition-colors'>
								<CardHeader>
									<CardTitle>{i.name}</CardTitle>
								</CardHeader>
							</Card>
						</Link>
					))}
				</div>
			</SettingsSection>

			<Separator />

			{Object.entries(result).map(([key, value]) => (
				<SettingsSection
					key={key}
					title={key}
					className='capitalize'
				>
					<div className='grid grid-cols-3 gap-3'>
						{value.map((i) => (
							<Link
								key={i.id}
								href={`/settings/integrations/${i.id}`}
								className='group'
							>
								<Card className='group-hover:bg-secondary/50 transition-colors'>
									<CardHeader>
										<CardTitle>{i.name}</CardTitle>
									</CardHeader>
								</Card>
							</Link>
						))}
					</div>
				</SettingsSection>
			))}
		</div>
	);
};

export default Page;
