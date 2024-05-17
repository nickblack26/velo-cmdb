import type { Database as DB } from '@/types/supabase';
import type { Database as ADB } from '@/types/supabase/assets';

declare global {
	type Database = DB;
	type ADatabase = ADB;
	type Company = DB['public']['Tables']['companies']['Row'];
	type CompanyInsert = DB['public']['Tables']['companies']['Row'];
	type CompanySecret = DB['public']['Tables']['company_secrets']['Row'];
	type Contact = DB['public']['Tables']['contacts']['Row'];
	type ContactInsert = DB['public']['Tables']['contacts']['Row'];
	type Note = DB['public']['Tables']['notes']['Row'];
	type Organization = DB['public']['Tables']['organizations']['Row'];
	type Product = DB['public']['Tables']['products']['Row'];
	type ProductInsert = DB['public']['Tables']['products']['Insert'];
	type ProductUpdate = DB['public']['Tables']['products']['Update'];
	type Status = DB['public']['Tables']['statuses']['Row'];
	type Ticket = DB['public']['Tables']['tickets']['Row'];
	type Page = DB['public']['Tables']['pages']['Row'];
	type Configuration = DB['public']['Tables']['configurations']['Row'];
	type ConfigurationInsert = DB['public']['Tables']['configurations']['Insert'];
	type ConfigurationUpdate = DB['public']['Tables']['configurations']['Update'];
	type Block = DB['public']['Tables']['blocks']['Row'];
	type BlockInsert = DB['public']['Tables']['blocks']['Insert'];
	type BlockUpdate = DB['public']['Tables']['blocks']['Update'];
	type Impact = DB['public']['Enums']['impact'];
	type RecordType = DB['public']['Enums']['recordType'];
	type Severity = DB['public']['Enums']['severity'];
	type Where = DB['public']['Enums']['where'];
	type BlockType = DB['public']['Enums']['Block Type'];
}
