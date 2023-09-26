import {z} from 'zod';
export const SpellsEnSchema= z.object({
AEDuration: z.coerce.number(),
Activated: z.coerce.number(),
CastingAnim: z.coerce.number(),
EnvironmentType: z.coerce.number(),
LightType: z.coerce.number(),
NoexpendReagent1: z.coerce.number(),
NoexpendReagent2: z.coerce.number(),
NoexpendReagent3: z.coerce.number(),
NoexpendReagent4: z.coerce.number(),
RecourseLink: z.coerce.number(),
ResistDiff: z.coerce.number(),
SpellAffectIndex: z.coerce.number(),
TargetAnim: z.coerce.number(),
TimeOfDay: z.coerce.number(),
TravelType: z.coerce.number(),
ai_pt_bonus: z.coerce.number(),
aoerange: z.coerce.number(),
basediff: z.coerce.number(),
buffduration: z.coerce.number(),
buffdurationformula: z.coerce.number(),
cast_on_other: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
cast_on_you: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
cast_time: z.coerce.number(),
classes1: z.coerce.number(),
classes10: z.coerce.number(),
classes11: z.coerce.number(),
classes12: z.coerce.number(),
classes13: z.coerce.number(),
classes14: z.coerce.number(),
classes15: z.coerce.number(),
classes2: z.coerce.number(),
classes3: z.coerce.number(),
classes4: z.coerce.number(),
classes5: z.coerce.number(),
classes6: z.coerce.number(),
classes7: z.coerce.number(),
classes8: z.coerce.number(),
classes9: z.coerce.number(),
component_counts1: z.coerce.number(),
component_counts2: z.coerce.number(),
component_counts3: z.coerce.number(),
component_counts4: z.coerce.number(),
components1: z.coerce.number(),
components2: z.coerce.number(),
components3: z.coerce.number(),
components4: z.coerce.number(),
deities0: z.coerce.number(),
deities1: z.coerce.number(),
deities10: z.coerce.number(),
deities11: z.coerce.number(),
deities12: z.coerce.number(),
deities13: z.coerce.number(),
deities14: z.coerce.number(),
deities15: z.coerce.number(),
deities16: z.coerce.number(),
deities2: z.coerce.number(),
deities3: z.coerce.number(),
deities4: z.coerce.number(),
deities5: z.coerce.number(),
deities6: z.coerce.number(),
deities7: z.coerce.number(),
deities8: z.coerce.number(),
deities9: z.coerce.number(),
deleteable: z.coerce.number(),
descnum: z.coerce.number(),
disallow_sit: z.coerce.number(),
dot_stacking_exempt: z.coerce.number(),
effect_base_value1: z.coerce.number(),
effect_base_value10: z.coerce.number(),
effect_base_value11: z.coerce.number(),
effect_base_value12: z.coerce.number(),
effect_base_value2: z.coerce.number(),
effect_base_value3: z.coerce.number(),
effect_base_value4: z.coerce.number(),
effect_base_value5: z.coerce.number(),
effect_base_value6: z.coerce.number(),
effect_base_value7: z.coerce.number(),
effect_base_value8: z.coerce.number(),
effect_base_value9: z.coerce.number(),
effect_limit_value1: z.coerce.number(),
effect_limit_value10: z.coerce.number(),
effect_limit_value11: z.coerce.number(),
effect_limit_value12: z.coerce.number(),
effect_limit_value2: z.coerce.number(),
effect_limit_value3: z.coerce.number(),
effect_limit_value4: z.coerce.number(),
effect_limit_value5: z.coerce.number(),
effect_limit_value6: z.coerce.number(),
effect_limit_value7: z.coerce.number(),
effect_limit_value8: z.coerce.number(),
effect_limit_value9: z.coerce.number(),
effectdescnum: z.coerce.number(),
effectdescnum2: z.coerce.number(),
effectid1: z.coerce.number(),
effectid10: z.coerce.number(),
effectid11: z.coerce.number(),
effectid12: z.coerce.number(),
effectid2: z.coerce.number(),
effectid3: z.coerce.number(),
effectid4: z.coerce.number(),
effectid5: z.coerce.number(),
effectid6: z.coerce.number(),
effectid7: z.coerce.number(),
effectid8: z.coerce.number(),
effectid9: z.coerce.number(),
formula1: z.coerce.number(),
formula10: z.coerce.number(),
formula11: z.coerce.number(),
formula12: z.coerce.number(),
formula2: z.coerce.number(),
formula3: z.coerce.number(),
formula4: z.coerce.number(),
formula5: z.coerce.number(),
formula6: z.coerce.number(),
formula7: z.coerce.number(),
formula8: z.coerce.number(),
formula9: z.coerce.number(),
goodEffect: z.coerce.number(),
icon: z.coerce.number(),
id: z.coerce.number(),
mana: z.coerce.number(),
memicon: z.coerce.number(),
name: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
new_icon: z.coerce.number(),
no_partial_resist: z.coerce.number(),
npc_no_cast: z.coerce.number(),
npc_no_los: z.coerce.number(),
other_casts: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
player_1: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
pushback: z.coerce.number(),
pushup: z.coerce.number(),
range: z.coerce.number(),
recast_time: z.coerce.number(),
recovery_time: z.coerce.number(),
resisttype: z.coerce.number(),
short_buff_box: z.coerce.number(),
skill: z.coerce.number(),
small_targets_only: z.coerce.number(),
spell_fades: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spellanim: z.coerce.number(),
targettype: z.coerce.number(),
teleport_zone: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
typedescnum: z.coerce.number(),
uninterruptable: z.coerce.number(),
use_persistent_particles: z.coerce.number(),
you_cast: z.coerce.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
zonetype: z.coerce.number(),
});
export type SpellsEnType = z.infer<typeof SpellsEnSchema>;