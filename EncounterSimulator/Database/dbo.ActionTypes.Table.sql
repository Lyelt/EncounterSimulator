USE [Encounter]
GO
/****** Object:  Table [dbo].[ActionTypes]    Script Date: 1/26/2019 2:11:01 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActionTypes](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Unit] [nvarchar](25) NULL,
 CONSTRAINT [PK_ActionTypes] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[ActionTypes] ON 

INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (1, N'Attack', N'The most Common action to take in combat is the Attack action, whether you are swinging a sword, firing an arrow from a bow, or brawling with your fists.
With this action, you make one melee or ranged Attack. See the “Making an Attack” section for the rules that govern attacks.

Certain features, such as the Extra Attack feature of the Fighter, allow you to make more than one Attack with this action.', N'Damage')
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (2, N'Cast a Spell', N'Spellcasters such as wizards and clerics, as well as many Monsters, have access to Spells and can use them to great effect in combat. Each spell has a Casting Time, which specifies whether the caster must use an action, a reaction, minutes, or even hours to cast the spell. Casting a Spell is, therefore, not necessarily an action. Most Spells do have a Casting Time of 1 action, so a spellcaster often uses his or her action in combat to cast such a spell.', NULL)
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (3, N'Dash', N'When you take the Dash action, you gain extra Movement for the current turn. The increase equals your speed, after applying any modifiers. With a speed of 30 feet, for example, you can move up to 60 feet on Your Turn if you dash.
Any increase or decrease to your speed changes this additional Movement by the same amount. If your speed of 30 feet is reduced to 15 feet, for instance, you can move up to 30 feet this turn if you dash.', N'Feet')
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (4, N'Disengage', N'If you take the Disengage action, your Movement doesn’t provoke Opportunity Attacks for the rest of the turn.', NULL)
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (5, N'Dodge', N'When you take the Dodge action, you focus entirely on avoiding attacks. Until the start of your next turn, any Attack roll made against you has disadvantage if you can see the attacker, and you make Dexterity Saving Throws with advantage. You lose this benefit if you are Incapacitated (as explained in Conditions ) or if your speed drops to 0.', NULL)
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (6, N'Help', N'You can lend your aid to another creature in the completion of a task. When you take the Help action, the creature you aid gains advantage on the next ability check it makes to perform the task you are helping with, provided that it makes the check before the start of your next turn.

Alternatively, you can aid a friendly creature in attacking a creature within 5 feet of you. You feint, distract the target, or in some other way team up to make your ally’s Attack more effective. If your ally attacks the target before your next turn, the first Attack roll is made with advantage.', NULL)
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (7, N'Hide', N'When you take the Hide action, you make a Dexterity (Stealth) check in an attempt to hide, following the rules for Hiding. If you succeed, you gain certain benefits, as described in the “Unseen Attackers and Targets” section.', NULL)
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (8, N'Ready', N'Sometimes you want to get the jump on a foe or wait for a particular circumstance before you act. To do so, you can take the Ready action on Your Turn, which lets you act using your reaction before the start of your next turn.
First, you decide what perceivable circumstance will trigger your reaction. Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it. Examples include “If the Cultist steps on the trapdoor, I’ll pull the lever that opens it,” and “If the Goblin steps next to me, I move away.”

When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger. Remember that you can take only one reaction per round.

When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a Casting Time of 1 action, and holding onto the spell’s magic requires Concentration. If your Concentration is broken, the spell dissipates without taking effect. For example, if you are concentrating on the web spell and ready Magic Missile, your web spell ends, and if you take damage before you release Magic Missile with your reaction, your Concentration might be broken.', NULL)
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (9, N'Search', N'When you take the Search action, you devote your attention to finding something. Depending on the Nature of your Search, the GM might have you make a Wisdom (Perception) check or an Intelligence (Investigation) check.', NULL)
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (10, N'Use an Object', N'You normally interact with an object while doing something else, such as when you draw a sword as part of an Attack. When an object requires your action for its use, you take the Use an Object action. This action is also useful when you want to interact with more than one object on Your Turn.', NULL)
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (11, N'Move', N'In combat, characters and Monsters are in constant motion, often using Movement and Position to gain the upper hand.
On Your Turn, you can move a distance up to your speed. You can use as much or as little of your speed as you like on Your Turn, following the rules here.
Your Movement can include Jumping, climbing, and swimming. These different modes of Movement can be combined with walking, or they can constitute your entire move. However you’re moving, you deduct the distance of each part of your move from your speed until it is used up or until you are done moving.', N'Feet')
INSERT [dbo].[ActionTypes] ([Id], [Name], [Description], [Unit]) VALUES (12, N'Heal', N'Unless it results in death, damage isn’t permanent. Even death is reversible through powerful magic. Rest can restore a creature’s Hit Points, and magical methods such as a Cure Wounds spell or a Potion of Healing can remove damage in an instant.

When a creature receives Healing of any kind, Hit Points regained are added to its current Hit Points. A creature’s Hit Points can’t exceed its hit point maximum, so any Hit Points regained in excess of this number are lost. For example, a druid grants a Ranger 8 Hit Points of Healing. If the Ranger has 14 current Hit Points and has a hit point maximum of 20, the Ranger regains 6 Hit Points from the druid, not 8.

A creature that has died can’t regain Hit Points until magic such as the Revivify spell has restored it to life.', N'Hitpoints')
SET IDENTITY_INSERT [dbo].[ActionTypes] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [UK_ActionTypes]    Script Date: 1/26/2019 2:11:01 PM ******/
ALTER TABLE [dbo].[ActionTypes] ADD  CONSTRAINT [UK_ActionTypes] UNIQUE NONCLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
