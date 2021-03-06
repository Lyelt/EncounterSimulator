USE [Encounter]
GO
/****** Object:  StoredProcedure [dbo].[spAddStatusToAction]    Script Date: 1/28/2019 12:28:09 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[spAddStatusToAction] @actionId int, @statusId int
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	INSERT INTO ActionStatusLink (ActionId, StatusId) VALUES (@actionId, @statusId)
END
GO
