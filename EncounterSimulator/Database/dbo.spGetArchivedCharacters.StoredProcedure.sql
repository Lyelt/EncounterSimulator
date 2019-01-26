USE [Encounter]
GO
/****** Object:  StoredProcedure [dbo].[spGetArchivedCharacters]    Script Date: 1/26/2019 2:11:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spGetArchivedCharacters]
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT  ID, Name, MaxHP, AC, Speed, Owner, DexModifier
	FROM	ArchivedCharacters
END
GO
