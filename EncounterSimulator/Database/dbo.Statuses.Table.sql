USE [Encounter]
GO
/****** Object:  Table [dbo].[Statuses]    Script Date: 1/26/2019 2:11:01 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Statuses](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Statuses] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Statuses] ON 

INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (1, N'Blinded', N'A blinded creature can’t see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage. ')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (2, N'Charmed', N'A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature. ')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (3, N'Deafened', N'A deafened creature can’t hear and automatically fails any ability check that requires hearing.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (5, N'Fatigued', N'See Exhaustion.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (6, N'Frightened', N'A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within line of sight. The creature can’t willingly move closer to the source of its fear.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (7, N'Grappled', N'A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. The condition ends if the Grappler is incapacitated (see the condition). The condition also ends if an effect removes the grappled creature from the reach of the Grappler or Grappling effect, such as when a creature is hurled away by the Thunderwave spell.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (8, N'Incapacitated', N'An incapacitated creature can’t take actions or reactions.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (9, N'Invisible', N'An invisible creature is impossible to see without the aid of magic or a Special sense. For the purpose of Hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves. Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (10, N'Paralyzed', N'A paralyzed creature is incapacitated (see the condition) and can’t move or speak. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage. Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (11, N'Petrified', N'A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging. The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity Saving Throws. The creature has Resistance to all damage. The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (12, N'Poisoned', N'A poisoned creature has disadvantage on Attack rolls and Ability Checks.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (13, N'Prone', N'A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on Attack rolls. An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (14, N'Restrained', N'A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage. The creature has disadvantage on Dexterity Saving Throws.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (15, N'Stunned', N'A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage.')
INSERT [dbo].[Statuses] ([Id], [Name], [Description]) VALUES (16, N'Unconscious', N'An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings. The creature drops whatever it’s holding and falls prone. The creature automatically fails Strength and Dexterity Saving Throws. Attack rolls against the creature have advantage. Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.')
SET IDENTITY_INSERT [dbo].[Statuses] OFF
SET ANSI_PADDING ON
GO
/****** Object:  Index [UK_Statuses]    Script Date: 1/26/2019 2:11:01 PM ******/
ALTER TABLE [dbo].[Statuses] ADD  CONSTRAINT [UK_Statuses] UNIQUE NONCLUSTERED 
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
