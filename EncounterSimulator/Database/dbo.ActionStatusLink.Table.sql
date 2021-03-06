USE [Encounter]
GO
/****** Object:  Table [dbo].[ActionStatusLink]    Script Date: 1/28/2019 12:28:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActionStatusLink](
	[ActionId] [int] NOT NULL,
	[StatusId] [int] NOT NULL,
 CONSTRAINT [PK_ActionStatusLink] PRIMARY KEY CLUSTERED 
(
	[ActionId] ASC,
	[StatusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActionStatusLink]  WITH CHECK ADD  CONSTRAINT [FK_ActionStatusLink_ActionLog] FOREIGN KEY([ActionId])
REFERENCES [dbo].[ActionLog] ([Id])
GO
ALTER TABLE [dbo].[ActionStatusLink] CHECK CONSTRAINT [FK_ActionStatusLink_ActionLog]
GO
ALTER TABLE [dbo].[ActionStatusLink]  WITH CHECK ADD  CONSTRAINT [FK_ActionStatusLink_Statuses] FOREIGN KEY([StatusId])
REFERENCES [dbo].[Statuses] ([Id])
GO
ALTER TABLE [dbo].[ActionStatusLink] CHECK CONSTRAINT [FK_ActionStatusLink_Statuses]
GO
