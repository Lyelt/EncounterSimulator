USE [Encounter]
GO
/****** Object:  StoredProcedure [dbo].[spSaveCharacter]    Script Date: 1/26/2019 2:11:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spSaveCharacter] @name varchar(255), @owner varchar(255), @speed int, @ac int, @maxHP int, @dexMod int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    INSERT INTO Characters (Name, Owner, Speed, AC, MaxHP, DexModifier)
	VALUES		(@name, @owner, @speed, @ac, @maxHP, @dexMod)
END
GO
