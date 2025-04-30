to create new branch

git checkout -b feature/animations


to verify if branch is created and switched to the new branch

git branch


make changes in code or work on new branch



commit code

git add .
git commit -m "new code added to new branch"



merge main with new and push

git checkout main
git merge feature/animations


push to main branch after merge

git push


delete the new branch after work over and new code pushed to new branch

git branch -d feature/animations