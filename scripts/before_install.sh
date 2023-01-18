DIT="/home/ec2-user/advanced_mern_social_project"
if [ -d "$DIT" ]; then
    cd /home/ec2-user
    sudo rm -rf advanced_mern_social_project
else
    echo "File not found"
fi
