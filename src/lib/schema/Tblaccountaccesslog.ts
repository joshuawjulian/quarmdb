import {z} from 'zod';
export const TblaccountaccesslogSchema= z.object({
IP: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
SQL_Time: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
accessed: z.number(),
account_id: z.number(),
account_name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
id: z.number(),
reason: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
});
export type TblaccountaccesslogType = z.infer<typeof TblaccountaccesslogSchema>;
