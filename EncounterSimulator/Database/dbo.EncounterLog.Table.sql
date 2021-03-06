USE [Encounter]
GO
/****** Object:  Table [dbo].[EncounterLog]    Script Date: 1/28/2019 12:28:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EncounterLog](
	[EncounterId] [int] NOT NULL,
	[ActionId] [int] NOT NULL,
 CONSTRAINT [PK_EncounterLog] PRIMARY KEY CLUSTERED 
(
	[EncounterId] ASC,
	[ActionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EncounterLog]  WITH CHECK ADD  CONSTRAINT [FK_EncounterLog_ActionLog] FOREIGN KEY([ActionId])
REFERENCES [dbo].[ActionLog] ([Id])
GO
ALTER TABLE [dbo].[EncounterLog] CHECK CONSTRAINT [FK_EncounterLog_ActionLog]
GO
