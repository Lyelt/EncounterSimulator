USE [Encounter]
GO
/****** Object:  Table [dbo].[Characters]    Script Date: 1/26/2019 2:11:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Characters](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](255) NOT NULL,
	[MaxHP] [int] NOT NULL,
	[AC] [int] NOT NULL,
	[Speed] [int] NOT NULL,
	[Owner] [varchar](255) NOT NULL,
	[DexModifier] [int] NOT NULL,
 CONSTRAINT [PK_Characters] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Characters] ADD  CONSTRAINT [DF_Characters_DexModifier]  DEFAULT ((0)) FOR [DexModifier]
GO
