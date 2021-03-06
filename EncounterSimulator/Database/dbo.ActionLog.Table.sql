USE [Encounter]
GO
/****** Object:  Table [dbo].[ActionLog]    Script Date: 1/28/2019 12:28:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActionLog](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CharacterId] [int] NOT NULL,
	[TargetCharacterId] [int] NULL,
	[ActionTypeId] [int] NULL,
	[Value] [numeric](18, 2) NULL,
	[FlavorText] [nvarchar](max) NULL,
 CONSTRAINT [PK_ActionLog] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActionLog]  WITH CHECK ADD  CONSTRAINT [FK_ActionLog_ActionTypes] FOREIGN KEY([ActionTypeId])
REFERENCES [dbo].[ActionTypes] ([Id])
GO
ALTER TABLE [dbo].[ActionLog] CHECK CONSTRAINT [FK_ActionLog_ActionTypes]
GO
