import {z} from 'zod';
export const NpcTypesSchema= z.object({
ac: z.number(),
agi: z.number(),
atk: z.number(),
accuracy: z.number(),
cha: z.number(),
cr: z.number(),
dex: z.number(),
dr: z.number(),
fr: z.number(),
mr: z.number(),
pr: z.number(),
sta: z.number(),
str: z.number(),
wis: z.number(),
_int: z.number(),
aggro_pc: z.number(),
aggroradius: z.number(),
armortint_blue: z.number(),
armortint_green: z.number(),
armortint_id: z.number(),
armortint_red: z.number(),
armtexture: z.number(),
assistradius: z.number(),
attack_count: z.number(),
attack_delay: z.number(),
avoidance: z.number(),
bodytype: z.number(),
bracertexture: z.number(),
chesttexture: z.number(),
class: z.number(),
combat_hp_regen: z.number(),
combat_mana_regen: z.number(),
d_melee_texture1: z.number(),
d_melee_texture2: z.number(),
emoteid: z.number(),
encounter: z.number(),
engage_notice: z.number(),
exp_pct: z.number(),
face: z.number(),
feettexture: z.number(),
flymode: z.number(),
gender: z.number(),
greed: z.number(),
handtexture: z.number(),
healscale: z.number(),
helmtexture: z.number(),
hp: z.number(),
hp_regen_rate: z.number(),
id: z.number(),
ignore_despawn: z.number(),
ignore_distance: z.number(),
isquest: z.number(),
lastname: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
legtexture: z.number(),
level: z.number(),
light: z.number(),
loottable_id: z.number(),
luclin_beard: z.number(),
luclin_beardcolor: z.number(),
luclin_eyecolor: z.number(),
luclin_eyecolor2: z.number(),
luclin_haircolor: z.number(),
luclin_hairstyle: z.number(),
mana: z.number(),
mana_regen_rate: z.number(),
maxdmg: z.number(),
maxlevel: z.number(),
merchant_id: z.number(),
mindmg: z.number(),
name: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
npc_aggro: z.number(),
npc_faction_id: z.number(),
npc_spells_effects_id: z.number(),
npc_spells_id: z.number(),
prim_melee_type: z.number(),
private_corpse: z.number(),
qglobal: z.number(),
race: z.number(),
raid_target: z.number(),
ranged_type: z.number(),
runspeed: z.number(),
scalerate: z.number(),
sec_melee_type: z.number(),
see_improved_hide: z.number(),
see_invis: z.number(),
see_invis_undead: z.number(),
see_sneak: z.number(),
size: z.number(),
slow_mitigation: z.number(),
spawn_limit: z.number(),
special_abilities: z.string().nullable().transform(e => { 
				if(e === null) return '';
				else return e;
			}),
spellscale: z.number(),
stuck_behavior: z.number(),
texture: z.number(),
underwater: z.number(),
unique_spawn_by_name: z.number(),
walkspeed: z.number(),
});
export type NpcTypesType = z.infer<typeof NpcTypesSchema>;
