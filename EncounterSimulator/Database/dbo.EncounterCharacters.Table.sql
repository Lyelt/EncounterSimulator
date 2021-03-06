USE [Encounter]
GO
/****** Object:  Table [dbo].[EncounterCharacters]    Script Date: 1/26/2019 2:11:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EncounterCharacters](
	[EncounterId] [int] NOT NULL,
	[CharacterId] [int] NOT NULL,
 CONSTRAINT [UK_EncounterCharacters] UNIQUE NONCLUSTERED 
(
	[EncounterId] ASC,
	[CharacterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EncounterCharacters]  WITH CHECK ADD  CONSTRAINT [FK_EncounterCharacters_Encounters] FOREIGN KEY([EncounterId])
REFERENCES [dbo].[Encounters] ([Id])
GO
ALTER TABLE [dbo].[EncounterCharacters] CHECK CONSTRAINT [FK_EncounterCharacters_Encounters]
GO
