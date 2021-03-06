USE [Encounter]
GO
/****** Object:  StoredProcedure [dbo].[spAddCharacterToEncounter]    Script Date: 1/26/2019 2:11:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spAddCharacterToEncounter] @encounterId int, @characterId int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	INSERT INTO EncounterCharacters (EncounterId, CharacterId) VALUES (@encounterId, @characterId)
END
GO
