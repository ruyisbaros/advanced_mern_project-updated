cd /home/ec2-user/advanced_mern_social_project/backend
sudo rm -rf env-file.zip
sudo rm .env
sudo rm .env.develop
aws s3 sync s3://needsomething-env-files/develop .
unzip env-file.zip
sudo cp .env.develop .env
sudo pm2 delete all
npm install
