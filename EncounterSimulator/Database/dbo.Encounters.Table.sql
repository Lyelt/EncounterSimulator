USE [Encounter]
GO
/****** Object:  Table [dbo].[Encounters]    Script Date: 1/26/2019 2:11:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Encounters](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TimeOfDay] [nvarchar](50) NOT NULL,
	[Timestamp] [datetime] NOT NULL,
	[Description] [nvarchar](max) NULL,
 CONSTRAINT [PK_Encounters] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
