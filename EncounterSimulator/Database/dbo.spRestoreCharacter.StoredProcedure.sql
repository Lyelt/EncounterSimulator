USE [Encounter]
GO
/****** Object:  StoredProcedure [dbo].[spRestoreCharacter]    Script Date: 1/26/2019 2:11:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO


-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spRestoreCharacter] @id int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	INSERT Characters (Name, MaxHP, AC, Speed, Owner, DexModifier)
	SELECT Name, MaxHP, AC, Speed, owner, DexModifier
	FROM   ArchivedCharacters
	WHERE  ID = @id

    DELETE FROM ArchivedCharacters
	WHERE		ID = @id
END
GO
