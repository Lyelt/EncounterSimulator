USE [Encounter]
GO
/****** Object:  StoredProcedure [dbo].[spGetAvailableCharacters]    Script Date: 12/23/2018 8:42:25 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE [dbo].[spGetAvailableCharacters]
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    SELECT  ID, Name, MaxHP, AC, Speed, Owner, DexModifier
	FROM	Characters
END
GO
