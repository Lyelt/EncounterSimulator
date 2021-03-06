USE [Encounter]
GO
/****** Object:  StoredProcedure [dbo].[spStartEncounter]    Script Date: 1/26/2019 2:11:55 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spStartEncounter]
	@timeOfDay nvarchar(50), @description nvarchar(MAX) = NULL
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	INSERT INTO Encounters (TimeOfDay, Description, Timestamp) VALUES (@timeOfDay, @description, GETUTCDATE())

    SELECT CONVERT(int, @@IDENTITY)
END
GO
