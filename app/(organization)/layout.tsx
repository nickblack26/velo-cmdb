import React from 'react';
import { Velo } from '@/components/velo';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

type Props = {
	children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
	const cookieStore = cookies();
	const supabase = createClient();

	const { data: teams } = await supabase.from('teams').select();

	const layout = cookieStore.get('react-resizable-panels:layout');
	const collapsed = cookieStore.get('react-resizable-panels:collapsed');

	const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
	const defaultCollapsed = collapsed ? JSON?.parse(collapsed.value) : true;

	const body = new FormData();
	body.set('accountSid', '');
	body.set('authToken', '');

	await fetch('http://localhost:3000/api/orgContext', {
		method: 'POST',
		body: body,
	});

	return (
		<Velo
			defaultLayout={defaultLayout}
			defaultCollapsed={defaultCollapsed}
			navCollapsedSize={4}
			teams={teams || []}
		>
			{children}
		</Velo>
		// <JabraProvider>
		// 	<TwilioProvider contact={contact} accountSid={accountSid} authToken={authToken} workspaceSid={workspaceSid}> */}

		// 	</TwilioProvider>
		// </JabraProvider>
	);
};

export default Layout;
