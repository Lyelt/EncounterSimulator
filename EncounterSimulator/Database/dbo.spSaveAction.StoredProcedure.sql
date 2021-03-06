USE [Encounter]
GO
/****** Object:  StoredProcedure [dbo].[spSaveAction]    Script Date: 1/28/2019 12:28:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spSaveAction] @characterId int, @targetCharacterId int = null, @actionTypeId int = null, @value numeric(18, 2) = null, @flavorText nvarchar(MAX) = null
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	INSERT INTO ActionLog (CharacterId, TargetCharacterId, ActionTypeId, Value, FlavorText)
	VALUES      (@characterId, @targetCharacterId, @actionTypeId, @value, @flavorText)

	SELECT CONVERT(int, @@IDENTITY)
END
GO
