// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

export const updated = z.enum(['WEEKLY', 'MONTHLY']);

export type Updated = z.infer<typeof updated>;
