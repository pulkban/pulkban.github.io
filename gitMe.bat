@echo off
setlocal

if "%~1"=="" (
	echo Usage: gitMe.bat "commit message"
	exit /b 1
)

set "COMMIT_MSG=%*"

echo.
echo Branch:
git branch --show-current

echo.
echo Changed files before staging:
git status --short

git add -A
if errorlevel 1 (
	echo git add failed.
	exit /b %errorlevel%
)

echo.
echo Staged files:
git diff --cached --name-status

git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
	echo git commit failed or nothing to commit.
	exit /b %errorlevel%
)

echo.
echo Files included in last commit:
git show --name-status --pretty="" HEAD

git push
if errorlevel 1 (
	echo git push failed.
	exit /b %errorlevel%
)

echo.
echo Push completed.
endlocal